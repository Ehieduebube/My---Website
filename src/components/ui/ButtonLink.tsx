import type { AnchorHTMLAttributes, ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'

import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'
import { buttonBaseClasses, buttonVariantClasses } from '@/components/ui/Button'
import type { ButtonVariant } from '@/components/ui/Button'

type ConflictingHandlers = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> {
  variant?: ButtonVariant
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  magnetic?: boolean
  children: ReactNode
}

export function ButtonLink({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  magnetic = true,
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.25)

  return (
    <motion.a
      ref={ref as Ref<HTMLAnchorElement>}
      className={cn(buttonBaseClasses, buttonVariantClasses[variant], className)}
      style={magnetic ? { x, y } : undefined}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 ease-snappy group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </motion.a>
  )
}
