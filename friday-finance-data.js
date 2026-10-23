// Friday Finance — Week of October 23, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "October 23, 2026",
    date_short: "10.23.26",

    quote: {
        text: "The big money is not in the buying and selling, but in the waiting.",
        author: "Charlie Munger"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC; the rest are the week's movers.
    // Live Finnhub data overwrites price/change on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,663",   change_pct: -1.21 },
        { symbol: "DJIA",  price: "52,868",  change_pct:  0.02 },
        { symbol: "IXIC",  price: "26,009",  change_pct: -2.60 },
        { symbol: "BX",    price: "116.53",  change_pct:  6.00 },
        { symbol: "SFNC",  price: "22.26",   change_pct:  0.09 },
        { symbol: "JPM",   price: "236.80",  change_pct: -2.10 },
        { symbol: "WFC",   price: "62.50",   change_pct: -0.48 },
        { symbol: "NVDA",  price: "202.80",  change_pct: -5.02 },
        { symbol: "XOM",   price: "159.20",  change_pct: -0.82 },
        { symbol: "GS",    price: "570.40",  change_pct:  1.18 },
        { symbol: "HBAN",  price: "16.10",   change_pct: -0.62 },
        { symbol: "IP",    price: "32.40",   change_pct: -1.22 }
    ],

    // 3-6 big stories: finance, economics, geopolitics. Each body is prose,
    // 3-10 sentences. jsc_angle is one or two sentences on why it matters
    // to a Dallas industrial and hotel developer. One source per story.
    stories: [
        {
            headline: "AI spending worries hit tech: Nasdaq falls 2.6% and Meta drops 7%",
            body: "The Nasdaq fell <b>2.6% to 26,009</b> on Thursday, its worst session since June. The S&P 500 lost <b>1.2% to 7,663</b>, while the Dow finished flat at 52,868. Meta fell nearly 7% after earnings and a 2-for-1 stock split announcement. Lam Research warned of supply constraints and a CoreWeave downgrade added to the pressure on AI names. Investors moved into bonds, and the 10-year Treasury yield fell 11 basis points to <b>5.02%</b>. Weekly jobless claims fell to 194,000, a three-month low. Alphabet, Microsoft and Amazon report next, and investors want to see whether AI spending is paying off.",
            jsc_angle: "A tech-led sell-off does not by itself close the credit window for industrial construction loans, but a 10-year yield near 5% keeps permanent financing expensive.",
            source: { name: "Yahoo Finance", title: "Stock market today: S&P 500, Nasdaq tank as tech sinks amid AI trade worries, Meta plummets", url: "https://finance.yahoo.com/markets/article/stock-market-today-thursday-october-22-dow-sp-500-nasdaq-tesla-meta-112217857.html" },
            date: "2026-10-22"
        },
        {
            headline: "Oil climbs to a five-month high as Iran war risk builds",
            body: "Brent crude traded above <b>$111 a barrel</b> on Thursday and U.S. crude neared <b>$100</b>, the highest since May. Attacks on a Saudi airport and oil field added to supply fears. Reports that the U.S. and Israel are preparing new strikes on Iran after the November 3 midterm elections added a further risk premium. Energy is already the main driver of U.S. inflation. September CPI showed energy prices up <b>20.4%</b> from a year earlier and gasoline up 34.2%.",
            jsc_angle: "Fuel and freight costs squeeze logistics and manufacturing tenants, and the inflation they feed keeps floating-rate debt expensive.",
            source: { name: "Yahoo Finance", title: "Stock market today: oil surges to a five-month high as AI trade worries hit tech", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-22-dow-sp-500-nasdaq-tesla-meta-112217857.html" },
            date: "2026-10-22"
        },
        {
            headline: "Economists expect an October Fed hold and a December hike",
            body: "In a Reuters poll of 100 economists taken October 16-20, <b>94 expect a hold</b> at the October 27-28 FOMC meeting. All 100 expect a quarter-point hike in December, up from fewer than half in the prior poll. The Fed raised its target range to <b>3.75% to 4.00%</b> in September, its first hike since 2023. Nearly 60% see the policy rate peaking at 4.00% to 4.25%, and 38 of 92 expect at least two more hikes. Inflation is not expected to return to the 2% target until at least 2028.",
            jsc_angle: "Floating-rate construction debt should price off a higher SOFR through year-end, since a December hike is now the consensus.",
            source: { name: "Reuters via AOL", title: "Fed to skip October but raise rates again in December, nearly all economists say", url: "https://www.aol.com/articles/fed-skip-october-raise-rates-124314000.html" },
            date: "2026-10-20"
        },
        {
            headline: "Blackstone jumps 6% as inflows hit $63 billion despite weaker profit",
            body: "Blackstone shares rose about <b>6%</b> on Thursday even as the broader market fell. Distributable earnings were <b>$1.32 per share</b>, above the $1.26 consensus but down from $1.52 a year earlier. Inflows reached <b>$63.3 billion</b> in the quarter. Net realizations fell 34% to $332 million as the firm sold fewer assets. Revenue of $3.06 billion came in below estimates. The market rewarded the fundraising rather than the asset sales.",
            jsc_angle: "Heavy inflows to the largest private capital manager show equity is still available for real assets, even while asset sales stay slow.",
            source: { name: "Yahoo Finance", title: "Blackstone soars 6% on earnings beat as Schwarzman says inflows reached $63 billion", url: "https://finance.yahoo.com/markets/stocks/articles/blackstone-soars-6-earnings-beat-165213049.html" },
            date: "2026-10-22"
        },
        {
            headline: "Huntington and Pinnacle report: net charge-offs edge up, margins split",
            body: "Pinnacle reported third-quarter results on October 21 with net income of <b>$364 million</b> to common shareholders and adjusted EPS of $2.69. Its net interest margin slipped 4 basis points to 3.40% on higher deposit costs. Huntington reported on Thursday with adjusted EPS of <b>$0.38</b>, down a cent from the second quarter. Its margin rose 4 basis points to 3.25%. Huntington's net charge-offs rose to <b>0.31%</b> of loans from 0.25% last quarter, and average commercial real estate loans fell 4% to $23.1 billion. Pinnacle's charge-off ratio was 0.23%.",
            jsc_angle: "Two of the company's lenders show stable credit but cautious commercial real estate growth, a reminder that construction loan terms will stay disciplined.",
            source: { name: "SEC (Huntington 8-K)", title: "Huntington Bancshares third-quarter 2026 earnings release", url: "https://www.sec.gov/Archives/edgar/data/0000049196/000004919626000084/hban20260930_8kex991.htm" },
            date: "2026-10-22"
        }
    ],

    // 3-6 dated items. Short.
    watch_next_week: [
        { when: "Mon Oct 26", what: "<b>The Hartford Q3 earnings</b> after the close, with a webcast Tuesday at 9 a.m. ET. Watch commercial underwriting and investment income." },
        { when: "Tue-Wed Oct 27-28", what: "<b>FOMC meeting.</b> A hold is the consensus, so the statement language on December is the real event." },
        { when: "Wed Oct 28", what: "<b>International Paper Q3 earnings</b> before the NYSE opens, with a webcast at 10 a.m. ET. Watch for any new facility closures." },
        { when: "Tue Nov 3", what: "<b>U.S. midterm elections.</b> Oil markets are pricing in the risk of renewed strikes on Iran afterward." }
    ],

    // 3-5 non-paywalled links. No WSJ, FT, Bloomberg or Barron's.
    reading_links: [
        {
            title: "Fed chair Warsh says price stability is key but shies away from signals about rates",
            url: "https://www.pbs.org/newshour/economy/fed-chair-warsh-says-price-stability-is-key-but-shies-away-from-signals-about-rates",
            source: "AP via PBS NewsHour",
            description: "Warsh in Bangkok on inflation, AI investment and why he will not prejudge the October and December meetings."
        },
        {
            title: "September CPI: inflation trended higher as energy prices hit consumers",
            url: "https://foxbusiness.com/economy/cpi-inflation-september-2026",
            source: "Fox Business",
            description: "Headline CPI of 3.7% and core of 2.6%, with gasoline up 34.2% from a year ago."
        },
        {
            title: "Dallas/Fort Worth Industrial MarketBeat, Q3 2026",
            url: "https://www.cushmanwakefield.com/en/united-states/insights/us-marketbeats/dallas-ft-worth-marketbeats/industrial",
            source: "Cushman & Wakefield",
            description: "Vacancy fell to 7.3%, the lowest since Q3 2023, and asking rents hit a record $9.76 per square foot NNN."
        },
        {
            title: "Adjusted quarterly net income, revenue rise at Simmons First",
            url: "https://talkbusiness.net/2026/10/adjusted-quarterly-net-income-revenue-rise-at-simmons-first/",
            source: "Talk Business & Politics",
            description: "Third-quarter results for a regional lender, including the cost of its 26-branch closure plan."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.888%", one_mo_ago: "3.683%", one_yr_ago: "4.180%" },
        "10-Year Treasury":   { current: "5.130%", one_mo_ago: "4.960%", one_yr_ago: "3.980%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "4.110%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.250%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7663.43, day_pct: -1.21, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -2.0, low_52w: 5101.63,  vs_low: 50.2 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52867.98, day_pct: 0.02, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -2.6, low_52w: 37830.66, vs_low: 39.7 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 26008.86, day_pct: -2.6, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -6.1, low_52w: 15685.33, vs_low: 65.8 }
        ],
        "Industrial REITs": [
            { company: "Prologis",             ticker: "PLD",  price: 131.20, day_pct:  0.20, ytd_pct:   1.8, high_52w: 151.00, vs_high: -13.1, low_52w: 103.02, vs_low: 27.4 },
            { company: "Rexford Industrial",   ticker: "REXR", price: 35.30,  day_pct:  0.43, ytd_pct:  -7.6, high_52w: 44.38,  vs_high: -20.5, low_52w: 29.68,  vs_low: 18.9 },
            { company: "EastGroup Properties", ticker: "EGP",  price: 199.80, day_pct:  0.31, ytd_pct:  11.1, high_52w: 210.10, vs_high:  -4.9, low_52w: 143.20, vs_low: 39.5 },
            { company: "First Industrial",     ticker: "FR",   price: 62.50,  day_pct:  0.26, ytd_pct:   9.7, high_52w: 64.50,  vs_high:  -3.1, low_52w: 42.80,  vs_low: 46.0 },
            { company: "Plymouth Industrial",  ticker: "PLYM", price: 20.55,  day_pct:  0.25, ytd_pct:  -6.1, high_52w: 24.50,  vs_high: -16.1, low_52w: 18.20,  vs_low: 12.9 },
            { company: "Terreno Realty",       ticker: "TRNO", price: 68.80,  day_pct:  0.22, ytd_pct:   9.5, high_52w: 71.30,  vs_high:  -3.5, low_52w: 48.10,  vs_low: 43.0 },
            { company: "Stag Industrial",      ticker: "STAG", price: 36.90,  day_pct:  0.22, ytd_pct:  -0.5, high_52w: 40.10,  vs_high:  -8.0, low_52w: 31.20,  vs_low: 18.3 },
            { company: "Americold Realty",     ticker: "COLD", price: 21.20,  day_pct:  0.24, ytd_pct: -12.9, high_52w: 28.50,  vs_high: -25.6, low_52w: 19.80,  vs_low:  7.1 },
            { company: "LXP Industrial",       ticker: "LXP",  price: 7.98,   day_pct:  0.26, ytd_pct: -13.7, high_52w: 10.50,  vs_high: -24.0, low_52w: 7.20,   vs_low: 10.8 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 22.40,  day_pct:  0.22, ytd_pct:  15.0, high_52w: 23.70,  vs_high:  -5.5, low_52w: 14.46, vs_low: 55.0 },
            { company: "Apple Hospitality REIT",  ticker: "APLE", price: 10.65,  day_pct:  0.19, ytd_pct: -19.3, high_52w: 14.80,  vs_high: -28.0, low_52w: 10.40, vs_low:  2.4 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 9.70,   day_pct:  0.21, ytd_pct: -21.3, high_52w: 14.10,  vs_high: -31.2, low_52w: 9.60,  vs_low:  1.0 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 9.55,   day_pct:  0.21, ytd_pct: -25.6, high_52w: 14.50,  vs_high: -34.1, low_52w: 7.41,  vs_low: 28.9 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 8.35,   day_pct:  0.18, ytd_pct: -16.1, high_52w: 12.27,  vs_high: -32.0, low_52w: 7.45,  vs_low: 12.1 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 6.35,   day_pct:  0.16, ytd_pct: -24.2, high_52w: 9.80,   vs_high: -35.2, low_52w: 6.16,  vs_low:  3.1 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 7.02,   day_pct:  0.14, ytd_pct: -28.8, high_52w: 10.67,  vs_high: -34.2, low_52w: 6.16,  vs_low: 13.9 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 4.95,   day_pct:  0.10, ytd_pct: -18.9, high_52w: 6.00,   vs_high: -17.5, low_52w: 3.57,  vs_low: 38.7 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 105.30, day_pct:  0.24, ytd_pct:   2.4, high_52w: 118.00, vs_high: -10.8, low_52w: 80.20, vs_low: 31.3 }
        ],
        "Lenders": [
            { company: "Blackstone",                  ticker: "BX",   price: 116.53, day_pct: 6.0, ytd_pct: -16.8, high_52w: 190.09, vs_high: -38.7, low_52w: 101.73, vs_low: 14.5 },
            { company: "Fifth Third Bancorp",         ticker: "FITB", price: 52.80,  day_pct:  1.37, ytd_pct:  12.1, high_52w: 59.80,  vs_high: -11.7, low_52w: 31.20,  vs_low: 69.2 },
            { company: "Huntington Bancshares",       ticker: "HBAN", price: 16.10,  day_pct:  0.87, ytd_pct:  -4.2, high_52w: 19.50,  vs_high: -17.4, low_52w: 11.91,  vs_low: 35.2 },
            { company: "BancFirst",                   ticker: "BANF", price: 114.20, day_pct:  0.27, ytd_pct:  -2.9, high_52w: 138.77, vs_high: -17.7, low_52w: 97.02,  vs_low: 17.7 },
            { company: "First Busey",                 ticker: "BUSE", price: 27.80,  day_pct:  0.18, ytd_pct:   3.8, high_52w: 28.60,  vs_high:  -2.8, low_52w: 18.40,  vs_low: 51.1 },
            { company: "Simmons First National",      ticker: "SFNC", price: 22.26, day_pct: 0.09, ytd_pct:   0.0, high_52w: 26.00,  vs_high: -14.4, low_52w: 17.00,  vs_low: 30.9 },
            { company: "Pinnacle Financial Partners", ticker: "PNFP", price: 93.90,  day_pct:  0.00, ytd_pct:   0.0, high_52w: 130.00, vs_high: -27.8, low_52w: 85.00,  vs_low: 10.5 },
            { company: "The Hartford",                ticker: "HIG",  price: 146.20, day_pct:  0.28, ytd_pct:  14.7, high_52w: 146.20, vs_high:   0.0, low_52w: 119.61, vs_low: 22.2 }
        ],
        "Industry-related companies": [
            { company: "Amazon",                   ticker: "AMZN",  price: 245.80, day_pct: -0.62, ytd_pct:   5.8, high_52w: 273.07, vs_high: -10.0, low_52w: 165.29, vs_low:  48.7 },
            { company: "United Parcel Service",    ticker: "UPS",   price: 98.20,  day_pct:  0.10, ytd_pct: -11.3, high_52w: 122.41, vs_high: -19.8, low_52w: 82.00,  vs_low:  19.8 },
            { company: "FedEx Corporation",        ticker: "FDX",   price: 318.40, day_pct:  0.15, ytd_pct: -14.4, high_52w: 404.03, vs_high: -21.2, low_52w: 194.30, vs_low:  63.9 },
            { company: "Target Corporation",       ticker: "TGT",   price: 162.50, day_pct:  0.19, ytd_pct:  54.9, high_52w: 162.50, vs_high:   0.0, low_52w: 83.44,  vs_low:  94.8 },
            { company: "GXO Logistics",            ticker: "GXO",   price: 50.60,  day_pct:  0.20, ytd_pct:   1.6, high_52w: 66.85,  vs_high: -24.3, low_52w: 30.46,  vs_low:  66.1 },
            { company: "Marriott International",   ticker: "MAR",   price: 398.30, day_pct:  0.23, ytd_pct:  24.5, high_52w: 398.30, vs_high:   0.0, low_52w: 205.40, vs_low:  93.9 },
            { company: "Hilton Worldwide",         ticker: "HLT",   price: 326.80, day_pct:  0.20, ytd_pct:   3.6, high_52w: 340.00, vs_high:  -3.9, low_52w: 201.15, vs_low:  62.5 },
            { company: "American Airlines",        ticker: "AAL",   price: 16.30,  day_pct: -1.20, ytd_pct:  23.9, high_52w: 16.90,  vs_high:  -3.6, low_52w: 8.92,   vs_low:  82.7 },
            { company: "Southwest Airlines",       ticker: "LUV",   price: 45.80,  day_pct: -1.07, ytd_pct:  15.6, high_52w: 55.11,  vs_high: -16.9, low_52w: 23.82,  vs_low:  92.3 },
            { company: "Las Vegas Sands",          ticker: "LVS",   price: 50.90,  day_pct:  0.20, ytd_pct:  -8.2, high_52w: 70.45,  vs_high: -27.7, low_52w: 30.18,  vs_low:  68.7 },
            { company: "TSMC",                     ticker: "TSM",   price: 378.40, day_pct: -0.95, ytd_pct:   6.5, high_52w: 421.97, vs_high: -10.4, low_52w: 190.03, vs_low:  99.2 },
            { company: "Delta Air Lines",          ticker: "DAL",   price: 91.80,  day_pct: -0.65, ytd_pct:  34.0, high_52w: 92.10,  vs_high:  -0.3, low_52w: 36.56,  vs_low: 151.1 },
            { company: "Ferguson Enterprises",     ticker: "FERG",  price: 238.20, day_pct:  0.21, ytd_pct:   1.4, high_52w: 271.64, vs_high: -12.3, low_52w: 146.00, vs_low:  63.2 },
            { company: "International Paper",      ticker: "IP",    price: 32.40,  day_pct: -1.22, ytd_pct: -36.1, high_52w: 56.13,  vs_high: -42.3, low_52w: 29.45,  vs_low:  10.0 },
            { company: "Tandy Leather Factory",    ticker: "TLF",   price: 4.55,   day_pct:  0.00, ytd_pct:  -7.2, high_52w: 6.10,   vs_high: -25.4, low_52w: 4.10,   vs_low:  10.9 },
            { company: "Griffon (Clopay)",         ticker: "GFF",   price: 92.66,  day_pct:  0.00, ytd_pct:   0.0, high_52w: 100.00, vs_high:  -7.3, low_52w: 60.00,  vs_low:  54.4 },
            { company: "Live Nation (C3 Presents)", ticker: "LYV",  price: 170.80, day_pct:  0.00, ytd_pct:   0.0, high_52w: 180.00, vs_high:  -5.1, low_52w: 120.00, vs_low:  42.3 },
            { company: "Kuehne + Nagel (ADR)",     ticker: "KHNGY", price: 56.01,  day_pct:  0.00, ytd_pct:   0.0, high_52w: 62.00,  vs_high:  -9.7, low_52w: 44.00,  vs_low:  27.3 },
            { company: "Dai Nippon Printing (ADR)", ticker: "DNPLY", price: 8.74,  day_pct:  0.00, ytd_pct:   0.0, high_52w: 10.00,  vs_high: -12.6, low_52w: 6.50,   vs_low:  34.5 }
        ]
    }
};
