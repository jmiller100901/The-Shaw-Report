// Tenant & Lender News — Week of November 27, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "November 27, 2026",
    last_scan: "2026-11-27T13:30:00Z",

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
            headline: "Fed decision December 9 looms as officials signal more rate hikes",
            summary: "Fed Governor Williams said this week that higher rates may be needed over time. Markets expect a quarter-point hike at the <b>December 8-9</b> meeting, after the Fed held at <b>3.75% to 4.00%</b> in October. The 10-year Treasury yield was <b>4.91%</b> on November 24.",
            relevance: "Floating-rate borrowers across the watchlist should plan for higher debt costs. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "Dean FI / StockAnalysis",
            date: "2026-11-23"
        },
        {
            level: "GENERAL",
            company: "Industry",
            cat: "Industry",
            headline: "Data center suppliers drive 14% of U.S. industrial leasing",
            summary: "Cushman & Wakefield reports data center suppliers took <b>14%</b> of U.S. industrial leasing in the third quarter. They signed about <b>50 million square feet</b> through September. Dallas-Fort Worth is a top market, and Austin-San Antonio is emerging.",
            relevance: "Demand tied to AI equipment supports industrial tenants and landlords across Texas parks. Lenders are also seeing debt access improve while equity stays cautious.",
            source: "CRE Daily / Bisnow",
            date: "2026-11-25"
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
