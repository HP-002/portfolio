import education from '../../../../assets/data/education'
import coursework from '../../../../assets/data/coursework'
import ubLogo from '../../../../assets/images/ublogo.png'
import styles from './Education.module.css'

const CATEGORY_LABELS = {
  cse: 'Computer Science',
  sta: 'Statistics',
}

export default function Education() {
  const grouped = coursework.reduce((acc, course) => {
    const key = course.category || 'other'
    if (!acc[key]) acc[key] = []
    acc[key].push(course)
    return acc
  }, {})

  return (
    <section className={styles.section} aria-label="Education">
      <span id="education" className={styles.anchor} aria-hidden="true" />
      <h2 className={styles.heading}>Education</h2>

      {education.map((entry) => {
        const degrees = Array.isArray(entry.degree) ? entry.degree : [entry.degree]
        return (
          <div key={entry.id} className={styles.degree}>
            <div className={styles.logoContainer}>
              <img
                src={ubLogo}
                alt={`${entry.institution} logo`}
                className={styles.logo}
                />
            </div>
            <div className={styles.degreeMain}>
              <h3 className={styles.institution}>{entry.institution}</h3>
              {degrees.map((deg, i) => (
                <p key={deg} className={styles.degreeLine}>
                  {deg} · {entry.majors[i] ?? entry.majors.join(' & ')}
                  {entry.minor && i === 0 && ` · Minor in ${entry.minor}`}
                </p>
              ))}
            </div>
            <div className={styles.degreeMeta}>
              <span>{entry.end}</span>
              {/* <span>{entry.location}</span> */}
              <span>GPA: {entry.gpa} / 4.0</span>
            </div>
          </div>
        )
      })}

      <div className={styles.coursework}>
        {/* <p className={styles.subheading}>Relevant Coursework</p> */}
        {Object.entries(grouped).map(([cat, courses]) => (
          <div key={cat} className={styles.courseGroup}>
            <span className={styles.courseCategory}>
              {CATEGORY_LABELS[cat] ?? cat.toUpperCase()}
            </span>
            <div className={styles.courseTags}>
              {courses.map((course, i) => (
                <span key={`${course.id}-${i}`} className={styles.courseTag}>
                  {course.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
