export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'email' | 'twitter'
}

export interface ExperienceEntry {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface SkillItem {
  name: string
  description: string
  usage: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: SkillItem[]
}
