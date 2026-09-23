import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
  spacing?: 'default' | 'tight'
  className?: string
}

export function SectionHeading({
  index,
  title,
  description,
  align = 'left',
  spacing = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        spacing === 'default' ? 'mb-12' : 'mb-0',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <Reveal>
        <div
          className={cn(
            'mb-3 flex items-center gap-3 font-mono text-xs text-ink-faint',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="uppercase tracking-widest">Section</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-4 max-w-xl text-balance text-ink-muted',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
