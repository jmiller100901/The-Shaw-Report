// Tenant & Lender News — Week of October 23, 2026
// Rewritten each Friday by the auto-update. Schema and limits are enforced
// by validate-data.js — run `node validate-data.js` before committing.

const TENANT_LENDER_NEWS = {
    date: "October 23, 2026",
    last_scan: "2026-10-20T15:45:00Z",

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
            company: "International Paper",
            cat: "Tenant",
            headline: "Q3 earnings due October 28 after four straight misses",
            summary: "International Paper (<b>NYSE: IP</b>) reports third-quarter results on October 28, its first full quarter after closing the Savannah and Riceboro, Georgia mills. The company has missed estimates in each of the last four quarters. Consensus is for EPS of $0.48 on revenue down roughly 8% year over year. Guidance for European packaging EBITDA is $230-250 million for the quarter, up from $182 million in Q2. The 64-employee Carrollton South, Texas facility closure remains the only announced Texas action.",
            relevance: "IP is a Centerpoint tenant, so the call is the next read on whether the restructuring reaches the San Antonio footprint. Any new Texas closure list is the item to watch.",
            source: "International Paper IR / Zacks",
            date: "2026-10-16"
        },
        {
            level: "MEDIUM",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "26 branch closures take effect December 4, six in Texas",
            summary: "Simmons First National (<b>NASDAQ: SFNC</b>) is six weeks from its December 4 closure of 26 branches, which management expects to add <b>$37-42 million</b> of annual pre-tax benefit. About 100 employees are affected and roughly 70% are expected to be retained elsewhere in the bank. Six of the 26 locations are in Texas and the specific addresses have not been published. CEO Jay Brogdon has said there are no market exits. KBW carries a $26 price target against a share price near $22.",
            relevance: "Simmons is an active Jackson Shaw construction lender, so confirm no DFW branch supporting company accounts is on the list before December 4.",
            source: "Simmons First National IR / Arkansas Business",
            date: "2026-10-16"
        },
        {
            level: "MEDIUM",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Q3 report October 22 is the first full post-Cadence quarter",
            summary: "Huntington Bancshares (<b>NASDAQ: HBAN</b>) reports third-quarter results on October 22, with consensus near <b>$0.38 per share</b>. The February Cadence Bank acquisition grew its commercial real estate book about 60% to <b>$24.3 billion</b>, and combined CRE delinquencies are at an eight-year high. Net interest margin guidance sits in the low-to-high 3.20% range after a cut to 2026 net interest income growth from 39-43% to about 35%. Brant Standridge became president of the holding company and the bank on September 9. A $3 billion buyback is active.",
            relevance: "Huntington is a CrossPoint construction lender. Credit-quality disclosure on the CRE book and any comment on construction originations are the two things to listen for.",
            source: "Huntington Bancshares IR / Yahoo Finance",
            date: "2026-10-16"
        },
        {
            level: "GENERAL",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Q3 adjusted EPS of $1.13 beats as Comerica integration continues",
            summary: "Fifth Third Bancorp (<b>NASDAQ: FITB</b>) reported third-quarter adjusted earnings of <b>$1.13 per share</b> on October 19, ahead of consensus near $1.09. Reported EPS was $0.90 after merger-related charges. Net interest income rose 3% on the quarter to $2.27 billion. The net charge-off ratio was <b>0.31%</b> and the nonperforming loan ratio 0.59%.",
            relevance: "Fifth Third is a CrossPoint construction lender. Stable credit and 1% sequential loan growth point to continued appetite for well-capitalized borrowers.",
            source: "Fifth Third SEC filing",
            date: "2026-10-19"
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
        "Pinnacle Bank",
        "Compatriot Capital (Sammons)"
    ]
};
