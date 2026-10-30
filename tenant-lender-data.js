// Tenant & Lender News — Week of October 30, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "October 30, 2026",
    last_scan: "2026-10-30T13:30:00Z",

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
            headline: "Fed holds rates with two dissents for a hike; December hike priced",
            summary: "The FOMC voted <b>10 to 2</b> on October 28 to keep the target range at <b>3.75% to 4.00%</b>. Governor Cook and Cleveland Fed President Hammack preferred a quarter-point hike. Futures price about an <b>85% chance</b> of a hike on December 9, and the 10-year Treasury yield is near 5.05%.",
            relevance: "Floating-rate borrowers across the watchlist should expect higher debt costs into 2027. Tenants in logistics and manufacturing face the same financing pressure.",
            source: "Federal Reserve / Admiral Markets",
            date: "2026-10-28"
        },
        {
            level: "MEDIUM",
            company: "International Paper",
            cat: "Tenant",
            headline: "International Paper books $1.38 billion impairment; Capital Markets Day November 3",
            summary: "International Paper (<b>NYSE: IP</b>) reported a third-quarter loss from continuing operations of <b>$1.10 billion</b> on October 28, driven by a $1.38 billion non-cash impairment on its European business. North America operating profit rose to <b>$427 million</b> from $204 million in the second quarter. The company guided fourth-quarter North America profit to $460 million to $500 million. The European unit will be spun off as DS Smith plc, with a Capital Markets Day on November 3.",
            relevance: "IP is a Centerpoint tenant. The improving North America business is the relevant part, and the November 3 event is the next read on the restructuring.",
            source: "International Paper / SEC",
            date: "2026-10-28"
        },
        {
            level: "MEDIUM",
            company: "C3 Presents",
            cat: "Tenant",
            headline: "Live Nation, parent of C3 Presents, reports Q3 earnings November 5",
            summary: "Live Nation (<b>NYSE: LYV</b>) will release third-quarter results after the close on November 5. The call is at 2 p.m. PT, and an investor presentation follows on November 10.",
            relevance: "C3 Presents is an ATX 130 tenant and a Live Nation unit. The results are the next read on parent-company strength.",
            source: "Live Nation IR",
            date: "2026-10-30"
        },
        {
            level: "LOW",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Busey Q3 margin falls to 3.58% and provision rises to $9.6 million",
            summary: "First Busey (<b>NASDAQ: BUSE</b>) reported third-quarter net income of <b>$55.8 million</b> on October 27, down from $63.2 million in the second quarter. Adjusted EPS was $0.63. The net interest margin fell to 3.58% from 3.72%. The provision for credit losses rose to <b>$9.6 million</b> from $2.2 million, and non-performing assets were 0.45% of total assets.",
            relevance: "Busey is a lender to the company. A higher provision and a thinner margin could make it more selective on new loans.",
            source: "First Busey / SEC",
            date: "2026-10-27"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Lender",
            headline: "Hartford Q3 net income rises 23% to $1.3 billion and dividend rises 12%",
            summary: "The Hartford (<b>NYSE: HIG</b>) reported third-quarter net income of <b>$1.3 billion</b>, or $4.82 per share, on October 26. Core earnings were $956 million, down 6%. The quarterly dividend rises 12% to <b>$0.67</b>. Mo Tooker succeeds Christopher Swift as CEO on March 1.",
            relevance: "Hartford is a lender to the company. Strong capital returns and a planned CEO transition point to a stable counterparty.",
            source: "The Hartford / SEC",
            date: "2026-10-26"
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
        "Huntington Bank",
        "Fifth Third Bank",
        "Inwood National Bank",
        "Simmons Bank",
        "Barings",
        "Hall Group",
        "PACE Equity",
        "Pinnacle Bank",
        "Compatriot Capital (Sammons)"
    ]
};
