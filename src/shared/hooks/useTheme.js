import { createContext, useContext } from 'react'

// Context value shape: { theme: 'research' | 'creative', toggleTheme: () => void }
export const ThemeContext = createContext({
  theme: 'research',
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)
