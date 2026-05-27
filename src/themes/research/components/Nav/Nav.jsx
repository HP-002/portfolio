import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

import ThemeToggle from '../../../../shared/components/ThemeToggle/ThemeToggle'
import siteLogo from '../../../../assets/images/sitelogo.png'
import styles from './Nav.module.css'

// TODO: replace these placeholders with the real handles / address.
const CONTACT = {
  github: 'https://github.com/hetpatel',
  linkedin: 'https://www.linkedin.com/in/hetpatel/',
  email: 'mailto:hetpatel@buffalo.edu',
}

const SECTIONS = [
  { href: '#about', label: 'About Me' },
  { href: '#education', label: 'Education' },
  { href: '#current-position', label: 'Current Position' },
  { href: '#publications', label: 'Publications' },
  { href: '#experience', label: 'Previous Experiences' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Information' },
]

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#home" className={styles.name}>
            Het Patel
          </a>
        </div>

        <ul className={styles.center}>
          <li>
            <a href="#home" className={styles.homeLink} aria-label="Home">
              <img
                src={siteLogo}
                alt=""
                aria-hidden="true"
                className={styles.logo}
              />
            </a>
          </li>
          {SECTIONS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <ThemeToggle />
          <ul className={styles.socials} aria-label="External links">
            <li>
              <a
                href={CONTACT.github}
                className={styles.socialLink}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                className={styles.socialLink}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href={CONTACT.email}
                className={styles.socialLink}
                aria-label="Email"
              >
                <FaRegEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
