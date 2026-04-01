// ================================================================
// Jackson Shaw Weekly Brief — Application Logic
// ================================================================

(function () {
    'use strict';

    // --- Init ---
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        initNav();
    });

    // --- Ticker Bar ---
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !FRIDAY_FINANCE.ticker_bar) return;

        var html = FRIDAY_FINANCE.ticker_bar.map(function (t) {
            var up = t.change_pct >= 0;
            var arrow = up ? '\u25B2' : '\u25BC';
            var cls = up ? 'up' : 'down';
            return '<span class="ticker-item">' +
                '<span class="sym">' + t.symbol + '</span> ' +
                t.price +
                ' <span class="pct ' + cls + '">' + arrow + Math.abs(t.change_pct).toFixed(1) + '%</span>' +
                '</span>';
        }).join('');

        bar.innerHTML = html;
    }

    // --- Masthead ---
    function renderMasthead() {
        var el = document.getElementById('masthead-date');
        if (el) el.textContent = FRIDAY_FINANCE.date;
    }

    // --- Section Nav ---
    function initNav() {
        var tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');

                var target = tab.getAttribute('data-section');
                document.querySelectorAll('.section').forEach(function (s) {
                    s.classList.remove('active');
                });
                var section = document.getElementById(target);
                if (section) section.classList.add('active');
            });
        });
    }

    // --- Friday Finance ---
    function renderFridayFinance() {
        var data = FRIDAY_FINANCE;

        // News bullets
        var bulletsEl = document.getElementById('ff-news-bullets');
        if (bulletsEl && data.news_bullets) {
            bulletsEl.innerHTML = data.news_bullets.map(function (b) {
                return '<div class="news-bullet">' + b + '</div>';
            }).join('');
        }

        // Watch text
        var watchEl = document.getElementById('ff-watch-text');
        if (watchEl) watchEl.textContent = data.watch_next_week || '';

        // Weekend reading
        var readingEl = document.getElementById('ff-weekend-reading');
        if (readingEl && data.wsj_articles) {
            readingEl.innerHTML = data.wsj_articles.map(function (a, i) {
                return '<div class="reading-item">' +
                    '<span class="reading-num">' + (i + 1) + '</span>' +
                    '<div class="reading-body">' +
                    '<a href="' + a.url + '" target="_blank" rel="noopener">' + a.title + '</a>' +
                    '<div class="reading-source">Wall Street Journal</div>' +
                    '</div></div>';
            }).join('');
        }

        // Rates
        var rateBody = document.getElementById('ff-rate-body');
        if (rateBody && data.rates) {
            var rateHtml = '';
            for (var name in data.rates) {
                var r = data.rates[name];
                rateHtml += '<tr>' +
                    '<td>' + name + '</td>' +
                    '<td>' + r.current + '</td>' +
                    '<td>' + r.one_mo_ago + '</td>' +
                    '<td>' + r.one_yr_ago + '</td>' +
                    '</tr>';
            }
            rateBody.innerHTML = rateHtml;
        }

        // Stock dateline
        var dateline = document.getElementById('ff-stock-dateline');
        if (dateline) dateline.textContent = 'Data as of market close, ' + data.date;

        // Stock table
        var stockBody = document.getElementById('ff-stock-body');
        if (stockBody && data.stocks) {
            var html = '';
            for (var cat in data.stocks) {
                html += '<tr class="cat-row"><td colspan="9">' + cat + '</td></tr>';
                data.stocks[cat].forEach(function (s) {
                    html += '<tr>' +
                        '<td class="company">' + s.company + '</td>' +
                        '<td class="ticker">' + s.ticker + '</td>' +
                        '<td class="num">' + fmtPrice(s.price) + '</td>' +
                        pctCell(s.day_pct) +
                        pctCell(s.ytd_pct) +
                        '<td class="num">' + fmtPrice(s.high_52w) + '</td>' +
                        pctCell(s.vs_high) +
                        '<td class="num">' + fmtPrice(s.low_52w) + '</td>' +
                        pctCell(s.vs_low) +
                        '</tr>';
                });
            }
            stockBody.innerHTML = html;
        }
    }

    // --- Tenant & Lender News ---
    function renderTenantLenderNews() {
        var container = document.getElementById('tl-content');
        if (!container || !TENANT_LENDER_NEWS) return;

        var data = TENANT_LENDER_NEWS;
        var html = '';

        if (data.sections) {
            data.sections.forEach(function (section) {
                html += '<div class="tl-section">';
                html += '<h3 class="tl-section-title">' + section.title + '</h3>';

                section.items.forEach(function (item) {
                    var sentimentClass = item.sentiment || 'neutral';
                    html += '<div class="tl-card">' +
                        '<div class="tl-card-header">' +
                        '<span class="tl-card-company">' + item.company + '</span>' +
                        '<span class="tl-card-tag ' + item.tag + ' ' + sentimentClass + '">' +
                        item.tag + ' &middot; ' + sentimentClass +
                        '</span>' +
                        '</div>' +
                        '<div class="tl-card-body">' + item.body + '</div>';

                    if (item.source) {
                        html += '<div class="tl-card-source">' + item.source;
                        if (item.url) {
                            html += ' &mdash; <a href="' + item.url + '" target="_blank" rel="noopener">Read more</a>';
                        }
                        html += '</div>';
                    }

                    html += '</div>';
                });

                html += '</div>';
            });
        }

        container.innerHTML = html;
    }

    // --- Helpers ---
    function fmtPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return '$' + val.toFixed(2);
    }

    function pctCell(val) {
        if (val == null) return '<td class="num"></td>';
        var cls = val >= 0 ? 'up' : 'down';
        var sign = val > 0 ? '+' : '';
        return '<td class="num ' + cls + '">' + sign + val.toFixed(1) + '%</td>';
    }

})();
