import { lazy, Suspense, startTransition, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ThemeContext } from "./shared/hooks/useTheme";

// Each theme (JS, CSS, fonts) is its own chunk, so visitors only download the theme they see.
const loaders = {
  research: () => import("./themes/research/ResearchApp"),
  creative: () => import("./themes/creative/CreativeApp"),
};
const themes = {
  research: lazy(loaders.research),
  creative: lazy(loaders.creative),
};

const STORAGE_KEY = "portfolio-theme";

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "creative" ? "creative" : "research";
  } catch {
    return "research";
  }
}

const otherTheme = (theme) => (theme === "research" ? "creative" : "research");

export default function App() {
  const [theme, setTheme] = useState(readSavedTheme);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked (private mode, sandboxed iframes); the theme still applies.
    }
    document.documentElement.dataset.theme = theme;
    if (mounted.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    mounted.current = true;
  }, [theme]);

  // Warm the other theme's chunk once the browser is idle so toggling is instant.
  useEffect(() => {
    const prefetch = () => loaders[otherTheme(theme)]();
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(prefetch, 2000);
    return () => window.clearTimeout(id);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      // A transition keeps the current theme on screen until the next one has loaded.
      toggleTheme: () => startTransition(() => setTheme(otherTheme)),
    }),
    [theme],
  );

  const Theme = themes[theme];

  return (
    <ThemeContext.Provider value={value}>
      <Suspense fallback={null}>
        <Theme />
      </Suspense>
    </ThemeContext.Provider>
  );
}
