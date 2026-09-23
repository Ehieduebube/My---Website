import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { ProjectImagePlaceholder } from '@/components/projects/ProjectImagePlaceholder'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { useSeo } from '@/lib/seo'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  useSeo({
    title: project ? project.title : 'Project not found',
    description: project ? project.summary : 'This project could not be found.',
  })

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <div className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors duration-200 ease-snappy hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 ease-snappy group-hover:-translate-x-0.5" />
            back to projects
          </Link>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="font-mono text-xs text-accent">{project.year} · {project.role}</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-lg text-ink-muted">
              {project.summary}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="flex gap-3">
            {project.githubUrl && (
              <ButtonLink
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<GithubIcon className="h-4 w-4" />}
              >
                Source
              </ButtonLink>
            )}
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Live demo
              </ButtonLink>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-lg border border-line">
          <div className="aspect-[16/9] w-full">
            {project.image ? (
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProjectImagePlaceholder title={project.title} />
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Problem
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-ink-muted">{project.problem}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Solution
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-ink-muted">
                {project.solution}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Key features
              </h2>
              <ul className="mt-4 space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-ink-muted">
                    <span className="mt-1 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Challenges
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-ink-muted">
                {project.challenges}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                What I learned
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-ink-muted">
                {project.learnings}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="sticky top-24 rounded-lg border border-line bg-base-raised p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Built with
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-line pt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">More projects</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p, index) => (
                <Reveal key={p.id} delay={index * 0.06}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
