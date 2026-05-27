import { LuBookOpenText, LuSparkles } from 'react-icons/lu'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

const THEMES = {
  research: { label: 'Go Creative', Icon: LuBookOpenText, next: 'creative' },
  creative: { label: 'Go Research', Icon: LuSparkles, next: 'research' },
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { label, Icon, next } = THEMES[theme] ?? THEMES.research

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <Icon className={styles.icon} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </button>
  )
}
