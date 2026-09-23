import { Code, Layers, Zap } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const principles = [
  {
    icon: Layers,
    title: 'Reusable by default',
    description: 'Components built to be composed, not copy-pasted the second requirements shift.',
  },
  {
    icon: Zap,
    title: 'Performance-minded',
    description: 'Lazy loading, sensible re-renders, and no animation that fights the browser.',
  },
  {
    icon: Code,
    title: 'Readable over clever',
    description: 'Code that the next person (often me), six months later can actually follow.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-line py-24">
      <div className="container-page">
        <SectionHeading index="01" title="About" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg text-ink-muted">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p className="text-balance leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.1 + index * 0.07}>
                <div className="flex gap-4 rounded-lg border border-line bg-base-raised p-5 transition-colors duration-200 ease-snappy hover:border-line-strong">
                  <principle.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-medium text-ink">{principle.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{principle.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
