import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface SmartNavLinkProps {
  href: string
  isActive: boolean
  className?: string
  activeClassName?: string
  onNavigate?: () => void
  children: ReactNode
}

/**
 * A Link that scrolls smoothly to in-page sections (e.g. "/#about")
 * when already on that page, and navigates + scrolls after route change
 * otherwise. Falls back to normal routing for standalone routes.
 */
export function SmartNavLink({
  href,
  isActive,
  className,
  activeClassName,
  onNavigate,
  children,
}: SmartNavLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [path, hash] = href.split('#')
  const targetPath = path || '/'

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.()
    if (!hash) return

    if (location.pathname === targetPath) {
      event.preventDefault()
      const el = document.getElementById(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      navigate(`${targetPath}#${hash}`, { replace: true })
    }
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn(className, isActive && activeClassName)}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
