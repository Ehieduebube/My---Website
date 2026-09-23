import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'

import { cn } from '@/lib/utils'
import type { ProjectCategory } from '@/types/project'

const CATEGORIES: (ProjectCategory | 'All')[] = [
  'All',
  'React',
  'TypeScript',
  'Next.js',
  'Full Stack',
  'UI/Frontend',
]

interface ProjectFiltersProps {
  active: ProjectCategory | 'All'
  onChange: (category: ProjectCategory | 'All') => void
  search: string
  onSearchChange: (value: string) => void
}

export function ProjectFilters({ active, onChange, search, onSearchChange }: ProjectFiltersProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value)

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={active === category}
            className={cn(
              'rounded-md border px-3 py-1.5 text-sm transition-all duration-200 ease-snappy',
              active === category
                ? 'border-accent/40 bg-accent/10 text-accent'
                : 'border-line text-ink-muted hover:border-line-strong hover:text-ink',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative w-full sm:w-56">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search projects..."
          aria-label="Search projects"
          className="w-full rounded-md border border-line bg-base-raised py-2 pl-9 pr-3 text-sm text-ink outline-none transition-colors duration-200 ease-snappy placeholder:text-ink-faint focus:border-accent"
        />
      </div>
    </div>
  )
}
