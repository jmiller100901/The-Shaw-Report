# The Shaw Report

Weekly internal briefing for Jackson Shaw Company, published as a static
GitHub Pages site: https://jmiller100901.github.io/The-Shaw-Report/

Four tabs: **Friday Finance** (week in numbers, the week's big stories,
what to watch, live key rates, watchlist earnings calendar, live FRED
charts, weekend reading), **Stock Data** (live Finnhub quotes for a fixed
ticker set), **Tenant & Lender News** (alerts on the company's watchlist of
tenants, lenders and equity partners) and **Archive** (every past edition,
readable in place).

## Live data on the page

| What | Source | How |
|---|---|---|
| Key rates table | FRED | `scripts/build-rates.js` writes `data/rates.json`; `.github/workflows/rates.yml` runs it every weekday at 5:45 PM CT. FRED has no CORS, so the page cannot read it directly. |
| Week in numbers | Finnhub | ETF proxies (SPY, QQQ, IWM, VNQ, KRE, TLT, USO, GLD) with 5-day return, plus the 10-year from `rates.json`. |
| Stock table, ticker bar | Finnhub | Quotes and 52-week metrics. Requests are paced inside the free tier's 60-per-minute budget, so the table fills over about a minute. |
| Watchlist earnings | Finnhub | Earnings calendar for the public watchlist tickers, next five weeks. |
| Charts | FRED | `fredgraph.png` images, series and lookback set on the `<img>` tag. |
| Archive | GitHub | Lists commits to `friday-finance-data.js`, loads any edition from `raw.githubusercontent.com`. `?edition=<sha>` deep-links one. |

## How it updates

A Claude Code cloud routine (`shaw-report-friday-brief`) runs every Friday at
8:00 AM Central. It clones this repo, follows
[`.github/friday-brief-prompt.txt`](.github/friday-brief-prompt.txt),
rewrites the two data files, runs the validator, and pushes to `main`.
GitHub Pages redeploys on push.

Manage the routine at https://claude.ai/code/routines. There is no GitHub
Actions cron and no local scheduled task; the routine is the only writer.

## Files

| File | What it is |
|---|---|
| `friday-finance-data.js` | `FRIDAY_FINANCE` — date, quote, ticker bar, stories, watch list, reading links, rates, stock table fallbacks |
| `tenant-lender-data.js` | `TENANT_LENDER_NEWS` — watchlist, alerts, quiet list |
| `validate-data.js` | Content contract. `node validate-data.js` must pass before any commit. Holds the canonical watchlist and ticker set. |
| `index.html`, `app.js`, `styles.css` | The page. Only data files change week to week. |
| `.github/friday-brief-prompt.txt` | The routine's instructions. Edit this to change what gets written. |
| `.github/workflows/validate.yml` | CI: syntax-check and validate the data files on every push. |
| `.github/workflows/rates.yml`, `scripts/build-rates.js`, `data/rates.json` | Daily FRED refresh for the live rates table. |

## Content contract (enforced by the validator)

- 5 or 6 stories. Headline at most 14 words. Body 3 to 10 sentences of prose.
  Optional one or two sentence `jsc_angle`. One source, dated within 7 days.
- 3 to 6 dated `watch_next_week` items, at most 2 sentences each.
- 3 to 5 reading links, none from WSJ, FT, Bloomberg or Barron's.
- Four rates, formatted `4.250%`.
- Stock table categories and tickers exactly as `STOCK_TABLE`.
- Watchlist exactly as `WATCHLIST`. Alerts only for real news: headline at
  most 14 words, summary at most 5 sentences, relevance at most 2, dated
  within 75 days, ordered HIGH to GENERAL. Every watchlist name is in either
  `alerts` or `quiet`.

## Changing the watchlist or the stock table

1. Edit `WATCHLIST` or `STOCK_TABLE` in `validate-data.js`.
2. Make the matching change in the data file (`companies` or `stocks`).
3. Update the context paragraph in `.github/friday-brief-prompt.txt` if a
   name's deal or public parent changed.
4. `node validate-data.js`, commit, push.

## Local preview

```bash
npx http-server . -p 8080 -c-1
```

Then open http://localhost:8080. The `.claude/launch.json` entry
`shaw-report` does the same from Claude Code.
