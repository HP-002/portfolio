import photo from '../../../../assets/images/profile.jpg'
import { name, subtitle } from '../../../../assets/data/about'
import Skills from '../Skills/Skills'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar} aria-label="Profile and skills">
      <img src={photo} alt={name} className={styles.photo} />
      <p className={styles.name}>{name}</p>
      <p className={styles.subtitle}>{subtitle.replace(/\|/g, ' · ')}</p>
      <hr className={styles.divider} />
      <Skills variant="sidebar" />
    </div>
  )
}
