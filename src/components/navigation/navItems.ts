export interface NavItem {
  label: string
  href: string
  sectionId?: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
]

export const homeSectionIds = navItems
  .filter((item): item is NavItem & { sectionId: string } => Boolean(item.sectionId))
  .map((item) => item.sectionId)
