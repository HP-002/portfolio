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
- Portrait-led personal introduction with annotated typography and reduced-motion support.
- Project category filters, expandable build notes, and links to source and demos.
- Mobile navigation with Escape-to-close behavior, a skip link, and visible keyboard focus.
- About, education, research and professional experience, toolkit, and contact sections.
- Self-hosted variable fonts, with their licenses included.
- Optimized WebP previews; original assets remain available to the research view.

Creative components live in `src/themes/creative/`. Theme-specific project presentation is maintained in `src/themes/creative/data/projects.js`; it reuses the existing project records and adds the Black Hole Simulator and the in-progress Traffic Light Control project. Shared identity, education, and contact information live in `src/assets/data/`.

Project details were checked against `HP-002/black-hole-simulator`, `HP-002/compiler-alpha`, `HP-002/crowdsense`, and `HP-002/traffic-light-control`. Traffic Light Control is explicitly labeled **In progress**.

The creative page opens with the personal introduction, followed by a dedicated education section (both degrees, dates, location, GPA, and all coursework), all nine research/employment/teaching roles, projects, and the full skills index. Earlier roles use a smaller ledger layout with expandable details. Experiences and skills use the shared data directly, including items hidden in the research view, so future additions are included automatically.
