// Friday Finance — Week of November 6, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const FRIDAY_FINANCE = {
    date: "November 6, 2026",
    date_short: "11.6.26",

    quote: {
        text: "The four most dangerous words in investing are: this time it's different.",
        author: "Sir John Templeton"
    },

    // 10-12 symbols. Always SPX, DJIA, IXIC; the rest are the week's movers.
    // Live Finnhub data overwrites price/change on page load.
    ticker_bar: [
        { symbol: "SPX",   price: "7,354",   change_pct: -4.36 },
        { symbol: "DJIA",  price: "51,523",  change_pct: -3.44 },
        { symbol: "IXIC",  price: "24,315",  change_pct: -5.52 },
        { symbol: "NVDA",  price: "181.60",  change_pct: -9.26 },
        { symbol: "META",  price: "—",       change_pct: -3.96 },
        { symbol: "GOOGL", price: "—",       change_pct: -2.20 },
        { symbol: "AMZN",  price: "—",       change_pct: -2.19 },
        { symbol: "LYV",   price: "170.80",  change_pct:  0.00 },
        { symbol: "IP",    price: "32.40",   change_pct:  0.00 },
        { symbol: "HIG",   price: "146.20",  change_pct:  0.00 }
    ],

    // 3-6 big stories: finance, economics, geopolitics. Each body is prose,
    // 3-10 sentences. jsc_angle is one or two sentences on why it matters
    // to a Dallas industrial and hotel developer. One source per story.
    stories: [
        {
            headline: "Nasdaq falls 5.5% into correction as chip stocks suffer a 12% rout",
            body: "U.S. stocks sold off hard on Thursday. The Nasdaq Composite fell <b>5.5%</b> to about 24,315, its worst day since April 2025 and more than 10% below its October 6 record. The S&P 500 lost <b>4.4%</b> to 7,354 and the Dow dropped <b>1,833 points, or 3.4%</b>, to 51,523. The Philadelphia Semiconductor Index plunged more than 12% and Nvidia fell about 9%. Investors worried that a Democratic Congress could push tighter AI rules and slow data center construction. Arm and Qualcomm also fell on weak guidance. Analysts warned the selling could continue after a second straight down day for tech.",
            jsc_angle: "Data center and chip investment drives a good share of Texas industrial demand, so a lasting pullback would be worth watching. Wider risk-off moves can also push lenders to tighten.",
            source: { name: "Fox Business", title: "Stocks fall sharply on Nov. 5, 2026", url: "https://foxbusiness.com/markets/stocks-nov-5-2026" },
            date: "2026-11-05"
        },
        {
            headline: "Democrats sweep Congress, yields ease and a December Fed hike stays at 82%",
            body: "Democrats won control of both chambers in Tuesday's midterms. Stocks rallied on Wednesday as the uncertainty lifted. Investors then read the result as making big tax cuts and extra borrowing less likely, and the 10-year Treasury yield fell 6 basis points to <b>4.87%</b>. Futures still show about an <b>82% chance</b> that the Fed raises rates on December 9. Initial jobless claims fell to 189,000. The October jobs report is due at 8:30 a.m. ET today, after September payrolls rose only 29,000.",
            jsc_angle: "A lower 10-year helps permanent loan pricing a little, but floating-rate construction debt still tracks SOFR. A December hike would push that cost higher.",
            source: { name: "Discovery Alert", title: "Gold price jumps above $4,100 as midterms drag dollar and yields lower", url: "https://discoveryalert.com/news/gold-price-dollar-yields-fed-hike-november-2026/" },
            date: "2026-11-05"
        },
        {
            headline: "Brent drops below $100 as hopes build for a U.S.-Iran deal",
            body: "Oil fell sharply this week on signs that Washington and Tehran may be heading toward talks. Brent dropped about <b>7.6%</b> on Monday to roughly $104.77, its lowest in two weeks. It then slipped below <b>$100</b> on Wednesday for the first time since early October, after trading above $110 the week before. Iran's supreme leader gave the government powers to pursue peace talks and President Trump hinted at progress. Analysts remain wary of false dawns, and some noted that the White House had floated new strikes after the election.",
            jsc_angle: "Lower diesel and freight costs would ease pressure on logistics and manufacturing tenants and take some heat out of inflation. The relief only holds if talks do.",
            source: { name: "Yahoo Finance", title: "Oil prices fall on US-Iran negotiations", url: "https://finance.yahoo.com/energy/articles/oil-prices-fall-us-iran-222505483.html" },
            date: "2026-11-02"
        },
        {
            headline: "Live Nation posts record third quarter on 19% revenue growth",
            body: "Live Nation reported third-quarter revenue of <b>$10.1 billion</b>, up 19%, after the close on Thursday. Operating income rose 13% to <b>$892 million</b> and adjusted operating income rose 14% to about $1.18 billion. Fan attendance grew 19% to 61 million. The company expects nearly 180 million fans in 2026 and double-digit adjusted operating income growth in Concerts and Sponsorship. It plans capital spending of nearly $1.1 billion this year.",
            source: { name: "SEC (Live Nation 8-K)", title: "Live Nation third-quarter 2026 earnings release", url: "https://www.sec.gov/Archives/edgar/data/0001335258/000133525826000052/lyv-2026q3xex991er.htm" },
            date: "2026-11-05"
        },
        {
            headline: "International Paper's European spin-off is on track for December to March",
            body: "The European packaging business that International Paper is spinning off held its Capital Markets Day in London on Tuesday. The new company will be called <b>DS Smith plc</b>, listed in London with American depositary receipts in New York. Management guided 2026 adjusted EBITDA of <b>EUR730 million to EUR780 million</b>. It aims for a mid-teens EBITDA margin over time and expects one-off costs of EUR120 million to EUR130 million. International Paper shares fell 3.6% in London on the day.",
            source: { name: "AJ Bell", title: "International Paper Co nears completion of spin-off of DS Smith", url: "https://www.ajbell.co.uk/news/articles/international-paper-co-nears-completion-spin-ds-smith" },
            date: "2026-11-03"
        },
        {
            headline: "CMBS delinquency eases to 7.87% as industrial stays near 1.1%",
            body: "Trepp's overall CMBS delinquency rate fell 15 basis points in October to <b>7.87%</b>. The industrial rate eased 4 basis points to <b>1.10%</b>, by far the lowest of any property type. Lodging improved 24 basis points to 5.94%. Office rose to 12.33% and retail jumped 63 basis points to 7.21%. The stress is concentrated in office and retail, not in the sectors where tenants and borrowers on our watchlist operate.",
            jsc_angle: "Industrial credit is holding up well, which supports lender appetite for the asset type. Lodging is improving but still carries more risk.",
            source: { name: "CRE Daily", title: "CMBS delinquency rate dips to 7.87% as retail jumps 63 bps", url: "https://www.credaily.com/?p=224934" },
            date: "2026-11-03"
        }
    ],

    // 3-6 dated items. Short.
    watch_next_week: [
        { when: "Fri Nov 6", what: "<b>October jobs report</b> at 8:30 a.m. ET. September payrolls rose just 29,000, and the result shapes the December Fed decision." },
        { when: "Tue Nov 10", what: "<b>October CPI</b> at 8:30 a.m. ET. Inflation is the other input to the December 9 rate call." },
        { when: "Tue Nov 10", what: "<b>Live Nation investor presentation</b> following its record third quarter results." }
    ],

    // 3-5 non-paywalled links. No WSJ, FT, Bloomberg or Barron's.
    reading_links: [
        {
            title: "Nasdaq falls into correction as chip stocks plunge",
            url: "https://investing.com/news/stock-market-news/us-stock-index-futures-steady-after-midterms-rally-5001919",
            source: "Investing.com",
            description: "A fuller look at the AI and chip unwind, including the Arm and Qualcomm guidance and the policy worries."
        },
        {
            title: "CMBS delinquency rate dips to 7.87% as retail jumps 63 bps",
            url: "https://www.credaily.com/?p=224934",
            source: "CRE Daily (Trepp)",
            description: "October delinquency by property type. Industrial held at 1.10% and lodging improved."
        },
        {
            title: "Oil prices fall on US-Iran negotiations",
            url: "https://finance.yahoo.com/energy/articles/oil-prices-fall-us-iran-222505483.html",
            source: "Yahoo Finance",
            description: "Why traders are betting on talks, and why analysts still doubt it."
        },
        {
            title: "International Paper Co nears completion of spin-off of DS Smith",
            url: "https://www.ajbell.co.uk/news/articles/international-paper-co-nears-completion-spin-ds-smith",
            source: "AJ Bell",
            description: "Guidance, costs and timeline from the DS Smith Capital Markets Day."
        }
    ],

    rates: {
        "30-Day Avg SOFR":    { current: "3.912%", one_mo_ago: "3.784%", one_yr_ago: "4.197%" },
        "10-Year Treasury":   { current: "4.900%", one_mo_ago: "5.280%", one_yr_ago: "4.100%" },
        "Eff. Federal Funds": { current: "3.880%", one_mo_ago: "3.880%", one_yr_ago: "3.870%" },
        "Prime Rate":         { current: "7.000%", one_mo_ago: "7.000%", one_yr_ago: "7.250%" }
    },

    // Fixed ticker set — see STOCK_TABLE in validate-data.js. Live Finnhub
    // data overwrites these on page load; keep them reasonably current.
    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7353.73, day_pct: -4.36, ytd_pct:  8.4,  high_52w: 7820.00,  vs_high: -6.0, low_52w: 5101.63,  vs_low: 44.1 },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 51523.06, day_pct: -3.44, ytd_pct:  6.1,  high_52w: 54300.00, vs_high: -5.1, low_52w: 37830.66, vs_low: 36.2 },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 24315.00, day_pct: -5.52, ytd_pct:  6.5,  high_52w: 27693.00, vs_high: -12.2, low_52w: 15685.33, vs_low: 55.0 }
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
