import type { Project } from '@/types/project'
import pulseops from '../assets/pulseops.png';
import clientflo from '../assets/clientflo.png';
import vurwebs from '../assets/vurwebs.png';
import stockpilot1 from '../assets/stockpilot1.png';
import stockpilot2 from '../assets/stockpilot2.png';
import neonrun from '../assets/neonrun.png'; 


/**
 * All project data lives here, separate from any UI component.
 *
 * To add a new project: copy one of the objects below, give it a unique
 * `id` and `slug`, fill in the fields, and drop a screenshot in
 * `public/projects/`. The homepage (featured) and /projects page pick it
 * up automatically — no other file needs to change.
 *
 * Leave `image` unset to fall back to a generated placeholder card.
 */
export const projects: Project[] = [
  {
    id: 'project-one',
    slug: 'dashboard-ui',
    title: 'PulseOps — Incident & Service Monitoring Dashboard',
    description:
      'A modern incident and service monitoring dashboard built for engineering teams to track system health, manage incidents, and monitor reliability.',
    summary:
      'Incident monitoring dashboard for engineering teams to track service health and manage system issues.',
    image: pulseops,
    technologies: ['React', 'TypeScript', 'Tailwind CSS',],
    category: ['React', 'TypeScript', 'UI/Frontend'],
    featured: true,
    year: '2026',
    role: 'Frontend Developer',

    liveUrl: 'https://pulse-ops-incident-service-status-m.vercel.app/',

     githubUrl: 'https://github.com/Ehieduebube/PulseOps---Incident-Service-Status-Management-Dashboard',
    
    problem:
      'Engineering teams lacked a centralized way to monitor service health and track incidents, making it harder to quickly identify and manage system issues.',
    solution:
      'Built a clean dashboard with separate views for services, incidents, and analytics. Using React state and localStorage to manage and persist data, keeping the app frontend-focused while leaving room to connect a backend later.',
    keyFeatures: [
      'Filter and search services and incidents by status, severity, and other criteria.',
      'Interactive uptime and incident analytics with responsive charts.',
      'Incident updates and service changes persisted with localStorage.',
    ],
    challenges:
      'Keeping data in sync across pages was tricky, so I used shared state and localStorage to keep everything updated.',
    learnings:
      'Learned to plan the data flow earlier and keep state management simple as the app grows.',
  },




  
  {
    id: 'project-two',
    slug: 'clientflow',
    title: 'ClientFlow - Client & Project Management App',

    description: 'A simple workspace for managing clients, projects, tasks, and deadlines in one place.',

    summary: 'A full-stack management app that helps freelancers and small teams keep track of their clients, projects, tasks, and upcoming work.',

    image: clientflo,

    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    category: ['Next.js', 'TypeScript', 'Full Stack'],
    featured: true,
    year: '2026',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/Ehieduebube/ClientFlow---Client-Project-Management',

    liveUrl: 'https://client-flow-client-project-manageme.vercel.app/',

    problem: 'Managing clients, projects, and deadlines across different tools can make it easy to lose track of what needs attention.',
    solution: 'Built a single workspace where users can manage clients, track projects, organize tasks, and quickly see what needs attention',
    keyFeatures: [
            'Dashboard showing active projects, overdue tasks, upcoming deadlines, and recent activity.',
            'Client and project management with search, filtering, and full CRUD functionality.',
            'Task management with priorities, due dates, project assignments, and status tracking.'
],
          challenges:
      'Keeping client, project, and task data connected while making sure updates were reflected across the dashboard and related pages.',

      learnings:
      'Learned how to structure a full-stack application around shared data and build frontend states for loading, errors, empty results, and successful updates.'
  },





   {
    id: 'project-four',
    slug: 'stockpilot-inventory-management',
    title: 'StockPilot - Inventory management Web App',

    description: 'A full-stack inventory management application for tracking products, stock levels, sales, and inventory activity through a simple, intuitive dashboard.',

    summary: 'A full-stack inventory management app built with Next.js, featuring product tracking, stock management, and a responsive dashboard.',

    image: stockpilot1,
    images: [stockpilot2],

    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Neon', ],

    category: ['Next.js', 'Full Stack'],

    featured: true,
    year: '2026',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/Ehieduebube/StockPilot---Inventory-management-Web-App',
    
    liveUrl: 'https://stock-pilot-inventory-management-we.vercel.app/',

    problem: 'Managing products, stock levels, and inventory activity can become difficult when information is scattered or tracked manually.',

    solution:  'I built a full-stack inventory management application with a responsive dashboard that allows users to manage products, monitor stock levels, and keep inventory information organized.',


    keyFeatures: [
    'Product and inventory management.',
    'Dashboard for monitoring stock and inventory activity.',
    'Responsive interface for desktop, tablet, and mobile.',
    'Database integration for storing and managing inventory data.',
    ],

    challenges: 'Creating a simple and intuitive interface for managing inventory data while keeping the application responsive and the data flow organized.',

    learnings: 'I strengthened my understanding of building full-stack applications with Next.js, working with PostgreSQL databases, and connecting frontend interfaces with backend functionality.',
  },


  {
    id: 'project-two',
    slug: 'neonrun',
    title: 'Neon Run Web-Game',

    description: 'A fast-paced browser game where players navigate obstacles, collect points, and try to achieve the highest score.',

    summary: 'A responsive web-based arcade game built for quick, engaging gameplay, featuring increasing difficulty, score tracking, and keyboard and touch controls.',

    image: neonrun,

    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: ['React', 'TypeScript','Game Development' ],
    featured: true,
    year: '2026',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/Ehieduebube/Neon-Run',

    liveUrl: 'https://neon-run-web-game.vercel.app/',

    problem: 'I wanted to build a browser game that was simple to understand, fun to play, and responsive across both desktop and mobile devices.',

    solution: 'Built a responsive arcade-style game with real-time gameplay, obstacle detection, score tracking, increasing difficulty, and controls optimized for both keyboard and touch devices.',

    keyFeatures: [
        'Fast-paced gameplay with obstacles, scoring, and increasing difficulty.',
        'Responsive controls supporting keyboard and mobile touch interactions.',
        'Score tracking with game-over and restart states for quick replay.'
    ],

    challenges:
        'Keeping the gameplay responsive while handling movement, collision detection, scoring, and increasing difficulty without making the experience feel laggy.',

    learnings:
        'Learned how to manage real-time game state in React, handle user input across different devices, and structure game logic for smooth browser-based gameplay.'
},




   {
    id: 'project-three',
    slug: 'api-integration-app',
    title: 'Vurlogic Website',

    description: 'This is a corporate website for Vurlogic, showcasing the company’s technology, power, infrastructure, and digital solutions, providing visitors with information about its services.',

    summary: 'A frontend built with react, focused on responsive layouts and state.',
    image: vurwebs,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', ],
    category: ['React', 'UI/Frontend'],
    featured: true,
    year: '2026',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/Ehieduebube/Vurlogic---Website',
    liveUrl: 'https://vurlogic-website.vercel.app/',

    problem: 'The website needed to clearly present Vurlogic’s services and solutions while making it easy for potential clients to understand what the company offers.',

    solution: 'I built a responsive and modern website with clear service sections, smooth navigation, and structured content to improve the overall user experience.',

    keyFeatures: [
      'Clear navigation and structured company information.',
      'Interactive service sections with smooth animations.',
      'Responsive design across desktop, tablet, and mobile.',
    ],
    challenges: 'Creating a professional layout that could present different technology and infrastructure services without making the website feel crowded.',
    learnings: 'I learned how to structure complex business information into a simple, clear, and user-friendly website.',
  },

 
]

export const featuredProjects = projects.filter((project) => project.featured)
