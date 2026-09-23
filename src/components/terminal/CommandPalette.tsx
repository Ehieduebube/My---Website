import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { runCommand } from '@/components/terminal/commands'
import { useTheme } from '@/hooks/useTheme'

interface HistoryEntry {
  id: number
  command: string
  lines: string[]
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

const SUGGESTIONS = ['about', 'projects', 'skills', 'experience', 'contact', 'help']

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [commandLog, setCommandLog] = useState<string[]>([])
  const [logIndex, setLogIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { setTheme } = useTheme()
  const idRef = useRef(0)

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      setValue('')
      setLogIndex(-1)
    }
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [history])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([])
      setValue('')
      return
    }

    const result = runCommand(trimmed, {
      navigate,
      closePalette: onClose,
      setTheme,
    })

    idRef.current += 1
    setHistory((prev) => [...prev, { id: idRef.current, command: trimmed, lines: result.lines }])
    setCommandLog((prev) => [...prev, trimmed])
    setLogIndex(-1)
    setValue('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (commandLog.length === 0) return
      const nextIndex = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1)
      setLogIndex(nextIndex)
      setValue(commandLog[nextIndex])
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (logIndex === -1) return
      const nextIndex = logIndex + 1
      if (nextIndex >= commandLog.length) {
        setLogIndex(-1)
        setValue('')
      } else {
        setLogIndex(nextIndex)
        setValue(commandLog[nextIndex])
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-lg border border-line-strong bg-base-raised shadow-2xl"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="ml-2 font-mono text-xs text-ink-faint">
                guest@portfolio: ~
              </span>
            </div>

            <div ref={scrollRef} className="max-h-64 overflow-y-auto px-4 pt-3 font-mono text-sm">
              {history.length === 0 && (
                <p className="pb-2 text-ink-faint">
                  type <span className="text-accent">help</span> to see available commands.
                </p>
              )}
              {history.map((entry) => (
                <div key={entry.id} className="pb-3">
                  <p className="text-ink">
                    <span className="text-accent">$</span> {entry.command}
                  </p>
                  {entry.lines.map((line, i) => (
                    <p key={i} className="text-ink-muted">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line px-4 py-3">
              <span className="font-mono text-sm text-accent">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent font-mono text-sm text-ink placeholder:text-ink-faint focus:outline-none"
              />
            </form>

            <div className="flex flex-wrap gap-1.5 border-t border-line px-4 py-2.5">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setValue(suggestion)}
                  className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-faint transition-colors duration-150 hover:border-line-strong hover:text-ink-muted"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
