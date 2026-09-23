# Ehiedu Ebube — Portfolio

My personal portfolio website, built to showcase who I am as a frontend developer and the projects I've shipped.

Live at: _add your deployed URL here_

## Features

- Home, Projects, and individual project detail pages
- Filterable/searchable project grid
- Command palette (⌘K / Ctrl+K)
- Light/dark theme with system preference detection
- Per-page SEO (title + meta tags)

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev/build tooling
- [React Router](https://reactrouter.com) for routing
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://motion.dev) for animation

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project structure

```
src/
  components/   UI, layout, navigation, and section components
  data/         profile, experience, skills, and project content
  pages/        Home, Projects, ProjectDetail, NotFound
  lib/          shared utilities (SEO helper, etc.)
```

To add a new project, edit [`src/data/projects.ts`](src/data/projects.ts) — the home page and projects page pick it up automatically.
