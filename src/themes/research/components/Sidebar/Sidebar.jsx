import photo from '../../../../assets/images/profile.jpg'
import resume from '../../../../assets/docs/Het Patel - Resume.pdf'
import transcript from '../../../../assets/docs/Het Patel - Transcript.pdf'
import { name, subtitle } from '../../../../assets/data/about'
import Skills from '../Skills/Skills'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  console.log(subtitle);
  return (
    <div className={styles.sidebar} aria-label="Profile and skills">
      <img src={photo} alt={name + ' profile picture'} className={styles.photo} />
      {/* <p className={styles.name}>{name}</p>
      <p className={styles.subtitle}>{subtitle.replace(/\|/g, ' · ')}</p>
      <hr className={styles.divider} /> */}
      <Skills variant="sidebar" />
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
