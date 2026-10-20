// ================================================================
// The Shaw Report — Application Logic
// ================================================================

(function () {
    'use strict';

    // ----------------------------------------------------------------
    // Edition data. `current` is this week's data from the two data
    // files; `viewing` is set while an archived edition is open.
    // Ticker bar and stock table always show live/current data.
    // ----------------------------------------------------------------
    var current = { F: FRIDAY_FINANCE, T: (typeof TENANT_LENDER_NEWS !== 'undefined') ? TENANT_LENDER_NEWS : null };
    var viewing = null;
    function F() { return viewing ? viewing.F : current.F; }
    function T() { return viewing ? viewing.T : current.T; }

    var REPO     = 'jmiller100901/The-Shaw-Report';
    var RAW_ROOT = 'https://raw.githubusercontent.com/' + REPO + '/';

    // ----------------------------------------------------------------
    // Symbol mapping — indices need caret-prefix for Yahoo URLs and Finnhub
    // ----------------------------------------------------------------
    var INDEX_MAP = {
        'SPX':  '^GSPC',
        'DJIA': '^DJI',
        'DJI':  '^DJI',
        'IXIC': '^IXIC',
        'COMP': '^IXIC'
    };

    // Yahoo Finance URL for clickable ticker/company links
    function yahooUrl(sym) {
        return 'https://finance.yahoo.com/quote/' + encodeURIComponent(INDEX_MAP[sym] || sym);
    }

    // Week-in-numbers proxies (ETFs — Finnhub free tier blocks indices)
    var WEEK_PROXIES = [
        { symbol: 'SPY', label: 'S&P 500' },
        { symbol: 'QQQ', label: 'Nasdaq 100' },
        { symbol: 'IWM', label: 'Russell 2000' },
        { symbol: 'VNQ', label: 'REITs' },
        { symbol: 'KRE', label: 'Regional banks' },
        { symbol: 'TLT', label: 'Long Treasuries' },
        { symbol: 'USO', label: 'Oil' },
        { symbol: 'GLD', label: 'Gold' }
    ];

    // Public watchlist names for the earnings calendar
    var WATCH_TICKERS = [
        { symbol: 'HBAN',  name: 'Huntington' },
        { symbol: 'FITB',  name: 'Fifth Third' },
        { symbol: 'BUSE',  name: 'Busey' },
        { symbol: 'SFNC',  name: 'Simmons' },
        { symbol: 'PNFP',  name: 'Pinnacle' },
        { symbol: 'HIG',   name: 'Hartford' },
        { symbol: 'IP',    name: 'International Paper' },
        { symbol: 'GFF',   name: 'Griffon (Clopay)' },
        { symbol: 'LYV',   name: 'Live Nation (C3)' },
        { symbol: 'KHNGY', name: 'Kuehne + Nagel' },
        { symbol: 'DNPLY', name: 'Dai Nippon (DNP)' }
    ];

    // Live rates table rows (FRED series ids, built by scripts/build-rates.js)
    var RATE_ROWS = [
        { id: 'DFF',          label: 'Eff. Federal Funds' },
        { id: 'SOFR',         label: 'SOFR (overnight)' },
        { id: 'SOFR30DAYAVG', label: '30-Day Avg SOFR' },
        { id: 'DPRIME',       label: 'Prime Rate' },
        { id: 'DGS2',         label: '2-Year Treasury' },
        { id: 'DGS5',         label: '5-Year Treasury' },
        { id: 'DGS10',        label: '10-Year Treasury' },
        { id: 'DGS30',        label: '30-Year Treasury' },
        { id: 'T10Y2Y',       label: '10Y − 2Y Spread', spread: true }
    ];

    // ----------------------------------------------------------------
    // Live data cache  { ticker: { price, dayPct } }
    // ----------------------------------------------------------------
    var liveCache = {};
    var metricCache = {};
    var liveFetchDone = false;
    var ratesLive = null;

    // ----------------------------------------------------------------
    // Init
    // ----------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        initNav();
        initArchive();
        initLiveRates();
        initLiveStockData();

        var params = new URLSearchParams(location.search);
        if (params.get('edition')) loadEdition(params.get('edition'));
    });

    // ----------------------------------------------------------------
    // Ticker Bar
    // ----------------------------------------------------------------
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !current.F.ticker_bar) return;
        bar.innerHTML = current.F.ticker_bar.map(function (t) {
            var live      = liveCache[t.symbol];
            var price     = live ? fmtTickerPrice(live.price) : t.price;
            var changePct = (live !== undefined) ? live.dayPct : t.change_pct;
            var up        = changePct >= 0;
            return '<a class="ticker-item" href="' + yahooUrl(t.symbol) + '" target="_blank" rel="noopener">' +
                '<span class="sym">' + t.symbol + '</span>' +
                '<span class="ticker-price">' + price + '</span>' +
                '<span class="pct ' + (up ? 'up' : 'down') + '">' +
                (up ? '▲' : '▼') + Math.abs(changePct).toFixed(1) + '%</span>' +
                '</a>';
        }).join('');
    }

    // ----------------------------------------------------------------
    // Masthead
    // ----------------------------------------------------------------
    function renderMasthead() {
        var el = document.getElementById('masthead-date');
        if (el) el.textContent = F().date;
        var q   = F().quote;
        var qEl = document.getElementById('masthead-quote');
        if (qEl && q) {
            qEl.innerHTML = '&ldquo;' + q.text + '&rdquo; &mdash; ' + q.author;
        }
        var banner = document.getElementById('edition-banner');
        if (banner) {
            if (viewing) {
                banner.innerHTML = '<span class="edition-banner-label">Archived edition</span> ' +
                    '<span class="edition-banner-date">' + viewing.label + '</span>' +
                    '<a href="#" id="edition-back" class="edition-back">Back to current edition &rarr;</a>';
                banner.style.display = '';
                var back = document.getElementById('edition-back');
                if (back) back.addEventListener('click', function (e) { e.preventDefault(); restoreCurrent(); });
            } else {
                banner.style.display = 'none';
                banner.innerHTML = '';
            }
        }
    }

    // ----------------------------------------------------------------
    // Section Nav
    // ----------------------------------------------------------------
    function initNav() {
        var tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () { showSection(tab.getAttribute('data-section')); });
        });
    }
    function showSection(id) {
        document.querySelectorAll('.nav-tab').forEach(function (t) {
            t.classList.toggle('active', t.getAttribute('data-section') === id);
        });
        document.querySelectorAll('.section').forEach(function (s) { s.classList.toggle('active', s.id === id); });
    }

    // ----------------------------------------------------------------
    // Friday Finance Section
    // ----------------------------------------------------------------
    function renderFridayFinance() {
        var data = F();

        // Stories — a few big pieces, prose, one source each
        var storiesEl = document.getElementById('ff-stories');
        if (storiesEl) {
            var stories = data.stories;
            if (!stories && data.news_bullets) {
                // Legacy editions (pre-October 2026): bullets rendered as untitled stories
                stories = data.news_bullets.map(function (b) { return { body: b }; });
            }
            storiesEl.innerHTML = (stories || []).map(function (s, i) {
                var src = s.source || {};
                return '<article class="story">' +
                    '<div class="story-kicker"><span class="story-num">' + (i + 1) + '</span>' +
                    (s.date ? '<span class="story-date">' + fmtStoryDate(s.date) + '</span>' : '') + '</div>' +
                    (s.headline ? '<h2 class="story-headline">' + s.headline + '</h2>' : '') +
                    '<p class="story-body">' + s.body + '</p>' +
                    (s.jsc_angle ? '<p class="story-angle"><span class="story-angle-label">Why it matters</span>' + s.jsc_angle + '</p>' : '') +
                    (src.url ? '<div class="story-source">Source: <a href="' + src.url + '" target="_blank" rel="noopener">' +
                        (src.title || src.name || src.url) + '</a>' + (src.name && src.title ? ' &middot; ' + src.name : '') + '</div>' : '') +
                    '</article>';
            }).join('');
        }

        // Watch next week — short dated list
        var watchEl = document.getElementById('ff-watch-list');
        if (watchEl) {
            var w = data.watch_next_week;
            if (Array.isArray(w)) {
                watchEl.innerHTML = w.map(function (item) {
                    return '<li class="watch-item"><span class="watch-when">' + item.when + '</span>' +
                        '<span class="watch-what">' + item.what + '</span></li>';
                }).join('');
            } else if (typeof w === 'string') {
                watchEl.innerHTML = '<li class="watch-item watch-item-legacy"><span class="watch-what">' + w + '</span></li>';
            } else {
                watchEl.innerHTML = '';
            }
        }

        // Weekend reading — supports reading_links (new) or wsj_articles (legacy)
        var articles  = data.reading_links || data.wsj_articles || [];
        var readingEl = document.getElementById('ff-weekend-reading');
        if (readingEl) {
            readingEl.innerHTML = articles.map(function (a, i) {
                return '<div class="reading-item">' +
                    '<span class="reading-num">' + (i + 1) + '</span>' +
                    '<div class="reading-body">' +
                    '<a href="' + a.url + '" target="_blank" rel="noopener">' + a.title + '</a>' +
                    (a.description ? '<p class="reading-desc">' + a.description + '</p>' : '') +
                    '<div class="reading-source">' + (a.source || 'Wall Street Journal') + '</div>' +
                    '</div></div>';
            }).join('');
        }

        // Rates table (live FRED when available, else the edition's static rates)
        renderRatesTable();

        // Live FRED charts
        renderFredCharts();

        // Stock table — show loading state until live data arrives
        if (!liveFetchDone) setStockStatus('<span class="loading-badge">&#8635; Loading live data&hellip;</span>');
        renderStockTable();
    }

    function fmtStoryDate(iso) {
        var d = new Date(iso + 'T00:00:00');
        if (isNaN(d)) return iso;
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    // ----------------------------------------------------------------
    // Key rates — data/rates.json is rebuilt from FRED every weekday
    // evening by .github/workflows/rates.yml. Falls back to the static
    // rates in the data file if the JSON is missing.
    // ----------------------------------------------------------------
    function initLiveRates() {
        fetch('data/rates.json', { cache: 'no-store' })
            .then(function (r) { if (!r.ok) throw new Error('rates.json ' + r.status); return r.json(); })
            .then(function (j) { ratesLive = j; renderRatesTable(); renderWeekStrip(); })
            .catch(function (e) { console.warn('[Shaw Report] live rates unavailable:', e.message); });
    }

    function fmtRate(v, spread) {
        if (v == null || isNaN(v)) return '<span class="muted">&mdash;</span>';
        if (spread) return (v > 0 ? '+' : '') + Number(v).toFixed(2);
        return Number(v).toFixed(2) + '%';
    }

    function renderRatesTable() {
        var body = document.getElementById('ff-rate-body');
        var note = document.getElementById('ff-rate-note');
        if (!body) return;
        var html = '';
        if (ratesLive && ratesLive.series && !viewing) {
            RATE_ROWS.forEach(function (row) {
                var s = ratesLive.series[row.id];
                if (!s) return;
                var cls = row.spread ? ' rate-spread' : '';
                html += '<tr class="' + cls + '"><td>' + row.label + '</td>' +
                    '<td class="rate-cur">' + fmtRate(s.current, row.spread) + '</td>' +
                    '<td>' + fmtRate(s.one_wk_ago, row.spread) + '</td>' +
                    '<td>' + fmtRate(s.one_mo_ago, row.spread) + '</td>' +
                    '<td>' + fmtRate(s.one_yr_ago, row.spread) + '</td></tr>';
            });
            if (note) note.innerHTML = 'Live from FRED &middot; as of ' + fmtShortDate(ratesLive.as_of) +
                ' &middot; <a href="https://www.chathamfinancial.com/technology/us-forward-curves" target="_blank" rel="noopener">Forward curves &rarr;</a>';
        } else {
            var rates = F().rates || {};
            for (var name in rates) {
                var r = rates[name];
                html += '<tr><td>' + name + '</td><td class="rate-cur">' + r.current + '</td>' +
                    '<td><span class="muted">&mdash;</span></td>' +
                    '<td>' + r.one_mo_ago + '</td><td>' + r.one_yr_ago + '</td></tr>';
            }
            if (note) note.innerHTML = 'As of ' + F().date;
        }
        body.innerHTML = html;
    }

    function fmtShortDate(iso) {
        if (!iso) return '';
        var d = new Date(iso + 'T00:00:00');
        return isNaN(d) ? iso : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    // ----------------------------------------------------------------
    // Week in numbers — ETF proxies with Finnhub 5-day return, plus the
    // 10-year yield from rates.json.
    // ----------------------------------------------------------------
    function renderWeekStrip() {
        var el = document.getElementById('week-strip');
        if (!el) return;
        if (viewing) { el.style.display = 'none'; return; }   // live numbers would mislead on an old edition
        var tiles = [];

        WEEK_PROXIES.forEach(function (p) {
            var L = liveCache[p.symbol], M = metricCache[p.symbol];
            if (!L) return;
            var wk = (M && M.week5d != null) ? M.week5d : null;
            tiles.push(tile(p.label, fmtPrice(L.price), wk, L.dayPct, yahooUrl(p.symbol)));
        });

        if (ratesLive && ratesLive.series && ratesLive.series.DGS10) {
            var t = ratesLive.series.DGS10;
            var bp = (t.one_wk_ago != null) ? Math.round((t.current - t.one_wk_ago) * 100) : null;
            tiles.push('<a class="week-tile" href="https://fred.stlouisfed.org/series/DGS10" target="_blank" rel="noopener">' +
                '<span class="week-label">10-Year Yield</span>' +
                '<span class="week-value">' + Number(t.current).toFixed(2) + '%</span>' +
                (bp == null ? '' : '<span class="week-chg ' + (bp >= 0 ? 'up' : 'down') + '">' +
                    (bp > 0 ? '+' : '') + bp + ' bp wk</span>') +
                '</a>');
        }

        if (!tiles.length) { el.innerHTML = ''; el.style.display = 'none'; return; }
        el.style.display = '';
        el.innerHTML = '<div class="week-strip-title">Week in numbers</div><div class="week-tiles">' + tiles.join('') + '</div>';

        function tile(label, value, wk, day, href) {
            return '<a class="week-tile" href="' + href + '" target="_blank" rel="noopener">' +
                '<span class="week-label">' + label + '</span>' +
                '<span class="week-value">' + value + '</span>' +
                (wk == null
                    ? '<span class="week-chg ' + (day >= 0 ? 'up' : 'down') + '">' + (day > 0 ? '+' : '') + day.toFixed(1) + '% day</span>'
                    : '<span class="week-chg ' + (wk >= 0 ? 'up' : 'down') + '">' + (wk > 0 ? '+' : '') + wk.toFixed(1) + '% wk</span>') +
                '</a>';
        }
    }

    // ----------------------------------------------------------------
    // Watchlist earnings calendar — Finnhub, next 5 weeks
    // ----------------------------------------------------------------
    function initEarningsCalendar() {
        var el = document.getElementById('ff-earnings');
        if (!el) return;
        var from = new Date(), to = new Date();
        to.setDate(to.getDate() + 35);
        var f = from.toISOString().slice(0, 10), t = to.toISOString().slice(0, 10);
        var tok = '&token=' + FINNHUB_TOKEN;

        var promises = WATCH_TICKERS.map(function (w) {
            return finnhubGet(FINNHUB_ROOT + 'calendar/earnings?from=' + f + '&to=' + t + '&symbol=' + w.symbol + tok)
                .then(function (d) {
                    return ((d && d.earningsCalendar) || []).map(function (e) {
                        return { date: e.date, hour: e.hour, eps: e.epsEstimate, symbol: w.symbol, name: w.name };
                    });
                })
                .catch(function () { return []; });
        });

        Promise.all(promises).then(function (lists) {
            var rows = [].concat.apply([], lists).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
            if (!rows.length) {
                el.innerHTML = '<div class="earn-empty">No watchlist earnings scheduled in the next five weeks.</div>';
                return;
            }
            el.innerHTML = rows.map(function (r) {
                var when = r.hour === 'bmo' ? 'pre-mkt' : r.hour === 'amc' ? 'after close' : '';
                return '<div class="earn-row">' +
                    '<span class="earn-date">' + fmtShortDate(r.date) + '</span>' +
                    '<span class="earn-name"><a href="' + yahooUrl(r.symbol) + '" target="_blank" rel="noopener">' + r.name + '</a>' +
                    ' <span class="earn-sym">' + r.symbol + '</span></span>' +
                    '<span class="earn-meta">' + (r.eps != null ? 'EPS est. $' + Number(r.eps).toFixed(2) : '') +
                    (when ? ' &middot; ' + when : '') + '</span></div>';
            }).join('');
        });
    }

    // ----------------------------------------------------------------
    // FRED charts — live PNGs from fred.stlouisfed.org, no API key.
    // Each card: <img data-fred-series="A,B" data-fred-years="N">
    // ----------------------------------------------------------------
    function renderFredCharts() {
        var imgs = document.querySelectorAll('img[data-fred-series]');
        imgs.forEach(function (img) {
            if (img.getAttribute('data-fred-done')) return;
            img.setAttribute('data-fred-done', '1');
            var series = img.getAttribute('data-fred-series');
            var years  = parseInt(img.getAttribute('data-fred-years'), 10) || 10;
            var start  = new Date();
            start.setFullYear(start.getFullYear() - years);
            var cosd   = start.toISOString().slice(0, 10);
            // Small requested size keeps FRED's labels legible once scaled into the sidebar card
            var qs     = 'id=' + encodeURIComponent(series) + '&cosd=' + cosd + '&width=420&height=280';
            img.src = 'https://fred.stlouisfed.org/graph/fredgraph.png?' + qs;
            var link = img.closest('a');
            if (link) link.href = 'https://fred.stlouisfed.org/graph/?id=' + encodeURIComponent(series);
            img.addEventListener('error', function () {
                img.style.display = 'none';
                var card = img.closest('.chart-slot');
                if (card) card.innerHTML = '<div class="chart-ph-inner"><p class="chart-ph-sub">Chart unavailable</p>' +
                    '<a href="https://fred.stlouisfed.org/graph/?id=' + encodeURIComponent(series) +
                    '" target="_blank" rel="noopener" class="chart-link-btn">View on FRED &rarr;</a></div>';
            });
        });
    }

    // ----------------------------------------------------------------
    // Stock Table (always current edition — the ticker set is fixed)
    // ----------------------------------------------------------------
    function renderStockTable() {
        var data      = current.F;
        var stockBody = document.getElementById('ff-stock-body');
        if (!stockBody || !data.stocks) return;

        var hasLive  = Object.keys(liveCache).length > 0;
        var fetchDone = hasLive || liveFetchDone;
        var html = '';
        for (var cat in data.stocks) {
            html += '<tr class="cat-row"><td colspan="9">' + cat + '</td></tr>';
            data.stocks[cat].forEach(function (s) {
                var L    = liveCache[s.ticker];
                var yurl = yahooUrl(s.ticker);

                if (hasLive && L) {
                    // Live price + day% from Finnhub/quote; 52W/YTD from Finnhub/metric when available, else static
                    var M   = metricCache[s.ticker];
                    var ytd = (M && M.ytdPct  != null) ? M.ytdPct  : s.ytd_pct;
                    var h52 = (M && M.high52w != null) ? M.high52w : s.high_52w;
                    var l52 = (M && M.low52w  != null) ? M.low52w  : s.low_52w;
                    var vsH = (h52 && L.price) ? ((L.price - h52) / h52 * 100) : s.vs_high;
                    var vsL = (l52 && L.price) ? ((L.price - l52) / l52 * 100) : s.vs_low;
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num">' + fmtPrice(L.price) + '</td>' +
                        pctCell(L.dayPct) + barCell(ytd, 50) +
                        '<td class="num">' + fmtPrice(h52) + '</td>' +
                        barCell(vsH, 40) +
                        '<td class="num">' + fmtPrice(l52) + '</td>' +
                        barCell(vsL, 100) +
                        '</tr>';
                } else if (fetchDone && !L) {
                    // Fetch complete but no live data (index, rate-limited, or API error) — use static
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num">' + fmtPrice(s.price) + '</td>' +
                        pctCell(s.day_pct) + barCell(s.ytd_pct, 50) +
                        '<td class="num">' + fmtPrice(s.high_52w) + '</td>' +
                        barCell(s.vs_high, 40) +
                        '<td class="num">' + fmtPrice(s.low_52w) + '</td>' +
                        barCell(s.vs_low, 100) +
                        '</tr>';
                } else {
                    // Still loading
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num" colspan="7" style="text-align:center;color:var(--text-ter);">&mdash;</td>' +
                        '</tr>';
                }
            });
        }
        stockBody.innerHTML = html;
        renderWeekStrip();
    }

    function setStockStatus(html) {
        var el = document.getElementById('ff-stock-dateline');
        if (el) el.innerHTML = html;
    }

    function bindRefreshBtn() {
        var btn = document.getElementById('refresh-live-btn');
        if (btn) btn.addEventListener('click', function (e) {
            e.preventDefault();
            liveCache = {};
            metricCache = {};
            liveFetchDone = false;
            initLiveStockData();
        });
    }

    // ----------------------------------------------------------------
    // Live Data — Finnhub REST API (direct CORS, no proxy)
    // /quote → price, day%; /stock/metric → 52W high/low, YTD%, 5-day%
    // ----------------------------------------------------------------
    var FINNHUB_TOKEN = 'd7h5mkhr01qhiu0abuegd7h5mkhr01qhiu0abuf0';
    var FINNHUB_ROOT  = 'https://finnhub.io/api/v1/';

    // Paced request queue. Finnhub's free tier allows 60 calls/minute and
    // the page needs ~125 (quotes, metrics, earnings), so requests are
    // released in a rolling 60-second budget and failures retry once after
    // a pause. (A 429 arrives without CORS headers, so it surfaces as a
    // fetch TypeError rather than a status code.)
    var FH_BUDGET = 55, FH_WINDOW = 60000;
    var fhTimes = [], fhQueue = [], fhPumping = false;

    function finnhubGet(url) {
        return new Promise(function (resolve, reject) {
            fhQueue.push({ url: url, resolve: resolve, reject: reject, tries: 0 });
            fhPump();
        });
    }
    function fhPump() {
        if (fhPumping) return;
        fhPumping = true;
        (function next() {
            if (!fhQueue.length) { fhPumping = false; return; }
            var now = Date.now();
            fhTimes = fhTimes.filter(function (t) { return now - t < FH_WINDOW; });
            if (fhTimes.length >= FH_BUDGET) {
                setTimeout(next, FH_WINDOW - (now - fhTimes[0]) + 100);
                return;
            }
            var job = fhQueue.shift();
            fhTimes.push(now);
            fetch(job.url)
                .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
                .then(job.resolve)
                .catch(function (err) {
                    if (job.tries < 1) {
                        job.tries++;
                        setTimeout(function () { fhQueue.push(job); fhPump(); }, 20000);
                    } else {
                        job.reject(err);
                    }
                });
            setTimeout(next, 40);
        })();
    }

    function fetchFinnhubQuote(symbol) {
        var finnhubSym = INDEX_MAP[symbol] || symbol;
        var tok        = '&token=' + FINNHUB_TOKEN;
        var quoteUrl   = FINNHUB_ROOT + 'quote?symbol=' + encodeURIComponent(finnhubSym) + tok;

        return finnhubGet(quoteUrl)
            .then(function (q) {
                if (!q || q.c == null || q.c === 0) throw new Error('No data for ' + symbol);
                var price  = q.c;
                var dayPct = q.dp != null ? q.dp : (q.pc ? ((price - q.pc) / q.pc * 100) : 0);
                return { ticker: symbol, price: price, dayPct: dayPct };
            });
    }

    function fetchFinnhubMetric(symbol) {
        var tok = '&token=' + FINNHUB_TOKEN;
        var url = FINNHUB_ROOT + 'stock/metric?symbol=' + encodeURIComponent(symbol) + '&metric=all' + tok;
        return finnhubGet(url)
            .then(function (d) {
                if (!d || !d.metric) throw new Error('No metric for ' + symbol);
                var m   = d.metric;
                var ytd = m['yearToDatePriceReturnDaily'] != null ? m['yearToDatePriceReturnDaily']
                        : m['ytdPriceReturnDaily'];
                return { ticker: symbol, high52w: m['52WeekHigh'], low52w: m['52WeekLow'], ytdPct: ytd,
                         week5d: m['5DayPriceReturnDaily'] };
            });
    }

    // Re-render at most once per animation frame as paced results arrive
    var renderPending = false;
    function scheduleRender() {
        if (renderPending) return;
        renderPending = true;
        requestAnimationFrame(function () {
            renderPending = false;
            renderStockTable();
            renderTickerBar();
        });
    }

    // 52W high/low + YTD + 5-day for every symbol, then the earnings calendar.
    // The queue paces these inside the Finnhub budget; the table updates as they land.
    function initLiveMetricData(symbols) {
        var promises = symbols.map(function (sym) {
            return fetchFinnhubMetric(sym)
                .then(function (d) { metricCache[d.ticker] = d; scheduleRender(); })
                .catch(function () { /* keep static fallback for this row */ });
        });
        Promise.all(promises).then(initEarningsCalendar);
    }

    function initLiveStockData() {
        var symbols = collectAllSymbols();
        var got = 0;

        setStockStatus('<span class="loading-badge">&#8635; Fetching live prices&hellip;</span>');

        var promises = symbols.map(function (sym) {
            return fetchFinnhubQuote(sym)
                .then(function (data) {
                    liveCache[data.ticker] = data;
                    got++;
                    setStockStatus('<span class="loading-badge">&#8635; Fetching live prices&hellip; ' + got + '/' + symbols.length + '</span>');
                    scheduleRender();
                    return { status: 'fulfilled', value: data };
                })
                .catch(function (err) { return { status: 'rejected', ticker: sym, reason: err }; });
        });

        Promise.all(promises)
            .then(function (results) {
                liveFetchDone = true;
                var success = results.filter(function (r) { return r.status === 'fulfilled'; }).length;

                if (success === 0) throw new Error('All requests failed');

                renderStockTable();
                renderTickerBar();
                var t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setStockStatus(
                    '<span class="live-badge">&#10003; Live data &bull; ' + success + '/' + symbols.length + ' symbols &bull; ' + t + '</span>' +
                    '&nbsp;&nbsp;<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Refresh</a>'
                );
                bindRefreshBtn();
                // Week proxies first so the strip fills quickly
                var ordered = WEEK_PROXIES.map(function (p) { return p.symbol; })
                    .concat(symbols.filter(function (s) { return !WEEK_PROXIES.some(function (p) { return p.symbol === s; }); }));
                initLiveMetricData(ordered);
            })
            .catch(function (err) {
                console.warn('[Shaw Report] Finnhub error:', err);
                liveFetchDone = true;
                renderStockTable();
                renderTickerBar();
                setStockStatus(
                    '<span class="error-badge">Live data unavailable</span>' +
                    '&nbsp;&bull;&nbsp;Showing static data&nbsp;&nbsp;' +
                    '<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Retry</a>'
                );
                bindRefreshBtn();
            });
    }

    // ----------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------
    function isIndex(sym) {
        return !!INDEX_MAP[sym];
    }

    function collectAllSymbols() {
        var symbols = [], seen = {};
        function add(sym) { if (!seen[sym] && !isIndex(sym)) { seen[sym] = true; symbols.push(sym); } }
        // Ticker bar symbols (skip indices — Finnhub free tier blocks them)
        if (current.F.ticker_bar) current.F.ticker_bar.forEach(function (t) { add(t.symbol); });
        // Stock table symbols
        if (current.F.stocks) {
            for (var cat in current.F.stocks) current.F.stocks[cat].forEach(function (s) { add(s.ticker); });
        }
        // Week-in-numbers proxies
        WEEK_PROXIES.forEach(function (p) { add(p.symbol); });
        return symbols;
    }

    function fmtPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return val.toFixed(2);
    }

    function fmtTickerPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return val.toLocaleString('en-US', { maximumFractionDigits: 0 });
        return val.toFixed(2);
    }

    function pctCell(val) {
        if (val == null) return '<td class="num"></td>';
        var cls  = val >= 0 ? 'up' : 'down';
        var sign = val > 0 ? '+' : '';
        return '<td class="num ' + cls + '">' + sign + val.toFixed(1) + '%</td>';
    }

    // Like pctCell but adds a proportional mini bar below the number.
    // maxAbs is the value that fills the bar to 100% width.
    function barCell(val, maxAbs) {
        if (val == null) return '<td class="num bar-cell"></td>';
        var cls  = val >= 0 ? 'up' : 'down';
        var sign = val > 0 ? '+' : '';
        var pct  = Math.min(Math.abs(val) / maxAbs, 1) * 100;
        return '<td class="num bar-cell ' + cls + '">' +
            sign + val.toFixed(1) + '%' +
            '<div class="bar-track"><div class="bar-fill ' + cls + '" style="width:' + pct.toFixed(1) + '%"></div></div>' +
            '</td>';
    }

    // ----------------------------------------------------------------
    // Tenant & Lender News
    // ----------------------------------------------------------------
    var tlFilter    = 'All';
    var tlCollapsed = {};

    var LEVELS = ['HIGH', 'MEDIUM', 'LOW', 'GENERAL'];
    var LEVEL_META = {
        HIGH:    { icon: '🔴', desc: 'Bankruptcy · Default · Fraud · Major Legal Action' },
        MEDIUM:  { icon: '🟠', desc: 'Downgrade · C-Suite Exit · Earnings Miss · Regulatory' },
        LOW:     { icon: '🟡', desc: 'Minor Litigation · Restructuring Warning · Analyst Cuts' },
        GENERAL: { icon: '⚪',        desc: 'Neutral or Positive Developments' }
    };

    function renderTenantLenderNews() {
        if (!T()) return;
        renderTLFilters();
        renderTLContent();
        renderTLWatchlist();
    }

    function renderTLFilters() {
        var el = document.getElementById('tl-filters');
        if (!el) return;
        var cats = ['All', 'Tenant', 'Lender', 'Equity Partner'];
        el.innerHTML = cats.map(function (c) {
            return '<button class="tl-filter-btn' + (tlFilter === c ? ' active' : '') +
                '" data-tlfilter="' + c + '">' + c + '</button>';
        }).join('');
        el.querySelectorAll('.tl-filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                tlFilter = btn.getAttribute('data-tlfilter');
                renderTLFilters(); renderTLContent(); renderTLWatchlist();
            });
        });
    }

    var ALERT_MAX_AGE_DAYS = 60;

    function renderTLContent() {
        var data     = T() || {};
        var alerts   = data.alerts || [];

        // Filter out alerts older than 60 days (relative to the edition date when viewing an archive)
        var ref = viewing ? new Date(data.date + ' 00:00:00') : new Date();
        if (isNaN(ref)) ref = new Date();
        var cutoff = new Date(ref);
        cutoff.setDate(cutoff.getDate() - ALERT_MAX_AGE_DAYS);
        alerts = alerts.filter(function (a) {
            if (!a.date) return true;
            return new Date(a.date + 'T00:00:00') >= cutoff;
        });

        var filtered = tlFilter === 'All' ? alerts : alerts.filter(function (a) { return a.cat === tlFilter; });

        var byLevel = {};
        LEVELS.forEach(function (l) { byLevel[l] = []; });
        filtered.forEach(function (a) { if (byLevel[a.level]) byLevel[a.level].push(a); });

        var statsEl = document.getElementById('tl-stats');
        if (statsEl) {
            statsEl.innerHTML = [
                { lvl: 'HIGH',    count: byLevel.HIGH.length,    label: 'High' },
                { lvl: 'MEDIUM',  count: byLevel.MEDIUM.length,  label: 'Medium' },
                { lvl: 'LOW',     count: byLevel.LOW.length,     label: 'Low' },
                { lvl: 'GENERAL', count: byLevel.GENERAL.length, label: 'General' }
            ].map(function (s) {
                return '<div class="tl-stat severity-' + s.lvl + '">' +
                    '<div class="tl-stat-num">' + s.count + '</div>' +
                    '<div class="tl-stat-label">' + s.label + '</div></div>';
            }).join('');
        }

        var alertsEl = document.getElementById('tl-alerts');
        if (!alertsEl) return;
        var html = '';
        if (filtered.length === 0) {
            html += '<div class="tl-none">No alerts this week' + (tlFilter === 'All' ? '' : ' for ' + tlFilter.toLowerCase() + 's') + '.</div>';
        }
        LEVELS.forEach(function (lvl) {
            var items = byLevel[lvl];
            if (items.length === 0) return;   // only show levels that have something
            var meta = LEVEL_META[lvl];
            var col  = tlCollapsed[lvl];

            html += '<div class="tl-level-section severity-' + lvl + '">';
            html += '<div class="tl-level-header' + (col ? ' collapsed' : '') + '" data-level="' + lvl + '">' +
                '<div class="tl-level-left">' +
                '<span class="tl-level-badge">' + lvl + '</span>' +
                '<span class="tl-level-title">' + meta.icon + ' ' + lvl + ' ALERTS</span>' +
                '<span class="tl-level-desc">' + meta.desc + '</span>' +
                '</div>' +
                '<div class="tl-level-right">' +
                '<span class="tl-level-count">' + items.length + '</span>' +
                '<span class="tl-level-chevron">' + (col ? '▼' : '▲') + '</span>' +
                '</div></div>';

            if (!col) {
                html += '<div class="tl-level-body">';
                items.forEach(function (a) {
                    html += '<div class="tl-alert">' +
                        '<div class="tl-alert-headline">' + a.headline + '</div>' +
                        '<div class="tl-alert-summary">' + a.summary + '</div>';
                    if (a.relevance) html += '<div class="tl-alert-relevance">' + a.relevance + '</div>';
                    html += '<div class="tl-alert-meta">' +
                        '<span class="tl-meta-tag">' + a.company + '</span>' +
                        '<span class="tl-meta-cat">' + a.cat + '</span>';
                    if (a.source) html += '<span class="tl-meta-source">' + a.source + '</span>';
                    if (a.date)   html += '<span class="tl-meta-source">· ' + a.date + '</span>';
                    html += '</div></div>';
                });
                html += '</div>';
            }
            html += '</div>';
        });

        alertsEl.innerHTML = html;
        alertsEl.querySelectorAll('.tl-level-header').forEach(function (hdr) {
            hdr.addEventListener('click', function () {
                var lvl = hdr.getAttribute('data-level');
                tlCollapsed[lvl] = !tlCollapsed[lvl];
                renderTLContent();
            });
        });

        // Quiet list — scanned, nothing material
        var quietEl = document.getElementById('tl-quiet');
        if (quietEl) {
            var catOf = {};
            (data.companies || []).forEach(function (c) { catOf[c.name] = c.cat; });
            var quiet = (data.quiet || []).filter(function (n) { return tlFilter === 'All' || catOf[n] === tlFilter; });
            quietEl.innerHTML = quiet.length
                ? '<span class="tl-quiet-label">No material news this week</span>' +
                  quiet.map(function (n) { return '<span class="tl-quiet-name">' + n + '</span>'; }).join('')
                : '';
        }
    }

    function renderTLWatchlist() {
        var el = document.getElementById('tl-watchlist');
        var data = T();
        if (!el || !data || !data.companies) return;
        var companies = data.companies;
        if (tlFilter !== 'All') companies = companies.filter(function (c) { return c.cat === tlFilter; });
        el.innerHTML = companies.map(function (co) {
            var catClass = 'cat-' + co.cat.replace(/\s+/g, '-');
            return '<div class="tl-watchlist-item">' +
                '<span class="name">' + co.name + '</span>' +
                '<span class="cat-tag ' + catClass + '">' + co.cat + '</span>' +
                '</div>';
        }).join('');
    }

    // ----------------------------------------------------------------
    // Archive — every past edition is a commit to the data files.
    // Lists them from the GitHub API and loads any edition in place from
    // raw.githubusercontent.com. Ticker bar and stock table stay live.
    // ----------------------------------------------------------------
    var archiveLoaded = false;

    function initArchive() {
        var tab = document.querySelector('.nav-tab[data-section="archive"]');
        if (tab) tab.addEventListener('click', loadArchiveList);
    }

    function editionLabelFromMessage(msg) {
        var first = (msg || '').split('\n')[0];
        var m = first.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}/);
        return m ? m[0] : null;
    }

    function loadArchiveList() {
        if (archiveLoaded) return;
        archiveLoaded = true;
        var el = document.getElementById('archive-list');
        if (!el) return;
        el.innerHTML = '<div class="archive-loading">Loading editions&hellip;</div>';

        fetch('https://api.github.com/repos/' + REPO + '/commits?path=friday-finance-data.js&per_page=100')
            .then(function (r) { if (!r.ok) throw new Error('GitHub API ' + r.status); return r.json(); })
            .then(function (commits) {
                var seen = {}, editions = [];
                commits.forEach(function (c) {
                    var label = editionLabelFromMessage(c.commit.message);
                    if (!label || seen[label]) return;   // newest commit per edition date wins
                    seen[label] = true;
                    editions.push({ sha: c.sha, label: label, when: c.commit.committer.date });
                });
                if (!editions.length) { el.innerHTML = '<div class="archive-loading">No past editions found.</div>'; return; }
                el.innerHTML = editions.map(function (e) {
                    var d = new Date(e.label + ' 00:00:00');
                    var isCurrent = e.label === current.F.date;
                    return '<a href="?edition=' + e.sha + '" class="archive-item' + (isCurrent ? ' current' : '') + '" data-sha="' + e.sha + '" data-label="' + e.label + '">' +
                        '<span class="archive-date">' + (isNaN(d) ? e.label : d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })) + '</span>' +
                        '<span class="archive-tag">' + (isCurrent ? 'Current' : 'Open &rarr;') + '</span>' +
                        '</a>';
                }).join('');
                el.querySelectorAll('.archive-item').forEach(function (a) {
                    a.addEventListener('click', function (ev) {
                        ev.preventDefault();
                        if (a.classList.contains('current')) { restoreCurrent(); showSection('friday-finance'); return; }
                        loadEdition(a.getAttribute('data-sha'), a.getAttribute('data-label'));
                    });
                });
            })
            .catch(function (e) {
                el.innerHTML = '<div class="archive-loading">Could not load the archive (' + e.message + '). ' +
                    '<a href="https://github.com/' + REPO + '/commits/main/friday-finance-data.js" target="_blank" rel="noopener">View history on GitHub &rarr;</a></div>';
            });
    }

    function evalDataFile(src, name) {
        /* The data files are plain `const NAME = {...};` scripts. */
        return new Function(src + '\nreturn ' + name + ';')();
    }

    function loadEdition(sha, label) {
        if (!/^[0-9a-f]{7,40}$/i.test(sha)) return;
        var base = RAW_ROOT + sha + '/';
        Promise.all([
            fetch(base + 'friday-finance-data.js').then(function (r) { if (!r.ok) throw new Error('edition not found'); return r.text(); }),
            fetch(base + 'tenant-lender-data.js').then(function (r) { return r.ok ? r.text() : null; })
        ]).then(function (texts) {
            var Fd = evalDataFile(texts[0], 'FRIDAY_FINANCE');
            var Td = texts[1] ? evalDataFile(texts[1], 'TENANT_LENDER_NEWS') : { companies: [], alerts: [] };
            viewing = { F: Fd, T: Td, sha: sha, label: label || Fd.date };
            renderMasthead();
            renderFridayFinance();
            renderTenantLenderNews();
            showSection('friday-finance');
            try { history.replaceState(null, '', '?edition=' + sha); } catch (e) { /* ignore */ }
            window.scrollTo(0, 0);
        }).catch(function (e) {
            console.warn('[Shaw Report] could not load edition', sha, e);
            alert('Could not load that edition.');
        });
    }

    function restoreCurrent() {
        viewing = null;
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        try { history.replaceState(null, '', location.pathname); } catch (e) { /* ignore */ }
    }

})();
