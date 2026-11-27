// Friday Finance — Week of November 27, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "November 27, 2026",
    date_short: "11.27.26",

    quote: {
        text: "You can't predict. You can prepare.",
        author: "Howard Marks"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC. Live Finnhub data overwrites on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,183",   change_pct: -0.25 },
        { symbol: "DJIA",  price: "50,183",  change_pct:  0.33 },
        { symbol: "IXIC",  price: "23,586",  change_pct: -0.62 },
        { symbol: "NVDA",  price: "—",       change_pct:  0.00 },
        { symbol: "HPE",   price: "—",       change_pct:  0.00 },
        { symbol: "GFF",   price: "—",       change_pct:  0.00 },
        { symbol: "TGT",   price: "—",       change_pct:  0.00 },
        { symbol: "BX",    price: "—",       change_pct:  0.00 },
        { symbol: "FITB",  price: "—",       change_pct:  0.00 },
        { symbol: "PLD",   price: "—",       change_pct:  0.00 }
    ],

    stories: [
        {
            headline: "Stocks rebound Monday, then slip as the Dow holds above 50,000",
            body: "Wall Street staged a sharp recovery after a brutal Friday, then gave back some of it. The S&P 500 jumped <b>4.73%</b> Monday to 7,237.17 and the Nasdaq rose 6.51%. By Wednesday the S&P 500 had slipped to <b>7,182.78</b> and the Nasdaq to 23,585.80. The Dow ended Wednesday at <b>50,182.95</b>, up 0.33%, helped by small caps and cyclical sectors. The VIX volatility index fell from 35.89 on November 20 to 28.29 on Wednesday. U.S. markets were closed Thursday for Thanksgiving.",
            jsc_angle: "Wide swings make lenders and investors cautious about new commitments. Industrials and real estate led Wednesday, which is a modest positive for our sectors.",
            source: { name: "Dean FI", title: "Market Pulse, November 25, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-25/" },
            date: "2026-11-25"
        },
        {
            headline: "Hawkish Fed talk lifts the dollar as December hike bets build",
            body: "Fed Governor John Williams said higher interest rates may be needed over time to bring down inflation. The dollar rose on bets for a more hawkish Fed. The Fed held at <b>3.75% to 4.00%</b> on October 28, with two dissents in favor of a hike. Markets expect a quarter-point increase at the <b>December 8-9</b> meeting. The effective fed funds rate is 3.88%, and the 10-year Treasury yield was <b>4.91%</b> on November 24, down from 5.10% a week earlier.",
            jsc_angle: "A December hike would lift SOFR and the cost of floating-rate construction debt. The drop in the 10-year yield is a small offset for permanent financing.",
            source: { name: "Dean FI", title: "Market Pulse, November 23, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-23/" },
            date: "2026-11-23"
        },
        {
            headline: "Economy grew 4.3% in the third quarter, revised up from 2.2% in Q2",
            body: "The Bureau of Economic Analysis put third-quarter real GDP growth at a <b>4.3%</b> annual rate in its second estimate, up from 2.2% in the second quarter. October personal income rose <b>0.7%</b> and consumer spending rose 0.3%. Strong growth supports the case for more rate hikes. Inflation remains the Fed's main concern, with October core PCE at 3.26% from a year earlier.",
            jsc_angle: "Solid growth supports tenant demand in logistics and manufacturing. It also keeps rates higher for longer.",
            source: { name: "Dean FI", title: "Market Pulse, November 25, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-25/" },
            date: "2026-11-25"
        },
        {
            headline: "AI trade wobbles again as Nvidia's rally fades and HPE falls",
            body: "Technology led Tuesday's losses as the AI trade lost momentum. Nvidia's rally faded, and Hewlett Packard Enterprise fell as shrinking AI margins outweighed an upbeat forecast. The technology sector dropped <b>3.26%</b> and the Nasdaq fell <b>1.48%</b> to 23,733.54. The Dow still rose 0.85% as health care, staples and real estate gained. Tech fell another 0.83% Wednesday on worries about AI spending, inflation and higher rates.",
            jsc_angle: "The AI buildout drives much of the industrial demand in Texas. A cooler AI market would eventually slow that pipeline.",
            source: { name: "Dean FI", title: "Market Pulse, November 24, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-24/" },
            date: "2026-11-24"
        },
        {
            headline: "Oil jumps $2 on Strait of Hormuz ship attacks after a three-month low",
            body: "Oil fell to a three-month low on Monday on rising supply and increased Middle East flows. On Tuesday it settled up <b>$2</b> on concerns about continued attacks on ships in the Strait of Hormuz. Wednesday headlines pointed to more Iran-related reports of mines in the area. Energy was one of the stronger sectors Tuesday, up 0.97%.",
            jsc_angle: "Fuel costs feed straight into freight and logistics tenants' margins and into hotel travel demand.",
            source: { name: "Dean FI", title: "Market Pulse, November 24, 2026", url: "https://deanfi.com/insights/marketpulse/2026-11-24/" },
            date: "2026-11-24"
        },
        {
            headline: "Data center suppliers now drive 14% of U.S. industrial leasing",
            body: "Cushman & Wakefield research shows data center suppliers took <b>14%</b> of U.S. industrial leasing in the third quarter. They signed about <b>50 million square feet</b> through September, more than in all of 2024 or 2025. Their share was under 3% in 2022 and 2023. Third-party logistics firms, equipment storage users and manufacturers near digital hubs lead the activity. Dallas-Fort Worth is among the top markets, and Austin-San Antonio is an emerging hub.",
            jsc_angle: "Demand from power, cooling and server suppliers is a tailwind for Texas industrial parks, including Central Texas.",
            source: { name: "CRE Daily", title: "Data Center Suppliers Now Drive 14% of Industrial Leasing", url: "https://www.credaily.com/briefs/data-center-suppliers-now-drive-14-of-industrial-leasing/" },
            date: "2026-11-25"
        }
    ],

    watch_next_week: [
        { when: "Fri Dec 4", what: "<b>November jobs report</b> at 8:30 a.m. ET, the last full jobs reading before the Fed meets." },
        { when: "Tue Dec 8", what: "<b>FOMC meeting begins.</b> The decision comes December 9, and markets expect a quarter-point hike." },
        { when: "Thu Dec 10", what: "<b>November CPI</b> comes out a day after the Fed decision." }
    ],

    reading_links: [
        {
            title: "CRE Debt Is Back, But Equity Investors Aren't Buying In",
            url: "https://www.credaily.com/newsletters/national/issue/cre-debt-is-back-but-equity-investors-arent-buying-in/",
            source: "CRE Daily",
            description: "A Real Estate Roundtable survey found 44% of executives saw debt access improve while 51% said equity got harder to raise. Buyers are seeking price cuts of up to 5%."
        },
        {
            title: "CMBS Special Servicing Backlog Ages as 43% of Loans Top Two Years",
            url: "https://www.credaily.com/newsletters/national/issue/cmbs-special-servicing-backlog-ages-as-43-of-loans-top-two-years/",
            source: "CRE Daily",
            description: "Trepp data shows $71.2 billion in special servicing. Lodging has the oldest loans of any sector."
        },
        {
            title: "Data Center Suppliers Now Drive 14% of Industrial Leasing",
            url: "https://www.credaily.com/briefs/data-center-suppliers-now-drive-14-of-industrial-leasing/",
            source: "CRE Daily",
            description: "Where the AI equipment supply chain is leasing warehouse space, and which markets lead."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.926%", one_mo_ago: "3.889%", one_yr_ago: "4.032%" },
        "10-Year Treasury":   { current: "4.910%", one_mo_ago: "5.000%", one_yr_ago: "4.040%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "3.880%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.000%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7182.78, day_pct: -0.25, ytd_pct:  2.5,  high_52w: 7820.00,  vs_high: -8.2, low_52w: 5101.63,  vs_low: 40.7 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 50182.95, day_pct: 0.33, ytd_pct: -0.4,  high_52w: 54300.00, vs_high: -9.6, low_52w: 37830.66, vs_low: 29.8 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 23585.80, day_pct: -0.62, ytd_pct:  0.3,  high_52w: 27693.00, vs_high: -13.8, low_52w: 15685.33, vs_low: 52.2 }
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
