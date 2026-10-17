import { LuArrowUpRight } from "react-icons/lu";
import { name, roles, intro, location, resume, cv, transcript } from "../../../../assets/data/about";
import profile from "../../../../assets/images/profile.webp";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span /> 00 /
        </p>
        <h1 id="about-title">
          {name.split(" ")[0]} <em>{name.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className={styles.subtitle}>{roles.join(" + ")}</p>
        {intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className={styles.links}>
          <a
            className={styles.primary}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <LuArrowUpRight aria-hidden="true" />
          </a>
          <a
            className={styles.primary}
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV <LuArrowUpRight aria-hidden="true" />
          </a>
          <a
            className={styles.secondary}
            href={transcript}
            target="_blank"
            rel="noopener noreferrer"
          >
            Transcript <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className={styles.marginNote}>
          <span>{location.toUpperCase()}</span>
          <span>COMPUTER SCIENCE × STATISTICS</span>
        </div>
      </div>
      <figure className={styles.photo}>
        <div className={styles.frame}>
          <img
            src={profile}
            alt="Het Patel"
            width="600"
            height="750"
            fetchPriority="high"
          />
          <span className={styles.crosshair} aria-hidden="true">
            +
          </span>
        </div>
        <figcaption>
          <span>FIG. 00 ↗</span>
        </figcaption>
      </figure>
    </section>
  );
}
