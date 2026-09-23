import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Contact } from '@/components/sections/Contact'
import { profile } from '@/data/profile'
import { useSeo } from '@/lib/seo'

export function Home() {
  const location = useLocation()

  useSeo({
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  })

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
