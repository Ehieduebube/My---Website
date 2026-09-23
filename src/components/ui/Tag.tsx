import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TagProps {
  children: ReactNode
  className?: string
  active?: boolean
}

export function Tag({ children, className, active = false }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs',
        active
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-line text-ink-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
