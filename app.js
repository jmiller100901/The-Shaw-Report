// ================================================================
// The Shaw Report — Application Logic
// ================================================================

(function () {
    'use strict';

    // ----------------------------------------------------------------
    // Yahoo Finance symbol mapping (indices use caret prefix)
    // ----------------------------------------------------------------
    var YAHOO_MAP = {
        'SPX':  '^GSPC',
        'DJIA': '^DJI',
        'DJI':  '^DJI',
        'IXIC': '^IXIC',
        'COMP': '^IXIC'
    };

    // Reverse map: Yahoo symbol → our ticker
    var YAHOO_REVERSE = {};
    Object.keys(YAHOO_MAP).forEach(function (k) {
        if (!YAHOO_REVERSE[YAHOO_MAP[k]]) YAHOO_REVERSE[YAHOO_MAP[k]] = k;
    });

    function yahooUrl(sym) {
        return 'https://finance.yahoo.com/quote/' + encodeURIComponent(YAHOO_MAP[sym] || sym);
    }

    // ----------------------------------------------------------------
    // Live data cache  { ticker: { price, dayPct, high52, low52, vsHigh, vsLow, ytdPct } }
    // ----------------------------------------------------------------
    var liveCache = {};
    var CORS_PROXY = 'https://corsproxy.io/?';

    // ----------------------------------------------------------------
    // Init
    // ----------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderFredChart();
        renderTenantLenderNews();
        initNav();
        // Fetch live data after initial paint
        setTimeout(initLiveStockData, 400);
    });

    // ----------------------------------------------------------------
    // Ticker Bar
    // ----------------------------------------------------------------
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !FRIDAY_FINANCE.ticker_bar) return;
        bar.innerHTML = FRIDAY_FINANCE.ticker_bar.map(function (t) {
            var live = liveCache[t.symbol];
            var price    = live ? fmtTickerPrice(live.price) : t.price;
            var changePct = (live !== undefined) ? live.dayPct : t.change_pct;
            var up = changePct >= 0;
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
    // FRED Chart (live static image + fallback)
    // ----------------------------------------------------------------
    function renderFredChart() {
        var img = document.getElementById('fred-chart-img');
        if (!img) return;
        var today     = new Date();
        var tenYrsAgo = new Date(today);
        tenYrsAgo.setFullYear(today.getFullYear() - 10);
        function fmt(d) { return d.toISOString().split('T')[0]; }
        img.src = 'https://fred.stlouisfed.org/graph/fredgraph.png' +
            '?id=DFF,DGS10,DGS2' +
            '&cosd=' + fmt(tenYrsAgo) + '&coed=' + fmt(today) +
            '&width=640&height=280&bgcolor=%23FFFFFF&graph_bgcolor=%23FFFFFF';
        img.onerror = function () { img.style.display = 'none'; };
    }

    // ----------------------------------------------------------------
    // Friday Finance Section
    // ----------------------------------------------------------------
    function renderFridayFinance() {
        var data = FRIDAY_FINANCE;

        // News bullets
        var bulletsEl = document.getElementById('ff-news-bullets');
        if (bulletsEl && data.news_bullets) {
            bulletsEl.innerHTML = data.news_bullets.map(function (b) {
                return '<li class="news-bullet">' + b + '</li>';
            }).join('');
        }

        // Watch next week (innerHTML for bold tags)
        var watchEl = document.getElementById('ff-watch-text');
        if (watchEl) watchEl.innerHTML = data.watch_next_week || '';

        // Weekend reading — supports reading_links (new) or wsj_articles (legacy)
        var articles = data.reading_links || data.wsj_articles || [];
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

        // Stock dateline — initial state with manual trigger
        setStockStatus(
            'Static data &bull; ' +
            '<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Fetch live prices</a>'
        );
        bindRefreshBtn();

        // Stock table — initial render from static data
        renderStockTable();
    }

    // ----------------------------------------------------------------
    // Stock Table
    // ----------------------------------------------------------------
    function renderStockTable() {
        var data = FRIDAY_FINANCE;
        var stockBody = document.getElementById('ff-stock-body');
        if (!stockBody || !data.stocks) return;

        var html = '';
        for (var cat in data.stocks) {
            html += '<tr class="cat-row"><td colspan="9">' + cat + '</td></tr>';
            data.stocks[cat].forEach(function (s) {
                var L     = liveCache[s.ticker];
                var price = L ? L.price  : s.price;
                var dayP  = L ? L.dayPct : s.day_pct;
                var ytdP  = (L && L.ytdPct != null) ? L.ytdPct : s.ytd_pct;
                var hi    = L ? L.high52 : s.high_52w;
                var vsH   = L ? L.vsHigh : s.vs_high;
                var lo    = L ? L.low52  : s.low_52w;
                var vsL   = L ? L.vsLow  : s.vs_low;
                var yurl  = yahooUrl(s.ticker);

                html += '<tr data-ticker="' + s.ticker + '">' +
                    '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                    '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                    '<td class="num">' + fmtPrice(price) + '</td>' +
                    pctCell(dayP) + pctCell(ytdP) +
                    '<td class="num">' + fmtPrice(hi) + '</td>' +
                    pctCell(vsH) +
                    '<td class="num">' + fmtPrice(lo) + '</td>' +
                    pctCell(vsL) +
                    '</tr>';
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
            liveCache = {};           // clear cache so we re-fetch everything
            initLiveStockData();
        });
    }

    // ----------------------------------------------------------------
    // Live Data — Phase 1: batch quotes (price, day%, 52w)
    //             Phase 2: sequential YTD via chart API
    // ----------------------------------------------------------------
    function initLiveStockData() {
        var symbols = collectAllSymbols();
        setStockStatus('<span class="loading-badge">&#8635; Fetching live prices&hellip;</span>');

        var batches = chunkArray(symbols, 20);

        Promise.all(batches.map(function (batch) {
            var yahooSyms = batch.map(function (s) { return YAHOO_MAP[s] || s; });
            return fetchQuoteBatch(yahooSyms);
        }))
        .then(function (batchResults) {
            // Populate cache from Phase 1
            batchResults.forEach(function (results) {
                if (!Array.isArray(results)) return;
                results.forEach(function (q) {
                    var ticker = YAHOO_REVERSE[q.symbol] || q.symbol;
                    liveCache[ticker] = {
                        price:  q.regularMarketPrice,
                        dayPct: q.regularMarketChangePercent,
                        high52: q.fiftyTwoWeekHigh,
                        low52:  q.fiftyTwoWeekLow,
                        vsHigh: (q.fiftyTwoWeekHighChangePercent || 0) * 100,
                        vsLow:  (q.fiftyTwoWeekLowChangePercent  || 0) * 100,
                        ytdPct: null   // filled in Phase 2
                    };
                });
            });

            // Refresh UI with live price / 52w data immediately
            renderStockTable();
            renderTickerBar();
            setStockStatus(
                '<span class="live-badge">&#10003; Price &amp; 52W Live</span>' +
                '&nbsp;&nbsp;<span class="loading-badge">&#8635; Loading YTD&hellip;</span>'
            );

            // Phase 2: YTD — sequential fetches at 120ms spacing
            return fetchYTDSequential(symbols);
        })
        .then(function () {
            renderStockTable();
            renderTickerBar();
            var t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setStockStatus(
                '<span class="live-badge">&#10003; All data live &bull; Updated ' + t + '</span>' +
                '&nbsp;&nbsp;<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Refresh</a>'
            );
            bindRefreshBtn();
        })
        .catch(function (err) {
            console.warn('[Shaw Report] Live data error:', err);
            setStockStatus(
                '<span class="error-badge">Live data unavailable</span>' +
                '&nbsp;&bull;&nbsp;Showing static data&nbsp;&nbsp;' +
                '<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Retry</a>'
            );
            bindRefreshBtn();
        });
    }

    // Batch quote fetch from Yahoo Finance v7
    function fetchQuoteBatch(yahooSymbols) {
        var fields = [
            'symbol',
            'regularMarketPrice',
            'regularMarketChangePercent',
            'fiftyTwoWeekHigh',
            'fiftyTwoWeekHighChangePercent',
            'fiftyTwoWeekLow',
            'fiftyTwoWeekLowChangePercent'
        ].join('%2C');

        var url = 'https://query1.finance.yahoo.com/v7/finance/quote?symbols=' +
            yahooSymbols.map(encodeURIComponent).join('%2C') +
            '&fields=' + fields;

        return fetchWithFallback(url).then(function (data) {
            return (data.quoteResponse && data.quoteResponse.result) || [];
        });
    }

    // Sequential YTD fetch — one ticker every 120ms to avoid rate limits
    function fetchYTDSequential(symbols) {
        return symbols.reduce(function (chain, sym, i) {
            return chain.then(function () {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        fetchYTDForSymbol(sym)
                            .then(function (ytd) {
                                if (ytd !== null && liveCache[sym]) {
                                    liveCache[sym].ytdPct = ytd;
                                }
                            })
                            .catch(function () {})
                            .then(resolve);
                    }, i * 120);
                });
            });
        }, Promise.resolve());
    }

    // YTD for a single symbol via Yahoo Finance v8 chart API
    // Uses meta.chartPreviousClose (= Dec 31 prior-year close) as the YTD baseline
    function fetchYTDForSymbol(sym) {
        var yahooSym = YAHOO_MAP[sym] || sym;
        var url = 'https://query1.finance.yahoo.com/v8/finance/chart/' +
            encodeURIComponent(yahooSym) + '?range=ytd&interval=1d';

        return fetchWithFallback(url).then(function (data) {
            var result = data.chart && data.chart.result && data.chart.result[0];
            if (!result) return null;

            // Prefer chartPreviousClose (Dec 31 baseline); fall back to first data point
            var startPrice = result.meta.chartPreviousClose;
            if (!startPrice) {
                var closes = result.indicators.quote[0].close;
                for (var i = 0; i < closes.length; i++) {
                    if (closes[i] !== null) { startPrice = closes[i]; break; }
                }
            }
            var currentPrice = result.meta.regularMarketPrice;
            if (!startPrice || !currentPrice) return null;
            return ((currentPrice / startPrice) - 1) * 100;
        }).catch(function () { return null; });
    }

    // Fetch with direct attempt first, CORS proxy fallback second
    function fetchWithFallback(url) {
        return fetch(url)
            .then(function (r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.json();
            })
            .catch(function () {
                return fetch(CORS_PROXY + encodeURIComponent(url))
                    .then(function (r) { return r.json(); });
            });
    }

    // ----------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------
    function collectAllSymbols() {
        var symbols = [], seen = {};
        if (!FRIDAY_FINANCE.stocks) return symbols;
        for (var cat in FRIDAY_FINANCE.stocks) {
            FRIDAY_FINANCE.stocks[cat].forEach(function (s) {
                if (!seen[s.ticker]) { seen[s.ticker] = true; symbols.push(s.ticker); }
            });
        }
        return symbols;
    }

    function chunkArray(arr, size) {
        var out = [];
        for (var i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
        return out;
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

    function renderTLContent() {
        var data    = TENANT_LENDER_NEWS;
        var alerts  = data.alerts || [];
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
        LEVELS.forEach(function (lvl) {
            var items = byLevel[lvl];
            if (lvl === 'GENERAL' && items.length === 0) return;
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
