import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-line py-24">
      <div className="container-page">
        <SectionHeading index="03" title="Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" />

          <ol className="space-y-10">
            {experience.map((role, index) => (
              <Reveal key={role.id} as="li" delay={index * 0.08} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-base" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{role.position}</h3>
                  <span className="font-mono text-xs text-ink-faint">
                    {role.startDate} — {role.endDate}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-sm text-accent">{role.company}</p>
                <p className="mt-3 max-w-2xl text-ink-muted">{role.description}</p>

                {role.responsibilities.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
