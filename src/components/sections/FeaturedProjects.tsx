import { ArrowRight } from 'lucide-react'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { RouterButtonLink } from '@/components/ui/RouterButtonLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { featuredProjects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="04"
            title="Featured projects"
            description="A few things I've built recently. More on the full projects page."
            spacing="tight"
          />
          <Reveal className="hidden sm:block">
            <RouterButtonLink to="/projects" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              View all projects
            </RouterButtonLink>
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <RouterButtonLink to="/projects" variant="secondary" icon={<ArrowRight className="h-4 w-4" />} className="w-full">
            View all projects
          </RouterButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
