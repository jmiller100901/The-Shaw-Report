// Friday Finance — Week of June 12, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "June 12, 2026",
    date_short: "6.12.26",

    quote: {
        text: "The four most expensive words in the English language are, 'This time it's different.'",
        author: "John Templeton"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,440", change_pct: 0.62 },
        { symbol: "DJIA", price: "51,050", change_pct: 0.39 },
        { symbol: "IXIC", price: "26,220", change_pct: 1.59 },
        { symbol: "SPCX", price: "135.00", change_pct: 0.00 },
        { symbol: "FITB", price: "54.20",  change_pct: 1.57 },
        { symbol: "NUVL", price: "122.80", change_pct: 0.33 },
        { symbol: "LINC", price: "51.80",  change_pct: 2.08 },
        { symbol: "IP",   price: "35.30",  change_pct: 0.94 },
        { symbol: "SAIL", price: "28.30",  change_pct: -2.12 },
        { symbol: "DAL",  price: "83.90",  change_pct: 2.09 }
    ],

    news_bullets: [
        "<b>May CPI +4.2% YoY — highest in three years — arrives 6 days before Warsh's inaugural FOMC; core CPI +2.9% YoY (contained); markets sell off hard Wednesday then stage Iran-driven recovery Thursday–Friday; rate cut odds fully evaporate.</b> The Bureau of Labor Statistics reported May CPI on <b>June 10</b>: headline at <b>+4.2% YoY, +0.5% MoM</b> — the highest annual rate since <b>April 2023</b>. Core CPI accelerated just <b>+0.2% MoM and +2.9% YoY</b>, below the 0.3% estimate — the one silver lining. The inflation surge is almost entirely energy-driven: energy prices <b>+3.9% MoM (+23.5% YoY)</b>, with gasoline alone <b>+40.5% YoY</b>, directly attributable to the Iran Strait of Hormuz disruption. The market reaction was swift: <b>Dow -953 pts (-1.87%) to 49,919</b>, <b>S&P 500 -1.62% to 7,267</b>, <b>Nasdaq -1.98% to 25,170</b> on June 10. CME FedWatch completely zeroed out 2026 rate cut probabilities — a full reversal from the <b>33–55% cut odds</b> priced just days prior. The Fed is widely expected to <b>hold at 3.50–3.75%</b> at the June 16–17 FOMC while stripping any remaining easing bias from the statement. <b>CRE angle:</b> The 10-year Treasury is now locked at <b>~4.55%</b> — cap rate compression is off the table for 2026. Jackson Shaw construction financing assumptions should anchor to the <b>4.50–4.75% Treasury corridor</b> through at least Q3 2026. The silver lining: core inflation at 2.9% YoY shows that the price shock is supply-side and energy-specific — not yet a demand-driven spiral that would force rate hikes.",

        "<b>May PPI +6.5% YoY — largest 12-month producer price surge since November 2022 — confirms full inflationary pipeline; energy component +23.4% MoM for gasoline; stage 1 intermediate demand +3.2%, largest increase since index inception.</b> The Bureau of Labor Statistics released May Producer Price Index data on <b>June 11</b>: final demand PPI <b>+1.1% MoM, +6.5% YoY</b> — the largest 12-month increase since <b>November 2022</b>. Final demand goods surged <b>+2.8% MoM</b>, the single-largest monthly increase since PPI data began. The breakdown: <b>gasoline +23.4% MoM</b> (Iran oil shock), diesel fuel, jet fuel, industrial chemicals, and natural gas liquids all rising sharply. Core/services PPI rose a moderate <b>+0.3%</b>. Stage 1 intermediate demand rose <b>+3.2%</b> — the largest ever recorded, indicating that upstream cost pressures will continue flowing through to consumer prices in Q3. The CPI + PPI combination is the most hostile paired inflation reading since 2022. <b>CRE angle:</b> Elevated construction input costs (steel, concrete, logistics, energy) will persist through Q3 given the PPI pipeline data. Jackson Shaw development budget modeling for projects breaking ground H2 2026 or H1 2027 should stress-test a <b>5–8% construction cost escalation scenario</b> relative to current contract bids, on top of the financing cost headwinds from the elevated Treasury environment.",

        "<b>Iran deal framework reached — Trump cancels strikes, oil falls to $86.30 WTI; Strait of Hormuz reopening imminent; markets stage sharp Thursday–Friday reversal: Dow +930 pts to 50,848, S&amp;P +1.75% to 7,394, Nasdaq +2.54% to 25,810; airlines surge on fuel cost relief.</b> After a volatile week, <b>President Trump canceled planned military strikes on Iran</b> and announced a framework agreement late Wednesday night, with the Strait of Hormuz expected to reopen shortly after formal signing. Oil fell sharply: <b>WTI crude to $86.30/bbl (-1.61%)</b>, <b>Brent to $88.80/bbl (-1.75%)</b> on Friday. The equity recovery was broad: <b>Dow +929.97 pts (+1.86%) on June 11</b>, <b>S&P 500 +1.75%</b>, <b>Nasdaq +2.54%</b>. Airlines led the advance — <b>Delta (DAL) +2.1%</b>, <b>American (AAL) +2.1%</b>, <b>Southwest (LUV) +2.1%</b> — as the Iran risk premium collapsed from fuel cost models. Oil prices remain elevated vs. pre-war levels (WTI was ~$65 in April 2025) but the direction has decisively shifted lower. <b>CRE angle:</b> The Iran deal framework is a significant positive for the industrial supply chain. Oil at $86/bbl vs. $98+ intraday highs reduces energy cost headwinds for distribution-heavy tenants. If the Strait formally reopens, the oil risk premium will compress further — potentially taking WTI to the high-$70s, which would be meaningful relief on the energy component of May CPI and June PPI pipeline costs. Watch the formal treaty signing timeline for the next oil leg lower.",

        "<b>SpaceX SPCX debuts on Nasdaq at $135/share — $75B raised, $1.77T valuation, largest IPO in market history; Fifth Third (FITB) begins NYSE trading today — largest bank listing transfer in history; GSK acquires Nuvalent (NUVL) for $10.6B; SailPoint (SAIL) -12.2% on earnings miss.</b> <b>SpaceX (Nasdaq: SPCX)</b> went public today at <b>$135/share</b>, raising <b>$75 billion</b> — the largest initial public offering in stock market history — at a <b>$1.77 trillion valuation</b>. Demand exceeded $250B with retail orders alone surpassing $100B (3.5–4× oversubscribed). Separately, <b>Fifth Third Bancorp (Nasdaq→NYSE: FITB)</b> began trading on the New York Stock Exchange today — CEO Tim Spence rang the opening bell, marking what NYSE called <b>the largest bank listing transfer in its history</b>. On the M&A front, <b>GlaxoSmithKline agreed to acquire Nuvalent (NUVL) for $10.6B</b> ($124/share cash, <b>+40% premium</b>) announced June 9 — giving GSK late-stage ROS1 and ALK inhibitors for NSCLC with FDA PDUFA dates September and November 2026. <b>SailPoint (SAIL)</b> fell <b>-12.2%</b> after reporting Q1 EPS of -$0.13 vs. +$0.04 estimated. <b>CRE angle:</b> SpaceX's $75B IPO is the institutional capstone of the AI + space infrastructure investment cycle. Starlink's satellite internet revenue ($8B+ annualized) is directly relevant for distribution center and industrial tenant connectivity — reducing the broadband infrastructure barrier for rural warehouse-format tenants in markets like Bonham TX. The NYSE listing transition for FITB reflects growing institutional profile for this key Jackson Shaw construction lending partner.",

        "<b>CBRE Lending Momentum Index hits 1.5 in Q1 2026 — five-year high, fifth consecutive quarter of expansion; alternative lenders (debt funds) +280% YoY; average loan sizes +14% YoY; DFW industrial asking rents $10.14/SF (record) with Q1 leasing volume at 21.0 MSF — highest Q1 on record.</b> The <b>CBRE Lending Momentum Index</b> rose to <b>1.5 in Q1 2026</b>, up from 1.2 in Q4 2025 and 0.3 a year ago — its <b>highest level since 2021</b> and the fifth consecutive quarter of expansion. Key drivers: average loan sizes increased <b>+14% YoY</b>, commercial mortgage spreads declined <b>2 bps YoY to 181 bps</b>, and <b>alternative lenders (debt funds, mortgage REITs)</b> accounted for <b>53% of non-agency closings</b> — up from 19% a year ago, with debt fund volume <b>+280% YoY</b>. Agency volume (Fannie/Freddie) rose <b>+35% YoY to $29.9B</b>. The CRE lending market is broadening dramatically beyond traditional banks. In DFW specifically: Q1 2026 industrial asking rents reached <b>$10.14/SF</b> (+8.3% YoY, new record), and Q1 leasing volume totaled <b>21.0 MSF — the highest first-quarter leasing volume on record</b>. Despite 8.6% vacancy (elevated), demand metrics are historically strong. <b>CRE angle:</b> The 280% surge in debt fund lending volume is the single most important capital markets signal for Jackson Shaw: the market is no longer bank-dependent for construction and bridge financing. As traditional banks (OZK, Huntington, Fifth Third) navigate Category III transitions and CRE concentration constraints, alternative capital is filling the gap — at scale, on competitive terms. Jackson Shaw should be proactively engaging debt fund relationships alongside its bank partners to optimize the capital stack for 2026–2027 project financing."
    ],

    watch_next_week: "<b>FOMC June 16–17 (Tuesday–Wednesday)</b> is the most consequential interest rate event of 2026. Kevin Warsh chairs his <b>inaugural FOMC meeting</b>, with a full <b>Summary of Economic Projections (dot plot) and press conference at 2:00 PM ET Wednesday, June 17</b>. Consensus: <b>hold at 3.50–3.75%</b>. Rate cut odds have fully zeroed out following the <b>4.2% May CPI</b> and <b>6.5% May PPI</b>; the market focus shifts to whether any 2026 dot plot member projects a rate <b>hike</b> — which would be the first explicit hike signal since 2018. Warsh's press conference language on the neutral rate, QT pace, and energy/Iran inflation tolerance will set the market tone through Q3 2026. Watch the dissent count: April had four dissenters. Also this week: <b>Empire State Manufacturing Survey (Monday, June 16)</b>; <b>May Retail Sales (Tuesday, June 17)</b> — consensus +0.3%, a beat would add further hawkish pressure; <b>May Housing Starts and Building Permits (Wednesday, June 18)</b> — key signal for construction pipeline vs. demand. <b>Thursday, June 19 — Juneteenth:</b> US equity markets closed. <b>Tenant/company highlights:</b> Lincoln Tech CEO Scott Shaw and CFO Brian Meyers present at the <b>Northland Growth Conference — Tuesday, June 23 (virtual)</b> — the third investor conference in June, following the Rosenblatt (June 9) and East Coast IDEAS (June 10) appearances. Expect continued institutional engagement around our <b>Rowlett TX campus</b> build-out and the 2030 targets of <b>$850M revenue / $150M EBITDA</b>. LINC's three investor conferences in a single month reflects the extraordinary institutional attention surrounding its +100%+ YTD performance — each presentation is an opportunity for new institutional buyers to initiate positions.",

    reading_links: [
        {
            title: "CPI inflation report May 2026: Prices rose 4.2% annually",
            url: "https://www.cnbc.com/2026/06/10/cpi-inflation-report-may-2026.html",
            source: "CNBC",
            description: "May 2026 CPI deep-dive: +4.2% YoY (+0.5% MoM), highest since April 2023, driven by energy +23.5% YoY (gasoline +40.5%) due to Iran Strait of Hormuz disruption. Core CPI contained at +2.9% YoY. Markets sold off sharply on the print; rate cut expectations fully evaporated. Essential context for Jackson Shaw's construction financing assumptions and upcoming FOMC June 16–17 rate hold."
        },
        {
            title: "SpaceX IPO explained: The price is set, but retail allocation still up in the air",
            url: "https://www.cnbc.com/2026/06/09/spacex-ipo-explained-stock-price-date.html",
            source: "CNBC",
            description: "Complete SpaceX IPO breakdown: $135/share fixed offering price, 555.6 million shares, $75B raised, $1.77T valuation — the largest IPO in market history. Retail demand exceeded $100B alone; total demand $250B+. The SpaceX listing marks the institutional validation of the AI + space infrastructure investment cycle, with Starlink satellite revenue directly relevant to industrial tenant connectivity in markets like Bonham TX (Tongrun International)."
        },
        {
            title: "Bank OZK Boosts CRE Lending, But Real Estate Share Of Portfolio Keeps Shrinking",
            url: "https://www.bisnow.com/national/news/capital-markets/bank-ozk-sees-bump-in-new-cre-loans-but-real-estate-share-of-portfolio-keeps-shrinking-130205",
            source: "Bisnow",
            description: "Bank OZK's CRE concentration falls to 60% of total loans (from 70% peak) as the strategic pivot to Corporate and Institutional Banking accelerates. RESG originations modestly uptick from prior lows but remain well below peak; large loan paydowns continue. For Jackson Shaw, this confirms OZK's structural exit from aggressive construction lending — removing a historically competitive lender from the bidding pool and reinforcing the shift toward debt funds and alternative capital."
        },
        {
            title: "Commercial Real Estate Lending Activity Reaches Five Year High: CBRE",
            url: "https://www.cbre.com/press-releases/commercial-real-estate-lending-activity-reaches-five-year-high-cbre",
            source: "CBRE",
            description: "CBRE Lending Momentum Index reaches 1.5 in Q1 2026 — five-year high, fifth consecutive quarter of expansion. Alternative lenders (debt funds) now account for 53% of non-agency volume, up from 19% a year ago, with +280% YoY lending growth. Average loan sizes +14% YoY, spreads -2 bps. This is the definitive data point confirming that the CRE capital markets cycle has reopened — and that non-bank lenders are leading the charge, directly relevant to Jackson Shaw's construction financing strategy."
        },
        {
            title: "DFW Commercial Real Estate Market: Mid-Year 2026 Trends & Outlook",
            url: "https://www.mdcregroup.com/news-and-insights/dfw-commercial-real-estate-market-mid-year-2026-trends-outlook/",
            source: "M&D CRE",
            description: "Mid-year 2026 DFW CRE overview: industrial asking rents hit record $10.14/SF (+8.3% YoY); Q1 leasing volume 21.0 MSF — the highest first-quarter on record; vacancy 8.6% despite elevated deliveries; data center/AI demand surging. Jackson Shaw's core DFW industrial portfolio sits in the nation's most active industrial market by leasing volume. The data-center buildout demand (AI hyperscaler capex) is reshaping north DFW site selection — directly adjacent to Jackson Shaw development corridors."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.681%", one_mo_ago: "3.631%", one_yr_ago: "4.380%" },
        "10-Year Treasury":   { current: "4.551%", one_mo_ago: "4.427%", one_yr_ago: "4.451%" },
        "Eff. Federal Funds": { current: "3.620%", one_mo_ago: "3.620%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7440.20,  day_pct: 0.62,  ytd_pct: 7.83,  high_52w: 7609.78,  vs_high: -2.2,  low_52w: 5101.63,  vs_low: 45.8 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 51050.00, day_pct: 0.39,  ytd_pct: 6.56,  high_52w: 51562.00, vs_high: -1.0,  low_52w: 37830.66, vs_low: 34.9 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 26220.00, day_pct: 1.59,  ytd_pct: 7.80,  high_52w: 27094.00, vs_high: -3.2,  low_52w: 15685.33, vs_low: 67.2 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 141.50, day_pct: 0.40,  ytd_pct: 9.54,  high_52w: 147.80,  vs_high: -4.3,  low_52w: 103.02, vs_low: 37.4 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 34.20,  day_pct: 0.35,  ytd_pct: -10.5, high_52w: 44.38,   vs_high: -22.9, low_52w: 29.68,  vs_low: 15.2 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 202.00, day_pct: 0.38,  ytd_pct: 12.2,  high_52w: 209.20,  vs_high: -3.4,  low_52w: 143.20, vs_low: 41.1 },
            { company: "First Industrial",      ticker: "FR",   price: 60.80,  day_pct: 0.38,  ytd_pct: 7.1,   high_52w: 63.55,   vs_high: -4.3,  low_52w: 42.80,  vs_low: 42.1 },
            { company: "Plymouth Industrial",   ticker: "PLYM", price: 21.20,  day_pct: 0.33,  ytd_pct: -3.7,  high_52w: 24.50,   vs_high: -13.5, low_52w: 18.20,  vs_low: 16.5 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 63.80,  day_pct: 0.35,  ytd_pct: 1.1,   high_52w: 67.30,   vs_high: -5.2,  low_52w: 48.10,  vs_low: 32.6 },
            { company: "Stag Industrial",        ticker: "STAG", price: 37.40,  day_pct: 0.35,  ytd_pct: 1.5,   high_52w: 40.10,   vs_high: -6.7,  low_52w: 31.20,  vs_low: 19.9 },
            { company: "Americold Realty",        ticker: "COLD", price: 22.10,  day_pct: 0.35,  ytd_pct: -10.6, high_52w: 28.50,   vs_high: -22.5, low_52w: 19.80,  vs_low: 11.6 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.28,   day_pct: 0.33,  ytd_pct: -11.2, high_52w: 10.50,   vs_high: -21.1, low_52w: 7.20,   vs_low: 15.0 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 104.20, day_pct: 0.38,  ytd_pct: 1.2,   high_52w: 118.00,  vs_high: -11.7, low_52w: 80.20,  vs_low: 29.9 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 22.20, day_pct: 0.50,  ytd_pct: 13.7,  high_52w: 22.36,   vs_high: -0.7,  low_52w: 14.46, vs_low: 53.5 },
            { company: "Apple REIT",              ticker: "APLE", price: 11.40, day_pct: 0.44,  ytd_pct: -13.3, high_52w: 14.80,   vs_high: -23.0, low_52w: 10.40, vs_low: 9.6  },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 10.40, day_pct: 0.40,  ytd_pct: -15.4, high_52w: 14.10,   vs_high: -26.2, low_52w: 9.60,  vs_low: 8.3  },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 10.30, day_pct: 0.40,  ytd_pct: -20.1, high_52w: 14.50,   vs_high: -29.0, low_52w: 7.41,  vs_low: 39.0 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 8.88,  day_pct: 0.38,  ytd_pct: -11.8, high_52w: 12.27,   vs_high: -27.6, low_52w: 7.45,  vs_low: 19.2 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 6.70,  day_pct: 0.38,  ytd_pct: -19.3, high_52w: 9.80,    vs_high: -31.6, low_52w: 6.16,  vs_low: 8.8  },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 7.50,  day_pct: 0.38,  ytd_pct: -25.0, high_52w: 10.67,   vs_high: -29.7, low_52w: 6.16,  vs_low: 21.8 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 5.28,  day_pct: 0.38,  ytd_pct: -14.3, high_52w: 6.00,    vs_high: -12.0, low_52w: 3.57,  vs_low: 47.9 }
        ],
        "Lenders": [
            { company: "Blackstone",              ticker: "BX",   price: 118.80, day_pct: 0.42,  ytd_pct: -22.7, high_52w: 190.09, vs_high: -37.5, low_52w: 101.73, vs_low: 16.8 },
            { company: "Fifth Third Bancorp",     ticker: "FITB", price: 54.20,  day_pct: 1.57,  ytd_pct: 15.4,  high_52w: 57.00,  vs_high: -4.9,  low_52w: 31.20,  vs_low: 73.7 },
            { company: "Huntington Bancshares",   ticker: "HBAN", price: 15.48,  day_pct: 0.32,  ytd_pct: -8.0,  high_52w: 19.50,  vs_high: -20.6, low_52w: 11.91,  vs_low: 30.0 },
            { company: "BancFirst",               ticker: "BANF", price: 111.80, day_pct: 0.45,  ytd_pct: -6.1,  high_52w: 138.77, vs_high: -19.4, low_52w: 97.02,  vs_low: 15.2 },
            { company: "Busey",                   ticker: "BUSE", price: 27.20,  day_pct: 0.55,  ytd_pct: 2.1,   high_52w: 27.95,  vs_high: -2.7,  low_52w: 18.40,  vs_low: 47.8 },
            { company: "Bank OZK",                ticker: "OZK",  price: 50.20,  day_pct: 2.01,  ytd_pct: 4.2,   high_52w: 53.66,  vs_high: -6.5,  low_52w: 35.71,  vs_low: 40.6 },
            { company: "The Hartford",            ticker: "HIG",  price: 135.80, day_pct: 0.38,  ytd_pct: 6.2,   high_52w: 144.50, vs_high: -6.0,  low_52w: 119.61, vs_low: 13.5 }
        ],
        "Industry-related companies": [
            { company: "Amazon",                  ticker: "AMZN", price: 268.20, day_pct: 0.28,  ytd_pct: 16.2,  high_52w: 273.07,  vs_high: -1.8,  low_52w: 165.29, vs_low: 62.3  },
            { company: "United Parcel Service",   ticker: "UPS",  price: 99.50,  day_pct: 0.30,  ytd_pct: -10.2, high_52w: 122.41,  vs_high: -18.7, low_52w: 82.00,  vs_low: 21.3  },
            { company: "FedEx Corporation",       ticker: "FDX",  price: 389.00, day_pct: 0.35,  ytd_pct: 3.7,   high_52w: 404.03,  vs_high: -3.7,  low_52w: 194.30, vs_low: 100.2 },
            { company: "Target Corporation",      ticker: "TGT",  price: 123.50, day_pct: 0.32,  ytd_pct: 6.9,   high_52w: 133.00,  vs_high: -7.1,  low_52w: 83.44,  vs_low: 48.0  },
            { company: "GXO Logistics",           ticker: "GXO",  price: 50.40,  day_pct: 0.28,  ytd_pct: 2.7,   high_52w: 66.85,   vs_high: -24.6, low_52w: 30.46,  vs_low: 65.5  },
            { company: "Marriott International",  ticker: "MAR",  price: 375.80, day_pct: 0.45,  ytd_pct: 16.8,  high_52w: 376.50,  vs_high: -0.2,  low_52w: 205.40, vs_low: 83.0  },
            { company: "Hilton Hotels",           ticker: "HLT",  price: 314.20, day_pct: 0.42,  ytd_pct: -0.6,  high_52w: 340.00,  vs_high: -7.6,  low_52w: 201.15, vs_low: 56.2  },
            { company: "American Airlines",       ticker: "AAL",  price: 14.90,  day_pct: 2.07,  ytd_pct: 13.2,  high_52w: 16.50,   vs_high: -9.7,  low_52w: 8.92,   vs_low: 67.0  },
            { company: "Southwest Airlines",      ticker: "LUV",  price: 42.10,  day_pct: 2.07,  ytd_pct: 6.2,   high_52w: 55.11,   vs_high: -23.6, low_52w: 23.82,  vs_low: 76.7  },
            { company: "Las Vegas Sands",         ticker: "LVS",  price: 51.80,  day_pct: 0.33,  ytd_pct: -8.7,  high_52w: 70.45,   vs_high: -26.5, low_52w: 30.18,  vs_low: 71.6  },
            { company: "TSMC",                    ticker: "TSM",  price: 415.20, day_pct: 0.65,  ytd_pct: 16.7,  high_52w: 421.97,  vs_high: -1.6,  low_52w: 190.03, vs_low: 118.5 },
            { company: "Delta Airlines",          ticker: "DAL",  price: 83.90,  day_pct: 2.09,  ytd_pct: 21.6,  high_52w: 83.90,   vs_high: 0.0,   low_52w: 36.56,  vs_low: 129.4 },
            { company: "Ferguson Enterprises",    ticker: "FERG", price: 233.50, day_pct: 0.30,  ytd_pct: -1.0,  high_52w: 271.64,  vs_high: -14.0, low_52w: 146.00, vs_low: 59.9  },
            { company: "International Paper",     ticker: "IP",   price: 35.30,  day_pct: 0.94,  ytd_pct: -31.7, high_52w: 56.13,   vs_high: -37.1, low_52w: 29.45,  vs_low: 19.9  },
            { company: "Tandy Leather Factory",   ticker: "TLF",  price: 4.58,   day_pct: 0.22,  ytd_pct: -7.7,  high_52w: 6.10,    vs_high: -24.9, low_52w: 4.10,   vs_low: 11.7  },
            { company: "Lincoln Tech",            ticker: "LINC", price: 51.80,  day_pct: 2.08,  ytd_pct: 109.5, high_52w: 52.10,   vs_high: -0.6,  low_52w: 14.79,  vs_low: 250.2 }
        ]
    }
};
