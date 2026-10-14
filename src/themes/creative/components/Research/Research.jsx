import { LuArrowUpRight } from "react-icons/lu";
import experiences from "../../../../assets/data/experiences";
import publications from "../../../../assets/data/publications";
import Role from "../Role/Role";
import SectionHeading from "../Section/SectionHeading";
import section from "../Section/Section.module.css";
import styles from "./Research.module.css";

const labs = experiences.filter((item) => item.type === "research");

export default function Research() {
  return (
    <section id="research" className={`${section.section} ${section.research}`} aria-labelledby="research-title">
      <SectionHeading eyebrow="02 /" title="Research" id="research-title" />
      {labs.length > 0 && (
        <div className={section.group}>
          <div className={section.groupHeading}>
            <h3>Labs</h3>
            <span>{String(labs.length).padStart(2, "0")} affiliations</span>
          </div>
          <div className={section.rows}>
            {labs.map((item) => (
              <Role key={item.id} item={item} expanded />
            ))}
          </div>
        </div>
      )}
      {publications.length > 0 && (
        <div className={section.group}>
          <div className={section.groupHeading}>
            <h3>Publications</h3>
            <span>{String(publications.length).padStart(2, "0")} entries</span>
          </div>
          <ol className={styles.publications}>
            {publications.map((paper) => (
              <li key={`${paper.title}-${paper.year}`} className={styles.publication}>
                <div className={styles.meta}>
                  <span>{paper.year}</span>
                  <span className={styles.status}>{paper.status}</span>
                </div>
                <div>
                  <h4>
                    {paper.link ? (
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        {paper.title} <LuArrowUpRight aria-hidden="true" />
                      </a>
                    ) : paper.title}
                  </h4>
                  <p>{paper.authors.join(", ")}</p>
                  {paper.venue && <p className={styles.venue}>{paper.venue}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
