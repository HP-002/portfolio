import { name, subtitle, about } from '../../../../assets/data/about'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="home" className={styles.about} aria-label="About">
      <span id="about" className={styles.anchor} aria-hidden="true" />
      <header className={styles.header}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.subtitle}>{subtitle.replace(/\|/g, ' · ')}</p>
      </header>
      <div className={styles.body}>
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
