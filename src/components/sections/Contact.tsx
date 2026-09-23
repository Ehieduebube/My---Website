import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CircleCheckBig, Mail, Send } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { profile, socialLinks } from '@/data/profile'

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, email: Mail }

type SubmitState = 'idle' | 'submitting' | 'sent'

export function Contact() {
  const [state, setState] = useState<SubmitState>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState('submitting')
    window.setTimeout(() => setState('sent'), 700)
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-24">
      <div className="container-page">
        <SectionHeading
          index="05"
          title="Contact"
          description="Have a role or project in mind? I'd like to hear about it."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.icon === 'email' ? undefined : '_blank'}
                    rel={link.icon === 'email' ? undefined : 'noreferrer'}
                    className="group flex items-center justify-between rounded-lg border border-line bg-base-raised px-5 py-4 transition-colors duration-200 ease-snappy hover:border-line-strong"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-ink-faint transition-colors duration-200 ease-snappy group-hover:text-accent" />
                      <span className="text-sm text-ink">{link.label}</span>
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      {link.icon === 'email' ? profile.email : 'visit ↗'}
                    </span>
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {state === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-lg border border-line bg-base-raised p-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <CircleCheckBig className="h-8 w-8 text-signal-green" />
                </motion.div>
                <p className="mt-4 font-medium text-ink">Message noted.</p>
                <p className="mt-1 max-w-xs text-sm text-ink-muted">
                  This form doesn't send to a backend yet — for now, please reach out directly via
                  email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs text-ink-faint">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 ease-snappy placeholder:text-ink-faint focus:border-accent"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs text-ink-faint">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 ease-snappy placeholder:text-ink-faint focus:border-accent"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 ease-snappy placeholder:text-ink-faint focus:border-accent"
                    placeholder="Tell me a bit about the role or project..."
                  />
                </div>
                <Button
                  type="submit"
                  icon={<Send className="h-3.5 w-3.5" />}
                  disabled={state === 'submitting'}
                  className="w-full sm:w-auto"
                >
                  {state === 'submitting' ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
