import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import { CodeWindow } from '@/components/sections/CodeWindow'
import { SmartNavLink } from '@/components/navigation/SmartNavLink'
import { RouterButtonLink } from '@/components/ui/RouterButtonLink'
import { buttonBaseClasses, buttonVariantClasses } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { useIsFinePointer, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isFinePointer = useIsFinePointer()
  const reducedMotion = usePrefersReducedMotion()
  const tiltEnabled = isFinePointer && !reducedMotion

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(20)
  const glowBackground = useTransform(
    [glowX, glowY],
    ([latestX, latestY]) =>
      `radial-gradient(600px circle at ${latestX}% ${latestY}%, rgb(var(--color-accent) / 0.08), transparent 70%)`,
  )

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    glowX.set(px * 100)
    glowY.set(py * 100)

    if (tiltEnabled) {
      rotateY.set((px - 0.5) * 8)
      rotateX.set((py - 0.5) * -8)
    }
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-green" />
            </span>
            {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="mt-3 font-mono text-lg text-accent sm:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="mt-5 max-w-md text-balance text-lg text-ink-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <RouterButtonLink to="/projects" icon={<ArrowRight className="h-4 w-4" />}>
              View my work
            </RouterButtonLink>
            <SmartNavLink
              href="/#contact"
              isActive={false}
              className={`${buttonBaseClasses} ${buttonVariantClasses.secondary}`}
            >
              Contact me
            </SmartNavLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformPerspective: 1000,
          }}
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  )
}
