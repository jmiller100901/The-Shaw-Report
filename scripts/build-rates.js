#!/usr/bin/env node
// ================================================================
// The Shaw Report — build data/rates.json from FRED
//
// FRED's CSV endpoint is public but does not send CORS headers, so
// the browser cannot read it directly. This script runs in a daily
// GitHub Action (.github/workflows/rates.yml), fetches each series,
// and writes a small JSON file the page reads from its own origin.
//
// Usage:  node scripts/build-rates.js        (Node 18+, no deps)
// ================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const SERIES = [
    { id: 'DFF',          label: 'Eff. Federal Funds' },
    { id: 'SOFR',         label: 'SOFR (overnight)' },
    { id: 'SOFR30DAYAVG', label: '30-Day Avg SOFR' },
    { id: 'DPRIME',       label: 'Prime Rate' },
    { id: 'DGS2',         label: '2-Year Treasury' },
    { id: 'DGS5',         label: '5-Year Treasury' },
    { id: 'DGS10',        label: '10-Year Treasury' },
    { id: 'DGS30',        label: '30-Year Treasury' },
    { id: 'T10Y2Y',       label: '10Y − 2Y Spread' }
];

const OUT = path.join(__dirname, '..', 'data', 'rates.json');

function isoDaysAgo(d, n) {
    const x = new Date(d); x.setUTCDate(x.getUTCDate() - n);
    return x.toISOString().slice(0, 10);
}
function isoMonthsAgo(d, n) {
    const x = new Date(d); x.setUTCMonth(x.getUTCMonth() - n);
    return x.toISOString().slice(0, 10);
}

async function fetchSeries(id) {
    const cosd = isoMonthsAgo(new Date(), 14);   // enough history for the 1Y lookback
    const url  = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}&cosd=${cosd}`;
    const res  = await fetch(url, { headers: { 'User-Agent': 'shaw-report-rates/1.0' } });
    if (!res.ok) throw new Error(`${id}: HTTP ${res.status}`);
    const text = await res.text();
    const rows = [];
    text.split(/\r?\n/).slice(1).forEach(line => {
        const [date, val] = line.split(',');
        if (!date || val == null || val.trim() === '.' || val.trim() === '') return;
        const v = parseFloat(val);
        if (!isNaN(v)) rows.push({ date: date.trim(), value: v });
    });
    if (!rows.length) throw new Error(`${id}: no observations`);
    return rows;
}

// Last observation on or before `iso`
function onOrBefore(rows, iso) {
    let best = null;
    for (const r of rows) { if (r.date <= iso) best = r; else break; }
    return best;
}

async function main() {
    const out = { updated: new Date().toISOString(), source: 'FRED, Federal Reserve Bank of St. Louis', series: {} };
    let asOf = '';
    for (const s of SERIES) {
        try {
            const rows = await fetchSeries(s.id);
            const cur  = rows[rows.length - 1];
            const curD = new Date(cur.date + 'T00:00:00Z');
            const wk   = onOrBefore(rows, isoDaysAgo(curD, 7));
            const mo   = onOrBefore(rows, isoMonthsAgo(curD, 1));
            const yr   = onOrBefore(rows, isoMonthsAgo(curD, 12));
            out.series[s.id] = {
                label:      s.label,
                date:       cur.date,
                current:    cur.value,
                one_wk_ago: wk ? wk.value : null,
                one_mo_ago: mo ? mo.value : null,
                one_yr_ago: yr ? yr.value : null
            };
            if (cur.date > asOf) asOf = cur.date;
            console.log(`${s.id.padEnd(13)} ${cur.date}  ${cur.value}`);
        } catch (e) {
            console.error(`! ${e.message}`);
        }
    }
    if (!Object.keys(out.series).length) { console.error('No series fetched'); process.exit(1); }
    out.as_of = asOf;
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
    console.log(`\nWrote ${path.relative(process.cwd(), OUT)} (as of ${asOf})`);
}

main().catch(e => { console.error(e); process.exit(1); });
