import { LuArrowUpRight } from "react-icons/lu";
import experiences from "../../../../assets/data/experiences";
import styles from "./Experience.module.css";

const tags = {
  research: "RESEARCH",
  ta: "TEACHING",
  intern: "ENGINEERING",
  other: "TEACHING & SUPPORT",
};
const recent = experiences.filter((item) => item.type !== "other");
const earlier = experiences.filter((item) => item.type === "other");

function Role({ item, compact = false }) {
  return (
    <article
      className={`${styles.row} ${compact ? styles.compact : ""}`}
      data-experience-id={item.id}
    >
      <div className={styles.meta}>
        <span>
          {item.start} — {item.end}
        </span>
        <span className={styles.tag}>{tags[item.type]}</span>
      </div>
      <div className={styles.detail}>
        <p className={styles.role}>
          {item.lab
            ? `${item.lab.endsWith("Lab") ? item.lab : `${item.lab} Lab`} · ${item.department}`
            : item.department}
        </p>
        <h3>{item.title}</h3>
        {item.faculty && <p className={styles.faculty}>With {item.faculty}</p>}
        <p className={styles.description}>{item.description[0]}</p>
        {item.description.length > 1 && (
          <details className={styles.notes}>
            <summary>
              More about this role <span aria-hidden="true">+</span>
            </summary>
            <ul>
              {item.description.slice(1).map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </details>
        )}
        {item.webpageLink && (
          <a href={item.webpageLink} target="_blank" rel="noopener noreferrer">
            {item.webpage || "Visit website"}{" "}
            <LuArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>02 / THE COMPLETE JOURNEY</p>
          <h2 id="experience-title">
            Every chapter
            <br />
            <em>leaves a mark.</em>
          </h2>
        </div>
        <p>
          Research, engineering, and teaching.
          <br />
          All {experiences.length} roles. Each part of the story.
        </p>
      </div>
      <div className={styles.timeline}>
        {recent.map((item) => (
          <Role key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.archiveHeading}>
        <span>EARLIER CHAPTERS / 2024—2025</span>
        <p>
          Where explaining, mentoring, and building confidence became part of my
          work.
        </p>
      </div>
      <div className={styles.archive}>
        {earlier.map((item) => (
          <Role key={item.id} item={item} compact />
        ))}
      </div>
    </section>
  );
}
