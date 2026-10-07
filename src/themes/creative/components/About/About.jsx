import { LuArrowUpRight } from "react-icons/lu";
import { name } from "../../../../assets/data/about";
import profile from "../../assets/profile.webp";
import resume from "../../../../assets/docs/Het Patel - Resume.pdf";
import transcript from "../../../../assets/docs/Het Patel - Transcript.pdf";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span /> 00 / AN INTRODUCTION
        </p>
        <h1 id="about-title">
          {name.split(" ")[0]} <em>{name.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className={styles.subtitle}>
          Researcher + Developer
        </p>
        <p>
          I’m a Computer Science and Statistics undergraduate at the University
          at Buffalo. I build software and explore machine learning, with a
          particular interest in privacy-preserving wireless localization.
        </p>
        <p>
          My work moves between WiFi signals, mobile rehabilitation, systems,
          and creative experiments. I’m currently exploring reinforcement
          learning and looking toward a PhD in Deep Learning and Reinforcement Learning topics.
        </p>
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
            className={styles.secondary}
            href={transcript}
            target="_blank"
            rel="noopener noreferrer"
          >
            Transcript <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className={styles.marginNote}>
          <span>BUFFALO, NEW YORK</span>
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
          <span></span>
          <span>FIG. 00 ↗</span>
        </figcaption>
      </figure>
    </section>
  );
}
