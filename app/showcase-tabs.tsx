"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ShowcaseItem = {
  title: string;
  description: string;
  meta: string;
  image?: string;
  href?: string;
};

type CertificateItem = {
  title: string;
  image?: string;
};

type TechItem = {
  name: string;
  icon: string;
};

const tabs = [
  {
    id: "projects",
    label: "Projects",
    items: [
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio with animated hero, showcase tabs, tech stack, and responsive contact flow.",
        meta: "Live preview",
        image: "/project-preview.svg",
        href: "https://portofolio-rho-sand-92.vercel.app/",
      },
      {
        title: "Portfolio Source",
        description:
          "Next.js source repository for reviewing structure, components, and frontend implementation.",
        meta: "GitHub repository",
        image: "/project-preview.svg",
        href: "https://github.com/developwarit/portfolio",
      },
    ],
  },
  {
    id: "certificates",
    label: "Certificates",
    items: [
      {
        title: "PKL Internship Certificate",
        image: "",
      },
      {
        title: "Frontend Development Practice",
        image: "",
      },
    ],
  },
  {
    id: "stack",
    label: "Tech Stack",
  },
];

const techStack: TechItem[] = [
  {
    name: "React.Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Next.Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

export function ShowcaseTabs() {
  const [active, setActive] = useState(tabs[0]);
  const isTechStack = active.id === "stack";
  const isCertificates = active.id === "certificates";

  return (
    <div className="mt-9">
      <div
        className="mx-auto grid max-w-3xl gap-2 rounded-[2rem] border border-white/10 bg-white/8 p-2 sm:grid-cols-3"
        role="tablist"
        aria-label="Portfolio showcase"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active.id === tab.id}
            onClick={() => setActive(tab)}
            className={`rounded-[1.5rem] px-5 py-3 text-sm font-semibold transition ${
              active.id === tab.id
                ? "bg-white text-zinc-950 sm:bg-zinc-700 sm:text-white"
                : "text-zinc-400 hover:bg-white/6 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isTechStack ? (
          <motion.div
            key="tech"
            className="mt-10 grid grid-cols-2 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-16 lg:gap-y-16"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {techStack.map((tech) => (
              <motion.article
                key={tech.name}
                className="flex h-32 w-32 flex-col items-center justify-center rounded-[1.35rem] border border-white/12 bg-zinc-900/92 p-5 transition hover:border-white/35 hover:bg-zinc-800/95"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <h3 className="mt-5 text-center text-xs font-semibold text-zinc-200">
                  {tech.name}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        ) : isCertificates ? (
          <motion.div
            key="certificates"
            className="mt-10 grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {(active.items as CertificateItem[]).map((item) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/12 bg-zinc-900/88 p-4 transition hover:border-white/35"
                whileHover={{ y: -6 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-zinc-950">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center border border-white/10 px-6 text-center">
                      <span className="text-sm font-bold text-zinc-200">
                        Certificate
                      </span>
                      <span className="mt-2 text-xs font-medium text-zinc-500">
                        Available on request
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="px-3 py-5 text-center text-base font-bold leading-7 text-zinc-100">
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            className="mt-10 grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {(active.items as ShowcaseItem[]).map((item, index) => (
              <ProjectCard item={item} index={index} key={item.title} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  item,
  index,
}: {
  item: ShowcaseItem;
  index: number;
}) {
  return (
    <motion.article
      className="flex min-h-[19.5rem] flex-col rounded-2xl border border-white/12 bg-zinc-900/88 p-4 transition hover:border-white/35"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
    >
      <div className="relative aspect-[16/6.4] overflow-hidden rounded-xl bg-zinc-800">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.08),transparent_18rem),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
        )}
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-[-0.01em] text-white text-balance">
        {item.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-zinc-400">
        {item.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="truncate text-sm font-semibold text-zinc-400 transition hover:text-white"
          >
            {item.meta}
          </a>
        ) : (
          <span className="text-sm font-semibold text-zinc-600">
            {item.meta || `Project 0${index + 1}`}
          </span>
        )}

        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Details
            <span aria-hidden="true">-&gt;</span>
          </a>
        ) : (
          <button
            type="button"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-zinc-300"
            disabled
          >
            Details
            <span aria-hidden="true">-&gt;</span>
          </button>
        )}
      </div>
    </motion.article>
  );
}
