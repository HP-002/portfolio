import { lazy, Suspense, startTransition, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ThemeContext } from "./shared/hooks/useTheme";

// Each theme (JS, CSS, fonts) is its own chunk, so visitors only download the theme they see.
const importers = {
  research: () => import("./themes/research/ResearchApp"),
  creative: () => import("./themes/creative/CreativeApp"),
};
// Loaded theme components, so a switch can render synchronously inside a view transition.
const loaded = {};
const load = (name) =>
  importers[name]().then((module) => {
    loaded[name] = module.default;
    return module;
  });
const themes = {
  research: lazy(() => load("research")),
  creative: lazy(() => load("creative")),
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
    const prefetch = () => load(otherTheme(theme));
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
      toggleTheme: () => {
        const next = otherTheme(theme);
        const animate =
          document.startViewTransition &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!animate) {
          // A transition keeps the current theme on screen until the next one has loaded.
          startTransition(() => setTheme(next));
          return;
        }
        // Load first so the snapshot captures the new theme, not an empty Suspense fallback.
        load(next)
          .then(() => document.startViewTransition(() => flushSync(() => setTheme(next))))
          .catch(() => startTransition(() => setTheme(next)));
      },
    }),
    [theme],
  );

  // Picked once per theme so the lazy -> loaded swap never remounts the page mid-visit.
  const Theme = useMemo(() => loaded[theme] ?? themes[theme], [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Suspense fallback={null}>
        <Theme />
      </Suspense>
    </ThemeContext.Provider>
  );
}
