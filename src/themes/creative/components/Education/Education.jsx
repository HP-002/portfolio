import education from "../../../../assets/data/education";
import coursework from "../../../../assets/data/coursework";
import styles from "./Education.module.css";

const disciplines = [
  { id: "cse", name: "Computer Science", marker: "CS" },
  { id: "sta", name: "Statistics", marker: "Σ" },
];

export default function Education() {
  return (
    <section
      id="education"
      className={styles.education}
      aria-labelledby="education-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>01 / THE FOUNDATION</p>
        <h2 id="education-title">
          Two disciplines.
          <br />
          <em>A wider perspective.</em>
        </h2>
      </div>
      {education.map((entry) => (
        <article key={entry.id} className={styles.record}>
          <div className={styles.institution}>
            <div>
              <p className={styles.label}>EDUCATION</p>
              <h3>{entry.institution}</h3>
              <p>{entry.location}</p>
            </div>
            <div className={styles.metrics}>
              <span>
                {entry.start} — {entry.end}
              </span>
              <strong>
                {entry.gpa.toFixed(2)} <small>/ 4.0 GPA</small>
              </strong>
            </div>
          </div>
          <div className={styles.strands}>
            {disciplines.map((discipline, index) => (
              <div className={styles.strand} key={discipline.id}>
                <div className={styles.degree}>
                  <span className={styles.symbol} aria-hidden="true">
                    {discipline.marker}
                  </span>
                  <div>
                    <p>{entry.degree[index]}</p>
                    <h4>{entry.majors[index]}</h4>
                  </div>
                </div>
                {entry.minor && index === 0 && (
                  <p className={styles.minor}>Minor: {entry.minor}</p>
                )}
                <p className={styles.courseLabel}>
                  COURSEWORK / {discipline.name.toUpperCase()}
                </p>
                <ul aria-label={`${discipline.name} coursework`}>
                  {coursework
                    .filter((course) => course.category === discipline.id)
                    .map((course) => (
                      <li key={course.title}>{course.title}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
