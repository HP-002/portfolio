import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa'
import CONTACT from '../../../../assets/data/contact'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} aria-label="Contact">
      <span id="contact" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Contact</h2>

      <div className={styles.locationContainer}>
        <FaMapMarkerAlt aria-hidden="true" />
        <p className={styles.location}>
          University at Buffalo - State University of New York @ Buffalo, NY
        </p>
      </div>

      <div className={styles.emails}>
        <a href={CONTACT.schoolEmail} className={styles.emailLink}>
          <FaRegEnvelope aria-hidden="true" />
          <span>hetpatel@buffalo.edu</span>
          <span className={styles.emailLabel}>School</span>
        </a>
        <a href={CONTACT.personalEmail} className={styles.emailLink}>
          <FaRegEnvelope aria-hidden="true" />
          <span>hetfaldu19@gmail.com</span>
          <span className={styles.emailLabel}>Personal</span>
        </a>
      </div>

      <div className={styles.socials}>
        <a
          href={CONTACT.github}
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a
          href={CONTACT.linkedin}
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
