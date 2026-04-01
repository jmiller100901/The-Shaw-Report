// Tenant & Lender News — Week of April 1, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 1, 2026",
    last_scan: "2026-04-01T14:00:00Z",

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
        { id: "22", name: "Sammons Enterprise",                  cat: "Equity Partner" },
    ],

    // Severity levels:
    //   HIGH    = Bankruptcy, default, fraud, major legal action
    //   MEDIUM  = Downgrade, C-suite exit, earnings miss, regulatory
    //   LOW     = Minor litigation, restructuring warning, analyst cuts
    //   GENERAL = Neutral or positive developments

    alerts: [
        {
            level: "HIGH",
            company: "International Paper",
            cat: "Tenant",
            headline: "IP reports $2.84B net loss, plans company split, announces 7+ additional U.S. facility closures",
            summary: "International Paper recorded a <b>$2.47B non-cash goodwill impairment</b> on its EMEA operations for FY2025, generating a net loss from continuing operations of $2.84B. On January 29, IP announced a plan to <b>split into two independent public companies</b> (North America and EMEA), targeting completion in 12–15 months. At least 7 additional U.S. facility closures are planned for 2026, including Georgetown, SC and Union Gap, WA — following 20+ closures and 4,500+ job cuts since October 2024.",
            relevance: "Most urgent alert in this report. Active U.S. facility rationalization creates real risk of early lease termination or non-renewal. The planned company split adds counterparty uncertainty — it is unclear which successor entity will hold existing lease obligations. Any IP-occupied assets in the portfolio warrant immediate review.",
            source: "Packaging Dive / PR Newswire",
            date: "2026-01-29"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon Corp cuts FY2026 guidance a second time — stock off ~24% past year on housing headwinds",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, issued a second consecutive guidance reduction in early March 2026, citing weakening housing starts and difficult year-over-year comps. Shares fell <b>8.5%</b> on the announcement and are down approximately <b>24% over the past 12 months</b>, trading at ~$70.82 vs. an analyst consensus target of $114.14. FY2026 revenue guidance stands at ~$2.5B with EBITDA of $580–600M; the company is not in financial distress but is facing real volume pressure.",
            relevance: "Consecutive guidance cuts tied to housing market softness are a monitoring flag for any Clopay industrial or manufacturing lease. If rent coverage assumptions relied on strong housing-sector throughput, continued demand softness warrants attention, particularly at lease renewal.",
            source: "Yahoo Finance / PR Newswire",
            date: "2026-03-05"
        },
        {
            level: "MEDIUM",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Designated CEO successor abruptly terminated 10 months after CrossFirst acquisition — $9M separation charge",
            summary: "First Busey Corp separated from Michael J. Maddox — the former Busey Bank president and the board-designated successor CEO of the holding company — effective <b>January 27, 2026</b>, only months after the $917M CrossFirst acquisition closed. Maddox received <b>$8.5M+ in cash severance</b> plus full equity vest acceleration, generating a ~$9M non-recurring pre-tax Q1 2026 charge. CEO Van Dukeman was reinstated to both roles. Q4 2025 net income was a solid $60.8M; the bank holds $18.1B in assets and is well-capitalized.",
            relevance: "An abrupt CEO reversal so soon after a transformative acquisition signals potential integration friction and management instability at a key $18B lender. Monitor whether the CrossFirst integration affects lending appetite, underwriting consistency, or relationship continuity on any active or planned credit facilities.",
            source: "StockTitan / TipRanks",
            date: "2026-01-27"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "$7.4B Cadence Bank acquisition closed Feb. 1 — Huntington now 8th largest in Texas; integration underway",
            summary: "Huntington Bancshares completed its <b>$7.4B acquisition of Cadence Bank</b> on February 1, 2026, adding $53B in assets, 390 branches, and approximately 1 million customers across the South and Texas. The combined institution is now the 8th-largest bank in Texas and the largest in Mississippi. System conversion is targeted for mid-2026, which carries standard integration risks: tangible book value dilution, customer retention, and operational disruption.",
            relevance: "A more geographically expansive Huntington is positive for Texas-market CRE borrowers. However, the integration period through mid-2026 could create delays in loan processing and relationship coverage changes, particularly for borrowers inherited through Cadence. Monitor for any shifts in CRE credit appetite during the integration.",
            source: "Huntington Investor Relations",
            date: "2026-02-01"
        },
        {
            level: "LOW",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "$12.3B Comerica acquisition closed Feb. 2 — Fifth Third now 9th largest U.S. bank; credit chief retiring mid-integration",
            summary: "Fifth Third Bancorp completed its all-stock acquisition of Comerica on <b>February 2, 2026</b>, creating the 9th-largest U.S. bank with <b>$294B in assets</b> and operations in 17 of the 20 fastest-growing large U.S. markets. The bank plans 150 new branches in Dallas, Houston, and Austin by 2029 ($600M investment). Chief Credit Officer Greg Schroeck is retiring after nearly 40 years, with Kristof Schneider as successor; system/brand conversions are expected Q3 2026. Approximately 76 branches (55 Comerica, 21 Fifth Third, primarily Michigan) will close H2 2026.",
            relevance: "A significantly enlarged Fifth Third is now a top-tier regional lender with major Texas presence — relevant to Jackson Shaw's CRE pipeline. The credit leadership transition during active integration is a monitoring item. Q4 2025 EPS of $1.04 beat expectations; no financial distress.",
            source: "Fifth Third Investor Relations",
            date: "2026-02-02"
        },
        {
            level: "LOW",
            company: "Xingyu Lighting",
            cat: "Tenant",
            headline: "Filed Hong Kong IPO prospectus Jan. 26; strong FY2025 profits +15.3%; U.S.–China tariff exposure flagged",
            summary: "Changzhou Xingyu Automotive Lighting Systems filed its <b>Hong Kong IPO prospectus on January 26, 2026</b>, seeking a dual listing on HKEX alongside its Shanghai Stock Exchange listing. FY2025 net profit rose <b>15.3% YoY</b>, with a Strong Buy consensus from 13 analysts. Xingyu supplies VW, BMW, GM, Toyota, NIO, and Li Auto from plants in Germany, Japan, Serbia, Mexico, and the U.S. The IPO prospectus explicitly flags <b>U.S.–China tariff escalation</b> as a material risk.",
            relevance: "As a Chinese-headquartered manufacturer with U.S. operations, escalating auto-parts tariffs in the current trade environment could affect U.S. facility utilization and throughput. The HK IPO filing improves financial transparency. Monitor tariff developments as they could directly impact any U.S. lease locations.",
            source: "HKEX / TradingView",
            date: "2026-01-26"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Record Q4 2025 results; 2026 revenue guidance raised to $580–590M; two new campuses already open",
            summary: "Lincoln Educational Services exceeded Q4 2025 guidance with revenue up <b>19.7% YoY</b> and Q1 2026 student starts expected to rise <b>19%</b>. The company opened new campuses in Houston, TX (Feb. 18) and Levittown, PA (Feb. 13, 90,000 sq ft), with Hicksville, NY (Q4 2026) and Rowlett, TX (Q1 2027) slated next. At its March 19 Investor Day, management outlined a path to <b>$850M revenue by 2030</b>.",
            relevance: "Lincoln Tech is an actively expanding, creditworthy tenant with strong cash flow and growing enrollment. New 65,000–90,000 sq ft campus builds represent both proof of financial health and potential new lease opportunities for industrial/flex space in Jackson Shaw markets.",
            source: "GlobeNewsWire",
            date: "2026-03-19"
        },
        {
            level: "GENERAL",
            company: "Tongrun International",
            cat: "Tenant",
            headline: "Platinum Equity acquires majority stake — PE backing signals strong growth outlook",
            summary: "Platinum Equity (~<b>$50B AUM</b>) announced a significant majority investment in Tongrun International, the Bonham, TX-based precision sheet metal contract manufacturer (~3,500 employees). Tongrun specializes in custom enclosures for data centers, power generation, telecom, and medical sectors, and its customer base includes the world's largest tech firms with over $1 trillion in announced data center investment.",
            relevance: "Platinum Equity backing by a major private equity firm is a strong positive for financial stability and growth trajectory. Surging data center/AI infrastructure demand may drive facility expansions at Tongrun's Bonham, TX location, presenting potential near-term lease opportunity.",
            source: "PR Newswire",
            date: "2026-01-15"
        },
        {
            level: "GENERAL",
            company: "Baer Manufacturing / Hunt Electric",
            cat: "Tenant",
            headline: "Baer Manufacturing expanding into Austin, TX — 73,000 sq ft initial facility, 606,000 sq ft planned",
            summary: "Hunt Electric announced its subsidiary Baer Manufacturing is beginning operations in a <b>73,000 sq ft Austin, TX facility</b> in early 2026, with plans for a 606,000 sq ft building as the expansion matures. The expansion focuses exclusively on third-party manufacturing (duck bank and custom lines) separate from Hudson, WI operations. Hunt Electric is employee-owned with 1,900+ employees and 60 years in business.",
            relevance: "Active large-format industrial expansion in Jackson Shaw's core Texas market is a direct positive signal — strong occupancy of existing space and possible new lease discussions for the next phase of growth.",
            source: "Hunt Electric Newsroom",
            date: "2026-02-01"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Record FY2025 results — net income +23% to $3.8B; A+ rated; new Columbus tech hub opening",
            summary: "The Hartford reported Q4 2025 net income of <b>$1.1B (+33% YoY)</b> and full-year 2025 net income of <b>$3.8B (+23% YoY)</b> — a record year. The insurer holds A+/A1 ratings from S&P, A.M. Best, and Moody's, returned $2.2B to shareholders in 2025, and was named Insurance Industry Leader by Just Capital/CNBC for 2026. A new Columbus, OH tech hub opened in January 2026 with ~75 AI/cloud engineering roles.",
            relevance: "Exceptionally strong financial position with no occupancy or credit risk to a CRE landlord. The Columbus, OH expansion represents a direct new CRE footprint. Strong tenant covenant with investment-grade credit.",
            source: "Insurance Business Magazine",
            date: "2026-01-29"
        },
        {
            level: "GENERAL",
            company: "Barings",
            cat: "Lender",
            headline: "Actively deploying CRE debt capital; 2026 strategy targets ~$1T refinancing wave as compelling opportunity",
            summary: "Barings (MassMutual subsidiary, <b>$481B AUM</b>) published its 2026 real estate strategy, characterizing a looming ~$1 trillion CRE refinancing wall and rising delinquency rates as a compelling opportunity for non-bank lenders. Q4 2025 NAV for Barings Corporate Investors was <b>$16.63/share</b>; monthly high-yield distributions continue ($0.1223/share for March–May 2026). No adverse financial events or leadership changes identified.",
            relevance: "Barings is actively positioning as a CRE lender in the current environment and appears healthy and well-capitalized. Their Sun Belt and industrial/logistics focus aligns well with Jackson Shaw's core markets. Positive signal for lending capacity and relationship continuity.",
            source: "Barings.com",
            date: "2026-02-26"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "$140M Frisco office tower breaking ground; $500M Texas office investment plan announced",
            summary: "Hall Group (Dallas, TX) is breaking ground on a <b>$140M, 206,000 sq ft office tower at HALL Park in Frisco, TX</b> (completion February 2028). HALL Structured Finance is actively originating construction loans across asset classes, and Hall Group announced plans to invest <b>$500M in Texas office properties</b> over the next two years. Hall Group won recognition in D CEO's 2026 Commercial Real Estate Awards.",
            relevance: "Hall Group is healthy, active, and expanding — the opposite of a distressed lender. Their aggressive Texas office investment plan signals continued market confidence. Strong counterparty for any CRE lending or equity relationships.",
            source: "Commercial Property Executive",
            date: "2026-01-01"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "C-PACE reaches record $3.5B annual originations in 2025; described as 'mainstream' by industry",
            summary: "C-PACE financing hit a record <b>~$3.5B in originations in 2025</b>, with cumulative volume approaching $10B, and is now described as \"mainstream\" by industry participants. The largest C-PACE transaction ever — <b>$465M</b> for an office-to-residential conversion in Washington, D.C. — was completed. The sector is active in 40 states with 2026 double-digit growth expected, shifting modestly toward new development and adaptive reuse.",
            relevance: "If PACE Equities is a C-PACE lender in Jackson Shaw's capital stack, the sector is thriving and lender capacity is expanding. C-PACE's fixed-rate, long-term structure with deferred payments is increasingly used as a bridge/mezzanine alternative — favorable for development deals.",
            source: "CNBC / Boston Real Estate Times",
            date: "2026-01-23"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "New CIO appointed March 2026; new President since Jan. 1; $135B investment portfolio; A+ ratings maintained",
            summary: "Sammons Financial Group appointed Rob TeKolste as President effective <b>January 1, 2026</b>, and Sergi Turabelidze as SVP/CIO effective <b>March 2, 2026</b>, overseeing the <b>$135B investment portfolio</b>. Midland National (Sammons subsidiary) maintains A+ ratings from both AM Best and S&P Global. Sammons also signed a definitive agreement to acquire Wealthcare LLC, a registered investment advisory firm.",
            relevance: "Leadership additions (not departures) at Sammons signal organizational growth and investment management focus. The new CIO appointment is relevant context — investment strategy for real estate equity could evolve. No immediate concerns; financial strength is robust with stable top-tier ratings.",
            source: "Midland National Newsroom / Sammons Financial Group",
            date: "2026-03-02"
        }
    ]
};
