import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/data/projects'
import { useSeo } from '@/lib/seo'
import type { ProjectCategory } from '@/types/project'

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All')
  const [search, setSearch] = useState('')

  useSeo({
    title: 'Projects',
    description: 'A collection of frontend projects dashboards, forms, and API-driven UI built with React and TypeScript.',
  })

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category.includes(category)
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <div className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-xs text-accent">// projects</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Everything I've built
          </h1>
          <p className="mt-4 max-w-xl text-balance text-lg text-ink-muted">
            A running collection of projects — dashboards, form-heavy tools, and API-driven
            interfaces. Filter by stack or search by name.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <ProjectFilters
            active={category}
            onChange={setCategory}
            search={search}
            onSearchChange={setSearch}
          />
        </Reveal>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center rounded-lg border border-dashed border-line py-16 text-center">
            <p className="font-mono text-sm text-ink-muted">No projects match that search.</p>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setSearch('')
              }}
              className="mt-3 font-mono text-xs text-accent hover:underline"
            >
              reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
