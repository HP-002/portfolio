# Het Patel — Portfolio

A React + Vite portfolio with two presentations of the same work: the existing research view and a dark creative view.

## Local development

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The site starts in research mode; use **Go Creative** in the navigation to enter the creative view. The chosen mode is saved in local storage. **Go Research** switches back.

```sh
npm run lint
npm run build
npm run preview
```

## Creative view

- Graphite surfaces, copper and sage accents, responsive editorial typography.
- Animated mathematical wire sculpture with a pause control and reduced-motion support.
- Project category filters, expandable build notes, and links to source and demos.
- Mobile navigation with Escape-to-close behavior, a skip link, and visible keyboard focus.
- About, education, research and professional experience, toolkit, and contact sections.
- Self-hosted variable fonts, with their licenses included.
- Optimized WebP previews; original assets remain available to the research view.

Creative components live in `src/themes/creative/`. Theme-specific project presentation is maintained in `src/themes/creative/data/projects.js`; it reuses the existing project records and adds the Black Hole Simulator. Shared identity, education, and contact information live in `src/assets/data/`.

Project and experience details were checked against the main branches of `HP-002/black-hole-simulator`, `HP-002/compiler-alpha`, `HP-002/crowdsense`, and `HP-002/resume`. The traffic-control repository had no implementation on main at the time of review, so it is not presented as a completed project.
