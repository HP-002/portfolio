import { LuArrowUpRight } from "react-icons/lu";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: "wires",
    period: "MAY 2026 — PRESENT",
    title: "Privacy-preserving wireless localization",
    role: "Research Assistant · WIRES Lab",
    description:
      "Working with Dr. Roshan Ayyalasomayajula on split neural networks, differential privacy, and federated learning to locate devices using WiFi signals.",
    link: "https://wires-ub.github.io/",
    linkLabel: "WIRES Lab",
    tag: "RESEARCH",
  },
  {
    id: "mrehab",
    period: "MAY 2026 — PRESENT",
    title: "Technology that helps people move",
    role: "Research Assistant · ESC Group",
    description:
      "Contributing to mRehab with Dr. Wenyao Xu: a React Native rehabilitation app using built-in motion sensors to help post-stroke patients rebuild mobility.",
    tag: "RESEARCH",
  },
  {
    id: "teaching",
    period: "JAN 2026 — PRESENT",
    title: "Making complex ideas click",
    role: "Undergraduate Teaching Assistant · University at Buffalo",
    description:
      "Helping students connect theory and implementation in Computer Organization and Machine Learning, from MIPS and datapaths to neural networks and reinforcement learning.",
    tag: "TEACHING",
  },
  {
    id: "athlynk",
    period: "AUG 2025 — OCT 2025",
    title: "Building across the stack",
    role: "Full-Stack Software Developer Intern · Athlynk Inc.",
    description:
      "Built mobile features with React Native, REST APIs with FastAPI, real-time messaging with WebSockets, and database operations with PostgreSQL.",
    tag: "ENGINEERING",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>03 / THE JOURNEY SO FAR</p>
          <h2 id="experience-title">
            Learning by <em>doing.</em>
          </h2>
        </div>
        <p>
          In the lab. In the classroom.
          <br />
          And out in the world.
        </p>
      </div>
      <div className={styles.timeline}>
        {experiences.map((item) => (
          <article className={styles.row} key={item.id}>
            <div className={styles.meta}>
              <span>{item.period}</span>
              <span className={styles.tag}>{item.tag}</span>
            </div>
            <div className={styles.detail}>
              <p className={styles.role}>{item.role}</p>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.linkLabel} <LuArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
