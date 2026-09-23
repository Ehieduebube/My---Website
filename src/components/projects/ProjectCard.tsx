import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectImagePlaceholder } from '@/components/projects/ProjectImagePlaceholder'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { Tag } from '@/components/ui/Tag'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-base-raised transition-colors duration-300 ease-snappy hover:border-line-strong"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-snappy group-hover:scale-105"
          />
        ) : (
          <div className="transition-transform duration-500 ease-snappy group-hover:scale-105">
            <ProjectImagePlaceholder title={project.title} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 ease-snappy group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {project.githubUrl && (
          <div className="mt-4 flex items-center gap-1.5 border-t border-line pt-4 font-mono text-xs text-ink-faint">
            <GithubIcon className="h-3.5 w-3.5" />
            source available
          </div>
        )}
      </div>
    </Link>
  )
}
