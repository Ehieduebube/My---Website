import type { ExperienceEntry } from '@/types/profile'

/**
 * Work experience timeline. This ships with a single placeholder entry —
 * replace the fields below with your real roles. Add more objects to
 * the array to add more entries; the timeline renders automatically.
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'placeholder-role',
    company: 'Vurlogic Ltd',
    position: 'Frontend Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Built different dashboard interfaces for managing business data, including reusable components, form workflows, API integration, data tables, filtering, and responsive layouts.',
    responsibilities: [
      'Built dashboards for managing and viewing business data.',
      'Created reusable components, forms, tables, and filters.',
      'Connected the frontend to APIs and handled data, errors, and loading states.',
      'and many more',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]
