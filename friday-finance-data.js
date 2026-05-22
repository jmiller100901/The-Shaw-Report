// Friday Finance — Week of May 22, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "May 22, 2026",
    date_short: "5.22.26",

    quote: {
        text: "Blessed are the young, for they shall inherit the national debt.",
        author: "Herbert Hoover"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,413", change_pct: -0.26 },
        { symbol: "DJIA", price: "49,935", change_pct: -0.15 },
        { symbol: "IXIC", price: "26,178", change_pct: -0.35 },
        { symbol: "PLD",  price: "144.68", change_pct: -0.50 },
        { symbol: "HST",  price: "21.61", change_pct: -0.69 },
        { symbol: "BX",   price: "118.57", change_pct: -1.06 },
        { symbol: "AMZN", price: "268.87", change_pct: -0.20 },
        { symbol: "MAR",  price: "369.75", change_pct: -0.49 },
        { symbol: "DAL",  price: "75.51", change_pct: +1.36 },
        { symbol: "AAL",  price: "13.54", change_pct: +0.30 },
        { symbol: "FDX",  price: "386.84", change_pct: -1.41 }
    ],

    news_bullets: [
        "<b>Moody's strips US of last AAA rating — 30-year Treasury hits 5.19% (highest since pre-financial crisis), 10-year spikes to 4.70%, both pull back as Iran peace deal advances to 'final stages'; Big Beautiful Bill adds $3.4T to debt through 2034.</b> Moody's downgraded the US sovereign credit rating to <b>Aa1 from Aaa</b> on Friday May 16 — completing a clean sweep with S&P (downgraded 2011) and Fitch (2023). Markets opened sharply lower on Monday: the <b>30-year Treasury yield surged to 5.19%</b>, its highest level since before the 2008 financial crisis, and the <b>10-year hit an intraday high of 4.70%</b>. The proximate fiscal catalyst is House Republicans advancing the <b>\"One Big Beautiful Bill\" — a $3.4 trillion net addition to US debt by 2034</b> per the CBO, extending current tax rates while adding new deductions for tips, overtime, and auto loan interest. Bond markets recovered midweek after Trump declared US-Iran peace talks are in the <b>\"final stages,\"</b> with Pakistan's army chief facilitating; <b>Brent crude fell 5.6% on May 20</b> to $104.20 — the sharpest single-day drop of 2026. The 10-year closed the week at approximately <b>4.58%</b> and the 30-year at roughly <b>4.95%</b> — still materially elevated from last Friday's close. <b>CRE angle:</b> The 10-year swinging 40bps in a single week illustrates the volatility premium Jackson Shaw must build into every deal underwrite. The convergence of a structural US fiscal deterioration (Moody's) with a tactical geopolitical risk premium (Iran) means the long end has a floor that fundamental data alone no longer anchors. Any deal requiring 10-year-linked financing should be stress-tested against 4.75%–5.00% for the remainder of 2026.",

        "<b>Nvidia Q1 FY2027 beats massively — revenue +85% to $81.62B, data center $75.2B — but stock slides on 'sell the news'; hyperscaler capex reaches $725B in 2026, up 77% YoY; Arm +15%, SoftBank +20% as AI trade resets around infrastructure.</b> Nvidia reported Q1 FY2027 on May 20 post-close: revenue <b>$81.62B</b> (+85% YoY, versus the $44.06B a year ago), beating the <b>$78B consensus</b>. Data center unit revenue was <b>$75.2B</b> (estimate: $73.5B). Adjusted EPS <b>$1.87</b> beat the $1.77 estimate. CEO Jensen Huang declared that <b>\"agentic artificial intelligence has arrived and the AI factory buildout is accelerating at extraordinary speed.\"</b> Despite the blowout print, NVDA shares slid modestly in post-market and Thursday trading — a classic \"sell the news\" response to an already fully-priced stock. The more durable signal is in hyperscaler capex: Alphabet, Amazon, Microsoft, and Meta have collectively committed <b>$725B in 2026 capital expenditure — up 77% from $410B in 2025</b>. Arm Holdings closed <b>+15%</b> and SoftBank surged <b>+19.85%</b> in sympathy. <b>CRE angle:</b> The $725B hyperscaler buildout is a direct demand driver for Tongrun International (Jackson Shaw tenant), which manufactures electrical enclosures and racking solutions for AI data center infrastructure. Tongrun's Platinum Equity backing and data center order flow puts it squarely in the highest-demand industrial end-market of 2026. For Jackson Shaw's broader DFW industrial portfolio, every dollar of data center capex drives downstream logistics, power generation, and supplier manufacturing demand.",

        "<b>Walmart Q1 FY2027 cautious profit guidance sends WMT -8%, repricing the entire retail sector; tariff commentary — \"145% is not a good outcome for retailers\" — signals margin pressure is just beginning; consumer stress visible beneath headline +4.1% comp.</b> Walmart reported Q1 FY2027 on May 21: net sales <b>$117.2B (+4.5%)</b>, US comp sales <b>+4.1%</b> driven by accelerated transactions and unit volumes — strong headline numbers. But cautious profit guidance for Q2 (EPS <b>$0.72–$0.74</b>, operating income +7–10%) and a frank tariff warning sent shares down approximately <b>8%</b> — the stock's worst single-day performance in years. Management stated that <b>tariffs approaching 145% on certain countries \"are not a good outcome for retailers\"</b> and affirmed full-year guidance only \"with tariffs at this level\" — an implicit acknowledgment that any further tariff escalation breaks the model. The call language repriced the entire retail complex; Target and other importers sold off in sympathy. The consumer spending breakdown tells the real story: strong grocery and general merchandise volumes, but upper-income household share gains suggest trade-down effects are spreading. <b>CRE angle:</b> Retailer margin compression from tariffs reinforces the structural advantage of industrial over retail real estate. Jackson Shaw's tenant base — distribution, light manufacturing, contract manufacturing — serves the backroom logistics layer of the same commerce Walmart depends on, without the tariff pass-through exposure retailers face at the shelf.",

        "<b>S&amp;P 500 and Nasdaq hit fresh all-time highs midweek before selling off Friday on yield spike and options expiration; market breadth narrows; week ends below last Friday's close as Treasury volatility, Walmart, and Salesforce weigh.</b> Both the S&amp;P 500 and Nasdaq reached fresh all-time highs early in the week — with the S&amp;P closing above <b>7,529</b> (new record) before reversing. By Thursday, Nvidia's \"sell the news\" reaction and a rebound in Treasury yields sent the <b>S&amp;P down 0.5%</b> and the <b>Nasdaq 100 down 0.7%</b>. Friday's options expiration amplified the selloff: the S&amp;P closed around <b>7,413</b>, down roughly 0.3% on the week from last Friday's 7,441. Major drags: <b>Walmart -8%</b> (tariff guidance), <b>Salesforce -4.3%</b>, and <b>Sherwin-Williams -2.2%</b>. Airlines and hospitality were the notable exceptions — <b>Delta +7.5%</b> and <b>American Airlines +6.6%</b> on the week as lower oil prices cut fuel cost expectations. Market breadth continues to deteriorate: the index gains are concentrated in a narrowing set of AI-adjacent names, with the equal-weighted S&amp;P underperforming the cap-weighted index by approximately 1.5% on the week. <b>CRE angle:</b> Narrow market breadth concentrated in mega-cap tech is a caution sign for the broader corporate confidence Jackson Shaw relies on for tenant expansion decisions. Airlines recovering sharply on oil relief is a direct positive for the hospitality REIT sector and any Jackson Shaw assets with hospitality-adjacent tenant exposure.",

        "<b>International Paper closes Texas plants (117 jobs, Edinburg TX site), lowers 2026 EBITDA guidance, draws JP Morgan Negative Catalyst Watch; acquires Delmarva Corrugated on May 18 — restructuring accelerates in both directions simultaneously.</b> International Paper (NYSE: IP) disclosed the permanent closure of its <b>Edinburg, Texas</b> sheet and box plant, eliminating <b>117 jobs</b> and converting the facility to warehouse use; McAllen TX absorbs displaced operations. Separately, on May 18, IP acquired <b>Delmarva Corrugated Packaging</b> in Dover, Delaware — a strategic East Coast capacity addition. The simultaneous Texas contraction and East Coast expansion reflects IP's regional consolidation strategy. Financial guidance was trimmed: <b>North America EBITDA guidance cut to $2.35–2.5B</b> (from $2.5–2.6B), EMEA to $900M–$1.0B (from $1.0–1.1B). <b>J.P. Morgan placed IP on Negative Catalyst Watch</b>, flagging execution risk as analysts reduce estimates. IP stock at approximately <b>$30.80</b> — down <b>~40% YTD</b>, approaching the 52-week low of $29.45. <b>CRE angle:</b> Edinburg TX is in the Rio Grande Valley — geographically separate from the Jackson Shaw / DFW market — but IP's North American restructuring is accelerating. The JP Morgan Negative Catalyst Watch implies further restructuring announcements are expected. <b>Actionable:</b> Request direct written confirmation from IP's regional real estate contact that the Jackson Shaw-held IP facility is not in any current or planned closure pipeline before Q2 earnings (expected late July)."
    ],

    watch_next_week: "<b>June 10 CPI print is the singular most important data point before Warsh's first FOMC on June 16–17.</b> A third consecutive acceleration (consensus: +3.9% YoY) would all but eliminate any chance of a June cut and raise the tail risk of a June hike. <b>Iran peace deal:</b> Trump said talks are in \"final stages\" on May 20 — a durable deal removes $10–20 per barrel from Brent and 15–25bps from the 10-year's energy-risk premium. Watch for any ceasefire framework announcement; failure to close will reinflate oil and revive yield pressure heading into FOMC. <b>The Big Beautiful Bill</b> is moving toward a House floor vote — the CBO's $3.4T net debt score is the contested number; any Senate amendment restoring SALT deductions would add more. <b>Kevin Warsh's communications calendar:</b> Any non-press-conference speech before June 16 will set the hawkish/neutral tone register for his first FOMC. His opening communication posture on QT pace is the most anticipated variable in the CRE capital markets calendar.",

    reading_links: [
        {
            title: "30-year Treasury yield tops 5.19%, highest since before the financial crisis",
            url: "https://www.cnbc.com/2026/05/19/treasurys-yields-inflation-traders-fed-interest-rates.html",
            source: "CNBC",
            description: "The definitive May 19 rate account: 30-year at 5.19%, 10-year intraday high of 4.70%, driven by Moody's downgrade and Big Beautiful Bill fiscal concerns. Documents the single worst bond market open of 2026 and explains the structural convergence of Moody's, tariff inflation, and congressional tax cuts that sent long yields to crisis-era levels. Essential context for any Jackson Shaw deal being stress-tested against a 5%+ long-end environment."
        },
        {
            title: "Nvidia earnings takeaways: Data center revenue nearly doubles, report is strong but stock slides",
            url: "https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html",
            source: "CNBC",
            description: "Nvidia Q1 FY2027 earnings breakdown: revenue $81.62B (+85%), data center $75.2B, hyperscaler capex collectively $725B in 2026 (+77%). Despite the massive beat, NVDA stock slid — the critical CRE read is the $725B infrastructure buildout, which drives direct demand for Tongrun International's AI data center enclosure business and broad DFW industrial logistics demand."
        },
        {
            title: "Stock Market Today, May 21: Walmart Shares Slide After Cautious Profit Guidance Highlights Margin Pressure",
            url: "https://www.fool.com/coverage/stock-market-today/2026/05/21/stock-market-today-may-21-walmart-shares-slide-after-cautious-profit-guidance-highlights-margin-pressure/",
            source: "The Motley Fool",
            description: "Full account of Walmart's cautious Q2 profit guidance and the tariff commentary that drove an ~8% single-day stock decline. The key analyst observation: Walmart was priced for perfection and the tariff pass-through timing is creating a sector-wide repricing. Important context for Jackson Shaw's industrial tenant base — tariff stress on retailers is a structural tailwind for distribution and logistics real estate."
        },
        {
            title: "Moody's Ratings downgrades United States to Aa1, stable outlook",
            url: "https://ratings.moodys.com/ratings-news/443154",
            source: "Moody's Ratings",
            description: "Official Moody's release: US downgraded to Aa1 from Aaa, citing rising federal debt projected to reach 134% of GDP by 2035 and structural revenue/spending imbalances. The first time all three major agencies have rated US debt below AAA simultaneously. Directly relevant to Jackson Shaw's long-term financing environment: a structurally higher sovereign risk premium supports a permanently elevated 10-year floor."
        },
        {
            title: "International Paper closes Texas plants, cuts 117 jobs",
            url: "https://finance.yahoo.com/news/international-paper-closes-texas-plants-165457442.html",
            source: "Yahoo Finance",
            description: "Confirmed closure of IP's Edinburg TX sheet/box plant (117 jobs) and site conversion to warehouse use, with McAllen TX absorbing displaced operations. Alongside JP Morgan's Negative Catalyst Watch and lowered 2026 EBITDA guidance, this is the key Jackson Shaw portfolio watch item this week. The Edinburg closure is geographically separate from the DFW market but confirms North American restructuring is accelerating — direct engagement with IP's regional real estate contact is warranted."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.627%", one_mo_ago: "3.645%", one_yr_ago: "4.380%" },
        "10-Year Treasury":   { current: "4.580%", one_mo_ago: "4.305%", one_yr_ago: "4.440%" },
        "Eff. Federal Funds": { current: "3.620%", one_mo_ago: "3.620%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7413.00,  day_pct: -0.26, ytd_pct: 7.5,   high_52w: 7529.31,  vs_high: -1.5,  low_52w: 5101.63,  vs_low: 45.3 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 49935.00, day_pct: -0.15, ytd_pct: 3.9,   high_52w: 50743.52, vs_high: -1.6,  low_52w: 37830.66, vs_low: 32.0 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 26178.00, day_pct: -0.35, ytd_pct: 7.7,   high_52w: 26789.41, vs_high: -2.3,  low_52w: 15685.33, vs_low: 66.9 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 144.68, day_pct: -0.50, ytd_pct: 12.0,  high_52w: 146.21, vs_high: -1.0,  low_52w: 103.02, vs_low: 40.4 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 35.40,  day_pct: -0.84, ytd_pct: -7.4,  high_52w: 44.38,  vs_high: -20.2, low_52w: 29.68,  vs_low: 19.3 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 205.10, day_pct: -0.70, ytd_pct: 14.2,  high_52w: 206.36, vs_high: -0.6,  low_52w: 143.20, vs_low: 43.2 },
            { company: "First Industrial",      ticker: "FR",   price: 62.30,  day_pct: -1.10, ytd_pct: 9.9,   high_52w: 63.21,  vs_high: -1.4,  low_52w: 42.80,  vs_low: 45.6 },
            { company: "Plymouth Industrial",   ticker: "PLYM", price: 21.70,  day_pct: -0.91, ytd_pct: -1.3,  high_52w: 24.50,  vs_high: -11.4, low_52w: 18.20,  vs_low: 19.2 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 65.10,  day_pct: -1.11, ytd_pct: 3.2,   high_52w: 67.30,  vs_high: -3.3,  low_52w: 48.10,  vs_low: 35.3 },
            { company: "Stag Industrial",        ticker: "STAG", price: 38.09,  day_pct: -0.55, ytd_pct: 3.6,   high_52w: 40.10,  vs_high: -5.0,  low_52w: 31.20,  vs_low: 22.1 },
            { company: "Americold Realty",        ticker: "COLD", price: 22.60,  day_pct: -0.88, ytd_pct: -8.6,  high_52w: 28.50,  vs_high: -20.7, low_52w: 19.80,  vs_low: 14.1 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.45,   day_pct: -0.94, ytd_pct: -9.4,  high_52w: 10.50,  vs_high: -19.5, low_52w: 7.20,   vs_low: 17.4 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 104.80, day_pct: -0.70, ytd_pct: 1.8,   high_52w: 118.00, vs_high: -11.2, low_52w: 80.20,  vs_low: 30.7 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 21.61, day_pct: -0.69, ytd_pct: 10.6,  high_52w: 22.36,  vs_high: -3.4,  low_52w: 14.46, vs_low: 49.4 },
            { company: "Apple REIT",              ticker: "APLE", price: 11.40, day_pct: -0.52, ytd_pct: -13.0, high_52w: 14.80,  vs_high: -23.0, low_52w: 10.40, vs_low: 9.6  },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 10.35, day_pct: -1.24, ytd_pct: -15.4, high_52w: 14.10,  vs_high: -26.6, low_52w: 9.60,  vs_low: 7.8  },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 10.30, day_pct: -0.96, ytd_pct: -20.2, high_52w: 14.50,  vs_high: -28.9, low_52w: 7.41,  vs_low: 39.0 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 8.79,  day_pct: -0.23, ytd_pct: -12.5, high_52w: 12.27,  vs_high: -28.4, low_52w: 7.45,  vs_low: 18.0 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 6.65,  day_pct: -0.90, ytd_pct: -20.8, high_52w: 9.80,   vs_high: -32.1, low_52w: 6.16,  vs_low: 8.0  },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 7.45,  day_pct: -0.67, ytd_pct: -25.5, high_52w: 10.67,  vs_high: -30.2, low_52w: 6.16,  vs_low: 20.9 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 5.25,  day_pct: -0.94, ytd_pct: -14.9, high_52w: 6.00,   vs_high: -12.5, low_52w: 3.57,  vs_low: 47.1 }
        ],
        "Lenders": [
            { company: "Blackstone",              ticker: "BX",   price: 118.57, day_pct: -1.06, ytd_pct: -22.6, high_52w: 190.09, vs_high: -37.6, low_52w: 101.73, vs_low: 16.5 },
            { company: "Fifth Third Bancorp",     ticker: "FITB", price: 47.35,  day_pct: -0.73, ytd_pct: 0.9,   high_52w: 57.00,  vs_high: -16.9, low_52w: 31.20,  vs_low: 51.8 },
            { company: "Huntington Bancshares",   ticker: "HBAN", price: 15.50,  day_pct: -0.32, ytd_pct: -10.1, high_52w: 19.50,  vs_high: -20.5, low_52w: 11.91,  vs_low: 30.1 },
            { company: "BancFirst",               ticker: "BANF", price: 109.50, day_pct: -0.91, ytd_pct: -8.0,  high_52w: 138.77, vs_high: -21.1, low_52w: 97.02,  vs_low: 12.9 },
            { company: "Busey",                   ticker: "BUSE", price: 26.40,  day_pct: -0.50, ytd_pct: -1.0,  high_52w: 27.95,  vs_high: -5.5,  low_52w: 18.40,  vs_low: 43.5 },
            { company: "Bank OZK",                ticker: "OZK",  price: 47.35,  day_pct: -0.27, ytd_pct: -2.1,  high_52w: 53.66,  vs_high: -11.8, low_52w: 35.71,  vs_low: 32.6 },
            { company: "The Hartford",            ticker: "HIG",  price: 133.00, day_pct: -0.41, ytd_pct: 4.0,   high_52w: 144.50, vs_high: -8.0,  low_52w: 119.61, vs_low: 11.2 }
        ],
        "Industry-related companies": [
            { company: "Amazon",                  ticker: "AMZN", price: 268.87, day_pct: -0.20, ytd_pct: 16.5,  high_52w: 273.07, vs_high: -1.5,  low_52w: 165.29, vs_low: 62.7 },
            { company: "United Parcel Service",   ticker: "UPS",  price: 98.87,  day_pct: -1.50, ytd_pct: -10.9, high_52w: 122.41, vs_high: -19.2, low_52w: 82.00,  vs_low: 20.6 },
            { company: "FedEx Corporation",       ticker: "FDX",  price: 386.84, day_pct: -1.41, ytd_pct: 3.0,   high_52w: 404.03, vs_high: -4.2,  low_52w: 194.30, vs_low: 99.1 },
            { company: "Target Corporation",      ticker: "TGT",  price: 122.50, day_pct: -0.57, ytd_pct: 6.0,   high_52w: 133.00, vs_high: -7.9,  low_52w: 83.44,  vs_low: 46.8 },
            { company: "GXO Logistics",           ticker: "GXO",  price: 49.85,  day_pct: -1.06, ytd_pct: 1.3,   high_52w: 66.85,  vs_high: -25.4, low_52w: 30.46,  vs_low: 63.7 },
            { company: "Marriott International",  ticker: "MAR",  price: 369.75, day_pct: -0.49, ytd_pct: 14.8,  high_52w: 372.40, vs_high: -0.7,  low_52w: 205.40, vs_low: 80.0 },
            { company: "Hilton Hotels",           ticker: "HLT",  price: 309.00, day_pct: -0.99, ytd_pct: -2.0,  high_52w: 340.00, vs_high: -9.1,  low_52w: 201.15, vs_low: 53.6 },
            { company: "American Airlines",       ticker: "AAL",  price: 13.54,  day_pct: +0.30, ytd_pct: 3.4,   high_52w: 16.50,  vs_high: -18.0, low_52w: 8.92,   vs_low: 51.9 },
            { company: "Southwest Airlines",      ticker: "LUV",  price: 39.00,  day_pct: -0.33, ytd_pct: -1.7,  high_52w: 55.11,  vs_high: -29.2, low_52w: 23.82,  vs_low: 63.7 },
            { company: "Las Vegas Sands",         ticker: "LVS",  price: 50.70,  day_pct: -1.45, ytd_pct: -10.4, high_52w: 70.45,  vs_high: -28.0, low_52w: 30.18,  vs_low: 68.0 },
            { company: "TSMC",                    ticker: "TSM",  price: 407.15, day_pct: -1.90, ytd_pct: 14.7,  high_52w: 421.97, vs_high: -3.5,  low_52w: 190.03, vs_low: 114.3 },
            { company: "Delta Airlines",          ticker: "DAL",  price: 75.51,  day_pct: +1.36, ytd_pct: 9.3,   high_52w: 76.39,  vs_high: -1.2,  low_52w: 36.56,  vs_low: 106.5 },
            { company: "Ferguson Enterprises",    ticker: "FERG", price: 230.00, day_pct: -0.43, ytd_pct: -2.0,  high_52w: 271.64, vs_high: -15.3, low_52w: 146.00, vs_low: 57.5 },
            { company: "International Paper",     ticker: "IP",   price: 30.80,  day_pct: -0.32, ytd_pct: -40.4, high_52w: 56.13,  vs_high: -45.1, low_52w: 29.45,  vs_low: 4.6  },
            { company: "Tandy Leather Factory",   ticker: "TLF",  price: 4.60,   day_pct: -1.07, ytd_pct: -7.1,  high_52w: 6.10,   vs_high: -24.6, low_52w: 4.10,   vs_low: 12.2 },
            { company: "Lincoln Tech",            ticker: "LINC", price: 50.21,  day_pct: -0.10, ytd_pct: 105.0, high_52w: 52.10,  vs_high: -3.6,  low_52w: 14.79,  vs_low: 239.5 }
        ]
    }
};
