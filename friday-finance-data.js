// Friday Finance — Week of October 16, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "October 16, 2026",
    date_short: "10.16.26",

    quote: {
        text: "Know what you own, and know why you own it.",
        author: "Peter Lynch"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC; the rest are the week's movers.
    // Live Finnhub data overwrites price/change on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,705",   change_pct: -0.51 },
        { symbol: "DJIA",  price: "52,338",  change_pct:  0.31 },
        { symbol: "IXIC",  price: "26,649",  change_pct: -0.24 },
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
            headline: "Hot September CPI knocks stocks off record highs",
            body: "September CPI rose <b>0.6% month over month and 3.7% year over year</b>, above the 3.6% consensus and up from 3.4% in August. Core CPI rose 0.3% on the month, double the expected pace, and 2.6% on the year. Energy did most of the damage: the energy index jumped 5.2% in September and gasoline alone rose 9.1%, accounting for more than half of the headline increase. The timing stung because the S&P 500 had closed at a record 7,820 the day before on strong bank earnings. On release day the index fell 1.1% to 7,719 and the Nasdaq lost 1.9%, with rate-sensitive tech leading the decline. The two-year Treasury yield rose 12 basis points and futures briefly priced a 44% chance of a hike at the October 27-28 FOMC meeting. Cleveland Fed President Beth Hammack said the inflation pressure looked broad-based.",
            jsc_angle: "Energy-driven inflation is a direct operating-cost headwind for the logistics and manufacturing tenants in the portfolio, and every extra hike widens the spread on construction debt.",
            source: { name: "CNBC", title: "Treasury yields jump after hotter-than-expected September CPI", url: "https://www.cnbc.com/2026/10/14/us-treasury-yields-cpi-inflation-report.html" },
            date: "2026-10-14"
        },
        {
            headline: "Warsh cools October hike talk and the 10-year slides to 5.09%",
            body: "A day after the CPI shock, September producer prices rose <b>1.3% on the month</b>, the largest single-month jump since 2022. Markets looked past it because Fed Chair Kevin Warsh, speaking the same day, declined to signal any urgency about a hike at the October meeting. The dollar sold off, Treasury yields fell sharply from their 5.30% intraday peak, and the 10-year finished the week near <b>5.09%</b>, down 19 basis points from the prior Friday. October hike odds fell from 44% to roughly 16%, implying an 84% chance of a hold on October 28. Futures still price better than a 90% chance of at least one more 25 basis point increase by year end, so the debate is deferred rather than settled. The Dow gained 2.0% on the week while the S&P 500 lost 0.7% and the Nasdaq fell 2.0%, a rotation out of AI and into value and financials.",
            jsc_angle: "The 19 basis point drop in the 10-year is the best single-week move for cap rates and refinancing math since the September hike, but a December increase is still the base case for underwriting.",
            source: { name: "ActionForex", title: "Dollar extends slide as Fed Warsh refuses to revive October hike bets", url: "https://actionforex.com/action-insight/market-overview/657759-dollar-extends-slide-as-fed-warsh-refuses-to-revive-october-hike-bets" },
            date: "2026-10-15"
        },
        {
            headline: "Big banks open Q3 earnings season with mixed results",
            body: "JPMorgan reported third-quarter profit of <b>$15.3 billion</b>, up about 6% from a year ago, on revenue of roughly $50.2 billion. Earnings per share of $5.57 missed the $5.93 consensus, a rare miss for the bank, as weaker fixed-income trading offset strong equities. Wells Fargo earned $1.87 per share against a $1.85 estimate, but revenue of $21.87 billion fell short of the $22.31 billion expected and the shares dropped about 1.5%. Citigroup also reported, and the group's results were good enough to push the S&P 500 to a record before the CPI print reversed it. The regional banks report next, led by Huntington on October 22. Huntington's quarter is the first full one since it closed the Cadence Bank acquisition in February, which grew its commercial real estate book about 60% to $24.3 billion. Fifth Third follows with its first full quarter of Comerica integration.",
            jsc_angle: "Three of the portfolio's construction lenders report in the next two weeks, so credit-quality commentary on CRE books will say more about 2027 financing appetite than anything the big banks said this week.",
            source: { name: "CNBC", title: "JPMorgan Chase third-quarter 2026 earnings", url: "https://www.cnbc.com/2026/10/13/jpmorgan-chase-jpm-earnings-3q-2026.html" },
            date: "2026-10-13"
        },
        {
            headline: "DFW industrial vacancy tightens to 7.8% as construction pipeline leads the nation",
            body: "Third-quarter data put Dallas-Fort Worth industrial vacancy at <b>7.8%</b>, down a full point from 8.8% at the end of the second quarter. The metro has 33.9 million square feet under construction, more than any other U.S. market, and absorbed 6.4 million square feet in the quarter. Leasing volume through the first half of the year reached a record 40.3 million square feet, with big-box users signing nearly a third of the 72 million square feet committed over the trailing twelve months. Average asking rents are up about 13% year over year. Data center and AI infrastructure users are a growing share of demand in the southern Dallas and I-30 corridor submarkets. Marcus & Millichap ranks DFW third in its 2026 National Industrial Index, with transaction volume up roughly 40% year over year.",
            jsc_angle: "Falling vacancy against a record pipeline is the backdrop Jackson Shaw's DFW spec program needs, provided the rate environment holds exit caps near underwriting.",
            source: { name: "CRE Daily", title: "DFW industrial leasing hits record highs as data centers fuel demand", url: "https://www.credaily.com/?p=221325" },
            date: "2026-10-14"
        }
    ],

    // 3-6 dated items. Short.
    watch_next_week: [
        { when: "Wed Oct 22", what: "<b>Huntington Bancshares Q3 earnings</b> before the open. First full quarter post-Cadence: watch CRE delinquencies, NIM versus the 3.20% guide, and construction lending appetite." },
        { when: "Week of Oct 19", what: "<b>Fifth Third and Pinnacle Q3 earnings.</b> Comerica integration cost saves and NIM trajectory for Fifth Third; Pinnacle's 3.44% NIM and deposit costs." },
        { when: "Tue-Wed Oct 27-28", what: "<b>FOMC meeting.</b> Markets price an 84% hold after Warsh's October 15 remarks; the statement language on December is the real event." },
        { when: "Wed Oct 28", what: "<b>International Paper Q3 earnings.</b> First full quarter after the Georgia mill closures; consensus EPS $0.48 after four straight misses." }
    ],

    // 3-5 non-paywalled links. No WSJ, FT, Bloomberg or Barron's.
    reading_links: [
        {
            title: "10-year Treasury yield dips as traders look ahead to Thursday economic reports",
            url: "https://www.cnbc.com/2026/10/14/us-treasury-yields-cpi-inflation-report.html",
            source: "CNBC",
            description: "How the CPI print moved the front end of the curve and briefly put an October hike back on the table."
        },
        {
            title: "U.S. Treasury yields inch lower as investors digest hot inflation data",
            url: "https://www.cnbc.com/amp/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",
            source: "CNBC",
            description: "End-of-week recap of the 10-year's slide to 5.09% after the Warsh speech and the tech selloff."
        },
        {
            title: "Dollar extends slide as Fed Warsh refuses to revive October hike bets",
            url: "https://actionforex.com/action-insight/market-overview/657759-dollar-extends-slide-as-fed-warsh-refuses-to-revive-october-hike-bets",
            source: "ActionForex",
            description: "Why the market read Warsh's remarks as a hold signal despite two hot inflation prints in two days."
        },
        {
            title: "DFW industrial leasing hits record highs as data centers fuel demand",
            url: "https://www.credaily.com/?p=221325",
            source: "CRE Daily",
            description: "Q3 2026 DFW industrial fundamentals: vacancy, pipeline, rents and who is signing the big leases."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.950%", one_mo_ago: "3.640%", one_yr_ago: "4.350%" },
        "10-Year Treasury":   { current: "5.090%", one_mo_ago: "5.110%", one_yr_ago: "4.450%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.630%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7705.00,  day_pct: -0.51, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -1.5,  low_52w: 5101.63,  vs_low: 50.9 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52338.00, day_pct:  0.31, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -3.6,  low_52w: 37830.66, vs_low: 38.3 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 26649.00, day_pct: -0.24, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -3.8,  low_52w: 15685.33, vs_low: 69.9 }
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
