import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { CommandPalette } from '@/components/terminal/CommandPalette'

export function RootLayout() {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setTerminalOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  )
}
