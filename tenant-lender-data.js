// Tenant & Lender News — Week of May 22, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "May 22, 2026",
    last_scan: "2026-05-22T18:00:00Z",

    // Jackson Shaw watchlist — tenants, lenders, equity partners
    companies: [
        { id: "1",  name: "Lincoln Tech",                        cat: "Tenant" },
        { id: "2",  name: "Crown Equipment",                     cat: "Tenant" },
        { id: "3",  name: "Tongrun International",               cat: "Tenant" },
        { id: "4",  name: "Canteen",                             cat: "Tenant" },
        { id: "5",  name: "Control Panels",                      cat: "Tenant" },
        { id: "6",  name: "Baer Manufacturing / Hunt Electric",  cat: "Tenant" },
        { id: "7",  name: "Grander Distribution",                cat: "Tenant" },
        { id: "8",  name: "Clopay",                              cat: "Tenant" },
        { id: "9",  name: "International Paper",                 cat: "Tenant" },
        { id: "10", name: "Duroshox",                            cat: "Tenant" },
        { id: "11", name: "Bright Events",                       cat: "Tenant" },
        { id: "12", name: "Xingyu Lighting",                     cat: "Tenant" },
        { id: "13", name: "Hartford Insurance",                  cat: "Tenant" },
        { id: "23", name: "Triad Manufacturing",                 cat: "Tenant" },
        { id: "14", name: "Busey Bank",                          cat: "Lender" },
        { id: "15", name: "Huntington Bank",                     cat: "Lender" },
        { id: "16", name: "Fifth Third Bank",                    cat: "Lender" },
        { id: "17", name: "Inwood National Bank",                cat: "Lender" },
        { id: "18", name: "Simmons Bank",                        cat: "Lender" },
        { id: "19", name: "Barings",                             cat: "Lender" },
        { id: "20", name: "Hall Group",                          cat: "Lender" },
        { id: "21", name: "PACE Equities",                       cat: "Lender" },
        { id: "24", name: "Bank OZK",                            cat: "Lender" },
        { id: "22", name: "Sammons Enterprise",                  cat: "Equity Partner" },
    ],

    alerts: [
        {
            level: "HIGH",
            company: "International Paper",
            cat: "Tenant",
            headline: "Texas plant closures confirmed (Edinburg TX, 117 jobs); JP Morgan Negative Catalyst Watch; 2026 North America EBITDA guidance cut to $2.35–2.5B; Delmarva acquisition adds East Coast capacity while Texas contracts — restructuring accelerating in both directions",
            summary: "International Paper (NYSE: IP) confirmed closure of its <b>Edinburg, Texas sheet and box plant</b> — <b>117 jobs eliminated</b>, site converted to warehouse use, with McAllen TX absorbing displaced operations. On <b>May 18</b>, IP simultaneously acquired <b>Delmarva Corrugated Packaging</b> (Dover, DE) — expanding East Coast capacity while rationalizing Texas. <b>J.P. Morgan placed IP on Negative Catalyst Watch</b> this week, with analysts cutting estimates citing cost pressures steeper than peers. Full-year 2026 North America EBITDA guidance was trimmed to <b>$2.35–2.5B</b> (from $2.5–2.6B); EMEA guidance cut to <b>$900M–$1.0B</b> (from $1.0–1.1B). IP stock at approximately <b>$30.80</b>, down <b>~40% YTD</b>, approaching its 52-week low of $29.45. Daily box shipments were <b>-11% YoY</b> in Q1 — this is demand destruction, not restructuring optionality. EMEA spinoff remains 12–15 months out; North American operations will retain the Jackson Shaw lease obligations post-split.",
            relevance: "ONGOING HIGH WATCH — escalated by new Texas closure and JP Morgan Negative Catalyst Watch. The Edinburg TX closure is in the Rio Grande Valley, geographically separate from Jackson Shaw's DFW/North Texas market. However, the pattern of simultaneous closures and acquisitions, combined with the JP Morgan watch, signals additional restructuring announcements are imminent. The -11% box shipment decline is a genuine business headwind, not a one-time item. <b>Actionable this week:</b> Request direct written confirmation from IP's regional real estate contact that the Jackson Shaw-held facility is NOT in any current or planned closure pipeline — before Q2 earnings (expected late July) when further North American footprint changes will likely be disclosed.",
            source: "Yahoo Finance / ad-hoc-news.de / AInvest / JP Morgan / Packaging Dive / IP Investor Relations",
            date: "2026-05-18"
        },
        {
            level: "MEDIUM",
            company: "Bank OZK",
            cat: "Lender",
            headline: "Q1 2026 NPA doubling ($451M) remains active watch; investor day not confirmed; CIB expansion underway — construction lender pivoting away from pure CRE to diversified corporate banking",
            summary: "Bank OZK's Q1 2026 credit deterioration (reported April 22) remains the most significant lender credit quality watch in the portfolio: <b>nonperforming assets more than doubled to $451M</b> (from $214M Q1 2025); <b>net charge-offs $45.3M</b> (vs. $19M a year ago), concentrated in <b>three previously classified real estate loans</b>. Net income fell 5.1% to $159.3M; EPS $1.44 beat estimates but revenue missed. Management is executing a strategic diversification: the <b>Corporate and Institutional Bank (CIB) added nearly two dozen new client relationships</b> in Q1 and is targeted to match or surpass RESG by portfolio size by 2027. An investor day was anticipated in May 2026 but has not been confirmed this week. OZK stock at approximately <b>$47.35</b>, 52-week range $35.71–$53.66, down <b>-2.1% YTD</b>.",
            relevance: "The NPA doubling concentrated in three real estate loans is a leading indicator of tightening construction loan appetite. OZK's strategic pivot toward CIB diversification may reduce its appetite for pure-play CRE construction lending — historically its core niche and Jackson Shaw's source of competitive pricing. If OZK shifts deal focus away from CRE, it removes one historically aggressive lender from the market. Monitor Q2 results (expected mid-July) for NPA stabilization or further deterioration. No new material data this week beyond the ongoing watch.",
            source: "Bank OZK IR / Motley Fool / Investing.com / StockTitan",
            date: "2026-04-22"
        },
        {
            level: "MEDIUM",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Category III designation now active following $250B+ asset threshold crossing; HBAN stock at $15.50, down 10.1% YTD; Cat III capital/liquidity constraints may incrementally reduce construction lending appetite over 12–24 months",
            summary: "Huntington Bancshares (NASDAQ: HBAN) has crossed the <b>$250B average total assets threshold</b> following integration of Veritex and Cadence Bank acquisitions, triggering designation as a <b>Category III bank</b> under Federal Reserve standards. Cat III classification imposes enhanced stress testing, stricter liquidity coverage ratios, and higher capital buffer requirements — incrementally increasing the regulatory cost of construction-phase CRE lending versus stabilized asset lending. HBAN stock at <b>$15.50</b>, down <b>-10.1% YTD</b>. Despite strong Q1 fundamentals (NII +33% YoY, adj EPS $0.37 beat, $3B buyback), the stock continues to underperform, reflecting Cat III transition uncertainty. Huntington remains the 8th-largest bank in Texas following Cadence integration, with an 11–12% loan growth target for 2026.",
            relevance: "The Cat III transition is a structural 12–24 month watch item, not an acute crisis. Huntington is strategically important in Jackson Shaw's Texas market — its growing Texas franchise (21-state footprint, 8th-largest Texas bank) is a long-term positive. However, Cat III capital charges on construction loans could cause Huntington to re-price or reduce exposure. Monitor any Q2 guidance commentary on CRE construction loan appetite. No new material development this week beyond ongoing watch.",
            source: "Risk.net / Simply Wall St / Sahmcapital / Yahoo Finance / Huntington IR",
            date: "2026-05-22"
        },
        {
            level: "LOW",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon Q2 FY2026 beat maintained (EPS $1.05 vs $0.99 est); Clopay launches C-Power Click-to-Conceal switchable glass garage doors (May 14); residential volume -6% YoY persists; AMES JV June 2026 close on track; 2.4x net leverage",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, reported Q2 FY2026 on May 7: adjusted EPS <b>$1.05</b> (beat $0.99 estimate), revenue <b>$421.9M</b>. Clopay volume declined <b>-6% residential YoY</b> due to housing market softness, offset by <b>+5% price/mix</b>. On <b>May 14</b>, Clopay introduced <b>C-Power-enabled Click-to-Conceal Panels</b> — smart garage door technology that switches from clear to opaque via wireless remote, using continuous power delivery to door sections — a premium product innovation signaling investment in margin-accretive product lines. The <b>AMES JV</b> remains on track to close <b>June 2026</b>, delivering <b>$100M in cash proceeds</b> to Griffon plus $161M in second-lien PIK notes and a 43% retained stake. Net debt-to-EBITDA at <b>2.4x</b>.",
            relevance: "The May 14 product launch and Q2 beat confirm financial health and continued R&D investment despite residential volume softness. The AMES JV June close will de-lever the balance sheet materially. The -6% residential volume decline reflects macro housing softness, not Clopay-specific competitive loss. At 2.4x leverage with a $100M cash catalyst arriving in June, Clopay lease covenant compliance risk remains LOW.",
            source: "Griffon IR / BusinessWire / PR Newswire / Motley Fool",
            date: "2026-05-14"
        },
        {
            level: "LOW",
            company: "Canteen",
            cat: "Tenant",
            headline: "Choice Partners cooperative contract expired May 21; no renewal announced; Compass Group North America fundamentals remain strong with high single-digit revenue growth",
            summary: "Canteen (a division of Compass Group USA) had a <b>Choice Partners Cooperative contract expiring May 21, 2026</b> — this cooperative provides food service purchasing agreements for K-12 and higher education institutions. No public renewal announcement has been found as of this scan. <b>Compass Group PLC</b> (parent) reported high single-digit North American revenue growth in FY2025 with expanding margins. No material negative news for Canteen's core vending and food service operations.",
            relevance: "The Choice Partners contract expiration is a low-level monitoring item — it affects Canteen's institutional client pipeline, not its lease obligations to Jackson Shaw. Compass Group parent-level financial health remains strong. Watch for any Choice Partners renewal announcement or major institutional client loss. No actionable lease risk at this time.",
            source: "Choice Partners Cooperative / Compass Group / Vending Market Watch",
            date: "2026-05-22"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Q1 2026 record results maintained momentum; CEO and CFO attending investor conferences in May; Lincoln Foundation receives $250K in Q1 grants; stock at $50.21 — holding 105% YTD gain; Rowlett TX campus on track Q1 2027",
            summary: "Lincoln Educational Services (NASDAQ: LINC) continues to execute following its record Q1 2026 results (reported May 11): revenue +22.5% to $144M, EBITDA +84.7%, student starts +19.5%, full-year guidance raised to <b>$590–600M revenue and $76–80M EBITDA</b>. This week, CEO <b>Scott Shaw and CFO Brian Meyers</b> are attending multiple investor conferences — heightened institutional engagement reflecting the stock's +105% YTD run. The <b>Lincoln Foundation received nearly $250K in Q1 grants</b> from Matco Tools, Delta Dental, Gene Haas Foundation, and others — supporting scholarships and the Student Sensitivity Fund. LINC at <b>$50.21</b>, 2.8% below the 52-week high of $52.10. The <b>Jackson Shaw-developed Rowlett, TX campus remains on track for Q1 2027 enrollment</b>; Hicksville, NY campus begins enrollment Q4 2026.",
            relevance: "Post-earnings investor conference activity confirms institutional sponsorship of the LINC growth story. The Foundation grant activity signals the company's investment in student retention and outcomes — a leading indicator of sustainable enrollment growth. No lease concerns whatsoever. The Rowlett TX development (Jackson Shaw) is a top-tier asset backed by a company executing at the highest level in for-profit education.",
            source: "Lincoln Ed IR / StockTitan / GlobeNewswire / Yahoo Finance",
            date: "2026-05-22"
        },
        {
            level: "GENERAL",
            company: "Crown Equipment",
            cat: "Tenant",
            headline: "SP 1500 Series order picker launched; DHL Supply Chain deploys Crown SC Series fleet with 24-hour V-Force Lithium-ion battery capability; April orders +10–20% YoY; no adverse news",
            summary: "Crown Equipment Corporation continues product and commercial expansion. New product: <b>Crown SP 1500 Series order picker</b> available — expanding the material handling line. Commercial win: <b>DHL Supply Chain upgraded its forklift fleet</b> with Crown's SC Series powered by <b>V-Force Lithium-ion batteries</b>, which enable nearly <b>24 hours of continuous operation on a single charge</b> — a competitive differentiation for distribution center customers. April order inflows remain <b>+10–20% YoY</b> as confirmed in late April commentary. No adverse news in the 45-day scan window.",
            relevance: "New product launches and a DHL fleet win confirm continued commercial momentum. The 24-hour battery capability represents a meaningful competitive advantage for Crown in the distribution center market — Jackson Shaw's core industrial tenant base. April orders +10–20% YoY reinforces that Crown is growing through the tariff and energy cost environment. No lease concerns.",
            source: "Crown Equipment Newsroom / Robotics 24/7 / Supply Chain 24/7 / Modern Materials Handling",
            date: "2026-05-22"
        },
        {
            level: "GENERAL",
            company: "Tongrun International",
            cat: "Tenant",
            headline: "AI data center demand drives order volume acceleration; Platinum Equity investment thesis confirmed by hyperscaler $725B capex wave; electrical enclosure and racking solutions directly in AI infrastructure supply chain",
            summary: "Tongrun International (precision contract manufacturer, Bonham TX, Platinum Equity-backed) manufactures <b>electrical enclosures, cabinets, and racking solutions</b> for data centers, power generation, telecom, and AI infrastructure. This week's Nvidia Q1 earnings confirmed that <b>hyperscaler capex in 2026 will reach $725B (+77% YoY)</b> — with Tongrun's end-market customers including some of the world's largest technology firms per Platinum Equity's investment thesis. The Platinum Equity January 2026 investment specifically cited <b>\"demand from power generation and data center sectors continues to drive increasing order volumes, including for electrical component enclosures used in the buildout of AI infrastructure.\"</b> No adverse news in the 45-day scan window.",
            relevance: "The $725B hyperscaler capex wave confirmed by Nvidia this week is a direct commercial demand driver for Tongrun. The Platinum Equity institutional backing provides financial resilience through any near-term volatility. As an active Jackson Shaw tenant in the AI infrastructure supply chain, Tongrun represents the highest-demand industrial end-market of 2026. No lease concerns.",
            source: "Platinum Equity / PR Newswire / ZoomInfo / Crunchbase / Nvidia Earnings / CNBC",
            date: "2026-05-22"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Q1 2026 record results: net income +36% to $851M, core ROE 20.3%, $617M returned to shareholders; HIG at $133 — pulling back from 52-week high but +4% YTD; fortress credit tenant",
            summary: "The Hartford (NYSE: HIG) reported Q1 2026 on April 23: <b>net income $851M (+36% YoY)</b>, diluted EPS <b>$3.04</b>, core ROE <b>20.3%</b>. Total revenues <b>$7.23B (+6.1%)</b>. Business Insurance written premium growth +6% at an 89.2 underlying combined ratio. Returned <b>$617M to shareholders</b> in Q1. HIG at <b>$133.00</b>, down from the $144.50 52-week high but still up <b>+4.0% YTD</b>. The pullback reflects the broader rate-driven selloff in financials this week (Moody's downgrade, yield spike), not company-specific concerns.",
            relevance: "Hartford remains a fortress credit tenant. Net income +36%, 20.3% ROE, and $617M capital return in a single quarter confirm institutional financial health. The Moody's-related pullback this week is market-wide and not company-specific. No lease concerns.",
            source: "Hartford IR / StockTitan / Motley Fool",
            date: "2026-04-23"
        },
        {
            level: "GENERAL",
            company: "Triad Manufacturing",
            cat: "Tenant",
            headline: "St. Louis expansion ($1.78M investment, 32 new jobs) confirmed; active project pipeline: Verizon, Caleres, Love Coffee Bar; Manufacturing Sustainability Certification maintained",
            summary: "Triad Manufacturing's St. Louis expansion ($1.78M investment, 32 new jobs, expanded wood production capacity for retail fixtures and furniture) remains confirmed. Recent completed projects: Verizon innovation lab, Caleres/Famous Footwear NYC flagship renovation, Love Coffee Bar. Holds Manufacturing Sustainability Certification; first Shop! Path Zero Community member. No adverse news in the 45-day scan window.",
            relevance: "Capacity expansion remains an unambiguously positive tenant signal. No lease concerns; expansion may create additional Jackson Shaw opportunity if Triad requires incremental space.",
            source: "Missouri Business Alert / Woodworking Network / KTTN",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Q1 2026 beats: adj EPS $0.67 vs $0.59 est; revenue +39.4% YoY; NPAs 0.28% — exceptional vs. Bank OZK's doubling; Official Bank of the Big 12 Conference; BUSE at $26.40 essentially flat YTD",
            summary: "First Busey Corp reported Q1 2026 on April 28: adjusted EPS <b>$0.67</b> (beat $0.59 estimate by $0.08), revenue <b>$196.2M (+39.4% YoY)</b>. Asset quality exceptional — <b>NPAs 0.28% of total assets</b> (vs. Bank OZK's NPA doubling to $451M). Total assets $18.04B. CEO Van Dukeman reinstated; net margin 25.7%; Q2 dividend $0.26/share. Named <b>Official Bank of the Big 12 Conference</b> (multi-year partnership). BUSE at <b>$26.40</b>, essentially flat YTD. No new adverse news this week.",
            relevance: "The 0.28% NPA ratio contrasts sharply with Bank OZK's deterioration and validates Busey as a stable Jackson Shaw lending partner. Watch Q2 for CrossFirst integration milestones and any Texas CRE portfolio commentary.",
            source: "First Busey IR / GlobeNewswire / Big12Sports",
            date: "2026-04-28"
        },
        {
            level: "GENERAL",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Comerica integration on track; Category III designation from $294B combined assets; 150 new Texas branches by 2029; NIM +17bps to 3.30%; FITB at $47.35, up ~1% YTD",
            summary: "Fifth Third Bancorp (NASDAQ: FITB) Q1 2026 (April 17): adj EPS <b>$0.83</b> (beat $0.62), NIM <b>3.30% (+17bps)</b>. The Comerica acquisition creates the 9th-largest US bank at <b>$294B assets</b>, targeting <b>$850M run-rate cost savings by Q4 2026</b> and <b>150 new Texas branches by 2029</b> ($600M investment). <b>Category III designation</b> triggers enhanced capital requirements (shared with Huntington). FITB at <b>$47.35</b>, up <b>+0.9% YTD</b>. No new adverse news this week.",
            relevance: "The 150-branch Texas commitment confirms long-term DFW market engagement and growing significance for Jackson Shaw's core markets. NIM expansion and raised NII guidance signal improving earnings quality. Cat III designation may incrementally constrain construction lending appetite over 12–24 months.",
            source: "Fifth Third IR / Forbes / PR Newswire / Risk.net",
            date: "2026-04-17"
        },
        {
            level: "GENERAL",
            company: "Inwood National Bank",
            cat: "Lender",
            headline: "Stable $4.39B DFW community bank; Texas Ratio 3.74%; NPA $18.4M; top loan type is CRE; actively hiring in Operations — no adverse news in 45-day window",
            summary: "Inwood National Bank (Dallas TX, $4.39B assets, founded 1964) maintains exceptional credit quality: <b>Texas Ratio 3.74%</b>, non-current loans <b>$18.4M</b>, $0 owned real estate, Return on Equity <b>11.76%</b> (vs. national average 9.98%). The bank has 14 offices throughout North Texas including Rowlett and Garland — directly in Jackson Shaw's development corridors. Actively hiring in Operations — more open roles than any time in the past 12 months, suggesting business growth. CRE is the <b>top loan type</b> in the portfolio, confirming strategic alignment with Jackson Shaw. No adverse news in the 45-day window.",
            relevance: "Inwood's 14 North Texas offices including Rowlett location, CRE-dominant loan book, and exceptional credit quality (3.74% Texas Ratio vs. sector averages of 10%+) confirm it as a stable and strategically aligned lending partner in Jackson Shaw's core development market. Active hiring signals growth posture. No adverse signals.",
            source: "Visbanking / BestCashCow / Yelp / Inwood National Bank",
            date: "2026-05-22"
        },
        {
            level: "GENERAL",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026: net income $68.5M, loans +10% QoQ annualized, NIM 3.84%; named America's Best Regional Banks 2026 (Newsweek); CEO Jay Brogdon; $175M buyback active",
            summary: "Simmons First National Corp reported Q1 2026 on April 16: net income <b>$68.5M</b> ($0.47 EPS), revenue <b>$241M (+15.2% YoY)</b>, loans grew <b>10% linked-quarter annualized</b> to $17.9B, NIM <b>3.84%</b>. CEO <b>Jay Brogdon</b> (January 1, 2026) leads a stable institution with an active <b>$175M stock repurchase program</b>. Named one of <b>America's Best Regional Banks 2026</b> by Newsweek. No adverse news in the 45-day scan window.",
            relevance: "NIM expansion and double-digit loan growth signal improving earnings power. Stable institution with no credit concerns. Watch Q2 for any Texas-specific CRE credit quality commentary.",
            source: "Simmons IR / Arkansas Business / StockTitan / Newsweek",
            date: "2026-04-16"
        },
        {
            level: "GENERAL",
            company: "Barings",
            cat: "Lender",
            headline: "Abu Dhabi office opened April 2026; $481B+ AUM; $500M Mubadala global RE debt partnership active; Dallas multifamily delivery summer 2026 on schedule",
            summary: "Barings opened its <b>Abu Dhabi office</b> in April 2026, expanding global platform. AUM at <b>$481B+</b>. The Artemis Real Estate Partners acquisition ($11B+ AUM) expanded US RE equity capabilities. A <b>$500M global real estate debt partnership with Mubadala</b> targets $1B in senior and subordinated loans. Barings's <b>Dallas multifamily project</b> (Rosewood partnership) is expected to deliver in <b>summer 2026</b>. No adverse news in the 45-day window.",
            relevance: "Expanding global platform and active Dallas pipeline are positive for Jackson Shaw financing relationships. The Mubadala partnership signals continued institutional capital inflows into real estate debt. No adverse signals.",
            source: "Barings.com / Bloomberg / GlobeNewswire / Benzinga",
            date: "2026-04-30"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "HALL Structured Finance returned to Dallas office construction lending for first time in 5 years; closed $60.25M hotel construction loan in Clearwater FL; Uptown Tower $30.8M first-lien loan closed",
            summary: "HALL Structured Finance made a <b>$30.8M first-lien loan</b> for <b>Uptown Tower</b> (254,000 SF office, Dallas) — their <b>first office construction loan in 5 years</b>. Also closed a <b>$60.25M construction loan</b> for The Ballad Hotel (Tapestry by Hilton, Clearwater FL). No adverse news in the 45-day scan window.",
            relevance: "Return to office construction lending signals confidence in Dallas market recovery. Active hospitality and office deal flow confirms ongoing lending capacity and appetite. No adverse signals for Jackson Shaw relationship.",
            source: "HALL Structured Finance Newsroom / Hall Group",
            date: "2026-03-28"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "29 Texas C-PACE jurisdictions active; $23.5M Celina TX deal closed; national C-PACE originations hit record $3.5B in 2025; Eli Terry appointed Director of Lending Partnerships",
            summary: "Wheeler County's April 22 launch brought PACE Equity's Lone Star PACE network to <b>29 Texas jurisdictions</b>. C-PACE originations hit record <b>$3.5B in 2025</b>. PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b> in Celina, TX (436-unit Class A multifamily, north DFW). <b>Eli Terry</b> appointed Director of Lending Partnerships to deepen bank relationships. No adverse news in the 45-day window.",
            relevance: "Direct equity partner actively deploying capital at the north DFW frontier. 29 Texas jurisdictions makes C-PACE increasingly viable for Jackson Shaw projects outside core counties. The Celina deal demonstrates active north DFW execution. No adverse signals.",
            source: "PACE Equity / GlobeNewswire / Lone Star PACE / Bisnow",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "Summit Laddered Fixed Index Annuity launched; $135B portfolio under new CIO Sergi Turabelidze; A+ ratings maintained from AM Best and S&P; President Rob TeKolste leading all five business units",
            summary: "Sammons Institutional Group launched the <b>Summit Laddered Fixed Index Annuity</b> in January 2026. <b>Sergi Turabelidze</b> (SVP/CIO) manages the <b>$135B investment portfolio</b>. President <b>Rob TeKolste</b> (January 1, 2026) oversees all five business units plus Sammons Wealth Management (acquired Wealthcare LLC, $10.2B AUM). Midland National maintains <b>A+ ratings from AM Best and S&P Global</b>. No adverse news in the 45-day window.",
            relevance: "A+ ratings maintained and new product launches signal organizational growth and financial strength at this equity partner. The new CIO managing $135B could influence real estate allocation decisions over time. No adverse signals.",
            source: "Sammons Financial Group / BusinessWire / Midland National Newsroom",
            date: "2026-04-15"
        }
    ]
};
