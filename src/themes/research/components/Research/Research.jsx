import experiences from '../../../../assets/data/experiences'
import styles from './Research.module.css'

export default function Research() {
  const entries = experiences.filter((e) => e.type === 'research')
  if (entries.length === 0) return null

  return (
    <section className={styles.section} aria-label="Research Experience">
      <span id="research" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Research Experience</h2>

      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.id} className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.title}>{entry.title}</h3>
              {/* <span className={styles.dates}>
                {entry.start} – {entry.end}
              </span> */}
            </div>
            {/* <p className={styles.department}>
              {entry.department}
              {entry.webpage && (
                <>
                {' · '}
                  <a
                    href={entry.webpageLink}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {entry.webpage}
                  </a>
                </>
              )}
            </p> */}
            {(entry.lab || entry.faculty) && (
              <p className={styles.lab}>
                {entry.lab && <>{entry.lab}</>}
                {entry.lab && entry.faculty && ' · '}
                {entry.faculty && <>{entry.faculty}</>}
              </p>
            )}
            {entry.description?.length > 0 && (
              <ul className={styles.bullets}>
                {entry.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
