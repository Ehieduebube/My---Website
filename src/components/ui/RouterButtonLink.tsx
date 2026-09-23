import type { ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'
import { buttonBaseClasses, buttonVariantClasses } from '@/components/ui/Button'
import type { ButtonVariant } from '@/components/ui/Button'

const MotionLink = motion(Link)

interface RouterButtonLinkProps {
  to: string
  variant?: ButtonVariant
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  magnetic?: boolean
  className?: string
  children: ReactNode
}

export function RouterButtonLink({
  to,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  magnetic = true,
  className,
  children,
}: RouterButtonLinkProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.25)

  return (
    <MotionLink
      to={to}
      ref={ref as Ref<HTMLAnchorElement>}
      className={cn(buttonBaseClasses, buttonVariantClasses[variant], className)}
      style={magnetic ? { x, y } : undefined}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 ease-snappy group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </MotionLink>
  )
}
