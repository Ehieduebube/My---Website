import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

import { useIsFinePointer, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

/**
 * Subtle magnetic-pull effect for buttons: the element eases toward the
 * cursor while hovered, and springs back on leave. Disabled on touch
 * devices and when the user prefers reduced motion.
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement>(null)
  const isFinePointer = useIsFinePointer()
  const reducedMotion = usePrefersReducedMotion()
  const enabled = isFinePointer && !reducedMotion

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave }
}
