import type { Variants } from 'framer-motion'

export const EASE_SNAPPY = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const revealTransition = (delay = 0) => ({
  duration: 0.5,
  ease: EASE_SNAPPY,
  delay,
})

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

export const revealViewport = { once: true, margin: '-80px 0px -80px 0px' } as const
