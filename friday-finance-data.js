// Friday Finance — Week of November 20, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "November 20, 2026",
    date_short: "11.20.26",

    quote: {
        text: "Be fearful when others are greedy, and greedy when others are fearful.",
        author: "Warren Buffett"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC. Live Finnhub data overwrites on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,176",   change_pct: -2.02 },
        { symbol: "DJIA",  price: "49,097",  change_pct: -2.19 },
        { symbol: "IXIC",  price: "23,879",  change_pct: -2.25 },
        { symbol: "NVDA",  price: "—",       change_pct:  0.00 },
        { symbol: "GFF",   price: "—",       change_pct:  0.00 },
        { symbol: "HD",    price: "—",       change_pct:  0.00 },
        { symbol: "TGT",   price: "—",       change_pct:  0.00 },
        { symbol: "BX",    price: "—",       change_pct:  0.00 },
        { symbol: "FITB",  price: "—",       change_pct:  0.00 },
        { symbol: "PLD",   price: "—",       change_pct:  0.00 }
    ],

    stories: [
        {
            headline: "S&P 500 falls 2% as its losing streak reaches six sessions",
            body: "Stocks sold off hard on Thursday with almost no place to hide. The S&P 500 closed at <b>7,175.83</b>, down 2.02%. The Nasdaq fell 2.25% to <b>23,879.20</b> and the Dow lost 2.19% to <b>49,097.06</b>. Decliners beat advancers 464 to 38, and the S&P 500 finished below its 200-day average. The VIX volatility index jumped to <b>28.44</b> from 24.56. Consumer discretionary was the weakest sector, and even energy slipped. The selloff followed Fed minutes showing officials expect more rate hikes, with the 10-year Treasury yield above 5%.",
            jsc_angle: "Falling equity values and higher yields make lenders more cautious on new construction loans. Borrowers should expect tighter terms.",
            source: { name: "Dean FI", title: "Market Pulse, November 19, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-19/" },
            date: "2026-11-19"
        },
        {
            headline: "Fed minutes show officials expect more hikes, with December a near-lock",
            body: "Minutes of the Fed's October 27-28 meeting, released Wednesday, showed almost all officials expect further rate increases. The committee held at <b>3.75% to 4.00%</b> in a 10-2 vote, and the minutes called the decision a close call. Some officials wanted to hike in October. A couple said a move larger than a quarter point could be worth considering in December if inflation data disappoints. Many officials flagged the AI investment boom as a source of inflation risk. They also flagged AI-related debt as a financial stability concern. CME FedWatch futures fully price a quarter-point hike at the <b>December 8-9</b> meeting. Governor Waller said he favors a hike and would consider a half-point.",
            jsc_angle: "A December hike would lift SOFR and the cost of floating-rate construction debt. A larger move would hit harder.",
            source: { name: "StockAnalysis", title: "Fed minutes, October 2026", url: "https://stockanalysis.com/news/fed-minutes-october-2026/" },
            date: "2026-11-18"
        },
        {
            headline: "Nvidia posts record $115.8 billion quarter as CEO Huang resigns",
            body: "Nvidia reported revenue of <b>$115.8 billion</b> for the quarter ended October 25, up 103% from a year earlier. That beat the company's own forecast midpoint by $7.8 billion. Non-GAAP earnings were $2.68 a share. Nvidia guided to about <b>$130 billion</b> next quarter and again assumed no Data Center compute revenue from China. Shares rose only about 4% after hours and remain roughly 35% below their October 6 record close. Jensen Huang resigned as CEO and director, as announced November 12. CFO Colette Kress is interim CEO while the board searches for a permanent one.",
            jsc_angle: "AI data center demand keeps feeding Texas power and industrial construction, but Nvidia's muted reaction shows investors are wary of the AI trade.",
            source: { name: "Stock Titan", title: "Nvidia Q3 fiscal 2027 earnings, revenue and outlook", url: "https://www.stocktitan.net/articles/nvidia-q3-fiscal-2027-earnings-revenue-outlook" },
            date: "2026-11-17"
        },
        {
            headline: "Home Depot misses while Target and Lowe's beat in a mixed retail week",
            body: "Big retailers reported uneven third-quarter results. Home Depot missed on both earnings, by about <b>2.4%</b>, and revenue, by about 1.5%. Target beat earnings estimates by about <b>27%</b>, with revenue 0.9% above forecasts. Lowe's beat earnings by about 6.5%.. Mortgage rates have recently topped 7%, which keeps home sales soft.",
            jsc_angle: "Retail and housing demand feed logistics tenants' volumes. A soft home-improvement read is a mild caution for distribution users.",
            source: { name: "Dean FI", title: "Market Pulse, November 18, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-18/" },
            date: "2026-11-18"
        },
        {
            headline: "Griffon lifts its dividend 14% and adds $400 million to its buyback",
            body: "Griffon, the parent of garage door maker Clopay, reported fiscal fourth-quarter revenue of <b>$490.9 million</b>, up 3%. Price and mix added 6% while volume fell 3%. Adjusted EBITDA from continuing operations rose 4% to <b>$127.8 million</b>. The board raised the quarterly dividend 14% to $0.25 a share and added $400 million to the repurchase authorization. Griffon guided fiscal 2027 to about $1.85 billion of revenue and $460 million of adjusted EBITDA, both flat with fiscal 2026.",
            source: { name: "SEC EDGAR", title: "Griffon fourth quarter and fiscal 2026 results (8-K exhibit)", url: "https://www.sec.gov/Archives/edgar/data/0000050725/000162828026074359/gffearningsreleaseq42026ex.htm" },
            date: "2026-11-17"
        }
    ],

    watch_next_week: [
        { when: "Thu Nov 26", what: "<b>Thanksgiving.</b> U.S. markets are closed, and Friday trading ends early." },
        { when: "Tue Dec 8", what: "<b>FOMC meeting begins.</b> The decision comes December 9, and futures fully price a quarter-point hike." },
        { when: "Thu Dec 10", what: "<b>November CPI</b> at 8:30 a.m. ET, the last major inflation reading before the year ends." }
    ],

    reading_links: [
        {
            title: "Industrial absorption hits 83M SF, the strongest quarter since 2022",
            url: "https://www.credaily.com/?p=225272",
            source: "CRE Daily",
            description: "Colliers data shows vacancy at 7.2% and Dallas-Fort Worth leading the nation with 15.4 million square feet of absorption."
        },
        {
            title: "Research brief: November industrial markets",
            url: "https://www.marcusmillichap.com/research/research-brief/2026/11/research-brief-november-industrial-markets",
            source: "Marcus & Millichap",
            description: "National vacancy fell for the first time since 2022. Manufacturing leasing softened even as warehouse demand grew."
        },
        {
            title: "Fed minutes: higher interest rates needed in December as inflation worries mount",
            url: "https://www.adn.com/business-economy/2026/11/18/fed-minutes-higher-interest-rates-needed-in-december-as-inflation-worries-mount/",
            source: "Anchorage Daily News",
            description: "How the committee is split on a quarter-point versus half-point hike, and what individual officials said."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.922%", one_mo_ago: "3.885%", one_yr_ago: "4.091%" },
        "10-Year Treasury":   { current: "5.070%", one_mo_ago: "5.090%", one_yr_ago: "4.120%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "3.880%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.000%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7175.83, day_pct: -2.02, ytd_pct:  2.5,  high_52w: 7820.00,  vs_high: -8.2, low_52w: 5101.63,  vs_low: 40.7 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 49097.06, day_pct: -2.19, ytd_pct: -0.4,  high_52w: 54300.00, vs_high: -9.6, low_52w: 37830.66, vs_low: 29.8 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 23879.20, day_pct: -2.25, ytd_pct:  0.3,  high_52w: 27693.00, vs_high: -13.8, low_52w: 15685.33, vs_low: 52.2 }
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
            { company: "Amazon",                   ticker: "AMZN",  price: 250.00, day_pct: -2.19, ytd_pct:   5.8, high_52w: 273.07, vs_high: -10.0, low_52w: 165.29, vs_low:  48.7 },
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
