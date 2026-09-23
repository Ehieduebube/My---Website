import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

/**
 * Returns a smoothed 0–1 scroll progress value and the current scroll
 * direction, used for the top progress bar and header show/hide.
 */
export function useScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.2 })
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > lastY.current && latest > 80 ? 'down' : 'up'
    lastY.current = latest
    setDirection((current) => (current === next ? current : next))
  })

  return { progress, direction }
}
