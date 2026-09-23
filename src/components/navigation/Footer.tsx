import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { profile, socialLinks } from '@/data/profile'

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, email: Mail }

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center gap-4 py-8 text-sm text-ink-faint sm:flex-row sm:justify-between">
        <p className="font-mono">
          © {year} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap]
            if (!Icon) return null
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.icon === 'email' ? undefined : '_blank'}
                rel={link.icon === 'email' ? undefined : 'noreferrer'}
                aria-label={link.label}
                className="transition-colors duration-200 ease-snappy hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
