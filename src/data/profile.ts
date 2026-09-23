import type { SocialLink } from '@/types/profile'

/**
 * Central profile config. Edit this file to update your name, bio,
 * contact details and social links across the entire site.
 */
export const profile = {
  name: 'Ehiedu Ebube',
  initials: 'EE',
  role: 'Frontend Developer',
  location: 'Available for work',
  tagline: 'I build responsive, interactive web experiences with React and TypeScript.',
  bio: [
    "I'm a frontend developer who spends most of my time in React and TypeScript, turning designs and requirements into interfaces that actually hold up in production — not just in a demo.",
    'I care about the details most users never consciously notice: components that stay predictable as an app grows, layouts that hold together across breakpoints, and interactions that respond the way people expect them to.',
    "Most of my work has been dashboards, form-heavy tools and API-driven products, so I've spent a lot of time thinking about state, data fetching and how to keep a UI honest about what's actually happening behind it.",
  ],
  email: 'Ehieduebube@gmail.com',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
} as const

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Ehieduebube', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ebube-ehiedu-88b3b2235/', icon: 'linkedin' },
  { label: 'Email', url: `mailto:${profile.email}`, icon: 'email' },
]
