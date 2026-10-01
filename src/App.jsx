import { useState, useLayoutEffect, useMemo } from "react";
import ResearchApp from "./themes/research/ResearchApp";
import CreativeApp from "./themes/creative/CreativeApp";
import { ThemeContext } from "./shared/hooks/useTheme";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "creative" ? "creative" : "research";
  });

  useLayoutEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((t) => (t === "research" ? "creative" : "research"));
        window.scrollTo({ top: 0, behavior: "instant" });
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      },
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {theme === "research" ? <ResearchApp /> : <CreativeApp />}
    </ThemeContext.Provider>
  );
}
