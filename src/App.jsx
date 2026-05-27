import { useState, useEffect, useMemo } from 'react'
import ResearchApp from './themes/research/ResearchApp'
import CreativeApp from './themes/creative/CreativeApp'
import { ThemeContext } from './shared/hooks/useTheme'

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') ?? 'research'
  )

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((t) => (t === 'research' ? 'creative' : 'research')),
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={value}>
      {theme === 'research' ? <ResearchApp /> : <CreativeApp />}
    </ThemeContext.Provider>
  )
}
