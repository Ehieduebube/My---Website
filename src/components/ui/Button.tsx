import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'

import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-ink border-transparent hover:brightness-110 active:brightness-95',
  secondary: 'bg-transparent text-ink border-line-strong hover:border-ink hover:bg-base-raised',
  ghost: 'bg-transparent text-ink-muted border-transparent hover:text-ink hover:bg-base-raised',
}

export const buttonBaseClasses =
  'group relative inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-snappy disabled:opacity-50 disabled:pointer-events-none'

type ConflictingHandlers = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> {
  variant?: ButtonVariant
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  magnetic?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  magnetic = true,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.25)

  return (
    <motion.button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
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
    </motion.button>
  )
}
