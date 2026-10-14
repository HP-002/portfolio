import groups from "../../../../assets/data/skillsSections";
import SkillIcon from "../../../../shared/components/SkillIcon/SkillIcon";
import SectionHeading from "../Section/SectionHeading";
import styles from "./Skills.module.css";

export default function Skills() {
  const total = new Set(
    groups.flatMap((group) => group.items.map((item) => item.id)),
  ).size;
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <SectionHeading eyebrow="05 /" title="Skills" id="skills-title">
        {total} technologies
      </SectionHeading>
      {groups.map((group, i) => (
        <article className={styles.group} key={group.title}>
          <div className={styles.category}>
            <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{group.title}</h3>
              <span className={styles.count}>
                {String(group.items.length).padStart(2, "0")} ENTRIES
              </span>
            </div>
          </div>
          <ul aria-label={`${group.title} technologies`}>
            {group.items.map((item) => (
              <li key={item.id} title={item.description}>
                <SkillIcon
                  item={item}
                  className={styles.logo}
                  iconClassName={styles.symbol}
                  width="24"
                  height="24"
                  loading="lazy"
                />
                {item.name}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
