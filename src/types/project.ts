export type ProjectCategory = 'React' | 'TypeScript' | 'Next.js' | 'Full Stack' | 'UI/Frontend'

export interface ProjectLink {
  githubUrl?: string
  liveUrl?: string
}

export interface Project extends ProjectLink {
  id: string
  slug: string
  title: string
  description: string
  summary: string
  image?: string
  technologies: string[]
  category: ProjectCategory[]
  featured?: boolean
  year: string
  role: string
  problem: string
  solution: string
  keyFeatures: string[]
  challenges: string
  learnings: string
}
