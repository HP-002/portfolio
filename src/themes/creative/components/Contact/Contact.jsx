import { LuArrowUpRight, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import contact from "../../../../assets/data/contact";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>05 / WHAT’S NEXT?</p>
        <div className={styles.layout}>
          <div>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <em>conversation.</em>
            </h2>
            <p>
              Have an interesting problem, a research opportunity,
              <br />
              or an idea worth exploring? I’d love to hear it.
            </p>
          </div>
          <a
            className={styles.circle}
            href={contact.personalEmail}
            aria-label="Email Het Patel"
          >
            <LuArrowUpRight aria-hidden="true" />
            <span>SAY HELLO</span>
          </a>
        </div>
        <div className={styles.bottom}>
          <a className={styles.email} href={contact.personalEmail}>
            hetfaldu19@gmail.com <LuArrowUpRight aria-hidden="true" />
          </a>
          <div className={styles.socials}>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <LuGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={contact.schoolEmail}>
              <LuMail aria-hidden="true" /> University email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
