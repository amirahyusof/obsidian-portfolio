// data about various projects

import { 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Cloud, 
  Code2 
} from 'lucide-react';

export const projects = [
  {
    title: "TaskFlow Manager",//change project title
    description: "A collaborative task management web app with real-time updates and role-based access.",
    //change project description
    tech: ["Next.js", "TypeScript", "Supabase"],// changes to tech stack used
    icon: Cpu,
    gradient: "from-accent/80 to-accent",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
  {
    title: "API Forge",//change project title
    description: "RESTful API builder with dynamic schema creation, authentication, and analytics dashboard.",
    //change project description
    tech: ["Node.js", "Express", "MongoDB"],// changes to tech stack used
    icon: Database,
    gradient: "from-accent to-accent/60",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
  {
    title: "Portfolio CMS",//change project title
    description: "Headless content management system that powers personal portfolios with markdown support.",
    //change project description
    tech: ["Next.js", "PostgreSQL", "Prisma"],// changes to tech stack used
    icon: Globe,
    gradient: "from-accent/70 to-accent",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
  {
    title: "LaunchPad",//change project title
    description: "A SaaS starter boilerplate featuring user auth, billing, and dashboard UI components.",
    //change project description
    tech: ["React", "Stripe API", "Tailwind CSS"],// changes to tech stack used
    icon: Rocket,
    gradient: "from-accent/60 to-accent",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
  {
    title: "CloudVault",//change project title
    description: "File storage platform with encryption and preview functionality built on modern stack.",
    //change project description
    tech: ["Next.js", "Supabase", "Vercel"],// changes to tech stack used
    icon: Cloud,
    gradient: "from-accent/80 to-accent/40",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
  {
    title: "DevConnect", //change project title
    description: "A developer social network featuring posts, likes, and project showcases.",
    //change project description
    tech: ["React", "Firebase", "Zustand"],// changes to tech stack used
    icon: Code2,
    gradient: "from-accent to-accent/60",
    github: "#", //put your github link here
    live: "#", //put your live project link here
  },
];
