import { motion } from 'framer-motion'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgressBar() {
  const { progress } = useScrollProgress()

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-accent"
      style={{ scaleX: progress }}
    />
  )
}
