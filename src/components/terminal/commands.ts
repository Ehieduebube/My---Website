export interface CommandContext {
  navigate: (path: string) => void
  closePalette: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

export interface CommandResult {
  lines: string[]
}

type CommandHandler = (args: string[], ctx: CommandContext) => CommandResult

interface CommandDef {
  description: string
  run: CommandHandler
}

function goto(path: string, ctx: CommandContext, lines: string[]): CommandResult {
  ctx.navigate(path)
  setTimeout(() => ctx.closePalette(), 400)
  return { lines }
}

export const commands: Record<string, CommandDef> = {
  help: {
    description: 'list available commands',
    run: () => ({
      lines: [
        'available commands:',
        ...Object.entries(commands).map(([name, def]) => `  ${name.padEnd(10)} ${def.description}`),
      ],
    }),
  },
  about: {
    description: 'jump to the about section',
    run: (_args, ctx) => goto('/#about', ctx, ['opening about...']),
  },
  projects: {
    description: 'open the full projects list',
    run: (_args, ctx) => goto('/projects', ctx, ['loading projects...']),
  },
  skills: {
    description: 'jump to the skills section',
    run: (_args, ctx) => goto('/#skills', ctx, ['loading skill set...']),
  },
  experience: {
    description: 'jump to the experience timeline',
    run: (_args, ctx) => goto('/#experience', ctx, ['fetching experience...']),
  },
  contact: {
    description: 'jump to the contact section',
    run: (_args, ctx) => goto('/#contact', ctx, ['opening contact...']),
  },
  home: {
    description: 'go to the home page',
    run: (_args, ctx) => goto('/#home', ctx, ['returning home...']),
  },
  theme: {
    description: 'theme [dark|light] — switch color theme',
    run: (args, ctx) => {
      const value = args[0]
      if (value === 'dark' || value === 'light') {
        ctx.setTheme(value)
        return { lines: [`theme set to ${value}`] }
      }
      return { lines: ['usage: theme [dark|light]'] }
    },
  },
  whoami: {
    description: 'print a short bio',
    run: () => ({
      lines: [
        'frontend developer — react, typescript, next.js, tailwind css.',
        'building clean, responsive, interactive web experiences.',
      ],
    }),
  },
  clear: {
    description: 'clear the terminal output',
    run: () => ({ lines: [] }),
  },
}

export function runCommand(input: string, ctx: CommandContext): CommandResult {
  const trimmed = input.trim()
  if (!trimmed) return { lines: [] }
  const [name, ...args] = trimmed.split(/\s+/)
  const command = commands[name.toLowerCase()]
  if (!command) {
    return { lines: [`command not found: ${name}`, 'type "help" to see available commands'] }
  }
  return command.run(args, ctx)
}
