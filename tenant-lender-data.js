// Tenant & Lender News — Week of April 2, 2026
// Early Thursday edition — office closed Good Friday
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 2, 2026",
    last_scan: "2026-04-02T18:00:00Z",

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
            headline: "IP reports $2.84B net loss, plans EMEA spin-off into separate public company, $225M Mississippi plant announced",
            summary: "International Paper recorded a <b>$2.47B non-cash goodwill impairment</b> on its EMEA operations for FY2025, generating a net loss of $2.84B. IP announced a plan to <b>spin off its EMEA packaging business</b> (legacy DS Smith + IP assets in 30 countries) into a separately listed entity on the London and New York Stock Exchanges, targeting completion in 12\u201315 months. IP will retain a meaningful stake and become a <b>pure-play North American packaging company</b>. Separately, IP announced a <b>$225M investment</b> in a new 468,000 sq ft sustainable packaging facility in Rankin County, Mississippi. A <b>$70/ton linerboard price increase</b> took effect March 1, estimated to add ~$900M in annualized EBITDA. Shares surged 5.6% on March 13 on insider buying and takeover speculation.",
            relevance: "Most urgent alert in this report. The spin-off creates counterparty uncertainty \u2014 it is unclear which successor entity will hold existing lease obligations. However, the pivot to a pure-play North American focus, the Mississippi plant investment, and aggressive pricing power are constructive signals. Any IP-occupied assets warrant review of which post-split entity will be the counterparty.",
            source: "IP Investor Relations / Packaging Dive / StockTitan",
            date: "2026-01-29"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon cuts FY2026 guidance a second time; forms ONCAP joint venture; Clopay wins Best of IBS Award",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, issued a second consecutive guidance reduction in early March, citing weakening housing starts. Shares are down approximately <b>24% over the past 12 months</b>. FY2026 revenue guidance stands at ~$2.5B with EBITDA of $580\u2013600M. However, Q1 FY2026 EPS of <b>$1.45 beat consensus ($1.34)</b>. Griffon entered a definitive agreement with <b>ONCAP to form a joint venture</b> creating a global hand tools/home organization company, expected to close by end of June 2026. Clopay won the <b>Best of IBS Award</b> at the 2026 NAHB International Builders\u2019 Show for its Avante door with C-Power Click-to-Conceal Panels.",
            relevance: "Consecutive guidance cuts tied to housing softness remain a monitoring flag for Clopay leases. However, the ONCAP JV restructures Griffon\u2019s non-Clopay segments, potentially sharpening focus on Clopay as the core building products division. Product innovation (IBS award) and the earnings beat are positive offsets.",
            source: "Yahoo Finance / PR Newswire / StockTitan",
            date: "2026-03-05"
        },
        {
            level: "MEDIUM",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Designated CEO successor abruptly terminated 10 months after CrossFirst acquisition \u2014 $9M separation charge",
            summary: "First Busey Corp separated from Michael J. Maddox \u2014 the former Busey Bank president and board-designated successor CEO \u2014 effective <b>January 27, 2026</b>, only months after the $917M CrossFirst acquisition closed. Maddox received <b>$8.5M+ in cash severance</b> plus full equity vest acceleration, generating a ~$9M non-recurring pre-tax Q1 2026 charge. CEO Van Dukeman was reinstated to both roles. Q4 2025 net income was a solid $60.8M; the bank holds $18.1B in assets and is well-capitalized.",
            relevance: "An abrupt CEO reversal so soon after a transformative acquisition signals potential integration friction and management instability at a key $18B lender. Monitor whether the CrossFirst integration affects lending appetite, underwriting consistency, or relationship continuity on any active or planned credit facilities.",
            source: "StockTitan / TipRanks",
            date: "2026-01-27"
        },
        {
            level: "MEDIUM",
            company: "Barings",
            cat: "Lender",
            headline: "Barings acquires $11B Artemis Real Estate Partners; launches $500M Mubadala global RE debt fund",
            summary: "Barings completed its acquisition of <b>Artemis Real Estate Partners</b>, an $11+ billion real estate investment firm, significantly expanding its U.S. real estate equity capabilities across multifamily, industrial, hospitality, and other product types. Abu Dhabi\u2019s <b>Mubadala</b> entered a <b>$500M global real estate debt partnership</b> with Barings (alongside parent MassMutual), targeting $1B in senior and subordinated loans across U.S., Europe, and Asia-Pacific. Barings ($481B AUM) published its 2026 strategy characterizing the ~$1 trillion CRE refinancing wall as a compelling opportunity for non-bank lenders.",
            relevance: "These moves dramatically expand Barings\u2019 real estate platform and lending capacity. Greater CRE debt capital availability from Barings is directly positive for Jackson Shaw\u2019s financing relationships. The Artemis acquisition adds equity-side expertise in industrial and hospitality \u2014 asset types aligned with Jackson Shaw\u2019s portfolio.",
            source: "Barings.com / The National",
            date: "2026-03-15"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "$7.4B Cadence Bank acquisition closed Feb. 1 \u2014 Huntington now 8th largest in Texas; integration underway",
            summary: "Huntington Bancshares completed its <b>$7.4B acquisition of Cadence Bank</b> on February 1, 2026, adding $53B in assets, 390 branches, and approximately 1 million customers across the South and Texas. The combined institution is now the 8th-largest bank in Texas and the largest in Mississippi. System conversion is targeted for mid-2026, which carries standard integration risks: tangible book value dilution, customer retention, and operational disruption.",
            relevance: "A more geographically expansive Huntington is positive for Texas-market CRE borrowers. However, the integration period through mid-2026 could create delays in loan processing and relationship coverage changes. Monitor for any shifts in CRE credit appetite during the integration.",
            source: "Huntington Investor Relations",
            date: "2026-02-01"
        },
        {
            level: "LOW",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "$12.3B Comerica acquisition closed Feb. 2 \u2014 Fifth Third now 9th largest U.S. bank; credit chief retiring",
            summary: "Fifth Third Bancorp completed its all-stock acquisition of Comerica on <b>February 2, 2026</b>, creating the 9th-largest U.S. bank with <b>$294B in assets</b> and operations in 17 of the 20 fastest-growing large U.S. markets. The bank plans 150 new branches in Dallas, Houston, and Austin by 2029 ($600M investment). Chief Credit Officer Greg Schroeck is retiring after nearly 40 years, with Kristof Schneider as successor; system/brand conversions are expected Q3 2026.",
            relevance: "A significantly enlarged Fifth Third is now a top-tier regional lender with major Texas presence \u2014 relevant to Jackson Shaw\u2019s CRE pipeline. The credit leadership transition during active integration is a monitoring item. Q4 2025 EPS of $1.04 beat expectations; no financial distress.",
            source: "Fifth Third Investor Relations",
            date: "2026-02-02"
        },
        {
            level: "LOW",
            company: "Xingyu Lighting",
            cat: "Tenant",
            headline: "Filed Hong Kong IPO prospectus Jan. 26; FY2025 profits +15.3%; U.S.\u2013China tariff exposure flagged",
            summary: "Changzhou Xingyu Automotive Lighting Systems filed its <b>Hong Kong IPO prospectus on January 26, 2026</b>, seeking a dual listing on HKEX alongside its Shanghai Stock Exchange listing. FY2025 net profit rose <b>15.3% YoY</b>, with a Strong Buy consensus from 13 analysts. The IPO prospectus explicitly flags <b>U.S.\u2013China tariff escalation</b> as a material risk.",
            relevance: "As a Chinese-headquartered manufacturer with U.S. operations, escalating auto-parts tariffs could affect U.S. facility utilization. The HK IPO filing improves financial transparency. Monitor tariff developments as they could directly impact any U.S. lease locations.",
            source: "HKEX / TradingView",
            date: "2026-01-26"
        },
        {
            level: "LOW",
            company: "Canteen",
            cat: "Tenant",
            headline: "Canteen settles $6.94M class action over hidden vending machine card surcharges",
            summary: "Compass Group USA (d/b/a Canteen) agreed to pay <b>$6.94 million</b> to resolve a class action alleging certain Canteen vending machines charged card-paying customers more than the displayed price without disclosure. Final approval was granted <b>January 9, 2026</b>, with payments to claimants beginning February 25. Separately, parent Compass Group reported <b>Q1 2026 organic revenue growth exceeding 7%</b> with 96%+ client retention.",
            relevance: "The settlement is relatively small for a $46B-revenue parent company and should not impact operations. Compass Group\u2019s strong growth and retention metrics indicate a healthy parent. Minimal risk to tenant operations.",
            source: "ClaimDepot / Compass Group IR",
            date: "2026-01-09"
        },
        {
            level: "LOW",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "CEO transition complete \u2014 Jay Brogdon assumes role; $175M stock buyback authorized",
            summary: "Chairman and CEO George Makris Jr. retired at year-end 2025, with President <b>Jay Brogdon assuming the CEO role</b> effective January 1, 2026. Simmons First National beat Q4 expectations with <b>$78.1M net income</b> (vs. $48.3M year-ago). The board authorized a new <b>$175M stock repurchase program</b> in February 2026.",
            relevance: "Simmons Bank is a Jackson Shaw lender. The CEO transition and strong Q4 results signal stability. The buyback program indicates confidence in capital position, positive for continued lending activity.",
            source: "Arkansas Democrat-Gazette / Simmons IR",
            date: "2026-01-20"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Record growth continues \u2014 Q1 starts +19%, FY2026 guidance $580\u2013590M, Houston campus open, $850M 2030 target",
            summary: "Lincoln Educational Services reported Q1 2026 student starts up <b>~19% year-over-year</b> and issued FY2026 guidance of <b>$580M\u2013$590M revenue</b> (vs. $518M in 2025) and <b>$72M\u2013$76M adjusted EBITDA</b>. The company opened a new <b>Houston, TX campus</b> (Feb. 18) and relocated to a larger <b>90,000 sq ft Levittown, PA campus</b>. Hicksville, NY (Q4 2026) and Rowlett, TX (Q1 2027) are slated next. At its March 19 Investor Day, management outlined a path to <b>$850M revenue by 2030</b> with doubled EBITDA and tripled net income.",
            relevance: "Lincoln Tech is an actively expanding, creditworthy tenant with strong cash flow and growing enrollment. New campus builds (65,000\u201390,000 sq ft) represent proof of financial health. The Houston campus deepens their Texas footprint, and the Rowlett, TX campus (Q1 2027) is directly in Jackson Shaw\u2019s market.",
            source: "GlobeNewsWire",
            date: "2026-03-19"
        },
        {
            level: "GENERAL",
            company: "Baer Manufacturing / Hunt Electric",
            cat: "Tenant",
            headline: "Baer Manufacturing expanding into Austin, TX \u2014 73,000 sq ft initial facility, 606,000 sq ft planned",
            summary: "Hunt Electric announced its subsidiary Baer Manufacturing is beginning operations in a <b>73,000 sq ft Austin, TX facility</b> in early 2026, with plans for a 606,000 sq ft building as the expansion matures. The expansion focuses exclusively on third-party manufacturing separate from Hudson, WI operations. Hunt Electric is employee-owned with 1,900+ employees and 60 years in business.",
            relevance: "Active large-format industrial expansion in Jackson Shaw\u2019s core Texas market is a direct positive signal \u2014 strong occupancy of existing space and possible new lease discussions for the next phase of growth.",
            source: "Hunt Electric Newsroom",
            date: "2026-02-01"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Record FY2025 results \u2014 net income +23% to $3.8B; A+ rated; Columbus tech hub opening",
            summary: "The Hartford reported Q4 2025 net income of <b>$1.1B (+33% YoY)</b> and full-year 2025 net income of <b>$3.8B (+23% YoY)</b> \u2014 a record year. Q4 EPS of $4.06 beat consensus ($3.22). The insurer holds A+/A1 ratings from S&P, A.M. Best, and Moody\u2019s, returned $2.2B to shareholders in 2025, and was named Insurance Industry Leader by Just Capital/CNBC for the 8th straight year. A new Columbus, OH tech hub opened in January 2026. Q1 2026 earnings due April 23.",
            relevance: "Exceptionally strong financial position with no occupancy or credit risk to a CRE landlord. Investment-grade credit and record profitability make Hartford among the strongest tenant covenants in the portfolio.",
            source: "Insurance Business Magazine / Yahoo Finance",
            date: "2026-01-29"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "PACE Equity hires Director of Lending Partnerships as C-PACE hits record $3.5B annual originations",
            summary: "PACE Equity appointed <b>Eli Terry as Director of Lending Partnerships</b>, a new role focused on deepening relationships with banks and institutional lenders as C-PACE deal sizes and volumes accelerate. Industry-wide, C-PACE originations hit a <b>record $3.5B in 2025</b>, with individual deals frequently exceeding $100M. The largest single transaction was a <b>$465M C-PACE deal</b> for an office-to-residential conversion in Washington, D.C.",
            relevance: "PACE Equity is scaling up and deepening bank relationships, which could benefit Jackson Shaw\u2019s future C-PACE financing. The broader C-PACE mainstreaming trend supports continued availability of this capital source across 40 states.",
            source: "CNBC / Bisnow",
            date: "2026-02-01"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "New CIO appointed March 2026; new President since Jan. 1; $135B investment portfolio; A+ ratings maintained",
            summary: "Sammons Financial Group appointed <b>Sergi Turabelidze as SVP/CIO</b> effective March 2, 2026, overseeing the <b>$135B investment portfolio</b> including strategy, asset allocation, and performance. <b>Rob TeKolste</b> became President effective January 1, overseeing all five business units plus the newly established Sammons Wealth Management division (acquired Wealthcare LLC, managing $10.2B AUM). Midland National (Sammons subsidiary) maintains A+ ratings from both AM Best and S&P Global.",
            relevance: "Leadership additions signal organizational growth. The new CIO managing $135B in assets could influence real estate allocation decisions. Combined with the new President and wealth management expansion, Sammons is scaling \u2014 positive for equity partnership capacity. No financial concerns.",
            source: "Sammons Financial Group / Midland National Newsroom",
            date: "2026-03-02"
        }
    ]
};
