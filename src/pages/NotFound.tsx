import { ArrowLeft } from 'lucide-react'

import { RouterButtonLink } from '@/components/ui/RouterButtonLink'
import { useSeo } from '@/lib/seo'

export function NotFound() {
  useSeo({
    title: '404',
    description: 'This page could not be found.',
  })

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">error 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-balance text-ink-muted">
        The page you're looking for doesn't exist, or has moved.
      </p>
      <RouterButtonLink to="/" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="left" className="mt-8">
        Back home
      </RouterButtonLink>
    </div>
  )
}
