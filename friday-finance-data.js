// Friday Finance — Week of October 23, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "October 23, 2026",
    date_short: "10.23.26",

    quote: {
        text: "The investor's chief problem, and even his worst enemy, is likely to be himself.",
        author: "Benjamin Graham"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC; the rest are the week's movers.
    // Live Finnhub data overwrites price/change on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,691",   change_pct:  0.41 },
        { symbol: "DJIA",  price: "51,966",  change_pct: -0.07 },
        { symbol: "IXIC",  price: "26,431",  change_pct:  1.11 },
        { symbol: "JPM",   price: "236.80",  change_pct: -2.10 },
        { symbol: "WFC",   price: "62.50",   change_pct: -0.48 },
        { symbol: "NVDA",  price: "202.80",  change_pct: -5.02 },
        { symbol: "XOM",   price: "159.20",  change_pct: -0.82 },
        { symbol: "C",     price: "65.30",   change_pct: -0.49 },
        { symbol: "GS",    price: "570.40",  change_pct:  1.18 },
        { symbol: "HBAN",  price: "16.10",   change_pct: -0.62 },
        { symbol: "IP",    price: "32.40",   change_pct: -1.22 }
    ],

    // 3-6 big stories: finance, economics, geopolitics. Each body is prose,
    // 3-10 sentences. jsc_angle is one or two sentences on why it matters
    // to a Dallas industrial and hotel developer. One source per story.
    stories: [
        {
            headline: "Tech rebounds Monday after worst week since June",
            body: "The Nasdaq rose <b>1.1% to 26,431</b> on Monday as AI and tech names bounced from last week's rout. The S&P 500 gained 0.4% to <b>7,691</b>, while the Dow slipped 0.1% to 51,966 because most stocks outside tech fell. Last week the S&P 500 lost nearly 2%, its biggest weekly drop since late June, on worries about companies borrowing heavily for AI build-outs. Oil rose more than 2% on reports of Houthi attacks on Saudi infrastructure, and gold fell 0.5%. The S&P 500 still sits about 2% below its early-October record near 7,845. Earnings season now turns to the regional banks and to industrial names.",
            jsc_angle: "Oil above its recent range feeds fuel and freight costs for logistics and manufacturing tenants, and a narrow tech-led rally says little about credit appetite for construction loans.",
            source: { name: "Yahoo Finance", title: "How major US stock indexes fared Monday 10/19/2026", url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-202016557.html" },
            date: "2026-10-19"
        },
        {
            headline: "Warsh cools October hike talk and the 10-year slides to 5.09%",
            body: "A day after the hot September CPI, producer prices rose <b>1.3% on the month</b>, the largest jump since 2022. Markets looked past it because Fed Chair Kevin Warsh declined to signal any urgency about a hike at the October meeting. Treasury yields fell from their intraday peak, and the 10-year closed Friday at <b>5.09%</b>, down 15 basis points on the week. The Fed hiked to 3.75% to 4.00% in September, and the effective funds rate sits at 3.88%. Futures put the chance of a hold at the October 27-28 FOMC at about <b>84%</b>, with another 25 basis point hike still priced for December. Three September dissenters wanted a hike, including Dallas Fed President Lorie Logan.",
            jsc_angle: "The pullback in the 10-year helps refinancing math, but a December hike remains the base case for floating-rate construction debt.",
            source: { name: "ActionForex", title: "Dollar extends slide as Fed Warsh refuses to revive October hike bets", url: "https://actionforex.com/action-insight/market-overview/657759-dollar-extends-slide-as-fed-warsh-refuses-to-revive-october-hike-bets" },
            date: "2026-10-15"
        },
        {
            headline: "Regional bank earnings begin with Fifth Third, Huntington next",
            body: "Fifth Third reported third-quarter results on Monday, October 19, with analysts expecting <b>$0.82 per share</b>. Early coverage described a solid quarter with higher net interest income, steady deposit growth and stable credit. Huntington reports Thursday, October 22, with consensus near <b>$0.38 per share</b> and a net interest margin around 3.2%. Analysts have trimmed Huntington estimates about 7% over the past month. Pinnacle is expected to report October 21 after the close with consensus near $2.66 per share, though the date is not firmly confirmed. Commercial real estate credit quality is the line investors are watching across all three.",
            jsc_angle: "Three of the company's construction lenders report within days of each other, so their CRE credit and origination commentary is the best read on 2027 loan availability.",
            source: { name: "Yahoo Finance", title: "Earnings Preview: Huntington Bancshares (HBAN) Q3 Earnings Expected to Decline", url: "https://finance.yahoo.com/markets/stocks/articles/earnings-preview-huntington-bancshares-hban-130004310.html" },
            date: "2026-10-19"
        }
    ],

    // 3-6 dated items. Short.
    watch_next_week: [
        { when: "Wed Oct 21", what: "<b>Pinnacle Financial Q3 earnings</b> expected after the close, with the call the next morning. Watch net interest margin and deposit costs." },
        { when: "Thu Oct 22", what: "<b>Huntington Bancshares Q3 earnings.</b> First full quarter after the Cadence deal: CRE delinquencies, margin versus the 3.20% guide and construction lending appetite." },
        { when: "Tue-Wed Oct 27-28", what: "<b>FOMC meeting.</b> Markets price about an 84% hold, so the statement language on December is the real event." },
        { when: "Wed Oct 28", what: "<b>International Paper Q3 earnings.</b> First full quarter after the Georgia mill closures." }
    ],

    // 3-5 non-paywalled links. No WSJ, FT, Bloomberg or Barron's.
    reading_links: [
        {
            title: "FOMC preview: Warsh's credibility is on the line but there's a 91% chance it doesn't matter",
            url: "https://investinglive.com/central-banks/fomc-preview-warsh-s-credibility-is-on-the-line-but-there-s-a-91-chance-it-doesn-t-matter/",
            source: "investingLive",
            description: "A look at how little the October meeting is expected to change and why the December signal matters more."
        },
        {
            title: "U.S. Treasury yields inch lower as investors digest hot inflation data",
            url: "https://www.cnbc.com/amp/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",
            source: "CNBC",
            description: "End-of-week recap of the 10-year's slide to 5.09% after the Warsh speech and the tech selloff."
        },
        {
            title: "DFW industrial leasing hits record highs as data centers fuel demand",
            url: "https://www.credaily.com/?p=221325",
            source: "CRE Daily",
            description: "Q3 2026 DFW industrial fundamentals: vacancy, pipeline, rents and who is signing the big leases."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.886%", one_mo_ago: "3.655%", one_yr_ago: "4.177%" },
        "10-Year Treasury":   { current: "5.090%", one_mo_ago: "5.010%", one_yr_ago: "3.990%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.630%", one_yr_ago: "4.110%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "6.750%", one_yr_ago: "7.250%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7691.00,  day_pct: 0.41, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -1.5,  low_52w: 5101.63,  vs_low: 50.9 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52338.00, day_pct:  0.31, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -3.6,  low_52w: 37830.66, vs_low: 38.3 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 26431.00, day_pct: 1.11, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -3.8,  low_52w: 15685.33, vs_low: 69.9 }
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
            { company: "Blackstone",                  ticker: "BX",   price: 125.80, day_pct:  0.48, ytd_pct: -16.8, high_52w: 190.09, vs_high: -33.8, low_52w: 101.73, vs_low: 23.7 },
            { company: "Fifth Third Bancorp",         ticker: "FITB", price: 52.80,  day_pct:  1.37, ytd_pct:  12.1, high_52w: 59.80,  vs_high: -11.7, low_52w: 31.20,  vs_low: 69.2 },
            { company: "Huntington Bancshares",       ticker: "HBAN", price: 16.10,  day_pct:  0.87, ytd_pct:  -4.2, high_52w: 19.50,  vs_high: -17.4, low_52w: 11.91,  vs_low: 35.2 },
            { company: "BancFirst",                   ticker: "BANF", price: 114.20, day_pct:  0.27, ytd_pct:  -2.9, high_52w: 138.77, vs_high: -17.7, low_52w: 97.02,  vs_low: 17.7 },
            { company: "First Busey",                 ticker: "BUSE", price: 27.80,  day_pct:  0.18, ytd_pct:   3.8, high_52w: 28.60,  vs_high:  -2.8, low_52w: 18.40,  vs_low: 51.1 },
            { company: "Simmons First National",      ticker: "SFNC", price: 22.22,  day_pct:  0.00, ytd_pct:   0.0, high_52w: 26.00,  vs_high: -14.5, low_52w: 17.00,  vs_low: 30.7 },
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
