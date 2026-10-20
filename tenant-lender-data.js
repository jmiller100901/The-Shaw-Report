// Tenant & Lender News — Week of October 23, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "October 23, 2026",
    last_scan: "2026-10-20T16:30:00Z",

    // Jackson Shaw watchlist. Fixed — see WATCHLIST in validate-data.js.
    companies: [
        { id: "t01", name: "Aalo Atomics",                        cat: "Tenant" },
        { id: "t02", name: "Baer Manufacturing / Hunt Electric",  cat: "Tenant" },
        { id: "t03", name: "Bright Events",                       cat: "Tenant" },
        { id: "t04", name: "C3 Presents",                         cat: "Tenant" },
        { id: "t05", name: "Canteen",                             cat: "Tenant" },
        { id: "t06", name: "Clopay",                              cat: "Tenant" },
        { id: "t07", name: "Control Panels",                      cat: "Tenant" },
        { id: "t08", name: "DNP Imagingcomm America",             cat: "Tenant" },
        { id: "t09", name: "Duroshox",                            cat: "Tenant" },
        { id: "t10", name: "Grander Distribution",                cat: "Tenant" },
        { id: "t11", name: "International Paper",                 cat: "Tenant" },
        { id: "t12", name: "Kuehne + Nagel",                      cat: "Tenant" },
        { id: "t13", name: "W Industries",                        cat: "Tenant" },
        { id: "t14", name: "Xingyu Lighting",                     cat: "Tenant" },
        { id: "l01", name: "Busey Bank",                          cat: "Lender" },
        { id: "l02", name: "Huntington Bank",                     cat: "Lender" },
        { id: "l03", name: "Fifth Third Bank",                    cat: "Lender" },
        { id: "l04", name: "Inwood National Bank",                cat: "Lender" },
        { id: "l05", name: "Simmons Bank",                        cat: "Lender" },
        { id: "l06", name: "Barings",                             cat: "Lender" },
        { id: "l07", name: "Hall Group",                          cat: "Lender" },
        { id: "l08", name: "PACE Equity",                         cat: "Lender" },
        { id: "l09", name: "Hartford Insurance",                  cat: "Lender" },
        { id: "l10", name: "Pinnacle Bank",                       cat: "Lender" },
        { id: "e01", name: "Compatriot Capital (Sammons)",        cat: "Equity Partner" }
    ],

    // Only real news goes here. HIGH → MEDIUM → LOW → GENERAL.
    // headline ≤ 14 words · summary ≤ 5 sentences · relevance ≤ 2 sentences
    // date = the date of the news, YYYY-MM-DD. Nothing older than 75 days.
    alerts: [
        {
            level: "MEDIUM",
            company: "Industry",
            cat: "Industry",
            headline: "Economists see an October Fed hold and a December hike",
            summary: "A Reuters poll of 100 economists taken October 16-20 finds <b>94 expect a hold</b> at the October 27-28 FOMC meeting. All 100 expect a 25 basis point hike in December. Nearly 60% see the policy rate peaking at 4.00% to 4.25%. The Fed's current range is <b>3.75% to 4.00%</b>.",
            relevance: "Floating-rate borrowers across the watchlist should expect higher debt costs into 2027. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "Reuters / AOL",
            date: "2026-10-20"
        },
        {
            level: "MEDIUM",
            company: "Pinnacle Bank",
            cat: "Lender",
            headline: "Pinnacle reports Q3 earnings Wednesday after the close",
            summary: "Pinnacle Financial Partners (<b>NASDAQ: PNFP</b>) reports third-quarter results on October 21 after the market close. Management hosts a webcast Thursday, October 22, at 8 a.m. ET with CEO Kevin Blair and CFO Jamie Gregory. It is the company's integration year after the Synovus merger.",
            relevance: "Pinnacle is a lender to the company. Net interest margin, deposit costs and CRE credit comments are the items to watch.",
            source: "Pinnacle Financial Partners / Business Wire",
            date: "2026-10-20"
        },
        {
            level: "MEDIUM",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Huntington reports Q3 results Thursday, first full quarter after Cadence",
            summary: "Huntington Bancshares (<b>NASDAQ: HBAN</b>) reports third-quarter results before the open on October 22, with a call at 9 a.m. ET. It is the first full quarter since the Cadence Bank acquisition. Consensus expects roughly <b>$0.39 per share</b>.",
            relevance: "Huntington is a lender to the company. Credit quality on the combined CRE book and any comment on construction originations are the two things to listen for.",
            source: "Huntington Bancshares IR / Benzinga",
            date: "2026-09-30"
        },
        {
            level: "MEDIUM",
            company: "International Paper",
            cat: "Tenant",
            headline: "International Paper reports Q3 earnings October 28",
            summary: "International Paper (<b>NYSE: IP</b>) reports third-quarter results before the NYSE opens on October 28, with a webcast at 10 a.m. ET. The company announced in June a North America packaging reorganization that includes closing its <b>Carrollton South, Texas</b> facility by the end of Q3.",
            relevance: "IP is a Centerpoint tenant, so the call is the next read on whether the restructuring reaches other Texas sites. Any new closure list is the item to watch.",
            source: "International Paper IR / PR Newswire",
            date: "2026-09-24"
        },
        {
            level: "MEDIUM",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Simmons adjusted profit rises 22% as 26 branch closures near",
            summary: "Simmons First National (<b>NASDAQ: SFNC</b>) reported third-quarter adjusted net income of <b>$79 million</b> on October 16, up 21.7% from a year ago. Adjusted revenue rose 8% to $251.2 million. Items tied to branch rightsizing and severance totaled $43.1 million. Deposits fell to $18.6 billion from $19.8 billion a year earlier.",
            relevance: "Simmons is a lender to the company. Falling deposits and heavy restructuring costs are worth noting, though earnings are improving.",
            source: "Talk Business & Politics / Simmons First National",
            date: "2026-10-16"
        },
        {
            level: "GENERAL",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Fifth Third Q3 adjusted EPS of $1.13 as Comerica integration continues",
            summary: "Fifth Third Bancorp (<b>NASDAQ: FITB</b>) reported third-quarter adjusted earnings of <b>$1.13 per share</b> on October 19. Reported EPS was $0.90 after merger-related charges. Net interest income rose 3% on the quarter to $2.27 billion. The net charge-off ratio was <b>0.31%</b>.",
            relevance: "Fifth Third is a lender to the company. Stable credit points to continued appetite for well-capitalized borrowers.",
            source: "Fifth Third SEC filing",
            date: "2026-10-19"
        },
        {
            level: "GENERAL",
            company: "Industry",
            cat: "Industry",
            headline: "Dallas-Fort Worth industrial vacancy falls to 7.3%, lowest since 2023",
            summary: "Cushman & Wakefield reports Dallas-Fort Worth industrial vacancy fell <b>70 basis points</b> in the third quarter to <b>7.3%</b>. Net absorption was 13.9 million square feet and asking rents reached a record $9.76 per square foot NNN. Nationally, vacancy is 6.8% and quarterly absorption was the strongest since early 2023.",
            relevance: "Tightening Texas industrial markets support occupancy and rent growth for landlords in Georgetown, Austin, San Antonio and Houston. New supply of 30.6 million square feet under construction in DFW is the counterweight.",
            source: "Cushman & Wakefield",
            date: "2026-10-14"
        }
    ],

    // Watchlist names scanned this week with nothing material to report.
    quiet: [
        "Aalo Atomics",
        "Baer Manufacturing / Hunt Electric",
        "Bright Events",
        "C3 Presents",
        "Canteen",
        "Clopay",
        "Control Panels",
        "DNP Imagingcomm America",
        "Duroshox",
        "Grander Distribution",
        "Kuehne + Nagel",
        "W Industries",
        "Xingyu Lighting",
        "Busey Bank",
        "Inwood National Bank",
        "Barings",
        "Hall Group",
        "PACE Equity",
        "Hartford Insurance",
        "Compatriot Capital (Sammons)"
    ]
};
