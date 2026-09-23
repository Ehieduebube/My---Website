import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

import { useIsFinePointer, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor-hover]'

export function CustomCursor() {
  const isFinePointer = useIsFinePointer()
  const reducedMotion = usePrefersReducedMotion()
  const enabled = isFinePointer && !reducedMotion

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      if (!isVisible) setIsVisible(true)
      const target = event.target as Element | null
      setIsHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }

    const handleLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled, isVisible, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: isHovering ? 36 : 8,
          height: isHovering ? 36 : 8,
          x: isHovering ? -18 : -4,
          y: isHovering ? -18 : -4,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    </motion.div>
  )
}
