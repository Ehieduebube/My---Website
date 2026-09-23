import { FileCode } from 'lucide-react'

interface ProjectImagePlaceholderProps {
  title: string
}

export function ProjectImagePlaceholder({ title }: ProjectImagePlaceholderProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-overlay">
      <div className="absolute inset-0 bg-dot-grid bg-dots opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="relative flex flex-col items-center gap-2 text-ink-faint">
        <FileCode className="h-6 w-6" strokeWidth={1.5} />
        <span className="max-w-[80%] text-center font-mono text-[11px] leading-tight">
          preview coming soon
        </span>
      </div>
      <span className="sr-only">{title} — preview image not yet available</span>
    </div>
  )
}
