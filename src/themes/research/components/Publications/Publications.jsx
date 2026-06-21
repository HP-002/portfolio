import papers from '../../../../assets/data/papers'
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section className={styles.section} aria-label="Publications">
      <span id="publications" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Publications</h2>

      <div className={styles.subsection}>
        <p className={styles.subheading}>Authored Works</p>
        <p className={styles.placeholder}>
          Research papers in preparation. Check back soon.
        </p>
      </div>

      <div className={styles.subsection}>
        <p className={styles.subheading}>Papers Read</p>
        <ul className={styles.paperList}>
          {papers.map((paper) => (
            <li key={paper.id} className={styles.paper} title={paper.authors}>
              {paper.link ? (
                <a
                  href={paper.link}
                  className={styles.paperTitle}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {paper.title}
                </a>
              ) : (
                <span className={styles.paperTitle}>{paper.title}</span>
              )}
              <span className={styles.paperMeta}>
                {paper.venue} · {paper.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
