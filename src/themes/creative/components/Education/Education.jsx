import education from "../../../../assets/data/education";
import coursework, { courseworkCategories } from "../../../../assets/data/coursework";
import SectionHeading from "../Section/SectionHeading";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className={styles.education}
      aria-labelledby="education-title"
    >
      <SectionHeading eyebrow="01 /" title="Education" id="education-title" />
      {education.map((entry) => (
        <article key={entry.id} className={styles.record}>
          <div className={styles.institution}>
            <div className={styles.identity}>
              <img
                src={entry.logo}
                alt={`${entry.institution} logo`}
                className={styles.logo}
                width="72"
                height="72"
                loading="lazy"
              />
              <div>
              <p className={styles.label}>EDUCATION</p>
              <h3>{entry.institution}</h3>
              <p>{entry.location}</p>
              </div>
            </div>
            <div className={styles.metrics}>
              <span>
                {entry.start} — {entry.end}
              </span>
              {entry.gpa != null && (
                <strong>
                  {entry.gpa.toFixed(2)} <small>/ 4.0 GPA</small>
                </strong>
              )}
            </div>
          </div>
          <div className={styles.strands}>
            {entry.courseworkCategories.map((id, index) => {
              const discipline = courseworkCategories[id];
              return (
                <div className={styles.strand} key={id}>
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
                      .filter((course) => course.category === id)
                      .map((course) => (
                        <li key={course.id}>{course.title}</li>
                      ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </section>
  );
}
