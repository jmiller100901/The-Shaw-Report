// Friday Finance — Week of November 13, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "November 13, 2026",
    date_short: "11.13.26",

    quote: {
        text: "The investor's chief problem, and even his worst enemy, is likely to be himself.",
        author: "Benjamin Graham"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC. Live Finnhub data overwrites on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,592",   change_pct: -0.35 },
        { symbol: "DJIA",  price: "52,297",  change_pct: -0.36 },
        { symbol: "IXIC",  price: "25,366",  change_pct: -0.39 },
        { symbol: "AAPL",  price: "355.63",  change_pct:  2.00 },
        { symbol: "BX",    price: "—",       change_pct:  0.00 },
        { symbol: "HIG",   price: "—",       change_pct:  0.00 },
        { symbol: "FITB",  price: "—",       change_pct:  0.00 },
        { symbol: "PLD",   price: "—",       change_pct:  0.00 },
        { symbol: "IP",    price: "—",       change_pct:  0.00 },
        { symbol: "LYV",   price: "—",       change_pct:  0.00 }
    ],

    stories: [
        {
            headline: "Stocks climb for the week, with the S&P 500 up about 2.9%",
            body: "Wall Street ended a choppy week higher despite a small pullback on Thursday. The S&P 500 closed at <b>7,592.40</b>, down 0.35% on the day. The Nasdaq Composite finished at <b>25,366.09</b>, down 0.39%, and the Dow at <b>52,297.09</b>, down 0.36%. Since the November 6 close, that works out to gains of about 2.9% for the S&P 500, 3.2% for the Nasdaq and 2.0% for the Dow. Small caps lagged, with the Russell 2000 down 1.66% on Thursday. Energy led the sectors while materials and industrials fell. Cisco beat earnings estimates and said its AI infrastructure revenue will double this fiscal year.",
            jsc_angle: "Industrial stocks slipped even as the broad market rose. Equity strength has not lowered borrowing costs, because floating-rate debt still follows the Fed.",
            source: { name: "Dean FI", title: "Market Pulse, November 12, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-12/" },
            date: "2026-11-12"
        },
        {
            headline: "October CPI rises 0.4%, hotter than forecast, with no annual rate published",
            body: "Consumer prices rose <b>0.4%</b> in October, above the 0.3% forecast, after a 0.6% gain in September. Core prices, which exclude food and energy, rose <b>0.3%</b>. That beat the 0.2% forecast and matched the pace of August and September. Energy rose 0.7%, food rose 0.5% and shelter rose 0.3%. The Bureau of Labor Statistics did not publish a 12-month rate for most series, because the 2025 government shutdown left October 2025 prices uncollected. The last official annual rate was <b>3.7%</b> in September. The November report is due December 10.",
            jsc_angle: "Sticky inflation keeps a December rate hike on the table, which would lift the cost of SOFR-based construction loans.",
            source: { name: "Bureau of Labor Statistics", title: "Consumer Price Index news release, October 2026", url: "https://www.bls.gov/news.release/cpi.htm" },
            date: "2026-11-10"
        },
        {
            headline: "Fed's Waller leans toward a December hike and floats a half-point move",
            body: "Fed Governor Christopher Waller said Tuesday in London that he leans toward a quarter-point rate hike at the <b>December 8-9</b> meeting. He said a half-point increase should be considered if core CPI keeps rising about 0.3% a month. He argued that a 25 basis point move alone would put the Fed's credibility at risk. The Fed held its target range at <b>3.75% to 4.00%</b> on October 28 in a 10-2 vote. Governor Lisa Cook and Cleveland Fed President Beth Hammack dissented in favor of a hike. After the jobs report, CME FedWatch put the odds of a December hike near <b>77%</b>.",
            jsc_angle: "A hike would raise SOFR and the cost of floating-rate construction debt. A half-point move would be a bigger step than many borrowers have planned for.",
            source: { name: "StockAnalysis", title: "Fed's Waller favors a December rate hike, welcomes a half-point increase if inflation runs hot", url: "https://stockanalysis.com/news/fed-waller-december-rate-hike-half-point/" },
            date: "2026-11-10"
        },
        {
            headline: "Brent heads for a second weekly drop near $96 on Iran standoff",
            body: "Oil is set for a second straight weekly decline. Brent traded near <b>$96.21</b> and WTI near <b>$88.62</b> on Friday, both down about 2% for the week. Last week Brent fell 16%. President Trump said a deal with Iran is not needed to end the war, which suggested more reliance on the blockade and sanctions than on military action. Iran said four tankers were hit by explosions in the Strait of Hormuz, and Yemen's Houthis attacked Saudi oil infrastructure. U.S. crude and fuel inventories rose last week as demand weakened. Analyst Jeff Currie called the market roughly balanced.",
            jsc_angle: "Lower diesel costs help logistics and manufacturing tenants. Hormuz headlines can reverse the move quickly.",
            source: { name: "Reuters via Business Recorder", title: "Oil prices set for second weekly decline as Trump sticks with Iran blockade", url: "https://www.brecorder.com/news/40448723/oil-prices-set-for-second-weekly-decline-as-trump-sticks-with-iran-blockade" },
            date: "2026-11-13"
        },
        {
            headline: "Employers add 165,000 jobs in October, far above forecasts",
            body: "Payrolls rose <b>165,000</b> in October against a forecast of about 65,000. Revisions added 84,000 jobs to August and September. The unemployment rate fell to <b>4.1%</b>. Average hourly earnings rose 0.4% for the month and 3.1% from a year earlier. The report lifted the odds of a December Fed hike, with CME FedWatch at 76.8% versus 66.9% a week earlier.",
            jsc_angle: "A strong labor market supports tenant demand but also keeps the Fed on a hiking path.",
            source: { name: "Fox Business", title: "US economy adds 165,000 jobs in October, blowing past expectations", url: "https://foxbusiness.com/economy/us-jobs-report-october-2026" },
            date: "2026-11-06"
        }
    ],

    watch_next_week: [
        { when: "Wed Nov 18", what: "<b>Fed minutes</b> from the October 27-28 meeting, due at 2:00 p.m. ET. Watch how many officials back a December hike." },
        { when: "Late Nov", what: "<b>Griffon fiscal fourth-quarter results.</b> The parent of Clopay reported last year on November 19, and this year's date has not been announced." },
        { when: "Wed Dec 9", what: "<b>FOMC decision.</b> The two-day meeting starts December 8, and a quarter-point or half-point hike is in play." },
        { when: "Thu Dec 10", what: "<b>November CPI</b> at 8:30 a.m. ET, the last major inflation reading before the year ends." }
    ],

    reading_links: [
        {
            title: "Dallas-Fort Worth industrial figures, Q3 2026",
            url: "https://www.cbre.com/insights/figures/dallas-fort-worth-industrial-figures-q3-2026",
            source: "CBRE",
            description: "Vacancy fell to 7.8% from 8.9% a year earlier. Leasing reached 23.5 million square feet and DFW leads the nation in space under construction."
        },
        {
            title: "Dallas-Fort Worth industrial market report, Q3 2026",
            url: "https://www.matthews.com/insights/dallas-fort-worth-industrial-market-report-q3-2026",
            source: "Matthews",
            description: "Average asking rent hit a record $10.36 per square foot. About 50 million square feet is under construction."
        },
        {
            title: "Fed's Waller favors a December rate hike",
            url: "https://stockanalysis.com/news/fed-waller-december-rate-hike-half-point/",
            source: "StockAnalysis",
            description: "Waller's full argument for a December hike, and why he would consider a half-point move."
        },
        {
            title: "Oil prices set for second weekly decline as Trump sticks with Iran blockade",
            url: "https://www.brecorder.com/news/40448723/oil-prices-set-for-second-weekly-decline-as-trump-sticks-with-iran-blockade",
            source: "Reuters via Business Recorder",
            description: "Where oil stands after a 16% drop last week, and what could move it next."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.916%", one_mo_ago: "3.816%", one_yr_ago: "4.148%" },
        "10-Year Treasury":   { current: "4.980%", one_mo_ago: "5.240%", one_yr_ago: "4.130%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "3.870%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.000%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7592.40, day_pct: -0.35, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -2.9, low_52w: 5101.63,  vs_low: 48.8 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52297.09, day_pct: -0.36, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -3.7, low_52w: 37830.66, vs_low: 38.2 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 25366.09, day_pct: -0.39, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -8.4, low_52w: 15685.33, vs_low: 61.7 }
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
