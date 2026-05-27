# Portfolio — Dual-Theme Architecture Reference

> **Stack:** React + JavaScript + Vite | **Styling:** CSS Modules + CSS Custom Properties  
> **Concept:** One site, two personalities — a light/professional Research mode and a dark/creative Creative mode, toggled by the user and persisted via `localStorage`.

---

## Table of Contents

1. [Concept & Goals](#1-concept--goals)
2. [Directory Structure](#2-directory-structure)
3. [CSS Architecture](#3-css-architecture)
4. [Theme Switcher Logic](#4-theme-switcher-logic)
5. [Content Strategy](#5-content-strategy)
6. [Design Tokens Reference](#6-design-tokens-reference)
7. [Component Patterns](#7-component-patterns)
8. [Build Order](#8-build-order)
9. [Pre-Launch Checklist](#9-pre-launch-checklist)

---

## 1. Concept & Goals

### The dual-theme idea
A single portfolio URL with a prominent toggle that switches between two complete visual personalities:

| | Research mode | Creative mode |
|---|---|---|
| **Audience** | Professors, PhD programs, academic reviewers | Recruiters, hiring managers, engineers |
| **Theme** | Light, warm off-white background | Dark, deep indigo-black background |
| **Heading font** | Serif (Lora / Playfair Display) | Geometric sans (DM Sans / Inter) |
| **Animations** | None — fully static | Fade-in on scroll, hover lifts on cards |
| **Card style** | Flat, generous padding, no border effects | Border with subtle hover transition |
| **CV download** | Academic CV (long-form, full publications) | Creative resume (1–2 pages, results-focused) |
| **Hero tone** | "PhD Researcher · Computer Science" | "Software Engineer · ML & Systems" |
| **Publications** | Prominent, full citation style (APA/ACM) | Collapsed — "View publications" expander |
| **Projects** | Clean publication-style list with abstracts | Visual cards with screenshots / live demos |
| **Skills** | Plain text list | Visual tag grid or icon layout |
| **Extra links** | Google Scholar, ORCID, institutional email | GitHub activity, open-to-work badge |

### Core principle
**Same facts, different framing.** Never hide achievements in one mode — just lead with what matters most to each audience. The data layer (`assets/data/`) is shared; only the presentation differs.

### Why not Bootstrap, Tailwind, or MUI?
- **Bootstrap** imposes its own grid and component shapes — a portfolio that "looks like Bootstrap" is the opposite of creative.
- **Tailwind** is reasonable but adds a compilation step and makes CSS harder to audit. Managing two design personalities in utility classes gets messy.
- **MUI** is far too heavy and opinionated for a personal site.
- **CSS Modules + custom properties** gives full pixel control, fast Vite builds, zero runtime overhead, and no framework fighting your design decisions.

---

## 2. Directory Structure

```
portfolio/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
│
└── src/
    ├── main.jsx                          ← unchanged (just renders <App />)
    ├── App.jsx                           ← MODIFIED: theme switcher logic lives here
    ├── app.css                           ← MODIFIED: global reset only, no colors
    │
    ├── assets/
    │   ├── data/                         ← UNCHANGED — shared by both themes
    │   │   ├── coursework.js
    │   │   ├── environments.js
    │   │   ├── experiences.js
    │   │   ├── framesAndLibs.js
    │   │   ├── languages.js
    │   │   ├── projects.js
    │   │   └── tools.js
    │   ├── docs/
    │   │   ├── Het Patel - Resume.pdf
    │   │   └── Het Patel - Transcript.pdf
    │   └── images/
    │       └── ...
    │
    ├── themes/                           ← NEW
    │   │
    │   ├── research/                     ← complete light theme, self-contained
    │   │   ├── ResearchApp.jsx           ← root component: imports tokens + assembles sections
    │   │   ├── tokens.css                ← research design variables (colors, fonts, etc.)
    │   │   └── components/
    │   │       ├── Nav/
    │   │       │   ├── Nav.jsx
    │   │       │   └── Nav.module.css
    │   │       ├── Hero/
    │   │       │   ├── Hero.jsx
    │   │       │   └── Hero.module.css
    │   │       ├── About/
    │   │       │   ├── About.jsx
    │   │       │   └── About.module.css
    │   │       ├── Publications/
    │   │       │   ├── Publications.jsx
    │   │       │   └── Publications.module.css
    │   │       ├── Projects/
    │   │       │   ├── Projects.jsx
    │   │       │   └── Projects.module.css
    │   │       ├── Skills/
    │   │       │   ├── Skills.jsx
    │   │       │   └── Skills.module.css
    │   │       └── Contact/
    │   │           ├── Contact.jsx
    │   │           └── Contact.module.css
    │   │
    │   └── creative/                     ← complete dark theme, mirrors research structure
    │       ├── CreativeApp.jsx
    │       ├── tokens.css                ← creative design variables
    │       └── components/
    │           ├── Nav/
    │           ├── Hero/
    │           ├── About/
    │           ├── Projects/             ← note: no Publications section here (collapsed)
    │           ├── Skills/
    │           └── Contact/
    │
    └── shared/                           ← NEW — theme-agnostic only
        ├── components/
        │   └── ThemeToggle/
        │       ├── ThemeToggle.jsx
        │       └── ThemeToggle.module.css
        └── hooks/
            └── useTheme.js
```

### File ownership rules

| Rule | Explanation |
|---|---|
| `assets/data/` is read-only shared | Both themes import from the same data files. Never duplicate or fork data files per theme. |
| No hex colors in `.module.css` | Every color in a module file must be a `var(--token)`. Hardcoded hex = broken theme swap. |
| Only truly identical components go in `shared/` | If a component has *any* styling difference between themes, it belongs in both theme directories separately. |
| `tokens.css` is imported once, at the theme root | `ResearchApp.jsx` and `CreativeApp.jsx` each import their own `tokens.css` on the first line. No component imports tokens directly. |

---

## 3. CSS Architecture

Two-layer system: **global tokens** define the design language per theme; **CSS Modules** handle layout and structure by consuming those tokens.

### Layer 1 — `themes/research/tokens.css`

```css
/* Import heading font */
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500&family=Inter:wght@400;500&display=swap');

:root {
  /* --- Colors --- */
  --color-bg:          #FAFAF7;   /* warm off-white page background */
  --color-surface:     #F2F0EB;   /* card / section backgrounds */
  --color-text:        #2A2418;   /* primary text */
  --color-muted:       #7A6E55;   /* secondary / caption text */
  --color-accent:      #4A7C6B;   /* muted teal — links, highlights */
  --color-border:      #DDD8CC;   /* card borders, dividers */

  /* --- Typography --- */
  --font-heading:      'Lora', Georgia, serif;
  --font-body:         'Inter', system-ui, sans-serif;
  --size-h1:           2.5rem;
  --size-h2:           1.75rem;
  --size-h3:           1.25rem;
  --size-body:         1rem;
  --size-small:        0.875rem;
  --weight-heading:    500;
  --weight-body:       400;
  --line-height-body:  1.7;

  /* --- Spacing scale --- */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.5rem;
  --space-lg:   2.5rem;
  --space-xl:   4rem;
  --space-xxl:  6rem;

  /* --- Layout --- */
  --max-width:        760px;     /* narrower — academic feel */
  --radius-card:      6px;
  --radius-btn:       4px;

  /* --- Transitions: NONE in research mode --- */
  --transition-card:  none;
  --transition-link:  none;
  --transition-nav:   none;
}
```

### Layer 1 — `themes/creative/tokens.css`

```css
/* Import heading font */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Inter:wght@400;500&display=swap');

:root {
  /* --- Colors --- */
  --color-bg:          #13111F;   /* deep indigo-black */
  --color-surface:     #1E1C30;   /* card / section backgrounds */
  --color-text:        #E8E6F5;   /* primary text */
  --color-muted:       #7A78A0;   /* secondary / caption text */
  --color-accent:      #7B6EF6;   /* electric indigo */
  --color-border:      #2E2B4A;   /* card borders, dividers */

  /* --- Typography --- */
  --font-heading:      'DM Sans', 'Inter', sans-serif;
  --font-body:         'Inter', system-ui, sans-serif;
  --size-h1:           3rem;
  --size-h2:           2rem;
  --size-h3:           1.35rem;
  --size-body:         1rem;
  --size-small:        0.875rem;
  --weight-heading:    700;
  --weight-body:       400;
  --line-height-body:  1.7;

  /* --- Spacing scale: identical to research --- */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.5rem;
  --space-lg:   2.5rem;
  --space-xl:   4rem;
  --space-xxl:  6rem;

  /* --- Layout --- */
  --max-width:        1100px;    /* wider — showcase feel */
  --radius-card:      10px;
  --radius-btn:       6px;

  /* --- Transitions: ON in creative mode --- */
  --transition-card:  transform 0.2s ease, box-shadow 0.2s ease;
  --transition-link:  color 0.15s ease;
  --transition-nav:   background 0.3s ease;
}
```

### Layer 2 — a CSS Module (e.g. `Hero.module.css`)

```css
/* This file is IDENTICAL in structure for both themes.
   It never hardcodes a color, font name, or animation.
   All values come from the tokens imported by the theme root. */

.hero {
  background:    var(--color-bg);
  padding:       var(--space-xxl) var(--space-lg);
  min-height:    100vh;
  display:       flex;
  align-items:   center;
}

.title {
  font-family:   var(--font-heading);   /* serif in research, sans in creative */
  font-size:     var(--size-h1);
  font-weight:   var(--weight-heading);
  color:         var(--color-text);
  margin-bottom: var(--space-sm);
}

.subtitle {
  font-family:   var(--font-body);
  font-size:     var(--size-body);
  color:         var(--color-muted);
}

.card {
  background:    var(--color-surface);
  border:        1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding:       var(--space-md);
  transition:    var(--transition-card);  /* none in research, animated in creative */
}

.accentLink {
  color:         var(--color-accent);
  transition:    var(--transition-link);
}
```

### `src/app.css` — global reset only

```css
/* This file has NO colors, NO fonts, NO layout rules.
   It only contains a basic reset that applies universally. */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, video {
  max-width: 100%;
  display: block;
}
```

---

## 4. Theme Switcher Logic

### `src/App.jsx`

```jsx
import { useState, useEffect } from 'react'
import ResearchApp from './themes/research/ResearchApp'
import CreativeApp from './themes/creative/CreativeApp'
import ThemeToggle from './shared/components/ThemeToggle/ThemeToggle'
import { ThemeContext } from './shared/hooks/useTheme'

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') ?? 'research'
  )

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggle = () =>
    setTheme(t => t === 'research' ? 'creative' : 'research')

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggle theme={theme} onToggle={toggle} />
      {theme === 'research'
        ? <ResearchApp />
        : <CreativeApp />
      }
    </ThemeContext.Provider>
  )
}
```

### `themes/research/ResearchApp.jsx`

```jsx
import './tokens.css'          // ← FIRST LINE: loads research design tokens globally

import Nav          from './components/Nav/Nav'
import Hero         from './components/Hero/Hero'
import About        from './components/About/About'
import Publications from './components/Publications/Publications'
import Projects     from './components/Projects/Projects'
import Skills       from './components/Skills/Skills'
import Contact      from './components/Contact/Contact'

export default function ResearchApp() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
```

### `themes/creative/CreativeApp.jsx`

```jsx
import './tokens.css'          // ← loads INDUSTRY tokens (same variable names, different values)

import Nav     from './components/Nav/Nav'
import Hero    from './components/Hero/Hero'
import About   from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills  from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
// Note: no Publications import — shown as a collapsed link in About instead

export default function CreativeApp() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
```

### `shared/hooks/useTheme.js`

```js
// Use this when a component deep in the tree needs to know the active theme
// (e.g. to decide which CV file to link to)
import { createContext, useContext } from 'react'

export const ThemeContext = createContext('research')

export const useTheme = () => useContext(ThemeContext)
```

### `shared/components/ThemeToggle/ThemeToggle.jsx`

```jsx
import styles from './ThemeToggle.module.css'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'research' ? 'creative' : 'research'} mode`}
    >
      <span className={styles.label}>
        {theme === 'research' ? 'Researcher' : 'Builder'}
      </span>
      <span className={styles.track} data-active={theme === 'creative'}>
        <span className={styles.knob} />
      </span>
    </button>
  )
}
```

> **Toggle placement:** Position it fixed in the top-right corner, or as part of the Nav. It must be visible without scrolling. Style it in `ThemeToggle.module.css` — this component intentionally has its own hardcoded styles since it renders outside either theme tree.

---

## 5. Content Strategy

### What changes between modes

| Section | Research mode | Creative mode |
|---|---|---|
| Hero title | "PhD Researcher · Computer Science" | "Software Engineer · ML & Systems" |
| Hero bio | Academic tone — research interests, lab affiliations | Active voice — what you've built, impact |
| Projects | Publication-style list with abstract snippets | Visual cards with screenshots, tech tags, live demo links |
| Publications | Full list, citation format, DOI links | Collapsed — "View all publications →" |
| Skills | Plain comma-separated text | Tag chips, possibly a visual proficiency layout |
| CV button | Downloads `Het Patel - Academic CV.pdf` | Downloads `Het Patel - Resume.pdf` |
| Contact | Institutional email, Google Scholar, ORCID | GitHub, LinkedIn, open-to-work badge |

### Reading the current theme in a component

```jsx
// In any component that needs to branch on theme (e.g. CV link)
import { useTheme } from '../../../shared/hooks/useTheme'

export default function Contact() {
  const theme = useTheme()

  const cvFile = theme === 'research'
    ? '/docs/Het Patel - Academic CV.pdf'
    : '/docs/Het Patel - Resume.pdf'

  return (
    <a href={cvFile} download>Download CV</a>
  )
}
```

---

## 6. Design Tokens Reference

A quick lookup table for both themes side by side.

| Token | Research value | Creative value |
|---|---|---|
| `--color-bg` | `#FAFAF7` | `#13111F` |
| `--color-surface` | `#F2F0EB` | `#1E1C30` |
| `--color-text` | `#2A2418` | `#E8E6F5` |
| `--color-muted` | `#7A6E55` | `#7A78A0` |
| `--color-accent` | `#4A7C6B` (teal) | `#7B6EF6` (indigo) |
| `--color-border` | `#DDD8CC` | `#2E2B4A` |
| `--font-heading` | `'Lora', serif` | `'DM Sans', sans-serif` |
| `--font-body` | `'Inter', sans-serif` | `'Inter', sans-serif` |
| `--size-h1` | `2.5rem` | `3rem` |
| `--weight-heading` | `500` | `700` |
| `--max-width` | `760px` | `1100px` |
| `--radius-card` | `6px` | `10px` |
| `--transition-card` | `none` | `transform 0.2s ease` |

---

## 7. Component Patterns

### The golden rule for every `.module.css` file

```css
/* ✅ Correct — uses token */
.heading { color: var(--color-text); }

/* ❌ Wrong — hardcoded, won't swap with theme */
.heading { color: #2A2418; }
```

### Typical component structure

```
components/Hero/
├── Hero.jsx          ← imports data, renders JSX, imports styles
└── Hero.module.css   ← layout only, all values via tokens
```

```jsx
// Hero.jsx
import styles from './Hero.module.css'
import { experiences } from '../../../../assets/data/experiences'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Het Patel</h1>
      <p className={styles.subtitle}>...</p>
    </section>
  )
}
```

### Sharing a CSS Module between both themes

If two theme versions of a component have identical *layout* but different *visual tokens* (which will be most of them), you can import the same module file from both:

```jsx
// themes/research/components/Hero/Hero.jsx
import styles from '../../../creative/components/Hero/Hero.module.css'
// (or extract to shared/ if it's clearly universal)
```

Only do this if the layout is truly identical. If the creative hero has a background image or grid layout that research doesn't, give it its own module file.

---

## 8. Build Order

Build in this sequence. Do not jump ahead — each phase depends on the previous one being solid.

**Phase 1 — Content (no code)**  
Write your bio in both tones, describe each project from both angles, gather publication details and DOI links. Real content prevents building a beautiful empty shell.  
*~3–5 hours*

**Phase 2 — Research theme to completion**  
Scaffold the directory, write `tokens.css`, build all seven components. Get it looking good and deploy it. This forces every structural decision to be made once, cleanly.  
*~8–12 hours*

**Phase 3 — Extract and audit tokens**  
Before touching the creative theme: audit every `.module.css` for hardcoded values. Replace any with token variables. This is the most important step.  
*~2–3 hours*

**Phase 4 — Wire up the switcher**  
Build `App.jsx` with the conditional render, `ThemeToggle`, `useTheme` hook, and localStorage persistence. Create `creative/tokens.css` with placeholder values (can be identical to research for now). Confirm the toggle works.  
*~3–4 hours*

**Phase 5 — Style the creative theme**  
Update `creative/tokens.css` with the real dark values. Add creative-specific components (visual project cards, skills grid). Add scroll animations and card hover effects.  
*~6–10 hours*

**Phase 6 — Polish and ship**  
Add a `0.3s ease` CSS transition on `--color-bg` and `--color-text` for a smooth theme swap. Add `?mode=research` / `?mode=creative` URL param support. Test on mobile (320px–480px). Deploy to Vercel.  
*~2 hours*

---

## 9. Pre-Launch Checklist

- [ ] Both modes work on mobile (320px–480px)
- [ ] Toggle is visible without scrolling on first load
- [ ] Theme preference persists across page refresh (localStorage)
- [ ] `?mode=research` and `?mode=creative` URL params work
- [ ] CV download links to the correct file per mode
- [ ] All project links and publication DOIs resolve
- [ ] Text contrast ratio ≥ 4.5:1 in both modes (use a browser contrast checker)
- [ ] No animations play in research mode
- [ ] Serif heading font loads correctly (check on slow connection)
- [ ] No hardcoded hex values anywhere in `.module.css` files
- [ ] Page loads under 3s on a 4G connection
- [ ] Custom domain connected with HTTPS enabled
- [ ] Tested in Chrome, Firefox, and Safari

---

*Generated from planning conversation — Het Patel portfolio, 2026.*
