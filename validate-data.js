#!/usr/bin/env node
// ================================================================
// The Shaw Report — data validator
//
// Enforces the content contract for friday-finance-data.js and
// tenant-lender-data.js so the weekly auto-update cannot drift:
// story count and length, alert length and age, the canonical
// watchlist, the canonical ticker set, and non-paywalled links.
//
// Usage:  node validate-data.js            (exit 0 = pass, 1 = fail)
// ================================================================

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

// ----------------------------------------------------------------
// Canonical lists — edit HERE (and in the data files) to change
// the watchlist or the stock table. The validator refuses anything
// else, which is what keeps the routine from adding or dropping
// names on its own.
// ----------------------------------------------------------------
const WATCHLIST = {
    'Tenant': [
        'Aalo Atomics',
        'Baer Manufacturing / Hunt Electric',
        'Bright Events',
        'C3 Presents',
        'Canteen',
        'Clopay',
        'Control Panels',
        'DNP Imagingcomm America',
        'Duroshox',
        'Grander Distribution',
        'International Paper',
        'Kuehne + Nagel',
        'W Industries',
        'Xingyu Lighting'
    ],
    'Lender': [
        'Busey Bank',
        'Huntington Bank',
        'Fifth Third Bank',
        'Inwood National Bank',
        'Simmons Bank',
        'Barings',
        'Hall Group',
        'PACE Equity',
        'Hartford Insurance',
        'Pinnacle Bank'
    ],
    'Equity Partner': [
        'Compatriot Capital (Sammons)'
    ]
};

const STOCK_TABLE = {
    'Indices':                    ['SPX', 'DJI', 'COMP'],
    'Industrial REITs':           ['PLD', 'REXR', 'EGP', 'FR', 'PLYM', 'TRNO', 'STAG', 'COLD', 'LXP'],
    'Hospitality REITs':          ['HST', 'APLE', 'PK', 'PEB', 'SHO', 'RLJ', 'DRH', 'INN', 'RHP'],
    'Lenders':                    ['BX', 'FITB', 'HBAN', 'BANF', 'BUSE', 'SFNC', 'PNFP', 'HIG'],
    'Industry-related companies': ['AMZN', 'UPS', 'FDX', 'TGT', 'GXO', 'MAR', 'HLT', 'AAL', 'LUV', 'LVS',
                                   'TSM', 'DAL', 'FERG', 'IP', 'TLF', 'GFF', 'LYV', 'KHNGY', 'DNPLY']
};

const RATE_KEYS = ['1-Mo Term SOFR', '10-Year Treasury', 'Eff. Federal Funds', 'Prime Rate'];
const LEVELS    = ['HIGH', 'MEDIUM', 'LOW', 'GENERAL'];
const PAYWALLED = ['wsj.com', 'ft.com', 'bloomberg.com', 'barrons.com'];

const LIMITS = {
    stories:            { min: 3, max: 6 },
    storyHeadlineWords: 14,
    storyBodySentences: { min: 3, max: 10 },
    storyAngleSentences: 2,
    storyAgeDays:       8,          // news from the past 7 days, with one day of slack
    watch:              { min: 3, max: 6 },
    watchSentences:     2,
    reading:            { min: 3, max: 5 },
    tickerBar:          { min: 10, max: 12 },
    alertHeadlineWords: 14,
    alertSummarySentences: 5,
    alertRelevanceSentences: 2,
    alertAgeDays:       75
};

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------
const errors = [];
function fail(msg) { errors.push(msg); }

function loadConst(file, name) {
    const src = fs.readFileSync(path.join(__dirname, file), 'utf8');
    try {
        return vm.runInNewContext(src + '\n;' + name + ';', {}, { filename: file });
    } catch (e) {
        fail(`${file}: does not evaluate — ${e.message}`);
        return null;
    }
}

function stripHtml(s) {
    return String(s == null ? '' : s)
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;|&#\d+;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

const ABBREV = /\b(U\.S|U\.K|U\.N|Inc|Corp|Co|Ltd|LLC|L\.P|N\.A|vs|Mr|Mrs|Ms|Dr|Jr|Sr|St|No|Nos|approx|est|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec|Gov|Sen|Rep|Gen|e\.g|i\.e|etc|a\.m|p\.m|Q\d|Bldg|Ph|sq|ft|SF)\./gi;

function countSentences(html) {
    let t = stripHtml(html);
    if (!t) return 0;
    t = t.replace(/(\d)\.(\d)/g, '$1․$2');          // decimals: 3.7% is not a sentence end
    t = t.replace(ABBREV, '$1');                           // U.S., Inc., Oct. etc.
    const m = t.match(/[.!?]+(\s|$)/g);
    return m ? m.length : 1;
}

function countWords(html) {
    const t = stripHtml(html);
    return t ? t.split(/\s+/).length : 0;
}

function parseLongDate(s) {           // "October 16, 2026"
    const d = new Date(String(s) + ' 00:00:00');
    return isNaN(d) ? null : d;
}
function parseIsoDate(s) {            // "2026-10-16"
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(s))) return null;
    const d = new Date(s + 'T00:00:00');
    return isNaN(d) ? null : d;
}
function daysBetween(a, b) { return Math.round((a - b) / 86400000); }

function checkRange(label, n, range) {
    if (n < range.min || n > range.max) fail(`${label}: ${n} items, expected ${range.min}-${range.max}`);
}

function sameSet(label, got, want) {
    const g = new Set(got), w = new Set(want);
    const missing = want.filter(x => !g.has(x));
    const extra   = got.filter(x => !w.has(x));
    if (missing.length) fail(`${label}: missing ${JSON.stringify(missing)}`);
    if (extra.length)   fail(`${label}: unexpected ${JSON.stringify(extra)}`);
}

// ----------------------------------------------------------------
// friday-finance-data.js
// ----------------------------------------------------------------
function validateFinance() {
    const F = loadConst('friday-finance-data.js', 'FRIDAY_FINANCE');
    if (!F) return null;
    const file = 'friday-finance-data.js';

    const asOf = parseLongDate(F.date);
    if (!asOf) fail(`${file}: date "${F.date}" is not like "October 16, 2026"`);
    if (asOf && asOf.getDay() !== 5) fail(`${file}: date "${F.date}" is not a Friday`);
    if (asOf) {
        const expShort = `${asOf.getMonth() + 1}.${asOf.getDate()}.${String(asOf.getFullYear()).slice(2)}`;
        if (F.date_short !== expShort) fail(`${file}: date_short "${F.date_short}" should be "${expShort}"`);
    }

    if (!F.quote || !stripHtml(F.quote.text) || !stripHtml(F.quote.author)) fail(`${file}: quote needs text and author`);

    // Ticker bar
    const tb = Array.isArray(F.ticker_bar) ? F.ticker_bar : [];
    checkRange(`${file}: ticker_bar`, tb.length, LIMITS.tickerBar);
    ['SPX', 'DJIA', 'IXIC'].forEach(s => { if (!tb.some(t => t.symbol === s)) fail(`${file}: ticker_bar missing ${s}`); });
    tb.forEach((t, i) => {
        if (!t.symbol || typeof t.price !== 'string' || typeof t.change_pct !== 'number')
            fail(`${file}: ticker_bar[${i}] needs symbol, price (string), change_pct (number)`);
    });

    // Stories
    if (F.news_bullets) fail(`${file}: news_bullets is retired — use stories[]`);
    const stories = Array.isArray(F.stories) ? F.stories : [];
    checkRange(`${file}: stories`, stories.length, LIMITS.stories);
    stories.forEach((s, i) => {
        const tag = `${file}: stories[${i}]`;
        const hw = countWords(s.headline);
        if (!hw) fail(`${tag}: headline missing`);
        else if (hw > LIMITS.storyHeadlineWords) fail(`${tag}: headline is ${hw} words, max ${LIMITS.storyHeadlineWords}`);
        const bs = countSentences(s.body);
        if (bs < LIMITS.storyBodySentences.min || bs > LIMITS.storyBodySentences.max)
            fail(`${tag}: body is ${bs} sentences, expected ${LIMITS.storyBodySentences.min}-${LIMITS.storyBodySentences.max}`);
        if (s.jsc_angle) {
            const as = countSentences(s.jsc_angle);
            if (as > LIMITS.storyAngleSentences) fail(`${tag}: jsc_angle is ${as} sentences, max ${LIMITS.storyAngleSentences}`);
        }
        if (!s.source || !/^https:\/\//.test(s.source.url || '') || !stripHtml(s.source.name))
            fail(`${tag}: source needs { name, url (https) }`);
        else checkPaywall(tag + ' source', s.source.url);
        const d = parseIsoDate(s.date);
        if (!d) fail(`${tag}: date "${s.date}" must be YYYY-MM-DD`);
        else if (asOf) {
            const age = daysBetween(asOf, d);
            if (age > LIMITS.storyAgeDays) fail(`${tag}: dated ${s.date}, ${age} days before ${F.date} — news must be from the past 7 days`);
            if (age < -1) fail(`${tag}: dated ${s.date}, after ${F.date}`);
        }
    });

    // Watch next week
    if (typeof F.watch_next_week === 'string') fail(`${file}: watch_next_week must be an array of { when, what }, not a string`);
    const watch = Array.isArray(F.watch_next_week) ? F.watch_next_week : [];
    checkRange(`${file}: watch_next_week`, watch.length, LIMITS.watch);
    watch.forEach((w, i) => {
        const tag = `${file}: watch_next_week[${i}]`;
        if (!stripHtml(w.when) || !stripHtml(w.what)) fail(`${tag}: needs when and what`);
        const n = countSentences(w.what);
        if (n > LIMITS.watchSentences) fail(`${tag}: what is ${n} sentences, max ${LIMITS.watchSentences}`);
    });

    // Reading links
    const links = Array.isArray(F.reading_links) ? F.reading_links : [];
    checkRange(`${file}: reading_links`, links.length, LIMITS.reading);
    links.forEach((l, i) => {
        const tag = `${file}: reading_links[${i}]`;
        if (!stripHtml(l.title) || !/^https:\/\//.test(l.url || '') || !stripHtml(l.source)) fail(`${tag}: needs title, url (https), source`);
        else checkPaywall(tag, l.url);
        if (l.description && countSentences(l.description) > 2) fail(`${tag}: description max 2 sentences`);
    });

    // Rates
    const rates = F.rates || {};
    sameSet(`${file}: rates`, Object.keys(rates), RATE_KEYS);
    RATE_KEYS.forEach(k => {
        const r = rates[k];
        if (!r) return;
        ['current', 'one_mo_ago', 'one_yr_ago'].forEach(f => {
            if (!/^\d+\.\d{3}%$/.test(String(r[f]))) fail(`${file}: rates["${k}"].${f} "${r[f]}" should look like "4.250%"`);
        });
    });

    // Stock table
    const stocks = F.stocks || {};
    sameSet(`${file}: stocks categories`, Object.keys(stocks), Object.keys(STOCK_TABLE));
    Object.keys(STOCK_TABLE).forEach(cat => {
        const rows = Array.isArray(stocks[cat]) ? stocks[cat] : [];
        sameSet(`${file}: stocks["${cat}"] tickers`, rows.map(r => r.ticker), STOCK_TABLE[cat]);
        rows.forEach(r => {
            ['price', 'day_pct', 'ytd_pct', 'high_52w', 'vs_high', 'low_52w', 'vs_low'].forEach(f => {
                if (typeof r[f] !== 'number' || isNaN(r[f])) fail(`${file}: stocks["${cat}"] ${r.ticker}.${f} must be a number`);
            });
            if (!stripHtml(r.company)) fail(`${file}: stocks["${cat}"] ${r.ticker} needs company`);
        });
    });

    return { asOf, date: F.date };
}

function checkPaywall(tag, url) {
    let host = '';
    try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) { fail(`${tag}: bad URL ${url}`); return; }
    if (PAYWALLED.some(d => host === d || host.endsWith('.' + d))) fail(`${tag}: ${host} is paywalled — not allowed`);
}

// ----------------------------------------------------------------
// tenant-lender-data.js
// ----------------------------------------------------------------
function validateTenantLender(fin) {
    const T = loadConst('tenant-lender-data.js', 'TENANT_LENDER_NEWS');
    if (!T) return;
    const file = 'tenant-lender-data.js';

    const asOf = parseLongDate(T.date);
    if (!asOf) fail(`${file}: date "${T.date}" is not like "October 16, 2026"`);
    if (fin && fin.date && T.date !== fin.date) fail(`${file}: date "${T.date}" differs from friday-finance-data.js "${fin.date}"`);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(String(T.last_scan))) fail(`${file}: last_scan must be an ISO timestamp like 2026-10-16T13:00:00Z`);

    // Companies — exactly the canonical watchlist, by name and category
    const companies = Array.isArray(T.companies) ? T.companies : [];
    const wantAll = [];
    Object.keys(WATCHLIST).forEach(cat => WATCHLIST[cat].forEach(n => wantAll.push(`${n}|${cat}`)));
    sameSet(`${file}: companies (name|cat)`, companies.map(c => `${c.name}|${c.cat}`), wantAll);
    const ids = companies.map(c => String(c.id));
    if (new Set(ids).size !== ids.length) fail(`${file}: duplicate company ids`);
    const byName = {};
    companies.forEach(c => { byName[c.name] = c.cat; });

    // Alerts
    const alerts = Array.isArray(T.alerts) ? T.alerts : [];
    let lastLevel = -1;
    const alerted = new Set();
    alerts.forEach((a, i) => {
        const tag = `${file}: alerts[${i}] (${a.company || '?'})`;
        const li = LEVELS.indexOf(a.level);
        if (li < 0) fail(`${tag}: level "${a.level}" not in ${LEVELS.join('/')}`);
        if (li >= 0 && li < lastLevel) fail(`${tag}: alerts must be ordered HIGH → MEDIUM → LOW → GENERAL`);
        if (li >= 0) lastLevel = li;

        if (a.cat === 'Industry') {
            // allowed: a major CRE / capital-markets event that is not about one watchlist company
        } else if (!byName[a.company]) {
            fail(`${tag}: company is not on the watchlist (use cat "Industry" for market-wide events)`);
        } else if (byName[a.company] !== a.cat) {
            fail(`${tag}: cat "${a.cat}" should be "${byName[a.company]}"`);
        }
        alerted.add(a.company);

        const hw = countWords(a.headline);
        if (!hw) fail(`${tag}: headline missing`);
        else if (hw > LIMITS.alertHeadlineWords) fail(`${tag}: headline is ${hw} words, max ${LIMITS.alertHeadlineWords}`);
        const ss = countSentences(a.summary);
        if (!ss) fail(`${tag}: summary missing`);
        else if (ss > LIMITS.alertSummarySentences) fail(`${tag}: summary is ${ss} sentences, max ${LIMITS.alertSummarySentences}`);
        const rs = countSentences(a.relevance);
        if (!rs) fail(`${tag}: relevance missing`);
        else if (rs > LIMITS.alertRelevanceSentences) fail(`${tag}: relevance is ${rs} sentences, max ${LIMITS.alertRelevanceSentences}`);
        if (!stripHtml(a.source)) fail(`${tag}: source missing`);
        if (/no adverse news|no material news|no company-specific/i.test(stripHtml(a.summary)))
            fail(`${tag}: "no news" is not an alert — move the company to quiet[]`);

        const d = parseIsoDate(a.date);
        if (!d) fail(`${tag}: date "${a.date}" must be YYYY-MM-DD`);
        else if (asOf) {
            const age = daysBetween(asOf, d);
            if (age > LIMITS.alertAgeDays) fail(`${tag}: dated ${a.date}, ${age} days old — remove alerts older than ${LIMITS.alertAgeDays} days`);
            if (age < -1) fail(`${tag}: dated ${a.date}, after ${T.date}`);
        }
    });

    // Quiet list — watchlist names with nothing material this week
    const quiet = Array.isArray(T.quiet) ? T.quiet : [];
    quiet.forEach(n => {
        if (!byName[n]) fail(`${file}: quiet[] "${n}" is not on the watchlist`);
        if (alerted.has(n)) fail(`${file}: "${n}" is in quiet[] but also has an alert`);
    });
    const covered = new Set([...quiet, ...alerted]);
    const uncovered = companies.map(c => c.name).filter(n => !covered.has(n));
    if (uncovered.length) fail(`${file}: every watchlist company needs an alert or a quiet[] entry — missing ${JSON.stringify(uncovered)}`);
}

// ----------------------------------------------------------------
// Run
// ----------------------------------------------------------------
const fin = validateFinance();
validateTenantLender(fin);

if (errors.length) {
    console.error(`✖ validate-data: ${errors.length} problem${errors.length === 1 ? '' : 's'}\n`);
    errors.forEach(e => console.error('  - ' + e));
    console.error('');
    process.exit(1);
} else {
    console.log('✔ validate-data: both data files pass');
}
