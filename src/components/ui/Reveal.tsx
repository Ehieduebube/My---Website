import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { fadeUp, revealTransition, revealViewport } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={revealTransition(delay)}
    >
      {children}
    </Component>
  )
}
