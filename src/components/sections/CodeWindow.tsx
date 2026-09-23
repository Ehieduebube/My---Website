import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface CodeLine {
  tokens: { text: string; className?: string }[]
}

const KEYWORD = 'text-signal-blue'
const STRING = 'text-signal-green'
const PROP = 'text-ink'
const PUNCT = 'text-ink-faint'
const COMMENT = 'text-ink-faint italic'

const LINES: CodeLine[] = [
  {
    tokens: [
      { text: 'const', className: KEYWORD },
      { text: ' developer ' },
      { text: '=', className: PUNCT },
      { text: ' {' },
    ],
  },
  {
    tokens: [
      { text: '  role', className: PROP },
      { text: ': ' },
      { text: '"Frontend Developer"', className: STRING },
      { text: ',' },
    ],
  },
  {
    tokens: [
      { text: '  stack', className: PROP },
      { text: ': [' },
      { text: '"React"', className: STRING },
      { text: ', ' },
      { text: '"TypeScript"', className: STRING },
      { text: ', ' },
      { text: '"Next.js"', className: STRING },
      { text: '],' },
    ],
  },
  {
    tokens: [
      { text: '  focus', className: PROP },
      { text: ': ' },
      { text: '"clean, responsive UI"', className: STRING },
      { text: ',' },
    ],
  },
  {
    tokens: [
      { text: '  mindset', className: PROP },
      { text: ': ' },
      { text: '"Build. Improve. Ship."', className: STRING },
    ],
  },
  { tokens: [{ text: '}', className: PUNCT }, { text: ';' }] },
  { tokens: [{ text: '' }] },
  { tokens: [{ text: '// always shipping something', className: COMMENT }] },
]

export function CodeWindow() {
  const reducedMotion = usePrefersReducedMotion()
  const [visibleLines, setVisibleLines] = useState(reducedMotion ? LINES.length : 0)

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(LINES.length)
      return
    }
    if (visibleLines >= LINES.length) return
    const timeout = setTimeout(() => {
      setVisibleLines((count) => count + 1)
    }, 220)
    return () => clearTimeout(timeout)
  }, [visibleLines, reducedMotion])

  return (
    <div className="w-full overflow-hidden rounded-lg border border-line bg-base-raised shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        <span className="ml-2 font-mono text-xs text-ink-faint">developer.ts</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {LINES.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="flex whitespace-pre"
          >
            <span className="mr-4 select-none text-ink-faint/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              {line.tokens.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.className}>
                  {token.text}
                </span>
              ))}
              {index === visibleLines - 1 && visibleLines < LINES.length && (
                <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent" />
              )}
            </span>
          </motion.div>
        ))}
        {visibleLines >= LINES.length && (
          <span className="ml-8 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent" />
        )}
      </div>
    </div>
  )
}
