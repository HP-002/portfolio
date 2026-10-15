import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

// The research theme is the light look, creative the dark one; the button shows the mode it switches to.
const MODES = {
  research: { Icon: LuMoon, next: 'dark' },
  creative: { Icon: LuSun, next: 'light' },
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { Icon, next } = MODES[theme] ?? MODES.research

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <Icon className={styles.icon} aria-hidden="true" />
    </button>
  )
}
