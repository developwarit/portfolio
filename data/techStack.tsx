import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from "react-icons/si";

import {
  Braces,
  ShieldCheck,
  ServerCog,
  Database,
  DatabaseZap,
  Code,
  type LucideIcon,
} from "lucide-react";

type TechIcon = IconType | LucideIcon;

export interface TechItem {
  name: string;
  description: string;
  icon: TechIcon;
}

export interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",
    items: [
      {
        name: "React",
        description: "UI library for building user interfaces",
        icon: SiReact,
      },
      {
        name: "Next.js",
        description: "React framework for production",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for better code",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        description: "Programming language of the web",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    items: [
      {
        name: "Next.js API Routes",
        description: "API routes & Route Handlers",
        icon: SiNextdotjs,
      },
      {
        name: "Server Actions",
        description: "Server-side functions in Next.js",
        icon: ServerCog,
      },
      {
        name: "Node.js",
        description: "JavaScript runtime environment",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        description: "Web framework for Node.js",
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        description: "Building and consuming APIs",
        icon: Braces,
      },
      {
        name: "Authentication",
        description: "JWT, sessions, role management",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Database",
    description: "Designing and managing data systems.",
    items: [
      {
        name: "SQL",
        description: "Structured Query Language",
        icon: Database,
      },
      {
        name: "PostgreSQL",
        description: "Powerful open-source database",
        icon: SiPostgresql,
      },
      {
        name: "Supabase",
        description: "Backend, Auth, Realtime, Storage",
        icon: SiSupabase,
      },
      {
        name: "Neon",
        description: "Serverless PostgreSQL",
        icon: Database,
      },
      {
        name: "Database Design",
        description: "ERD, normalization, optimization",
        icon: DatabaseZap,
      },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that boost productivity.",
    items: [
      {
        name: "Git",
        description: "Version control system",
        icon: SiGit,
      },
      {
        name: "GitHub",
        description: "Code hosting & collaboration",
        icon: SiGithub,
      },
      {
        name: "Vercel",
        description: "Deployment & hosting platform",
        icon: SiVercel,
      },
      {
        name: "Figma",
        description: "UI/UX design tool",
        icon: SiFigma,
      },
      {
        name: "VS Code",
        description: "Code editor",
        icon: Code,
      },
    ],
  },
];

export const currentlyExploring = ["Docker", "Prisma ORM", "Zod", "Redis", "Testing (Jest)"];
