import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

import ThemeToggle from '../../../../shared/components/ThemeToggle/ThemeToggle'
import styles from './Nav.module.css'

import CONTACT from '../../../../assets/data/contact'

const SECTIONS = [
  { href: '#about', label: 'About Me' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experiences' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
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
