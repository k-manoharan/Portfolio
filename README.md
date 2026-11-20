# Manoharan K — Portfolio

> Premium editorial engineering portfolio built with React + TypeScript + Vite.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 5 |
| Styling | Custom CSS / CSS Modules |
| Icons | Lucide React |
| Animation | CSS transitions + Motion |
| Deployment | GitHub Pages |

## Getting Started

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build        # Outputs to dist/
pnpm preview      # Preview the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # App shell, page wrappers
│   ├── navigation/   # Floating nav
│   ├── sections/     # Hero, About, Skills, Projects, Contact
│   ├── modals/       # ProjectModal, CertificationModal, SkillsModal
│   └── ui/           # Primitive shared components
├── data/             # projects.ts, certifications.ts, skills.ts
├── hooks/            # useScrollSpy, useModal, useReducedMotion
├── styles/           # tokens.css, typography.css, reset.css, utils.css
├── types/            # index.ts (shared TypeScript interfaces)
├── utils/            # a11y.ts, cn.ts
└── main.tsx          # App entry point
public/
├── assets/
│   ├── images/       # profile.jpg, skill icons
│   └── fonts/        # (self-hosted fallbacks if needed)
└── favicon.svg
```

## GitHub Pages

- Base path: `/portfolio/`
- Deploy branch: `gh-pages` (via GitHub Actions)
- Action file: `.github/workflows/deploy.yml`
