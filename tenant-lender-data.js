// Tenant & Lender News — Week of October 23, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "October 23, 2026",
    last_scan: "2026-10-23T13:30:00Z",

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
            summary: "A Reuters poll of 100 economists taken October 16-20 finds <b>94 expect a hold</b> at the October 27-28 FOMC meeting. All 100 expect a 25 basis point hike in December. The 10-year Treasury yield closed near <b>5.02%</b> on Thursday.",
            relevance: "Floating-rate borrowers across the watchlist should expect higher debt costs into 2027. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "Reuters / AOL",
            date: "2026-10-20"
        },
        {
            level: "MEDIUM",
            company: "Hartford Insurance",
            cat: "Lender",
            headline: "Hartford reports Q3 earnings Monday after the close",
            summary: "The Hartford (<b>NYSE: HIG</b>) releases third-quarter results on October 26 after the market close. A webcast follows on Tuesday, October 27, at 9 a.m. ET.",
            relevance: "Hartford is a lender to the company. Investment income and commercial underwriting trends are the items to watch.",
            source: "The Hartford IR",
            date: "2026-10-23"
        },
        {
            level: "MEDIUM",
            company: "International Paper",
            cat: "Tenant",
            headline: "International Paper reports Q3 earnings October 28",
            summary: "International Paper (<b>NYSE: IP</b>) reports third-quarter results before the NYSE opens on October 28, with a webcast at 10 a.m. ET. The company announced in June a North America packaging reorganization that includes several plant closures by the end of the third quarter.",
            relevance: "IP is a Centerpoint tenant, so the call is the next read on whether the restructuring reaches other Texas sites. Any new closure list is the item to watch.",
            source: "International Paper IR / PR Newswire",
            date: "2026-09-24"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Huntington Q3 adjusted EPS $0.38 as charge-offs rise to 0.31%",
            summary: "Huntington Bancshares (<b>NASDAQ: HBAN</b>) reported third-quarter adjusted earnings of <b>$0.38 per share</b> on October 22, down a cent from the second quarter. Net charge-offs were 0.31% of loans, up from 0.25%. Average commercial real estate loans fell 4% on the quarter to <b>$23.1 billion</b>, and the release cites higher CRE nonaccrual loans.",
            relevance: "Huntington is a lender to the company. Rising CRE nonaccruals and shrinking CRE balances point to tighter credit for new construction.",
            source: "Huntington Bancshares / SEC",
            date: "2026-10-22"
        },
        {
            level: "LOW",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Simmons adjusted profit rises 22% as 26 branch closures near",
            summary: "Simmons First National (<b>NASDAQ: SFNC</b>) reported third-quarter adjusted net income of <b>$79 million</b> on October 16, up 21.7% from a year ago. Branch rightsizing and severance items totaled $43.1 million. Deposits fell to $18.6 billion from $19.8 billion a year earlier.",
            relevance: "Simmons is a lender to the company. Falling deposits and heavy restructuring costs are worth noting, though earnings are improving.",
            source: "Talk Business & Politics / Simmons First National",
            date: "2026-10-16"
        },
        {
            level: "GENERAL",
            company: "Kuehne + Nagel",
            cat: "Tenant",
            headline: "Kuehne + Nagel Q3 profit jumps 53% and guidance is raised again",
            summary: "Kuehne+Nagel reported third-quarter EBIT up <b>53% to CHF 435 million</b> on October 22. Net turnover rose 22% to CHF 7.4 billion, led by air logistics. The company now expects recurring 2026 EBIT of <b>CHF 1.5 to 1.6 billion</b>.",
            relevance: "K+N is a Landis Ridge tenant. Rising volumes and a raised outlook point to a healthy counterparty.",
            source: "Kuehne+Nagel newsroom",
            date: "2026-10-22"
        },
        {
            level: "GENERAL",
            company: "Pinnacle Bank",
            cat: "Lender",
            headline: "Pinnacle Q3 net income of $364 million, margin dips to 3.40%",
            summary: "Pinnacle Financial Partners (<b>NASDAQ: PNFP</b>) reported third-quarter net income to common shareholders of <b>$364 million</b> on October 21, with adjusted EPS of $2.69. Loans grew 2% to $89.8 billion. The net interest margin fell 4 basis points to 3.40% on higher deposit costs, and the charge-off ratio was 0.23%.",
            relevance: "Pinnacle is a lender to the company. Loan growth and stable credit show continued appetite to lend.",
            source: "Pinnacle Financial Partners / SEC",
            date: "2026-10-21"
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
        "W Industries",
        "Xingyu Lighting",
        "Busey Bank",
        "Fifth Third Bank",
        "Inwood National Bank",
        "Barings",
        "Hall Group",
        "PACE Equity",
        "Compatriot Capital (Sammons)"
    ]
};
