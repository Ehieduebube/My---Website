import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors duration-200 ease-snappy hover:border-line-strong hover:text-ink"
    >
      <Sun className="h-[15px] w-[15px] scale-100 dark:scale-0 transition-transform duration-300 ease-snappy" />
      <Moon className="absolute h-[15px] w-[15px] scale-0 dark:scale-100 transition-transform duration-300 ease-snappy" />
    </button>
  )
}
