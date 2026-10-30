// Friday Finance — Week of October 30, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "October 30, 2026",
    date_short: "10.30.26",

    quote: {
        text: "Know what you own, and know why you own it.",
        author: "Peter Lynch"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC; the rest are the week's movers.
    // Live Finnhub data overwrites price/change on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,720",   change_pct: -0.30 },
        { symbol: "DJIA",  price: "52,348",  change_pct: -0.25 },
        { symbol: "IXIC",  price: "26,185",  change_pct: -1.38 },
        { symbol: "GOOGL", price: "288.00",  change_pct: -12.64 },
        { symbol: "MSFT",  price: "540.00",  change_pct:  2.61 },
        { symbol: "META",  price: "618.00",  change_pct:  1.00 },
        { symbol: "AMZN",  price: "250.00",  change_pct: -2.00 },
        { symbol: "IP",    price: "32.40",   change_pct:  0.00 },
        { symbol: "HIG",   price: "146.20",  change_pct:  0.00 },
        { symbol: "BUSE",  price: "27.80",   change_pct:  0.00 }
    ],

    // 3-6 big stories: finance, economics, geopolitics. Each body is prose,
    // 3-10 sentences. jsc_angle is one or two sentences on why it matters
    // to a Dallas industrial and hotel developer. One source per story.
    stories: [
        {
            headline: "Alphabet suffers its worst day ever as AI spending erases $500 billion",
            body: "Alphabet fell <b>12.6%</b> on Thursday, its worst session since it listed, and lost nearly <b>$500 billion</b> in market value. Revenue rose 25% to $127.6 billion and Google Cloud grew 103%. But capital spending hit <b>$51.3 billion</b> and free cash flow turned negative for a second straight quarter. Microsoft beat estimates and held up far better. The S&P 500 slipped 0.3% to <b>7,720</b>, the Dow lost 0.25% and the Nasdaq fell <b>1.4% to 26,185</b>. About 80% of S&P 500 stocks still closed higher, so the damage was concentrated in mega-cap tech. Amazon then fell after hours on a $220 billion capital spending plan and a $42.4 billion trailing free cash flow outflow.",
            jsc_angle: "The AI build-out is also what drives demand for data-center-adjacent industrial space in Texas, so investor doubts about spending returns are worth tracking.",
            source: { name: "Yahoo Finance", title: "Stock market today: Dow, S&P 500, Nasdaq slip as Alphabet stock sinks 12% and AI jitters return", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-29-dow-sp-500-nasdaq-alphabet-microsoft-earnings-130305714.html" },
            date: "2026-10-29"
        },
        {
            headline: "Fed holds at 3.75% to 4.00% with two dissents for a hike",
            body: "The Federal Open Market Committee voted <b>10 to 2</b> on Wednesday to keep the target range at <b>3.75% to 4.00%</b>. Governor Lisa Cook and Cleveland Fed President Beth Hammack dissented in favor of a quarter-point hike. The statement upgraded economic activity to growing at a strong pace and said inflation remains elevated. Futures price about an <b>85% chance</b> of a hike on December 9. The 10-year Treasury yield sat near <b>5.05%</b>. Chair Kevin Warsh also said the Fed will hold a strategy-focused meeting with no rate vote starting in 2027.",
            jsc_angle: "Floating-rate construction debt should keep repricing off a higher SOFR into year-end, and a 10-year yield above 5% keeps permanent loans expensive.",
            source: { name: "Federal Reserve", title: "Federal Reserve issues FOMC statement, October 28, 2026", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm" },
            date: "2026-10-28"
        },
        {
            headline: "Third-quarter GDP grows 3.4%, topping forecasts and the second quarter's 2.2%",
            body: "The Bureau of Economic Analysis reported on Thursday that real GDP grew at a <b>3.4% annual rate</b> in the third quarter. Growth was 2.2% in the second quarter. Reports on the release put business investment up <b>12.7%</b> and consumer spending up 3.8%. The strength is the reason the Fed sees room to keep tightening. The September jobs report showed payroll growth of only 29,000, so the economy is growing fast without adding many workers. The October jobs report arrives next Friday.",
            jsc_angle: "Strong growth supports demand from logistics and manufacturing tenants, but it also keeps rates higher for longer.",
            source: { name: "Bureau of Economic Analysis", title: "Gross Domestic Product", url: "https://www.bea.gov/data/gdp/gross-domestic-product" },
            date: "2026-10-29"
        },
        {
            headline: "Brent holds near $115 as Iran talks and midterm strike fears collide",
            body: "Brent settled at <b>$115.32</b> on Wednesday and slipped to about <b>$114</b> on Thursday. U.S. crude closed Wednesday at $102.78. The Wall Street Journal reported that Vice President JD Vance sent a letter to Iran's security chief to revive peace talks. It also reported that Washington warned Gulf states to prepare for a possible renewed U.S. military campaign after the <b>November 3</b> midterms. President Trump downplayed the letter. UBS expects Brent near $110 at year-end on tight inventories and high freight costs.",
            jsc_angle: "Diesel and freight costs hit logistics and manufacturing tenants, and the inflation they feed keeps floating-rate debt expensive.",
            source: { name: "The National", title: "Oil prices decline after diplomatic push in Iran war", url: "https://thenationalnews.com/business/energy/2026/10/29/oil-prices-decline-after-diplomatic-push-in-iran-war" },
            date: "2026-10-29"
        },
        {
            headline: "International Paper takes $1.38 billion impairment as EMEA spin-off nears",
            body: "International Paper reported a third-quarter loss from continuing operations of <b>$1.10 billion</b> on Wednesday. The driver was a <b>$1.38 billion</b> non-cash goodwill impairment on its European business. Net sales were flat at $6.20 billion and adjusted EBITDA was $843 million. North America operating profit rose to <b>$427 million</b> from $204 million in the second quarter. The company guided fourth-quarter North America profit to $460 million to $500 million. The European unit will be spun off as DS Smith plc, and a Capital Markets Day is set for November 3 in London.",
            jsc_angle: "The North America business is improving, which is the part that matters for a logistics tenant, but the restructuring is not finished.",
            source: { name: "SEC (International Paper 8-K)", title: "International Paper third-quarter 2026 earnings release", url: "https://www.sec.gov/Archives/edgar/data/0000051434/000005143426000147/nextgenip-20260930ex991.htm" },
            date: "2026-10-28"
        }
    ],

    // 3-6 dated items. Short.
    watch_next_week: [
        { when: "Tue Nov 3", what: "<b>U.S. midterm elections.</b> Oil markets are pricing in the risk of renewed strikes on Iran afterward." },
        { when: "Tue Nov 3", what: "<b>International Paper Capital Markets Day</b> in London, with details on the European spin-off." },
        { when: "Thu Nov 5", what: "<b>Live Nation Q3 earnings</b> after the close, with a call at 2 p.m. PT. Watch concert demand and cash flow." },
        { when: "Fri Nov 6", what: "<b>October jobs report</b> at 8:30 a.m. ET. September payrolls rose just 29,000, so the labor read matters for the December Fed decision." }
    ],

    // 3-5 non-paywalled links. No WSJ, FT, Bloomberg or Barron's.
    reading_links: [
        {
            title: "The full statement from the October 2026 FOMC rate decision",
            url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm",
            source: "Federal Reserve",
            description: "The primary text behind the week's biggest rates story, including the two dissents."
        },
        {
            title: "Multifamily CMBS delinquency rate leads overall rate higher in September",
            url: "https://yieldpro.com/2026/10/multifamily-cmbs-delinquency-rate-leads-overall-rate-higher-in-september/",
            source: "Yield PRO (Trepp)",
            description: "Overall CMBS delinquency hit 8.02%. Lodging rose to 6.18% while industrial held at 1.14%."
        },
        {
            title: "Oil prices decline after diplomatic push in Iran war",
            url: "https://thenationalnews.com/business/energy/2026/10/29/oil-prices-decline-after-diplomatic-push-in-iran-war",
            source: "The National",
            description: "How the Vance letter and the post-midterm strike warnings are moving Brent."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.897%", one_mo_ago: "3.739%", one_yr_ago: "4.204%" },
        "10-Year Treasury":   { current: "5.050%", one_mo_ago: "5.240%", one_yr_ago: "3.990%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "4.120%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.250%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7720.39, day_pct: -0.30, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -2.0, low_52w: 5101.63,  vs_low: 50.2 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52348.24, day_pct: -0.25, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -2.6, low_52w: 37830.66, vs_low: 39.7 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 26184.72, day_pct: -1.38, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -6.1, low_52w: 15685.33, vs_low: 65.8 }
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
            { company: "Amazon",                   ticker: "AMZN",  price: 250.00, day_pct: -2.00, ytd_pct:   5.8, high_52w: 273.07, vs_high: -10.0, low_52w: 165.29, vs_low:  48.7 },
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
