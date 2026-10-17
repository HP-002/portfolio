import styles from "./Section.module.css";

export default function SectionHeading({ eyebrow, title, id, children }) {
  return (
    <div className={styles.heading}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {children && <p className={styles.aside}>{children}</p>}
    </div>
  );
}
