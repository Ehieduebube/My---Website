import type { SkillGroup } from '@/types/profile'

/**
 * Grouped skills shown in the Skills section.
 * Add or remove entries freely — the UI renders whatever is here.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        description: 'Component-driven UIs with hooks and modern patterns.',
        usage: 'My primary tool for building interfaces — from dashboards to marketing pages.',
      },
      {
        name: 'TypeScript',
        description: 'Static typing across components, props and API responses.',
        usage: 'Used on almost every project to catch mistakes before they ship.',
      },
      {
        name: 'JavaScript',
        description: 'The language underneath everything, ES2020+.',
        usage: 'Comfortable working without a framework when the job calls for it.',
      },
      {
        name: 'Next.js',
        description: 'File-based routing, SSR/SSG and API routes on top of React.',
        usage: 'For projects that need SEO, fast first loads, or a full-stack setup.',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first styling with a consistent design system.',
        usage: 'My default for styling — including the site you are looking at.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend / APIs',
    skills: [
      {
        name: 'Node.js',
        description: 'JavaScript runtime for building small services and tooling.',
        usage: 'Used to build and connect to REST endpoints for frontend apps.',
      },
      {
        name: 'NestJS',
        description: 'Structured Node framework with modules and dependency injection.',
        usage: 'For projects that needed a more opinionated backend structure.',
      },
      {
        name: 'Django',
        description: 'Python web framework with a batteries-included ORM.',
        usage: 'Used on projects that paired a Python backend with a React frontend.',
      },
      {
        name: 'REST APIs',
        description: 'Designing and consuming HTTP APIs.',
        usage: 'The most common way I connect frontend apps to real data.',
      },
      {
        name: 'GraphQL',
        description: 'Query-based API layer as an alternative to REST.',
        usage: 'Used when a project needed precise, nested data fetching.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    skills: [
      {
        name: 'Git & GitHub',
        description: 'Version control, branching workflows, pull requests.',
        usage: 'Daily — for every project, solo or collaborative.',
      },
      {
        name: 'Docker',
        description: 'Containerizing apps for consistent environments.',
        usage: 'Used to run full-stack projects locally and in deployment.',
      },
      {
        name: 'PostgreSQL / MongoDB',
        description: 'Relational and document databases.',
        usage: 'Depending on the shape of the data a project needs.',
      },
      {
        name: 'Postman',
        description: 'Testing and documenting API endpoints.',
        usage: 'Part of my workflow when building or integrating with APIs.',
      },
    ],
  },
]
