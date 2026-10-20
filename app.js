// ================================================================
// The Shaw Report — Application Logic
// ================================================================

(function () {
    'use strict';

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

    // ----------------------------------------------------------------
    // Live data cache  { ticker: { price, dayPct } }
    // ----------------------------------------------------------------
    var liveCache = {};
    var metricCache = {};
    var liveFetchDone = false;

    // ----------------------------------------------------------------
    // Init
    // ----------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        initNav();
        // Fetch live data immediately on every page load
        initLiveStockData();
    });

    // ----------------------------------------------------------------
    // Ticker Bar
    // ----------------------------------------------------------------
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !FRIDAY_FINANCE.ticker_bar) return;
        bar.innerHTML = FRIDAY_FINANCE.ticker_bar.map(function (t) {
            var live      = liveCache[t.symbol];
            var price     = live ? fmtTickerPrice(live.price) : t.price;
            var changePct = (live !== undefined) ? live.dayPct : t.change_pct;
            var up        = changePct >= 0;
            return '<a class="ticker-item" href="' + yahooUrl(t.symbol) + '" target="_blank" rel="noopener">' +
                '<span class="sym">' + t.symbol + '</span>' +
                '<span class="ticker-price">' + price + '</span>' +
                '<span class="pct ' + (up ? 'up' : 'down') + '">' +
                (up ? '\u25B2' : '\u25BC') + Math.abs(changePct).toFixed(1) + '%</span>' +
                '</a>';
        }).join('');
    }

    // ----------------------------------------------------------------
    // Masthead
    // ----------------------------------------------------------------
    function renderMasthead() {
        var el = document.getElementById('masthead-date');
        if (el) el.textContent = FRIDAY_FINANCE.date;
        var q   = FRIDAY_FINANCE.quote;
        var qEl = document.getElementById('masthead-quote');
        if (qEl && q) {
            qEl.innerHTML = '&ldquo;' + q.text + '&rdquo; &mdash; ' + q.author;
        }
    }

    // ----------------------------------------------------------------
    // Section Nav
    // ----------------------------------------------------------------
    function initNav() {
        var tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');
                var target = tab.getAttribute('data-section');
                document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active'); });
                var section = document.getElementById(target);
                if (section) section.classList.add('active');
            });
        });
    }


    // ----------------------------------------------------------------
    // Friday Finance Section
    // ----------------------------------------------------------------
    function renderFridayFinance() {
        var data = FRIDAY_FINANCE;

        // Stories — a few big pieces, prose, one source each
        var storiesEl = document.getElementById('ff-stories');
        if (storiesEl && data.stories) {
            storiesEl.innerHTML = data.stories.map(function (s, i) {
                var src = s.source || {};
                return '<article class="story">' +
                    '<div class="story-kicker"><span class="story-num">' + (i + 1) + '</span>' +
                    (s.date ? '<span class="story-date">' + fmtStoryDate(s.date) + '</span>' : '') + '</div>' +
                    '<h2 class="story-headline">' + s.headline + '</h2>' +
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
                watchEl.innerHTML = '<li class="watch-item"><span class="watch-what">' + w + '</span></li>';
            }
        }

        // Live FRED charts
        renderFredCharts();

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

        // Rates table
        var rateBody = document.getElementById('ff-rate-body');
        if (rateBody && data.rates) {
            var rateHtml = '';
            for (var name in data.rates) {
                var r = data.rates[name];
                rateHtml += '<tr><td>' + name + '</td><td>' + r.current +
                    '</td><td>' + r.one_mo_ago + '</td><td>' + r.one_yr_ago + '</td></tr>';
            }
            rateBody.innerHTML = rateHtml;
        }

        // Stock table — show loading state until live data arrives
        setStockStatus('<span class="loading-badge">&#8635; Loading live data&hellip;</span>');
        renderStockTable();
    }

    function fmtStoryDate(iso) {
        var d = new Date(iso + 'T00:00:00');
        if (isNaN(d)) return iso;
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    // ----------------------------------------------------------------
    // FRED charts — live PNGs from fred.stlouisfed.org, no API key.
    // Each card: <img data-fred-series="A,B" data-fred-years="N">
    // ----------------------------------------------------------------
    function renderFredCharts() {
        var imgs = document.querySelectorAll('img[data-fred-series]');
        imgs.forEach(function (img) {
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
    // Stock Table
    // ----------------------------------------------------------------
    function renderStockTable() {
        var data      = FRIDAY_FINANCE;
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
    // /quote → price, day%; /stock/metric → 52W high/low, YTD%
    // ----------------------------------------------------------------
    var FINNHUB_TOKEN = 'd7h5mkhr01qhiu0abuegd7h5mkhr01qhiu0abuf0';
    var FINNHUB_ROOT  = 'https://finnhub.io/api/v1/';

    function fetchFinnhubQuote(symbol) {
        var finnhubSym = INDEX_MAP[symbol] || symbol;
        var tok        = '&token=' + FINNHUB_TOKEN;
        var quoteUrl   = FINNHUB_ROOT + 'quote?symbol=' + encodeURIComponent(finnhubSym) + tok;

        return fetch(quoteUrl)
            .then(function (r) { return r.json(); })
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
        return fetch(url)
            .then(function (r) { return r.json(); })
            .then(function (d) {
                if (!d || !d.metric) throw new Error('No metric for ' + symbol);
                var m   = d.metric;
                var ytd = m['yearToDatePriceReturnDaily'] != null ? m['yearToDatePriceReturnDaily']
                        : m['ytdPriceReturnDaily'];
                return { ticker: symbol, high52w: m['52WeekHigh'], low52w: m['52WeekLow'], ytdPct: ytd };
            });
    }

    // Fetch 52W high/low + YTD in batches of 15 after quotes complete (rate-limit safe)
    function initLiveMetricData(symbols) {
        var BATCH = 15;
        function runBatch(start) {
            if (start >= symbols.length) return;
            var batch    = symbols.slice(start, start + BATCH);
            var promises = batch.map(function (sym) {
                return fetchFinnhubMetric(sym)
                    .then(function (d) { return { ok: true, value: d }; })
                    .catch(function ()  { return { ok: false }; });
            });
            Promise.all(promises).then(function (results) {
                var got = 0;
                results.forEach(function (r) {
                    if (r.ok) { metricCache[r.value.ticker] = r.value; got++; }
                });
                if (got > 0) renderStockTable();
                setTimeout(function () { runBatch(start + BATCH); }, 1000);
            });
        }
        runBatch(0);
    }

    function initLiveStockData() {
        var symbols = collectAllSymbols();

        setStockStatus('<span class="loading-badge">&#8635; Fetching live prices&hellip;</span>');

        var promises = symbols.map(function (sym) {
            return fetchFinnhubQuote(sym)
                .then(function (data) { return { status: 'fulfilled', value: data }; })
                .catch(function (err) { return { status: 'rejected', ticker: sym, reason: err }; });
        });

        Promise.all(promises)
            .then(function (results) {
                liveFetchDone = true;
                var success = 0;
                results.forEach(function (r) {
                    if (r.status === 'fulfilled') {
                        liveCache[r.value.ticker] = r.value;
                        success++;
                    }
                });

                if (success === 0) throw new Error('All requests failed');

                renderStockTable();
                renderTickerBar();
                var t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setStockStatus(
                    '<span class="live-badge">&#10003; Live data &bull; ' + success + '/' + symbols.length + ' symbols &bull; ' + t + '</span>' +
                    '&nbsp;&nbsp;<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Refresh</a>'
                );
                bindRefreshBtn();
                initLiveMetricData(symbols);
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
        // Include ticker bar symbols (skip indices — Finnhub free tier blocks them)
        if (FRIDAY_FINANCE.ticker_bar) {
            FRIDAY_FINANCE.ticker_bar.forEach(function (t) {
                if (!seen[t.symbol] && !isIndex(t.symbol)) { seen[t.symbol] = true; symbols.push(t.symbol); }
            });
        }
        // Include stock table symbols (skip indices)
        if (FRIDAY_FINANCE.stocks) {
            for (var cat in FRIDAY_FINANCE.stocks) {
                FRIDAY_FINANCE.stocks[cat].forEach(function (s) {
                    if (!seen[s.ticker] && !isIndex(s.ticker)) { seen[s.ticker] = true; symbols.push(s.ticker); }
                });
            }
        }
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
        HIGH:    { icon: '\uD83D\uDD34', desc: 'Bankruptcy \u00b7 Default \u00b7 Fraud \u00b7 Major Legal Action' },
        MEDIUM:  { icon: '\uD83D\uDFE0', desc: 'Downgrade \u00b7 C-Suite Exit \u00b7 Earnings Miss \u00b7 Regulatory' },
        LOW:     { icon: '\uD83D\uDFE1', desc: 'Minor Litigation \u00b7 Restructuring Warning \u00b7 Analyst Cuts' },
        GENERAL: { icon: '\u26AA',        desc: 'Neutral or Positive Developments' }
    };

    function renderTenantLenderNews() {
        if (!TENANT_LENDER_NEWS) return;
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
        var data     = TENANT_LENDER_NEWS;
        var alerts   = data.alerts || [];

        // Filter out alerts older than 60 days
        var cutoff = new Date();
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
                '<span class="tl-level-chevron">' + (col ? '\u25BC' : '\u25B2') + '</span>' +
                '</div></div>';

            if (!col) {
                html += '<div class="tl-level-body">';
                if (items.length === 0) {
                    html += '<div class="tl-empty">No ' + lvl.toLowerCase() + ' alerts this week</div>';
                } else {
                    items.forEach(function (a) {
                        html += '<div class="tl-alert">' +
                            '<div class="tl-alert-headline">' + a.headline + '</div>' +
                            '<div class="tl-alert-summary">' + a.summary + '</div>';
                        if (a.relevance) html += '<div class="tl-alert-relevance">' + a.relevance + '</div>';
                        html += '<div class="tl-alert-meta">' +
                            '<span class="tl-meta-tag">' + a.company + '</span>' +
                            '<span class="tl-meta-cat">' + a.cat + '</span>';
                        if (a.source) html += '<span class="tl-meta-source">' + a.source + '</span>';
                        if (a.date)   html += '<span class="tl-meta-source">\u00b7 ' + a.date + '</span>';
                        html += '</div></div>';
                    });
                }
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
        if (!el || !TENANT_LENDER_NEWS.companies) return;
        var companies = TENANT_LENDER_NEWS.companies;
        if (tlFilter !== 'All') companies = companies.filter(function (c) { return c.cat === tlFilter; });
        el.innerHTML = companies.map(function (co) {
            var catClass = 'cat-' + co.cat.replace(/\s+/g, '-');
            return '<div class="tl-watchlist-item">' +
                '<span class="name">' + co.name + '</span>' +
                '<span class="cat-tag ' + catClass + '">' + co.cat + '</span>' +
                '</div>';
        }).join('');
    }

})();
