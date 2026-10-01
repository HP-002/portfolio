import { LuArrowUpRight } from "react-icons/lu";
import profile from "../../assets/profile.webp";
import education from "../../../../assets/data/education";
import resume from "../../../../assets/docs/Het Patel - Resume.pdf";
import styles from "./About.module.css";

export default function About() {
  const university = education[0];
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.photo}>
        <img
          src={profile}
          alt="Het Patel"
          loading="lazy"
          width="600"
          height="750"
        />
        <div className={styles.caption}>
          <span>A LITTLE ABOUT ME</span>
          <span>↗</span>
        </div>
        <span className={styles.stamp}>
          STAY
          <br />
          <em>curious.</em>
        </span>
      </div>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>02 / THE PERSON BEHIND THE CODE</p>
        <h2 id="about-title">
          A builder’s mindset.
          <br />
          <em>A researcher’s curiosity.</em>
        </h2>
        <p>
          I’m Het, a Computer Science and Statistics undergraduate at the
          University at Buffalo. I’m drawn to the space where a good question
          becomes something you can actually use.
        </p>
        <p>
          That takes me from privacy-preserving wireless localization and mobile
          rehabilitation to operating systems, compilers, and a black hole
          rendered from scratch. Different problems. The same drive to
          understand them deeply.
        </p>
        <p>
          Right now, I’m exploring machine learning and reinforcement learning,
          with a growing interest in quantum computing. I’m looking toward a PhD
          and always happy to meet people asking interesting questions.
        </p>
        <div className={styles.education}>
          <span className={styles.eduLabel}>THE FOUNDATION</span>
          <h3>University at Buffalo</h3>
          <p>B.S. Computer Science + B.A. Statistics</p>
          <div>
            <span>
              {university.start} — {university.end}
            </span>
            <span>{university.gpa.toFixed(2)} / 4.0 GPA</span>
          </div>
        </div>
        <a
          className={styles.resume}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View my résumé <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
