import experiences from '../../../../assets/data/experiences'
import styles from './Work.module.css'

const GROUPS = [
  { type: 'ta',     label: 'Teaching' },
  { type: 'intern', label: 'Industry' },
]

export default function Work() {
  const featured = experiences.filter((e) => e.type !== 'research' && e.showInResearch)
  const compact = experiences.filter((e) => e.type !== 'research' && !e.showInResearch)

  return (
    <section className={styles.section} aria-label="Work Experience">
      <span id="work" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Work Experience</h2>

      {GROUPS.map(({ type, label }) => {
        const entries = featured.filter((e) => e.type === type)
        if (entries.length === 0) return null
        return (
          <div key={type} className={styles.group}>
            <p className={styles.groupLabel}>{label}</p>
            <ul className={styles.list}>
              {entries.map((entry) => (
                <li key={entry.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.title}>{entry.title}</h3>
                    <span className={styles.dates}>
                      {entry.start} – {entry.end}
                    </span>
                  </div>
                  <p className={styles.department}>
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
                  </p>
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
          </div>
        )
      })}

      {compact.length > 0 && (
        <div className={styles.group}>
          <p className={styles.groupLabel}>Other</p>
          <ul className={styles.compactList}>
            {compact.map((entry) => (
              <li key={entry.id} className={styles.compactItem}>
                <span className={styles.compactTitle}>{entry.title}</span>
                <span className={styles.compactDepartment}>{entry.department}</span>
                <span className={styles.compactDates}>
                  {entry.start} – {entry.end}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
