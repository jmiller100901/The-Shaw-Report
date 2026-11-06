// Tenant & Lender News — Week of November 6, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "November 6, 2026",
    last_scan: "2026-11-06T13:30:00Z",

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
            headline: "December Fed hike priced at 82% as 10-year yield eases to 4.87%",
            summary: "Futures show about an <b>82% chance</b> the Fed raises rates on December 9, after it held at <b>3.75% to 4.00%</b> on October 28. The 10-year Treasury yield fell 6 basis points to <b>4.87%</b> after Democrats won Congress. Initial jobless claims fell to 189,000, and the October jobs report is due today.",
            relevance: "Floating-rate borrowers across the watchlist should plan for higher debt costs. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "Discovery Alert / Investing.com",
            date: "2026-11-05"
        },
        {
            level: "MEDIUM",
            company: "International Paper",
            cat: "Tenant",
            headline: "International Paper's European spin-off targeted for December to March",
            summary: "The European packaging business held its Capital Markets Day in London on <b>November 3</b>. The new company will be DS Smith plc, listed in London with American depositary receipts in New York. It guided 2026 adjusted EBITDA of <b>EUR730 million to EUR780 million</b> and expects one-off costs of EUR120 million to EUR130 million. International Paper shares fell 3.6% in London that day.",
            relevance: "IP is a Centerpoint tenant. The spin-off is on its original 12 to 15 month timeline, which keeps the restructuring story on track.",
            source: "AJ Bell",
            date: "2026-11-03"
        },
        {
            level: "GENERAL",
            company: "C3 Presents",
            cat: "Tenant",
            headline: "Live Nation, parent of C3 Presents, posts record Q3 with revenue up 19%",
            summary: "Live Nation (<b>NYSE: LYV</b>) reported third-quarter revenue of <b>$10.1 billion</b>, up 19%, on November 5. Operating income rose 13% to <b>$892 million</b> and adjusted operating income rose 14% to about $1.18 billion. Attendance grew 19% to 61 million. The company expects double-digit adjusted operating income growth in Concerts and Sponsorship for 2026.",
            relevance: "C3 Presents is an ATX 130 tenant and a Live Nation unit. Record results point to a strong parent.",
            source: "Live Nation / SEC",
            date: "2026-11-05"
        },
        {
            level: "GENERAL",
            company: "Industry",
            cat: "Industry",
            headline: "CMBS delinquency eases to 7.87%; industrial 1.10%, lodging 5.94%",
            summary: "Trepp's overall CMBS delinquency rate fell 15 basis points in October to <b>7.87%</b>. Industrial eased to <b>1.10%</b> and lodging improved 24 basis points to <b>5.94%</b>. Office rose to 12.33% and retail rose to 7.21%.",
            relevance: "Industrial credit remains the healthiest property type, which supports lender appetite. Lodging is improving but still carries more risk.",
            source: "CRE Daily / Trepp",
            date: "2026-11-03"
        }
    ],

    // Watchlist names scanned this week with nothing material to report.
    quiet: [
        "Aalo Atomics",
        "Baer Manufacturing / Hunt Electric",
        "Bright Events",
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
