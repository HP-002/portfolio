# PLAN: Creative theme review, fixes, and data/asset consolidation

Branch: `v2.3-creative`. Scope: `src/themes/creative/**`, `src/assets/**`, plus the small research-theme edits needed to consume the merged data.

Goal: one source of truth in `src/assets/` for data and images. Each theme only owns its presentation (components, CSS, tokens, fonts). After this plan, `src/themes/creative/data/` and the image files in `src/themes/creative/assets/` are gone.

Phases are ordered so each one leaves the site building and both themes rendering. Run `npm run lint && npm run build` and click through both themes after every phase.

---

## Phase 0. Bugs to fix first (independent of the migration)

| # | Where | Bug | Fix |
|---|---|---|---|
| B1 | `src/assets/data/projects.js` (`compiler.github`) | Shared URL `github.com/HP-002/alpha-compiler` returns **404**. Creative silently overrides it with `compiler-alpha` (200), so the research theme ships a dead link. | Set `github: 'https://github.com/HP-002/compiler-alpha'` in shared data, drop the override. |
| B2 | `src/themes/creative/data/projects.js:76` | `traffic-light-control` repo returns **404** (likely private). Creative renders a "Source code" link to it. | Make the repo public, or set `github: null` until it is. Requires B4. |
| B3 | `src/themes/creative/components/Role/Sections.module.css` (`.groupHeading h3`) | `font-size: var(--font-heading)` assigns a font-family value to `font-size`. It is invalid at computed-value time, so it resolves to `unset` (inherit) and **overrides** the `0.65rem` from the `font` shorthand above it. Group labels ("Labs", "Industry", ...) render at body size. | Delete the line. If the larger size is the intended look, set it explicitly (e.g. `font-size: 0.75rem`). |
| B4 | `Projects.jsx:186` | GitHub link is rendered unconditionally; `github: null` produces `<a href>` with no URL. Research theme already guards this. | Wrap in `{project.github && (...)}`. |
| B5 | `creative/data/projects.js:103-106` | `existingProjects.find(...)` returns `undefined` if an id is renamed in shared data; the merged object then has no `tech`, and `project.tech.map` throws, blanking the whole app. | Goes away in Phase 2 (no more id join). |
| B6 | `App.jsx:8,13` | `localStorage` read/write is not guarded. Safari with storage blocked, some embedded webviews and sandboxed iframes throw `SecurityError`, which crashes the app before first render. | Wrap both calls in `try/catch`, fall back to `"research"`. |
| B7 | `src/assets/data/framesAndLibs.js` | Typo `name: "Opcaus"`. Creative patches it in `data/skills.js:28`; research still shows the typo. | Fix at source, drop the patch. |
| B8 | `Education.jsx:45` | `entry.gpa.toFixed(2)` throws if `gpa` is ever `null`/missing. | `entry.gpa != null && ...`. |
| B9 | `Nav.jsx:8-15` | `contact` isn't in the observed `sections` list, so the "Let's talk" link never gets `aria-current` and "Toolkit" stays highlighted while reading Contact. | Add `{ id: "contact" }` to the observed ids (it can stay rendered separately). |
| B10 | `Role.jsx:30` | When an entry has no `lab`, the `<h4>` shows `item.department` and the `<p>` under it shows `item.department` again. | Render the department `<p>` only when `lab` exists. |
| B11 | `Projects.jsx:191`, `Contact.jsx:29` | `aria-label` replaces the visible text ("Source code", "SAY HELLO"). That fails WCAG 2.5.3 (label in name), so voice-control users can't say what they see. | Drop the `aria-label`s, or make them start with the visible text ("Source code for X"). |
| B12 | `index.html:10` | Favicon is a PNG declared as `type="image/svg+xml"`. | `type="image/png"`. |
| B13 | `src/assets/data/coursework.js` | `id: 443` is used twice (Reinforcement Learning and Compilers). Hidden today only because both themes key by title or index. | Give Compilers its real course number. |
| B14 | `research/components/Sidebar/Sidebar.jsx:9` | Leftover `console.log(subtitle)` in production. | Remove. |

Content typos in shared data that both themes ship: `collabrating` (about.js), `effeciently` and `a Alpha code` (projects.js).

---

## Phase 1. Move images into shared assets

Windows and Cloudflare are case-sensitive in different ways (see commit `1d433c1`), so use **lowercase filenames** and `git mv`. For a case-only rename, do it in two steps (`a -> tmp -> A`).

```
git mv src/themes/creative/assets/crowdsense.webp  src/assets/images/crowdsense.webp
git mv src/themes/creative/assets/gameOfLife.webp  src/assets/images/gameoflife.webp
git mv src/themes/creative/assets/tenzies.webp     src/assets/images/tenzies.webp
git mv src/themes/creative/assets/chefclaude.webp  src/assets/images/chefclaude.webp
git mv src/themes/creative/assets/profile.webp     src/assets/images/profile.webp
```

Fonts stay in `src/themes/creative/assets/fonts/`. They are theme presentation, not content.

Delete unused images. Nothing in `src/` or `index.html` imports these (verified by grep), and together they are about **6.6 MB**:

| File | Size |
|---|---|
| `gameoflife.jpg` | 3.3 MB |
| `crowdsense.png` | 2.8 MB |
| `pal.png` | 128 KB |
| `tenzies.png` | 74 KB |
| `pintos.png` | 65 KB |
| `chefclaude.png` | 57 KB |
| `ipopt.png` | 41 KB |
| `x86-64.png` | 26 KB |
| `salary-estimator.png` | 24 KB |
| `cpp2.svg` | 3 KB |

Then point research `Sidebar.jsx` at `profile.webp` (125 KB) and delete `profile.jpg` (720 KB). Check that the crop still looks right in the research sidebar first.

---

## Phase 2. Merge data into `src/assets/data/` (additive fields)

Rule: keep every existing field name so the research theme keeps working. Add only optional fields that research ignores. Visibility stays on the existing `showInResearch` flag. Creative shows everything.

### 2.1 `projects.js`

Add these fields to every entry: `category`, `label`, `note`, `image`, `visual`, `status`.

- Move the two creative-only projects (`traffic-light-control`, `black-hole`) into the shared array with `showInResearch: false`.
- Reorder the array to the creative order. **Side effect:** research's visible order becomes crowdsense, compiler, pintos, salary, gol (today it's compiler, pintos, crowdsense, salary, gol). If research must keep its order, add an `order` number instead of reordering, and sort in creative.

```js
import crowdsenseImage from '../images/crowdsense.webp'

{
  id: 'crowdsense',
  title: 'Crowdsense',
  description: '...',                       // unchanged
  tech: [...],
  github: '...',
  live: '...',
  showInResearch: true,
  // presentation fields; research ignores them
  category: 'AI & ML',                      // 'AI & ML' | 'Systems' | 'Web & Mobile'
  label: 'Vision meets everyday life',
  note: 'A YOLO vision pipeline feeds ...',
  image: crowdsenseImage,                   // or null
  visual: null,                             // 'black-hole' | 'traffic' | 'compiler' | 'data' | 'kernel' | 'learning' | 'motion'
  status: null,                             // e.g. 'In progress'
}
```

Then delete `src/themes/creative/data/projects.js`. In `Projects.jsx`, import from `src/assets/data/projects` and derive the filter list from the data so a mistyped category can't silently drop out of filtering:

```js
const filters = ['All work', ...new Set(projects.map((p) => p.category))]
```

### 2.2 Skills (`languages.js`, `framesAndLibs.js`, `tools.js`, `environments.js`)

Move the creative `extras` into the matching shared files with `showInResearch: false`. Allow an optional `Icon` (react-icons component) alongside the existing `icon` (image URL):

| File | New entries |
|---|---|
| `framesAndLibs.js` `webDevFL` | WebSockets (`LuCable`) |
| `framesAndLibs.js` `otherFL` | OpenGL (`SiOpengl`), GLSL (`SiOpengl`), Flex (`LuScanText`) |
| `tools.js` | gdb (`SiGnu`), CMake (`SiCmake`), PostgreSQL (`SiPostgresql`) |
| `environments.js` | **Drop** the extra "Linux". Shared "Ubuntu" already uses `linux.svg`, so creative currently lists both. |

Add `src/shared/components/SkillIcon/SkillIcon.jsx`. It renders `<img>` when `icon` is set, `<Icon aria-hidden>` when `Icon` is set, and nothing when neither is. Use it in both Skills components. Today creative's `item.icon ? <img> : <item.Icon/>` throws if an entry has neither.

Delete `src/themes/creative/data/skills.js` (and the now-empty `data/` folder). Creative `Skills.jsx` imports `skillsSections` directly.

Also normalise skill ids. They are a mix of numbers (`6`, `7`, `8`, `1`..`4`) and strings. Use string slugs everywhere and key lists by `id`, not `name`.

### 2.3 `about.js`

Creative hardcodes its bio, subtitle and location in `About.jsx`. Add:

```js
const roles = ['Researcher', 'Developer']    // research joins with ' | ', creative with ' + '
const intro = [ '...', '...' ]               // short creative bio (the two paragraphs now in About.jsx)
const location = 'Buffalo, New York'
```

Keep `subtitle` (derive it from `roles`) and `about` (long research bio) as they are.

### 2.4 `contact.js`

Creative prints `hetfaldu19@gmail.com` as a hardcoded string next to `contact.personalEmail`. Add the plain addresses and derive the `mailto:` from them:

```js
const email = `${PERSONALEMAIL}@gmail.com`
const schoolEmailAddress = `${SCHOOLEMAIL}@buffalo.edu`
// existing keys unchanged:
personalEmail: `mailto:${email}`,
```

### 2.5 `education.js` + `coursework.js`

Creative pairs `entry.degree[i]` / `entry.majors[i]` with a hardcoded `disciplines` array by index. Research has its own `CATEGORY_LABELS` map for the same ids. Add these to the existing fields:

```js
// education.js
import ubLogo from '../images/ublogo.png'
{
  ...existing,
  logo: ubLogo,
  courseworkCategories: ['cse', 'sta'],      // parallel to majors, like degree already is
}

// coursework.js: one shared category map
export const courseworkCategories = {
  cse: { name: 'Computer Science', marker: '{ }' },
  sta: { name: 'Statistics',       marker: 'Σ' },
}
```

Both `Education.jsx` files then drop their local map and the direct `ublogo.png` import.

Data note: "Linear Algebra" is filed under `cse`. Check whether it belongs under `sta` (or a MTH group).

### 2.6 `experiences.js`

Creative's `Role.jsx` appends " Lab" unless the name already ends in "Lab", which is presentation logic patching data. Store the full name instead: `lab: "WIRES Lab"`. Then delete the `endsWith` line. Research will now also show "WIRES Lab", which reads better there too.

### 2.7 `publications.js`

The documented shape is `authors: string[]`. Creative's `Research.jsx:53` also accepts a string. Keep the documented array shape and remove the `Array.isArray` branch.

---

## Phase 3. Creative simplifications

1. **One section-heading primitive.** `.eyebrow` + `.heading h2` is copy-pasted in About, Education, Skills, Contact and `Sections.module.css`. Move `Role/Sections.module.css` to `components/Section/Section.module.css` (it isn't Role-specific: Projects, Research and Work use it). Add a tiny `<SectionHeading eyebrow title id />` and use it in Education, Research, Work, Projects and Skills.
2. **One dotted divider.** The radial-gradient dotted rule is duplicated in `Projects.module.css` (`.card + .card`) and `Sections.module.css` (`.workRows > :not(:first-child)`). Make it one `.dottedRows > * + *` class.
3. **Use the tokens.** Modules hardcode token values: `#eeab78` (= `--color-accent`), `#b7ce99` (= `--color-accent-secondary`), `#191c1a` (= `--color-surface`), `#101211ed` / `#33383280` (bg/border with alpha). Replace them with the vars, or `color-mix(in srgb, var(--color-bg) 93%, transparent)` for the alpha ones. The `::selection` and `:focus-visible` rules in `tokens.css` should use the vars too. Remove unused tokens (`--size-h1`, `--size-h3`, `--radius-card`, `--transition-card`, `--transition-nav`, etc.) after a grep.
4. **Dead code.**
   - CSS never referenced: `.stamp` + `.stamp em` (About), `.intro` (Sections), `.ticker` + its media rules (CreativeApp).
   - JSX referencing classes that don't exist: `styles.detail` (Role.jsx:26), `styles.index` (Skills.jsx:23).
   - `.research .description li::marker` repeats the base rule exactly.
   - The empty `<span></span>` in About's figcaption.
5. **`ProjectVisual` if-chain to lookup.** `const visuals = { 'black-hole': BlackHole, traffic: Traffic, ... }` and render `visuals[project.visual] ?? Motion`. That's one small component per visual instead of a 100-line conditional.
6. **`#home` wrapper.** `CreativeApp` wraps `<About id="about">` in `<div id="home">` only so the brand and footer links have a target. Point them at `#about` (or `#top` on `<main>`) and drop the wrapper.
7. **Skills numbering.** `0{i + 1}` breaks past 9 groups. Use `String(i + 1).padStart(2, "0")`, like the other counters.
8. **Lazy-load themes.** `App.jsx` statically imports both theme apps, so every visitor downloads both themes' CSS, plus research's Google Fonts (`@import` in `research/tokens.css`) even in creative. Use `React.lazy(() => import(...))` + `<Suspense>` for each theme. Also, `index.html` loads Inter + Noto Sans from Google while `research/tokens.css` loads Lora + Inter again. Keep one source and drop Noto if nothing uses it.

---


## Target layout after the plan

```
src/assets/
  data/        about, contact, coursework, education, experiences, projects,
               publications, papers, skills files (all with merged fields)
  images/      logos + crowdsense/gameoflife/tenzies/chefclaude/profile .webp
  docs/        resume, transcript
src/shared/
  components/  ThemeToggle, SkillIcon
  hooks/       useTheme
src/themes/creative/
  assets/fonts/   (only)
  components/     About, Contact, Education, Nav, Projects, Research, Role,
                  Section (SectionHeading + Section.module.css), Skills, Work
  CreativeApp.*, tokens.css
```

## Verification checklist

- [ ] `npm run lint` and `npm run build` pass after each phase.
- [ ] `grep -r "themes/creative/data\|themes/creative/assets/[a-z]*\.webp" src` returns nothing.
- [ ] Every image in `src/assets/images` is imported somewhere (re-run the unused-image grep).
- [ ] Research theme: same projects/skills/experiences as before, with fixed compiler link, "Opacus", and "WIRES Lab".
- [ ] Creative theme: 11 projects, filters derived from data, "Show all" works per filter, all skills with icons.
- [ ] Every project and experience link returns 200 (`curl -sL -o /dev/null -w '%{http_code}'`).
- [ ] Toggle between themes: no flash, no console errors, scroll resets to top.
- [ ] Mobile (<= 700px) and nav breakpoint (<= 1200px) checked in creative.
