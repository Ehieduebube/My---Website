import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'
import type { SkillItem } from '@/types/profile'

export function Skills() {
  const [active, setActive] = useState<SkillItem>(skillGroups[0].skills[0])

  return (
    <section id="skills" className="scroll-mt-16 border-t border-line py-24">
      <div className="container-page">
        <SectionHeading
          index="02"
          title="Technologies"
          description="Frontend is where I spend most of my time — with enough backend fluency to work across a full stack when a project needs it."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            {skillGroups.map((group, groupIndex) => (
              <Reveal key={group.id} delay={groupIndex * 0.06}>
                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        onMouseEnter={() => setActive(skill)}
                        onFocus={() => setActive(skill)}
                        onClick={() => setActive(skill)}
                        className={cn(
                          'rounded-md border px-3 py-1.5 text-sm transition-all duration-200 ease-snappy',
                          active.name === skill.name
                            ? 'border-accent/40 bg-accent/10 text-accent'
                            : 'border-line text-ink-muted hover:border-line-strong hover:text-ink',
                        )}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="sticky top-24 rounded-lg border border-line bg-base-raised p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-mono text-xs text-accent">// currently viewing</p>
                  <h4 className="mt-2 text-xl font-semibold text-ink">{active.name}</h4>
                  <p className="mt-3 text-sm text-ink-muted">{active.description}</p>
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="text-xs uppercase tracking-widest text-ink-faint">
                      How I use it
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">{active.usage}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
