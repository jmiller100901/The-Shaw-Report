// Friday Finance — Week of July 17, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "July 17, 2026",
    date_short: "7.17.26",

    quote: {
        text: "Risk means more things can happen than will happen.",
        author: "Howard Marks"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,474",  change_pct: -0.79 },
        { symbol: "DJIA", price: "52,222", change_pct: -0.51 },
        { symbol: "IXIC", price: "25,751", change_pct: -1.52 },
        { symbol: "IBM",  price: "213.45", change_pct:  0.50 },
        { symbol: "NFLX", price: "70.88",  change_pct: -8.30 },
        { symbol: "TSM",  price: "397.20", change_pct: -4.30 },
        { symbol: "JPM",  price: "299.80", change_pct: -0.50 },
        { symbol: "PLD",  price: "147.90", change_pct:  1.20 },
        { symbol: "FITB", price: "57.76",  change_pct:  2.20 },
        { symbol: "LINC", price: "43.50",  change_pct: -2.10 }
    ],

    news_bullets: [
        "<b>June CPI shocks consensus to the downside: CPI -0.4% MoM (largest monthly decline since April 2020), annual rate 3.5% vs. 3.8% expected and 4.2% in May; core CPI flat MoM, 2.6% YoY vs. 2.9% expected and 2.9% in May; energy prices primary driver of the plunge; Conference Board: 'June CPI closes the door for a July rate hike'; CME FedWatch: July hike probability fell to ~27% (hold probability ~73%) vs. ~37% hike probability pre-CPI; 10-year Treasury yield initially fell sharply on July 14 then rebounded to 4.54% range; stocks rallied +0.4% (S&P) and +0.9% (Nasdaq) on July 14 before reversing later in the week.</b> The <b>Bureau of Labor Statistics released June 2026 CPI on Tuesday, July 14</b>, and the print was a decisive positive surprise relative to every consensus estimate. <b>Headline CPI fell 0.4% month-over-month</b> — the largest single-month decline since April 2020 — driven by a sharp swoon in energy prices tied to easing Middle East tensions and crude oil retreating from its conflict-driven highs. The <b>annual headline rate dropped to 3.5%</b>, from <b>4.2% in May</b> and well below the Dow Jones consensus of <b>3.8%</b>. More significantly for the Fed's core-inflation framework: <b>core CPI (ex-food and energy) was flat month-over-month</b>, putting the 12-month core rate at <b>2.6% — versus 2.9% consensus</b>. The Conference Board's CPI Insights brief published the same day concluded that <b>'June CPI closes the door for a July rate hike'</b>, with CME FedWatch repricing July hike probability from approximately 37% (pre-CPI) to approximately <b>27% post-CPI</b>. The hawkish 9-to-8 FOMC split in the June minutes now faces a direct empirical challenge: if the next FOMC meeting (July 28–29) is to produce a hike, the committee will need to look through one of the strongest monthly disinflation prints in years. <b>CRE angle:</b> The shift in July hike probability from 37% to 27% is a meaningful construction-finance tailwind. A hold at July 28–29 locks Jackson Shaw's active variable-rate loan book at current EFFR of 3.63% (within 3.5–3.75% range) through at least September, reducing Q3 interest carry versus the scenarios modeled under the hawkish June minutes. The <b>August 11 July CPI release</b> is now the definitive pre-September FOMC inflection point.",

        "<b>Q2 2026 bank earnings: ALL five major banks beat consensus — JPMorgan posts record $21.2B quarterly profit (highest in US banking history), EPS $6.14 vs. $5.85 est., revenue $58.02B vs. $50.19B est.; Wells Fargo net income $6.4B (+17% YoY), EPS $2.00 vs. $1.72 est., revenue $22.6B (+9%); Fifth Third (FITB) adj. EPS $1.02 vs. $0.84 est. — strongest peer-group beat reported July 17; SpaceX IPO underwriting fees (~$500M collective across lead and co-underwriters) contributed to Q2 fee income; Simmons Bank (SFNC) Q2 July 16: net income $66.7M (+22% YoY), NIM 3.84% (held flat), EPS $0.46 vs. $0.53 est. — modest miss on EPS and revenue ($251.6M vs. $256.3M).</b> Major US bank Q2 2026 earnings came in comprehensively strong. <b>JPMorgan Chase</b> set the tone July 14, reporting the <b>highest quarterly profit in US banking history at $21.2 billion</b> — EPS <b>$6.14 vs. $5.85 consensus</b>, revenue <b>$58.02B vs. $50.19B</b>. <b>Wells Fargo</b> followed with Q2 net income of <b>$6.4 billion (+17% YoY)</b>, EPS <b>$2.00 vs. $1.72</b>, and total revenue of <b>$22.6 billion (+9%)</b>. All five major banks beat estimates, partially driven by underwriting fees from the <b>SpaceX IPO</b> (raised $86B in June, largest IPO in financial market history). <b>Fifth Third Bancorp (FITB)</b> — a Jackson Shaw watchlist lender — reported July 17 with <b>adj. EPS $1.02 vs. $0.84 expected</b>, the strongest beat in the peer group, confirming the Comerica integration is exceeding expectations and the Texas expansion (150 branches by 2029) is on track. Separately, <b>Simmons First National (SFNC)</b> reported Q2 July 16 after close: <b>net income $66.7M (+22% YoY from $54.8M)</b>, <b>NIM held at 3.84%</b> (unchanged from Q1 — a credit-quality positive), EPS <b>$0.46 reported vs. $0.53 consensus</b>. Revenue of <b>$251.6M missed the $256.3M estimate</b> by 1.9%. The Q2 call was held <b>July 17 at 7:30 a.m. CT</b>. <b>CRE angle:</b> FITB's outsized Q2 beat reinforces Texas lending capacity — the 150-branch DFW expansion program is clearly financially sustainable. Simmons' NIM holding at 3.84% signals continued floating-rate loan income stability despite the soft CPI reading; the modest EPS miss reflects revenue timing rather than credit deterioration.",

        "<b>IBM posts worst single-day stock decline in its history: -25.2% on July 14–15, $67 billion market cap erased — surpassing Black Monday 1987's -23.7%; Q2 pre-earnings warning: revenue $17.2B vs. $17.85B estimate, EPS $2.93 vs. $3.02; CEO Arvind Krishna: 'We did not adapt and move quickly enough — numerous large deals failed to close'; cause: enterprise clients shifted spend from IBM software, consulting, and mainframes to AI hardware (memory chips, servers); IBM vs. SK Hynix/HBM dynamic highlights the bifurcation between AI hardware winners and legacy software/consulting losers in enterprise IT spend.</b> IBM (<b>NYSE: IBM</b>) suffered the worst stock decline in its 115-year history on <b>July 14–15, 2026</b>, plunging <b>25.2%</b> — erasing <b>$67 billion in market capitalization</b> and exceeding the prior worst day of <b>October 19, 1987 (-23.7%, Black Monday)</b>. The trigger was a pre-earnings revenue warning: IBM guided Q2 revenue to <b>$17.2 billion vs. $17.85 billion consensus</b> and non-GAAP EPS of <b>$2.93 vs. $3.02 expected</b>. CEO Arvind Krishna's public admission was unusually stark: <b>'These conditions require our teams to execute perfectly, and this quarter we faltered. We did not adapt and move quickly enough, and numerous large deals failed to close on the timelines we expected.'</b> The structural explanation: enterprise clients are prioritizing <b>AI hardware purchases (memory chips, servers, storage)</b> over IBM's software, consulting, and mainframe businesses. This is the same demand tailwind that propelled <b>SK Hynix's $26.5B US IPO in June</b> and <b>Micron's +8.87% gain last week</b> — the AI memory investment cycle is cannibalizing legacy IT spend at an accelerating pace. <b>CRE angle:</b> IBM's collapse illustrates the winner/loser bifurcation in enterprise technology that directly shapes demand for Jackson Shaw's industrial tenant base. Data center builders and AI hardware manufacturers are gaining square footage; legacy enterprise-IT service companies are rationalizing footprint. The IBM outcome strengthens the thesis for demand from advanced manufacturing and AI infrastructure tenants in DFW corridors.",

        "<b>TSMC posts record Q2: revenue +36% to $40.2B, net profit +77% to $22B (T$706.6B) — yet stock fell on capex shock: raised 2026 spending plan to $60–$64B (from $52–$56B); Philadelphia Semiconductor Index -8% for the week; Netflix (NFLX) Q2 guidance miss: Q3 revenue guidance $12.86B vs. $13B consensus, stock -8%+ after hours into Friday; combined chip/Netflix effect drove Nasdaq -1.5% Friday with S&P futures -0.8%; chip names (NVDA, AMD, TSMC) have been volatile all week on IBM's 'clients shifted to hardware' warning vs. actual demand remaining strong.</b> Taiwan Semiconductor Manufacturing (<b>NYSE: TSM</b>) reported <b>Q2 2026 revenue of $40.2 billion (+36% YoY)</b> and <b>record net profit of $22 billion (+77% YoY)</b> — the strongest quarterly results in TSMC's history. However, the company simultaneously raised its <b>2026 capital expenditure plan to $60–$64 billion</b> (from the prior guidance of $52–$56 billion), signaling higher costs and timeline risk associated with its Arizona and Japan fab expansions. Investors sold on the higher capex, with <b>TSM falling ~4% in US pre-market July 17 despite the record profit</b>; the <b>Philadelphia Semiconductor Index has shed ~8% for the week</b>. Compounding the chip sell-off: <b>Netflix (NASDAQ: NFLX) reported Q2 July 16 after close</b> — slight revenue miss ($12.56B vs. consensus), but Q3 guidance of <b>$12.86B versus $13.0B expected</b> sent shares down more than <b>8% into Friday's open</b>. The tech-heavy Nasdaq is the week's underperformer (-1.5% Friday), while the Dow and S&P are down -0.5% and -0.8% respectively. <b>CRE angle:</b> TSMC's $64B capex commitment signals continued massive investment in AI chip fabrication facilities — which drives demand for industrial and data-center-adjacent real estate in the supply chain corridors where Jackson Shaw develops. Despite this week's stock sell-off, the demand signals for industrial tenants serving AI hardware manufacturing remain structurally intact.",

        "<b>Prologis Q2 2026 beat and raised guidance: Core FFO $1.63/share (vs. $0.79 estimate per some reports — note: Core FFO is the correct metric, not net income EPS); net income $1.06B ($1.13/share); record leasing drove full-year guidance raise; July 22 UK Takeover Code deadline for SEGRO bid still active; DFW industrial market: vacancy declined to 8.8% recent low, asking rents +8.3% YoY to $10.14/SF (record), demand outpaced supply in Q1 (10.4M SF absorbed vs. 5.7M SF delivered); Avison Young DFW Q2 2026 office report (July 13): 1.1M SF positive net absorption, trophy/Class A capturing 73% of leasing.</b> Prologis (<b>NYSE: PLD</b>) reported Q2 2026 earnings <b>July 16</b>: <b>net income $1.06 billion ($1.13/diluted share)</b>, Core FFO of <b>$1.56 billion ($1.63/share)</b>. Record leasing activity and improved occupancy drove the company to <b>raise its full-year guidance across multiple metrics</b> — a direct validation of the global logistics/industrial real estate thesis. PLD shares rose on the print; the <b>July 22 UK Takeover Code deadline</b> for Prologis's <b>£12.6B ($16.6B) all-stock SEGRO bid</b> remains live — Prologis must either announce a firm offer under Rule 2.7 or walk away by <b>5:00 pm London time on July 22</b>. DFW industrial market data (JLL Q1 2026, Spring 2026 Lee Dallas report): industrial vacancy fell to a <b>recent low of 8.8%</b>, asking rents reached <b>$10.14/SF (+8.3% YoY)</b> in Q1 — a new record — with demand of <b>10.4M SF outpacing 5.7M SF of new deliveries</b>. Build-to-suit demand is expanding among logistics, advanced manufacturing, and tech-driven occupiers. The Avison Young <b>DFW Q2 2026 office market report (released July 13)</b> showed <b>1.1M SF of positive net absorption</b> and 3.5M SF of leasing activity, with trophy and Class A buildings capturing <b>73% of all leasing activity</b>. <b>CRE angle:</b> Prologis's raised guidance, record leasing, and the structurally undersupplied DFW industrial market (8.8% vacancy, rents +8.3% YoY) provide the strongest possible confirmation of Jackson Shaw's development thesis going into H2 2026."
    ],

    watch_next_week: "The week of <b>July 21–25, 2026</b> carries four distinct high-priority watch items for Jackson Shaw. <b>Tuesday July 22</b> is the <b>UK Takeover Code Rule 2.6(a) deadline for Prologis-SEGRO</b> — Prologis must by <b>5:00 pm London time</b> either announce a firm intention to make an offer (Rule 2.7) or publicly state it does not intend to make one. A firm announcement would set the structure for the world's largest logistics REIT combination; a walk-away would lift overhang on PLD shares. <b>Also July 22 after the market close</b>: <b>Pinnacle Financial Partners (NASDAQ: PNFP) Q2 2026 earnings</b>, followed by a conference call <b>July 23 at 8:00 a.m. ET</b>. Watch for: (1) first combined Pinnacle-Synovus capital deployment data ($117.2B assets), (2) Texas CRE construction pipeline commentary under the combined institution, (3) NIM guidance given the softer July CPI and reduced hike probability, and (4) any update on the Greystar bridge lending partnership. <b>Thursday July 23</b>: <b>Huntington Bancshares (NASDAQ: HBAN) Q2 2026 earnings</b> before the market open, with a conference call at <b>9:00 a.m. ET</b>. Analysts project adj. EPS <b>$0.39 (+2.6% YoY)</b>. With the June CPI miss reducing rate-hike pressure, HBAN's NIM trajectory could benefit from improved credit demand — but Category III capital constraints on new CRE construction loan originations remain a key watch item. <b>July 23 is also when Prologis's SEGRO resolution will be fully digested by the market</b>. <b>Looking ahead to the following week</b>: <b>July 28–29 FOMC meeting</b> — with July hike probability now at ~27% post-CPI (down from 37% pre-CPI), the base case is a hold at 3.5–3.75%; Chair Warsh's statement will be parsed for any signal on the September meeting. <b>July 30</b> is a critical earnings day for two Jackson Shaw watchlist names: <b>International Paper (NYSE: IP) Q2 2026 earnings</b> before the NYSE open (10:00 a.m. ET webcast) — the definitive event for assessing IP's restructuring trajectory and whether any Jackson Shaw-held facility appears in new closure disclosures under either the forming North America or EMEA management entity; and <b>Griffon Corporation (NYSE: GFF, parent of Clopay Building Products) Q3 FY2026 earnings</b>, the first results post-Veritage Brands JV launch.",

    reading_links: [
        {
            title: "Consumer Price Index Summary — June 2026 Results",
            url: "https://www.bls.gov/news.release/cpi.nr0.htm",
            source: "Bureau of Labor Statistics",
            description: "Official BLS June 2026 CPI release: headline CPI fell 0.4% seasonally adjusted MoM (largest monthly decline since April 2020), bringing the annual rate to 3.5% — below the 3.8% consensus and down sharply from 4.2% in May. Core CPI (ex-food and energy) was flat MoM, with the 12-month core rate at 2.6% versus the 2.9% consensus. Energy prices drove the broad-based decline."
        },
        {
            title: "June CPI Closes the Door for July Rate Hike",
            url: "https://www.conference-board.org/research/global-economy-briefs/cpi-insights-june-2026",
            source: "The Conference Board",
            description: "The Conference Board's CPI Insights brief concludes that the June 2026 inflation print eliminates urgency to raise policy rates at the July 28–29 FOMC meeting, with CME FedWatch repricing a July hike from ~34–37% probability pre-CPI to approximately 27% following the release. The brief notes that while software and computer-related prices have surged past 14% (a record), energy's decisive retreat dominated the overall print."
        },
        {
            title: "All Five Major Banks Beat Estimates: JPMorgan Posts Highest Profit in US History",
            url: "https://www.techtimes.com/articles/320491/20260714/all-five-major-banks-beat-estimates-jpmorgan-posts-highest-profit-us-history.htm",
            source: "TechTimes",
            description: "Q2 2026 bank earnings scorecard: JPMorgan reported a record $21.2 billion quarterly profit (EPS $6.14 vs. $5.85 estimate, revenue $58.02B vs. $50.19B), with Wells Fargo, Citigroup, Bank of America, and Goldman Sachs also beating consensus. SpaceX IPO underwriting fees (~$500M collectively) contributed materially to the across-the-board beat."
        },
        {
            title: "IBM Stock Craters 25%, the Worst Day on Record, After Company Issues Second-Quarter Earnings Warning",
            url: "https://www.cnbc.com/2026/07/14/ibm-warns-second-quarter-earnings-fell-short-of-expectations.html",
            source: "CNBC",
            description: "IBM guided Q2 revenue to $17.2B vs. $17.85B estimated and non-GAAP EPS of $2.93 vs. $3.02, triggering a 25.2% single-day collapse — the worst in the company's 115-year history and worse than Black Monday 1987. CEO Arvind Krishna attributed the miss to enterprise clients shifting spend from IBM software and consulting to AI hardware, erasing $67 billion in market capitalization."
        },
        {
            title: "Avison Young Releases Second Quarter 2026 DFW Office Market Report",
            url: "https://www.avisonyoung.us/news-releases/-/aynp/view/2026/07/13/avison-young-releases-second-quarter-2026-dfw-office-market-report/in/dallas",
            source: "Avison Young",
            description: "The Q2 2026 DFW office market report (released July 13) shows approximately 1.1 million SF of positive net absorption and 3.5 million SF of leasing activity for the quarter. Trophy and Class A buildings captured 73% of all leasing activity. The market's ongoing flight-to-quality trend has produced consecutive quarters of positive absorption for premium product, even as overall vacancy remains elevated."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.645%", one_mo_ago: "3.655%", one_yr_ago: "4.356%" },
        "10-Year Treasury":   { current: "4.540%", one_mo_ago: "4.495%", one_yr_ago: "4.434%" },
        "Eff. Federal Funds": { current: "3.630%", one_mo_ago: "3.620%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",             ticker: "SPX",  price: 7474.18,  day_pct: -0.79, ytd_pct: 8.7,   high_52w: 7609.78,  vs_high: -1.8,  low_52w: 5101.63,  vs_low: 46.5  },
            { company: "Dow Jones Industrial", ticker: "DJI",  price: 52221.63, day_pct: -0.51, ytd_pct: 8.9,   high_52w: 52900.07, vs_high: -1.3,  low_52w: 37830.66, vs_low: 38.0  },
            { company: "Nasdaq Composite",     ticker: "COMP", price: 25751.44, day_pct: -1.52, ytd_pct: 5.8,   high_52w: 27094.00, vs_high: -5.0,  low_52w: 15685.33, vs_low: 64.2  }
        ],
        "Industrial REITs": [
            { company: "Prologis",             ticker: "PLD",  price: 147.90, day_pct:  1.20, ytd_pct: 14.4,  high_52w: 148.20,  vs_high: -0.2,  low_52w: 103.02, vs_low: 43.6 },
            { company: "Rexford Industrial",   ticker: "REXR", price: 35.40,  day_pct: -0.30, ytd_pct: -7.3,  high_52w: 44.38,   vs_high: -20.2, low_52w: 29.68,  vs_low: 19.3 },
            { company: "EastGroup Properties", ticker: "EGP",  price: 208.50, day_pct:  0.40, ytd_pct: 15.5,  high_52w: 209.20,  vs_high: -0.3,  low_52w: 143.20, vs_low: 45.6 },
            { company: "First Industrial",     ticker: "FR",   price: 63.20,  day_pct:  0.50, ytd_pct: 11.4,  high_52w: 63.55,   vs_high: -0.6,  low_52w: 42.80,  vs_low: 47.7 },
            { company: "Plymouth Industrial",  ticker: "PLYM", price: 21.90,  day_pct: -0.20, ytd_pct: -0.4,  high_52w: 24.50,   vs_high: -10.6, low_52w: 18.20,  vs_low: 20.3 },
            { company: "Terreno Realty",        ticker: "TRNO", price: 65.80,  day_pct: -0.30, ytd_pct: 4.3,   high_52w: 67.30,   vs_high: -2.2,  low_52w: 48.10,  vs_low: 36.8 },
            { company: "Stag Industrial",       ticker: "STAG", price: 38.60,  day_pct: -0.20, ytd_pct: 4.7,   high_52w: 40.10,   vs_high: -3.7,  low_52w: 31.20,  vs_low: 23.7 },
            { company: "Americold Realty",      ticker: "COLD", price: 22.90,  day_pct: -0.30, ytd_pct: -7.3,  high_52w: 28.50,   vs_high: -19.6, low_52w: 19.80,  vs_low: 15.7 },
            { company: "LXP Industrial",        ticker: "LXP",  price: 8.50,   day_pct: -0.20, ytd_pct: -8.9,  high_52w: 10.50,   vs_high: -19.0, low_52w: 7.20,   vs_low: 18.1 },
            { company: "Ryman Hospitality",     ticker: "RHP",  price: 107.00, day_pct: -0.20, ytd_pct: 3.9,   high_52w: 118.00,  vs_high: -9.3,  low_52w: 80.20,  vs_low: 33.4 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 23.30, day_pct: -0.40, ytd_pct: 19.3,  high_52w: 23.60,   vs_high: -1.3,  low_52w: 14.46, vs_low: 61.1 },
            { company: "Apple REIT",              ticker: "APLE", price: 11.70, day_pct: -0.30, ytd_pct: -11.0, high_52w: 14.80,   vs_high: -20.9, low_52w: 10.40, vs_low: 12.5 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 10.70, day_pct: -0.30, ytd_pct: -13.0, high_52w: 14.10,   vs_high: -24.1, low_52w: 9.60,  vs_low: 11.5 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 10.60, day_pct: -0.30, ytd_pct: -17.7, high_52w: 14.50,   vs_high: -26.9, low_52w: 7.41,  vs_low: 43.1 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 9.10,  day_pct: -0.30, ytd_pct: -8.9,  high_52w: 12.27,   vs_high: -25.8, low_52w: 7.45,  vs_low: 22.1 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 6.85,  day_pct: -0.30, ytd_pct: -17.6, high_52w: 9.80,    vs_high: -30.1, low_52w: 6.16,  vs_low: 11.2 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 7.70,  day_pct: -0.30, ytd_pct: -23.0, high_52w: 10.67,   vs_high: -27.8, low_52w: 6.16,  vs_low: 25.0 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 5.40,  day_pct: -0.30, ytd_pct: -12.2, high_52w: 6.00,    vs_high: -10.0, low_52w: 3.57,  vs_low: 51.3 }
        ],
        "Lenders": [
            { company: "Blackstone",           ticker: "BX",   price: 124.00, day_pct: -0.50, ytd_pct: -19.2, high_52w: 190.09, vs_high: -34.8, low_52w: 101.73, vs_low: 21.9 },
            { company: "Fifth Third Bancorp",  ticker: "FITB", price: 57.76,  day_pct:  2.20, ytd_pct: 22.9,  high_52w: 57.76,  vs_high:  0.0,  low_52w: 31.20,  vs_low: 85.1 },
            { company: "Huntington Bancshares",ticker: "HBAN", price: 17.25,  day_pct: -0.30, ytd_pct:  2.5,  high_52w: 19.50,  vs_high: -11.5, low_52w: 11.91,  vs_low: 44.8 },
            { company: "BancFirst",            ticker: "BANF", price: 113.00, day_pct: -0.20, ytd_pct: -5.0,  high_52w: 138.77, vs_high: -18.6, low_52w: 97.02,  vs_low: 16.5 },
            { company: "Busey",                ticker: "BUSE", price: 28.40,  day_pct: -0.20, ytd_pct:  6.5,  high_52w: 28.50,  vs_high: -0.4,  low_52w: 18.40,  vs_low: 54.3 },
            { company: "Bank OZK",             ticker: "OZK",  price: 53.20,  day_pct: -0.20, ytd_pct: 10.6,  high_52w: 53.66,  vs_high: -0.9,  low_52w: 35.71,  vs_low: 49.0 },
            { company: "The Hartford",         ticker: "HIG",  price: 142.00, day_pct: -0.40, ytd_pct: 11.0,  high_52w: 144.50, vs_high: -1.7,  low_52w: 119.61, vs_low: 18.7 }
        ],
        "Industry-related companies": [
            { company: "Amazon",                ticker: "AMZN", price: 239.00, day_pct: -0.50, ytd_pct:  3.9,  high_52w: 273.07,  vs_high: -12.5, low_52w: 165.29, vs_low: 44.6  },
            { company: "United Parcel Service", ticker: "UPS",  price: 101.00, day_pct: -0.40, ytd_pct: -8.8,  high_52w: 122.41,  vs_high: -17.5, low_52w: 82.00,  vs_low: 23.2  },
            { company: "FedEx Corporation",     ticker: "FDX",  price: 329.00, day_pct: -0.30, ytd_pct: -12.2, high_52w: 404.03,  vs_high: -18.6, low_52w: 194.30, vs_low: 69.3  },
            { company: "Target Corporation",    ticker: "TGT",  price: 124.50, day_pct: -0.40, ytd_pct:  7.7,  high_52w: 133.00,  vs_high: -6.4,  low_52w: 83.44,  vs_low: 49.2  },
            { company: "GXO Logistics",         ticker: "GXO",  price: 51.50,  day_pct: -0.30, ytd_pct:  4.8,  high_52w: 66.85,   vs_high: -23.0, low_52w: 30.46,  vs_low: 69.1  },
            { company: "Marriott International",ticker: "MAR",  price: 388.00, day_pct: -0.30, ytd_pct: 20.5,  high_52w: 390.00,  vs_high: -0.5,  low_52w: 205.40, vs_low: 88.9  },
            { company: "Hilton Hotels",         ticker: "HLT",  price: 322.00, day_pct: -0.40, ytd_pct:  2.0,  high_52w: 340.00,  vs_high: -5.3,  low_52w: 201.15, vs_low: 60.1  },
            { company: "American Airlines",     ticker: "AAL",  price: 16.60,  day_pct: -0.50, ytd_pct: 26.5,  high_52w: 16.75,   vs_high: -0.9,  low_52w: 8.92,   vs_low: 86.1  },
            { company: "Southwest Airlines",    ticker: "LUV",  price: 45.80,  day_pct: -0.40, ytd_pct: 15.8,  high_52w: 55.11,   vs_high: -16.9, low_52w: 23.82,  vs_low: 92.3  },
            { company: "Las Vegas Sands",       ticker: "LVS",  price: 52.80,  day_pct: -0.40, ytd_pct: -6.9,  high_52w: 70.45,   vs_high: -25.0, low_52w: 30.18,  vs_low: 75.0  },
            { company: "TSMC",                  ticker: "TSM",  price: 397.20, day_pct: -4.30, ytd_pct: 11.5,  high_52w: 421.97,  vs_high: -5.9,  low_52w: 190.03, vs_low: 109.0 },
            { company: "Delta Airlines",        ticker: "DAL",  price: 89.50,  day_pct: -0.30, ytd_pct: 29.1,  high_52w: 90.00,   vs_high: -0.6,  low_52w: 36.56,  vs_low: 144.8 },
            { company: "Ferguson Enterprises",  ticker: "FERG", price: 237.00, day_pct: -0.30, ytd_pct:  0.9,  high_52w: 271.64,  vs_high: -12.8, low_52w: 146.00, vs_low: 62.3  },
            { company: "International Paper",   ticker: "IP",   price: 36.40,  day_pct: -0.50, ytd_pct: -29.5, high_52w: 56.13,   vs_high: -35.2, low_52w: 29.45,  vs_low: 23.6  },
            { company: "Tandy Leather Factory", ticker: "TLF",  price: 4.65,   day_pct: -0.30, ytd_pct: -5.9,  high_52w: 6.10,    vs_high: -23.8, low_52w: 4.10,   vs_low: 13.4  },
            { company: "Lincoln Tech",          ticker: "LINC", price: 43.50,  day_pct: -2.10, ytd_pct: 75.8,  high_52w: 53.50,   vs_high: -18.7, low_52w: 17.29,  vs_low: 151.6 }
        ]
    }
};
