import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { homeSectionIds, navItems } from '@/components/navigation/navItems'
import { SmartNavLink } from '@/components/navigation/SmartNavLink'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { profile, socialLinks } from '@/data/profile'
import { cn } from '@/lib/utils'

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon }

interface NavbarProps {
  onOpenTerminal: () => void
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeSection = useActiveSection(homeSectionIds)
  const { direction } = useScrollProgress()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.href === '/projects') return location.pathname.startsWith('/projects')
    if (!item.sectionId) return false
    return isHome && activeSection === item.sectionId
  }

  return (
    <motion.header
      animate={{ y: direction === 'down' ? -80 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-line bg-base/80 backdrop-blur-md"
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <SmartNavLink
          href="/#home"
          isActive={false}
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="text-accent">{'>'}</span> {profile.initials}
          <span className="animate-blink text-accent">_</span>
        </SmartNavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <SmartNavLink
                href={item.href}
                isActive={isItemActive(item)}
                className="relative px-3 py-2 text-sm text-ink-muted transition-colors duration-200 ease-snappy hover:text-ink"
                activeClassName="!text-ink"
              >
                {item.label}
                {isItemActive(item) && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </SmartNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={onOpenTerminal}
            className="mr-2 flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-ink-muted transition-colors duration-200 ease-snappy hover:border-line-strong hover:text-ink"
            aria-label="Open command palette"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Help</span>
          </button>
          {socialLinks
            .filter((link) => link.icon === 'github' || link.icon === 'linkedin')
            .map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-ink-muted transition-colors duration-200 ease-snappy hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <div className="relative h-3.5 w-4">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-200 ease-snappy',
                mobileOpen && 'translate-y-[7px] rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 bottom-0 h-px w-4 bg-ink transition-transform duration-200 ease-snappy',
                mobileOpen && '-translate-y-[7px] -rotate-45',
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-base md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <SmartNavLink
                    href={item.href}
                    isActive={isItemActive(item)}
                    onNavigate={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-base text-ink-muted transition-colors duration-200 ease-snappy hover:bg-base-raised hover:text-ink"
                    activeClassName="!text-ink !bg-base-raised"
                  >
                    {item.label}
                  </SmartNavLink>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-2 px-3">
                {socialLinks
                  .filter((link) => link.icon === 'github' || link.icon === 'linkedin')
                  .map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap]
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                <div className="ml-auto">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
