import SUREPoster from "../docs/SURE-poster.pdf"
/**
 * Your own publications, separate from the reading list in papers.js.
 * Each entry: { title, authors: string[], venue, year,
 *   status: "published" | "under review", link?: string }
 */
const publications = [
    {
        title: "Demo: mRehab: A Clinically Grounded Smartphone System for Home Rehabilitation",
        authors: ["Kritarth Dandapat", "Anarghya Das", "Tanmay Anishkumar Master", "Het Patel", "Alexander Gherardi", "Matt Szigeti", "Paul Reddipogu", "Wei Bo", "Mingxi Lei", "Lora Anne Cavuoto", "Sutanuka Bhattacharjya", "Heamchand Subryan", "Wenyao Xu"],
        venue: "ACM MobiCom",
        year: "2026",
        type: "paper",
        status: "Accepted",
        link: "https://www.sigmobile.org/mobicom/2026/accepted_demos.html#:~:text=Demo%3A%20mRehab%3A%20A%20Clinically%20Grounded%20Smartphone%20System%20for%20Home%20Rehabilitation",
        citation: "K. Dandapat, A. Das, T. A. Master, H. Patel, et al., “Demo: mRehab: A Clinically Grounded Smartphone System for Home Rehabilitation,” Proceedings of ACM MobiCom, 2026. (Accepted)"
    },
    {
        title: "ML-based Wireless Localization with Differential Privacy",
        authors: ["Het Patel", "Roshan Ayyalasomayajula"],
        venue: "Summer Research Symposium, University at Buffalo",
        year: "2026",
        type: "poster",
        status: "Accepted",
        link: null,
        file: SUREPoster,
    },
];

export default publications;
