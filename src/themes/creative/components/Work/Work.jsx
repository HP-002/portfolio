import experiences from "../../../../assets/data/experiences";
import Role, { CompactRole } from "../Role/Role";
import styles from "../Role/Sections.module.css";

const groups = [
  { id: "industry", label: "Industry", types: ["intern"], compact: false },
  { id: "teaching", label: "Teaching Assistant", types: ["ta"], compact: false },
  { id: "mentoring", label: "Tutoring & Mentoring", types: ["other"], compact: true },
];

export default function Work() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>03 /</p>
          <h2 id="work-title">Work</h2>
        </div>
      </div>
      {groups.map((group) => {
        const items = experiences.filter((item) => group.types.includes(item.type));
        if (!items.length) return null;

        return (
          <div className={styles.group} key={group.id}>
            <div className={styles.groupHeading}>
              <h3>{group.label}</h3>
              <span>{group.compact ? "Select a role to explore" : `${String(items.length).padStart(2, "0")} ${items.length === 1 ? "role" : "roles"}`}</span>
            </div>
            <div className={`${styles.rows} ${styles.workRows}`}>
              {items.map((item) => group.compact
                ? <CompactRole key={item.id} item={item} />
                : <Role key={item.id} item={item} expanded />)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
