import groups from "../../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  const total = new Set(
    groups.flatMap((group) => group.items.map((item) => item.name)),
  ).size;
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>04 / THE COMPLETE TOOLKIT</p>
          <h2 id="skills-title">
            A working index
            <br />
            <em>of possibilities.</em>
          </h2>
        </div>
        <p>
          {total} technologies. Six collections.
          <br />
          Every tool has a place.
        </p>
      </div>
      <div className={styles.index}>
        {groups.map((group, i) => (
          <article className={styles.group} key={group.title}>
            <div className={styles.category}>
              <span className={styles.number}>0{i + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <span className={styles.count}>
                  {String(group.items.length).padStart(2, "0")} ENTRIES
                </span>
              </div>
            </div>
            <ul aria-label={`${group.title} technologies`}>
              {group.items.map((item) => (
                <li key={item.name} title={item.description}>
                  <span aria-hidden="true">↗</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
