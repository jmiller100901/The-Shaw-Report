// Tenant & Lender News — Week of November 20, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "November 20, 2026",
    last_scan: "2026-11-20T13:30:00Z",

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
            headline: "Fed minutes point to a December hike as stocks sell off",
            summary: "Minutes released November 18 showed almost all officials expect more rate hikes, and futures fully price a quarter-point move on <b>December 9</b>. The Fed held at <b>3.75% to 4.00%</b> in October. On Thursday the S&P 500 fell <b>2.02%</b> and the 10-year yield stood above 5%.",
            relevance: "Floating-rate borrowers across the watchlist should plan for higher debt costs. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "StockAnalysis / Dean FI",
            date: "2026-11-18"
        },
        {
            level: "GENERAL",
            company: "Clopay",
            cat: "Tenant",
            headline: "Clopay's parent Griffon raises dividend 14% and expands buyback",
            summary: "Griffon reported fourth-quarter revenue of <b>$490.9 million</b>, up 3%, with volume down 3%. Net leverage fell to <b>2.0x</b> from 2.4x. The board added <b>$400 million</b> to the buyback and raised the quarterly dividend to $0.25. Fiscal 2027 guidance of $1.85 billion in revenue is flat.",
            relevance: "A CrossPoint tenant's parent is delevering and returning cash, which supports its credit profile. Flat guidance points to steady rather than expanding demand.",
            source: "SEC EDGAR / Griffon",
            date: "2026-11-17"
        }
    ],

    // Watchlist names scanned this week with nothing material to report.
    quiet: [
        "Aalo Atomics",
        "Baer Manufacturing / Hunt Electric",
        "Bright Events",
        "C3 Presents",
        "Canteen",
        "Control Panels",
        "DNP Imagingcomm America",
        "Duroshox",
        "Grander Distribution",
        "International Paper",
        "Kuehne + Nagel",
        "W Industries",
        "Xingyu Lighting",
        "Busey Bank",
        "Huntington Bank",
        "Fifth Third Bank",
        "Inwood National Bank",
        "Simmons Bank",
        "Barings",
        "Hall Group",
        "PACE Equity",
        "Hartford Insurance",
        "Pinnacle Bank",
        "Compatriot Capital (Sammons)"
    ]
};
