import skillsSections from '../../../../assets/data/skillsSections'
import SkillIcon from '../../../../shared/components/SkillIcon/SkillIcon'
import styles from './Skills.module.css'

export default function Skills({ variant = 'sidebar' }) {
  // Filter items based on showInResearch
  const filteredItems = skillsSections.map(({ title, items }) => {
    return {
      title,
      items: items.filter((item) => item.showInResearch),
    }
  })

  return (
    <div
      className={variant === 'sidebar' ? styles.sidebar : styles.skills}
      aria-label="Skills"
    >
      {filteredItems.map(({ title, items }) => (
        <div key={title} className={styles.group}>
          <h3 className={styles.heading}>{title}</h3>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id} className={styles.item} >
                <SkillIcon
                  item={item}
                  alt={item.name}
                  className={item.name === 'Gymnasium' ? `${styles.icon} ${styles.black}` : styles.icon}
                />
                <p className={styles.itemtext}>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
