// Friday Finance — Week of April 1, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "April 1, 2026",
    date_short: "4.1.26",

    ticker_bar: [
        { symbol: "SPX",  price: "6,575", change_pct: 0.72 },
        { symbol: "DJIA", price: "46,565", change_pct: 0.48 },
        { symbol: "IXIC", price: "21,840", change_pct: 1.16 },
        { symbol: "PLD",  price: "134.20", change_pct: 0.8 },
        { symbol: "HST",  price: "16.80", change_pct: 0.7 },
        { symbol: "BX",   price: "111.00", change_pct: 1.3 },
        { symbol: "AMZN", price: "208.27", change_pct: 3.64 },
        { symbol: "MAR",  price: "317.54", change_pct: 0.9 },
        { symbol: "DAL",  price: "63.00", change_pct: 2.1 },
        { symbol: "AAL",  price: "10.74", change_pct: 1.8 },
        { symbol: "FDX",  price: "352.00", change_pct: 1.5 }
    ],

    news_bullets: [
        "<b>U.S.–Iran war dominated markets for the fourth consecutive week</b> as the Strait of Hormuz closure continued to roil global energy and risk-asset prices. Tuesday saw a 1,125-point Dow surge after Trump signaled a strike pause — only for markets to reverse sharply Wednesday when Iran denied ceasefire talks, pulling the S&P to its lowest close since September. A late-day <b>WSJ report</b> that Trump told aides he'd accept ending hostilities even without Hormuz reopening triggered a partial recovery. The S&P 500 closed Q1 2026 down <b>4.7%</b> — its worst quarter since 2022 — with Trump's <b>April 6 diplomatic deadline</b> for Iran the single most consequential near-term macro variable.",
        "Oil prices breached <b>$100/barrel (Brent)</b> for the first time in years as the Hormuz closure cut off roughly 20% of global supply. The <b>IEA called it the largest supply disruption in the history of the global oil market.</b> National average gas prices hit <b>$4.018/gallon</b> — the highest since August 2022 — while diesel reached $5.45/gallon, adding direct pressure to logistics costs and CRE operating budgets. An FT investigation revealed <b>$580 million in bets placed against oil prices just 15 minutes before Trump announced his March 23 strike pause</b>, triggering SEC scrutiny of potential insider trading.",
        "The <b>FOMC voted to hold rates at 3.50%–3.75%</b> at its March 18 meeting, with only one dissenter (Governor Miran, favoring a cut). Chair Powell acknowledged <b>\"uncertain\" conditions</b> but characterized the oil-shock disruption as potentially transitory. Markets briefly priced a non-trivial probability of a <b>rate hike</b> later in 2026 — the first such signal since the tightening cycle ended — as $100+ oil threatens to re-accelerate inflation. CME FedWatch shows <b>~86% probability of another hold</b> at the April 28–29 FOMC meeting. The 10-year Treasury yield surged roughly <b>40 basis points in March</b> to 4.40% on stagflation fears before stabilizing.",
        "<b>February nonfarm payrolls fell 92,000</b> — the worst monthly print in four months and far below the +59K consensus — with declines in healthcare (strike activity), information, federal government, and manufacturing. The <b>March NFP report</b> was released Good Friday (April 3) while equity markets were closed, creating an unusually high-stakes Monday open. Average hourly earnings rose <b>+3.8% YoY</b>, keeping the Fed's dual-mandate tension acute. Wells Fargo characterized the mix of weakening jobs and rising inflation as <b>\"the FOMC's worst nightmare.\"</b>",
        "Earnings diverged sharply: <b>Nike (NKE) plunged ~14%</b> after guiding China revenue down 20% next quarter, while <b>Micron (MU) surged 10.9%</b> on strong memory chip demand and a record market cap. <b>Eli Lilly (LLY) gained 3.9%</b> on FDA approval of its GLP-1 weight-loss pill, and <b>Alphabet (GOOGL) rose 3.0%</b>. On the other end, <b>RH (Restoration Hardware) fell 18%</b> on below-consensus revenue guidance, while gold — up ~22% YTD entering March — posted its largest monthly decline since 2013 as ceasefire signals dampened safe-haven demand."
    ],

    watch_next_week: "Markets face one of the highest-risk Monday opens of 2026 as traders digest the <b>March NFP report</b> (released Good Friday with markets closed) — consensus expects +57K following February's shocking –92K print. <b>Trump's April 6 Iran diplomatic deadline</b> expires over the weekend, with renewed strikes or genuine de-escalation both plausible. <b>FOMC minutes</b> (Wednesday) will be scrutinized for internal debate on the stagflation risk, and <b>March CPI</b> (Friday) will be the most market-moving data of the week — a hot print would reinvigorate rate-hike speculation already visible in the options market.",

    wsj_articles: [
        {
            title: "Trump Tells Aides He's Willing to End Iran Military Campaign Even if Strait of Hormuz Remains Closed",
            url: "https://www.wsj.com/politics/national-security/trump-iran-military-campaign-hormuz-strait-2026",
            description: "The single report that moved the S&P 500 +2.9% in one session. The WSJ revealed the White House's tolerance for a partial diplomatic resolution that stops short of full Hormuz reopening — reducing the geopolitical risk premium that had been embedded in oil prices since hostilities began."
        },
        {
            title: "Microsoft on Track to Invest $5.5 Billion in Singapore by 2029",
            url: "https://www.wsj.com/tech/microsoft-singapore-5-billion-investment-ai-2026",
            description: "Despite posting its worst quarterly stock decline since 2008, Microsoft is pressing ahead with a $5.5B data center and AI infrastructure commitment in Singapore — a signal that mega-cap tech capital expenditure is holding firm through broader market turbulence."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "4.143%", one_mo_ago: "4.143%", one_yr_ago: "5.303%" },
        "10-Year Treasury":   { current: "4.400%", one_mo_ago: "4.050%", one_yr_ago: "4.200%" },
        "Eff. Federal Funds": { current: "3.640%", one_mo_ago: "3.640%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 6575.32,  day_pct: 0.72,  ytd_pct: -4.7,  high_52w: 6928.54,  vs_high: -5.1,  low_52w: 4835.04,  vs_low: 36.0 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 46565.74, day_pct: 0.48,  ytd_pct: -3.8,  high_52w: 48350.00, vs_high: -3.7,  low_52w: 36598.00, vs_low: 27.2 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 21840.95, day_pct: 1.16,  ytd_pct: -10.2, high_52w: 24512.00, vs_high: -10.9, low_52w: 15708.00, vs_low: 39.0 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 134.20, day_pct: 0.8,  ytd_pct: 0.3,   high_52w: 143.95, vs_high: -6.8,  low_52w: 85.35,  vs_low: 57.2 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 32.50,  day_pct: -2.1, ytd_pct: -14.0, high_52w: 44.38,  vs_high: -26.8, low_52w: 29.68,  vs_low: 9.5 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 162.00, day_pct: -3.0, ytd_pct: -9.8,  high_52w: 185.40, vs_high: -12.6, low_52w: 143.20, vs_low: 13.1 },
            { company: "First Industrial",      ticker: "FR",   price: 48.60,  day_pct: -4.0, ytd_pct: -8.2,  high_52w: 56.50,  vs_high: -14.0, low_52w: 42.80,  vs_low: 13.6 },
            { company: "Plymouth Industrial",   ticker: "PLYM", price: 20.24,  day_pct: -1.0, ytd_pct: -11.5, high_52w: 24.80,  vs_high: -18.4, low_52w: 17.90,  vs_low: 13.1 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 55.52,  day_pct: -5.0, ytd_pct: -12.1, high_52w: 67.30,  vs_high: -17.5, low_52w: 48.10,  vs_low: 15.4 },
            { company: "Stag Industrial",        ticker: "STAG", price: 34.83,  day_pct: -2.0, ytd_pct: -5.2,  high_52w: 40.10,  vs_high: -13.1, low_52w: 31.20,  vs_low: 11.6 },
            { company: "Americold Realty",        ticker: "COLD", price: 23.05,  day_pct: -1.0, ytd_pct: -6.8,  high_52w: 28.50,  vs_high: -19.1, low_52w: 19.80,  vs_low: 16.4 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.53,   day_pct: -3.0, ytd_pct: -8.3,  high_52w: 10.50,  vs_high: -18.8, low_52w: 7.20,   vs_low: 18.5 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 94.44,  day_pct: 0.5,  ytd_pct: -8.1,  high_52w: 118.00, vs_high: -20.0, low_52w: 80.20,  vs_low: 17.8 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 16.80, day_pct: 0.7,  ytd_pct: -9.2,  high_52w: 20.40,  vs_high: -17.6, low_52w: 13.10, vs_low: 28.2 },
            { company: "Apple REIT",              ticker: "APLE", price: 11.89, day_pct: 0.3,  ytd_pct: -9.3,  high_52w: 14.80,  vs_high: -19.7, low_52w: 10.40, vs_low: 14.3 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 10.92, day_pct: 0.6,  ytd_pct: -11.0, high_52w: 14.10,  vs_high: -22.6, low_52w: 9.60,  vs_low: 13.8 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 11.34, day_pct: 0.4,  ytd_pct: -12.2, high_52w: 14.40,  vs_high: -21.3, low_52w: 10.20, vs_low: 11.2 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 9.36,  day_pct: 0.2,  ytd_pct: -7.9,  high_52w: 11.20,  vs_high: -16.4, low_52w: 8.40,  vs_low: 11.4 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 7.54,  day_pct: 0.3,  ytd_pct: -10.5, high_52w: 9.80,   vs_high: -23.1, low_52w: 6.80,  vs_low: 10.9 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 9.11,  day_pct: 0.2,  ytd_pct: -9.1,  high_52w: 11.00,  vs_high: -17.2, low_52w: 8.10,  vs_low: 12.5 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 5.36,  day_pct: 0.2,  ytd_pct: -13.4, high_52w: 7.10,   vs_high: -24.5, low_52w: 4.80,  vs_low: 11.7 }
        ],
        "Lenders": [
            { company: "Blackstone",       ticker: "BX",   price: 111.00, day_pct: 1.3,  ytd_pct: -27.2, high_52w: 190.87, vs_high: -41.9, low_52w: 88.20,  vs_low: 25.9 },
            { company: "Comerica",         ticker: "CMA",  price: 88.67,  day_pct: 0.5,  ytd_pct: -5.2,  high_52w: 102.40, vs_high: -13.4, low_52w: 72.30,  vs_low: 22.6 },
            { company: "Veritex",          ticker: "VBTX", price: 30.26,  day_pct: 0.8,  ytd_pct: -7.8,  high_52w: 34.96,  vs_high: -13.5, low_52w: 20.37,  vs_low: 48.6 },
            { company: "BancFirst",        ticker: "BANF", price: 116.50, day_pct: 0.3,  ytd_pct: -2.1,  high_52w: 138.00, vs_high: -15.6, low_52w: 97.00,  vs_low: 20.1 },
            { company: "Busey",            ticker: "BUSE", price: 25.50,  day_pct: 0.4,  ytd_pct: -4.8,  high_52w: 30.40,  vs_high: -16.1, low_52w: 22.10,  vs_low: 15.4 },
            { company: "Bank OZK",         ticker: "OZK",  price: 44.85,  day_pct: 0.6,  ytd_pct: -7.3,  high_52w: 53.66,  vs_high: -16.4, low_52w: 35.71,  vs_low: 25.6 },
            { company: "The Hartford",     ticker: "HIG",  price: 134.41, day_pct: 0.4,  ytd_pct: 5.2,   high_52w: 144.50, vs_high: -7.0,  low_52w: 107.49, vs_low: 25.0 }
        ],
        "Industry-related companies": [
            { company: "Amazon",               ticker: "AMZN", price: 208.27, day_pct: 3.64, ytd_pct: -10.0, high_52w: 258.00, vs_high: -19.3, low_52w: 161.02, vs_low: 29.3 },
            { company: "United Parcel Service", ticker: "UPS", price: 98.07,  day_pct: 0.8,  ytd_pct: -11.8, high_52w: 122.40, vs_high: -19.9, low_52w: 82.25,  vs_low: 19.2 },
            { company: "FedEx Corporation",    ticker: "FDX",  price: 352.00, day_pct: 1.5,  ytd_pct: -6.1,  high_52w: 398.50, vs_high: -11.7, low_52w: 282.00, vs_low: 24.8 },
            { company: "Target Corporation",   ticker: "TGT",  price: 119.84, day_pct: 0.9,  ytd_pct: 4.0,   high_52w: 126.00, vs_high: -4.9,  low_52w: 83.44,  vs_low: 43.6 },
            { company: "GXO Logistics",        ticker: "GXO",  price: 51.85,  day_pct: 6.12, ytd_pct: 5.3,   high_52w: 58.20,  vs_high: -10.9, low_52w: 34.80,  vs_low: 48.9 },
            { company: "Marriott International", ticker: "MAR", price: 317.54, day_pct: 0.9,  ytd_pct: -1.5,  high_52w: 370.00, vs_high: -14.2, low_52w: 226.80, vs_low: 40.0 },
            { company: "Hilton Hotels",         ticker: "HLT",  price: 307.36, day_pct: 0.7,  ytd_pct: -2.2,  high_52w: 333.00, vs_high: -7.7,  low_52w: 196.00, vs_low: 56.8 },
            { company: "American Airlines",    ticker: "AAL",  price: 10.74,  day_pct: 1.8,  ytd_pct: -18.0, high_52w: 16.50,  vs_high: -34.9, low_52w: 8.50,   vs_low: 26.4 },
            { company: "Southwest Airlines",   ticker: "LUV",  price: 36.30,  day_pct: 2.2,  ytd_pct: -8.3,  high_52w: 45.20,  vs_high: -19.7, low_52w: 26.40,  vs_low: 37.5 },
            { company: "Las Vegas Sands",      ticker: "LVS",  price: 51.69,  day_pct: 0.5,  ytd_pct: -8.6,  high_52w: 70.45,  vs_high: -26.6, low_52w: 30.18,  vs_low: 71.3 },
            { company: "TSMC",                 ticker: "TSM",  price: 336.00, day_pct: 1.8,  ytd_pct: -5.4,  high_52w: 390.00, vs_high: -13.8, low_52w: 134.00, vs_low: 150.7 },
            { company: "Delta Airlines",       ticker: "DAL",  price: 63.00,  day_pct: 2.1,  ytd_pct: 2.0,   high_52w: 76.39,  vs_high: -17.5, low_52w: 43.20,  vs_low: 45.8 },
            { company: "Ferguson Enterprises", ticker: "FERG", price: 223.65, day_pct: 0.8,  ytd_pct: -4.8,  high_52w: 266.37, vs_high: -16.0, low_52w: 180.20, vs_low: 24.1 },
            { company: "International Paper",  ticker: "IP",   price: 50.20,  day_pct: 0.4,  ytd_pct: -3.5,  high_52w: 58.80,  vs_high: -14.6, low_52w: 40.20,  vs_low: 24.9 },
            { company: "Tandy Leather Factory", ticker: "TLF", price: 4.85,   day_pct: 0.0,  ytd_pct: -2.0,  high_52w: 6.10,   vs_high: -20.5, low_52w: 4.10,   vs_low: 18.3 },
            { company: "Lincoln Tech",         ticker: "LINC", price: 37.60,  day_pct: 1.5,  ytd_pct: 27.8,  high_52w: 38.08,  vs_high: -1.3,  low_52w: 14.44,  vs_low: 160.4 }
        ]
    }
};
