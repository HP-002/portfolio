import experiences from "../../../../assets/data/experiences";
import publications from "../../../../assets/data/publications";
import Role from "../Role/Role";
import Publication from "./Publication";
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
            {publications.map((paper, i) => (
              <Publication key={`${paper.title}-${paper.year}`} paper={paper} index={i} />
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
