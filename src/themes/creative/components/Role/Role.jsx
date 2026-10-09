import { LuArrowUpRight } from "react-icons/lu";
import styles from "./Role.module.css";

function RoleLink({ item }) {
  return item.webpageLink ? (
    <a className={styles.link} href={item.webpageLink} target="_blank" rel="noopener noreferrer">
      {item.webpage || "Visit website"} <LuArrowUpRight aria-hidden="true" />
    </a>
  ) : null;
}

function Description({ items }) {
  return (
    <ul className={styles.description}>
      {items.map((text) => <li key={text}>{text}</li>)}
    </ul>
  );
}

export default function Role({ item, expanded = false }) {
  const research = item.type === "research";
  const lab = item.lab && (item.lab.endsWith("Lab") ? item.lab : `${item.lab} Lab`);

  return (
    <article className={`${styles.row} ${research ? styles.research : ""}`} data-experience-id={item.id}>
      <div className={styles.detail}>
        {research ? (
          <>
            <h4 className={styles.lab}>
              {lab || item.department}
              {item.faculty && <span className={styles.advisor}> · {item.faculty}</span>}
            </h4>
            <p className={styles.position}>{item.title}</p>
            <p className={styles.department}>{item.department}</p>
          </>
        ) : (
          <header className={styles.workHeader}>
            <div className={styles.identity}>
              <p className={styles.organization}>{item.department}</p>
              <h4 className={styles.title}>{item.title}</h4>
              {item.faculty && <p className={styles.department}>With {item.faculty}</p>}
            </div>
            <p className={styles.dates}>{item.start} — {item.end}</p>
          </header>
        )}
        {expanded ? <Description items={item.description} /> : (
          <>
            <p className={styles.lead}>{item.description[0]}</p>
            {item.description.length > 1 && (
              <details className={styles.notes}>
                <summary>More about this role <span className={styles.toggle} aria-hidden="true">+</span></summary>
                <Description items={item.description.slice(1)} />
              </details>
            )}
          </>
        )}
        <RoleLink item={item} />
      </div>
    </article>
  );
}

export function CompactRole({ item }) {
  return (
    <details className={styles.compact} data-experience-id={item.id}>
      <summary>
        <span className={styles.compactIdentity}>
          <span className={styles.compactTitle}>{item.title}</span>
          <span className={styles.compactOrganization}>{item.department}</span>
        </span>
        <span className={styles.dates}>{item.start} — {item.end}</span>
        <span className={styles.toggle} aria-hidden="true">+</span>
      </summary>
      <div className={styles.compactBody}>
        <Description items={item.description} />
        <RoleLink item={item} />
      </div>
    </details>
  );
}
