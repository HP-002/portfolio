import photo from '../../../../assets/images/profile.webp'
import { name, resume, cv, transcript } from '../../../../assets/data/about'
import Skills from '../Skills/Skills'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar} aria-label="Profile and skills">
      <img src={photo} alt={name + ' profile picture'} className={styles.photo} />
      {/* <p className={styles.name}>{name}</p>
      <p className={styles.subtitle}>{subtitle.replace(/\|/g, ' · ')}</p>
      <hr className={styles.divider} /> */}
      <div className={styles.skills}>
        <Skills variant="sidebar" />
      </div>
      <div className={styles.docButtons}>
        <a
          href={resume}
          className={styles.docButton}
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
        <a
          href={cv}
          className={styles.docButton}
          target="_blank"
          rel="noreferrer noopener"
        >
          CV
        </a>
        <a
          href={transcript}
          className={styles.docButton}
          target="_blank"
          rel="noreferrer noopener"
        >
          Transcript
        </a>
      </div>
    </div>
  )
}
