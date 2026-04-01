// Friday Finance — Sample data for the week of April 3, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "April 3, 2026",
    date_short: "4.3.26",

    ticker_bar: [
        { symbol: "SPX",  price: "5,611", change_pct: -0.7 },
        { symbol: "DJIA", price: "41,989", change_pct: -0.5 },
        { symbol: "IXIC", price: "17,449", change_pct: -1.1 },
        { symbol: "PLD",  price: "112.34", change_pct: 0.3 },
        { symbol: "HST",  price: "15.82", change_pct: -1.2 },
        { symbol: "BX",   price: "137.50", change_pct: -0.9 },
        { symbol: "AMZN", price: "192.45", change_pct: -1.4 },
        { symbol: "MAR",  price: "261.30", change_pct: 0.6 },
        { symbol: "DAL",  price: "48.75", change_pct: -2.1 },
        { symbol: "AAL",  price: "12.10", change_pct: -3.0 },
        { symbol: "FDX",  price: "245.80", change_pct: -0.4 }
    ],

    news_bullets: [
        "The <b>ISM Manufacturing Index</b> fell to 49.0 in March, slipping back into contraction territory after two months of marginal expansion. New orders declined for the first time since November, with respondents citing renewed <b>tariff uncertainty</b> and weakening export demand. The S&P 500 finished the week down roughly 0.7%, with industrials and materials leading the decline.",
        "President Trump announced a sweeping new round of <b>reciprocal tariffs</b> set to take effect April 9, imposing duties of 10–54% on imports from over 60 countries. Markets sold off sharply on the news. The <b>10-Year Treasury</b> rallied as investors fled to safety, with the yield dropping to 4.12% — its lowest level since early February. CRE lending spreads widened modestly in response.",
        "February <b>PCE inflation</b> came in at 2.5% year-over-year, in line with expectations, while core PCE held at 2.8%. The Fed's preferred gauge suggests progress on disinflation has stalled, reinforcing Chair Powell's message that the committee is in <b>\"no hurry to cut.\"</b> Markets are now pricing roughly two 25bp cuts for the remainder of 2026, down from four at the start of the year.",
        "<b>Initial jobless claims</b> ticked up to 225,000, slightly above the 220K consensus, while continuing claims rose to their highest level since January. The labor market remains broadly healthy but is showing early signs of cooling, particularly in rate-sensitive sectors like construction and financial services."
    ],

    watch_next_week: "All eyes turn to the March jobs report (Friday, April 10) — consensus expects +180K nonfarm payrolls. The new tariff regime takes effect April 9, which could trigger retaliatory measures from the EU and China. FOMC minutes from the March meeting drop Wednesday and will be scrutinized for any shift in the committee's tolerance for higher-for-longer rates.",

    wsj_articles: [
        {
            title: "Trump's Tariff Shock Sends Markets Reeling as Trade War Escalates",
            url: "https://www.wsj.com/economy/trade/tariffs-trade-war-markets-april-2026"
        },
        {
            title: "The Fed's Inflation Problem Isn't Going Away Anytime Soon",
            url: "https://www.wsj.com/economy/central-banking/fed-inflation-rate-cuts-2026"
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "4.310%", one_mo_ago: "4.320%", one_yr_ago: "5.310%" },
        "10-Year Treasury":   { current: "4.120%", one_mo_ago: "4.250%", one_yr_ago: "4.350%" },
        "Eff. Federal Funds": { current: "4.330%", one_mo_ago: "4.330%", one_yr_ago: "5.330%" },
        "Prime Rate":         { current: "7.500%", one_mo_ago: "7.500%", one_yr_ago: "8.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 5611.00, day_pct: -0.7, ytd_pct: -4.8, high_52w: 6144.15, vs_high: -8.7, low_52w: 5011.12, vs_low: 12.0 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 41989.00, day_pct: -0.5, ytd_pct: -3.2, high_52w: 45073.63, vs_high: -6.8, low_52w: 37611.56, vs_low: 11.6 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 17449.00, day_pct: -1.1, ytd_pct: -10.3, high_52w: 20173.89, vs_high: -13.5, low_52w: 15267.91, vs_low: 14.3 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 112.34, day_pct: 0.3,  ytd_pct: -5.2, high_52w: 135.00, vs_high: -16.8, low_52w: 96.84, vs_low: 16.0 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 42.15,  day_pct: -0.4, ytd_pct: -8.1, high_52w: 52.10,  vs_high: -19.1, low_52w: 38.50, vs_low: 9.5 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 163.80, day_pct: 0.1,  ytd_pct: -4.3, high_52w: 188.92, vs_high: -13.3, low_52w: 150.10, vs_low: 9.1 },
            { company: "First Industrial",      ticker: "FR",   price: 48.20,  day_pct: -0.2, ytd_pct: -6.7, high_52w: 56.80,  vs_high: -15.1, low_52w: 43.20, vs_low: 11.6 },
            { company: "Plymouth Industrial",   ticker: "PLYM", price: 20.45,  day_pct: -0.5, ytd_pct: -9.2, high_52w: 25.40,  vs_high: -19.5, low_52w: 18.50, vs_low: 10.5 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 60.10,  day_pct: 0.2,  ytd_pct: -3.8, high_52w: 70.25,  vs_high: -14.4, low_52w: 52.80, vs_low: 13.8 },
            { company: "Stag Industrial",        ticker: "STAG", price: 35.90,  day_pct: -0.3, ytd_pct: -2.1, high_52w: 40.80,  vs_high: -12.0, low_52w: 33.00, vs_low: 8.8 },
            { company: "Americold Realty",        ticker: "COLD", price: 23.50,  day_pct: 0.4,  ytd_pct: -1.5, high_52w: 30.10,  vs_high: -21.9, low_52w: 21.40, vs_low: 9.8 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 9.10,   day_pct: -0.1, ytd_pct: -4.5, high_52w: 10.50,  vs_high: -13.3, low_52w: 8.20,  vs_low: 11.0 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 98.40,  day_pct: -1.0, ytd_pct: -7.3, high_52w: 115.60, vs_high: -14.9, low_52w: 88.50, vs_low: 11.2 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts", ticker: "HST",  price: 15.82, day_pct: -1.2, ytd_pct: -11.5, high_52w: 20.50, vs_high: -22.8, low_52w: 14.90, vs_low: 6.2 },
            { company: "Apple REIT",            ticker: "APLE", price: 14.20, day_pct: -0.7, ytd_pct: -8.3,  high_52w: 17.10, vs_high: -17.0, low_52w: 13.10, vs_low: 8.4 },
            { company: "Park Hotels & Resorts", ticker: "PK",   price: 13.50, day_pct: -1.5, ytd_pct: -12.0, high_52w: 17.80, vs_high: -24.2, low_52w: 12.50, vs_low: 8.0 },
            { company: "Pebblebrook Hotel",     ticker: "PEB",  price: 12.80, day_pct: -0.8, ytd_pct: -9.7,  high_52w: 15.60, vs_high: -17.9, low_52w: 11.90, vs_low: 7.6 },
            { company: "Sunstone Hotel",        ticker: "SHO",  price: 9.85,  day_pct: -0.6, ytd_pct: -7.5,  high_52w: 11.80, vs_high: -16.5, low_52w: 9.10,  vs_low: 8.2 },
            { company: "RLJ Lodging Trust",     ticker: "RLJ",  price: 9.20,  day_pct: -0.9, ytd_pct: -10.2, high_52w: 11.50, vs_high: -20.0, low_52w: 8.60,  vs_low: 7.0 },
            { company: "DiamondRock Hospitality", ticker: "DRH", price: 8.15,  day_pct: -0.6, ytd_pct: -8.8,  high_52w: 10.20, vs_high: -20.1, low_52w: 7.50,  vs_low: 8.7 },
            { company: "Summit Hotel Properties", ticker: "INN", price: 5.90,  day_pct: -1.0, ytd_pct: -13.2, high_52w: 7.80,  vs_high: -24.4, low_52w: 5.40,  vs_low: 9.3 }
        ],
        "Lenders": [
            { company: "Blackstone",       ticker: "BX",   price: 137.50, day_pct: -0.9, ytd_pct: -8.5,  high_52w: 172.00, vs_high: -20.1, low_52w: 112.40, vs_low: 22.3 },
            { company: "Comerica",         ticker: "CMA",  price: 56.40,  day_pct: -0.5, ytd_pct: -6.3,  high_52w: 68.50,  vs_high: -17.7, low_52w: 48.20,  vs_low: 17.0 },
            { company: "Veritex",          ticker: "VBTX", price: 24.30,  day_pct: -0.8, ytd_pct: -5.8,  high_52w: 30.10,  vs_high: -19.3, low_52w: 21.50,  vs_low: 13.0 },
            { company: "BancFirst",        ticker: "BANF", price: 102.50, day_pct: 0.2,  ytd_pct: -2.1,  high_52w: 115.00, vs_high: -10.9, low_52w: 90.40,  vs_low: 13.4 },
            { company: "Busey",            ticker: "BUSE", price: 25.10,  day_pct: -0.4, ytd_pct: -4.5,  high_52w: 29.80,  vs_high: -15.8, low_52w: 22.50,  vs_low: 11.6 },
            { company: "Bank OZK",         ticker: "OZK",  price: 41.80,  day_pct: -1.2, ytd_pct: -9.0,  high_52w: 52.30,  vs_high: -20.1, low_52w: 37.10,  vs_low: 12.7 },
            { company: "The Hartford",     ticker: "HIG",  price: 110.20, day_pct: 0.3,  ytd_pct: 2.5,   high_52w: 118.50, vs_high: -7.0,  low_52w: 88.30,  vs_low: 24.8 }
        ],
        "Industry-related companies": [
            { company: "Amazon",            ticker: "AMZN", price: 192.45, day_pct: -1.4, ytd_pct: -8.7,  high_52w: 232.00, vs_high: -17.1, low_52w: 167.10, vs_low: 15.2 },
            { company: "United Parcel Service", ticker: "UPS", price: 98.60, day_pct: -0.6, ytd_pct: -14.2, high_52w: 142.50, vs_high: -30.8, low_52w: 90.10, vs_low: 9.4 },
            { company: "FedEx Corporation", ticker: "FDX",  price: 245.80, day_pct: -0.4, ytd_pct: -11.5, high_52w: 310.50, vs_high: -20.8, low_52w: 225.00, vs_low: 9.2 },
            { company: "Target Corporation", ticker: "TGT", price: 108.30, day_pct: -0.9, ytd_pct: -20.1, high_52w: 157.00, vs_high: -31.0, low_52w: 100.20, vs_low: 8.1 },
            { company: "GXO Logistics",     ticker: "GXO",  price: 38.50,  day_pct: -0.7, ytd_pct: -16.3, high_52w: 55.20,  vs_high: -30.3, low_52w: 35.80,  vs_low: 7.5 },
            { company: "Marriott International", ticker: "MAR", price: 261.30, day_pct: 0.6, ytd_pct: -5.0, high_52w: 298.00, vs_high: -12.3, low_52w: 228.50, vs_low: 14.4 },
            { company: "Hilton Hotels",     ticker: "HLT",  price: 228.10, day_pct: 0.4,  ytd_pct: -4.2,  high_52w: 262.00, vs_high: -12.9, low_52w: 198.40, vs_low: 15.0 },
            { company: "American Airlines", ticker: "AAL",  price: 12.10,  day_pct: -3.0, ytd_pct: -18.8, high_52w: 17.50,  vs_high: -30.9, low_52w: 10.50,  vs_low: 15.2 },
            { company: "Southwest Airlines", ticker: "LUV", price: 30.80,  day_pct: -1.5, ytd_pct: -12.0, high_52w: 38.50,  vs_high: -20.0, low_52w: 27.20,  vs_low: 13.2 },
            { company: "Las Vegas Sands",   ticker: "LVS",  price: 44.20,  day_pct: -0.5, ytd_pct: -6.8,  high_52w: 54.30,  vs_high: -18.6, low_52w: 38.90,  vs_low: 13.6 },
            { company: "TSMC",              ticker: "TSM",  price: 162.80, day_pct: -1.8, ytd_pct: -6.2,  high_52w: 205.00, vs_high: -20.6, low_52w: 126.40, vs_low: 28.8 },
            { company: "Delta Airlines",    ticker: "DAL",  price: 48.75,  day_pct: -2.1, ytd_pct: -15.5, high_52w: 65.80,  vs_high: -25.9, low_52w: 42.20,  vs_low: 15.5 },
            { company: "Ferguson Enterprises", ticker: "FERG", price: 178.50, day_pct: -0.3, ytd_pct: -7.8, high_52w: 212.00, vs_high: -15.8, low_52w: 165.40, vs_low: 7.9 },
            { company: "International Paper", ticker: "IP",  price: 48.90,  day_pct: -0.6, ytd_pct: -5.4,  high_52w: 58.40,  vs_high: -16.3, low_52w: 40.20,  vs_low: 21.6 },
            { company: "Tandy Leather Factory", ticker: "TLF", price: 4.85, day_pct: 0.0,  ytd_pct: -2.0,  high_52w: 6.10,   vs_high: -20.5, low_52w: 4.20,   vs_low: 15.5 },
            { company: "Lincoln Tech",      ticker: "LINC", price: 12.40,  day_pct: 0.8,  ytd_pct: 5.1,   high_52w: 14.20,  vs_high: -12.7, low_52w: 9.80,   vs_low: 26.5 }
        ]
    }
};
