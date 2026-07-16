import Image from "next/image";
import { AnimatedHeader } from "./animated-header";
import { MotionSection } from "./motion-section";
import { ShowcaseTabs } from "./showcase-tabs";
import { SiteLoader } from "./site-loader";
import { SmoothLink } from "./smooth-link";
import { TypingCodeCard } from "./typing-code-card";

const heroTags = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind"];

const stackGroups = [
  {
    title: "Frontend",
    description: "Interfaces that hold up across devices and real content.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Application logic, API boundaries, and dependable data flow.",
    items: ["Node.js", "REST APIs", "Authentication", "Database design"],
  },
  {
    title: "Tools",
    description: "The workflow pieces that turn builds into shipped work.",
    items: ["Git", "Vercel", "Figma", "Postman"],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/developwarit" },
  { label: "Source Code", href: "https://github.com/developwarit/portfolio" },
  { label: "Portfolio", href: "https://portofolio-rho-sand-92.vercel.app/" },
];

const aboutStats = [
  { label: "Projects", value: "02", icon: "<>" },
  { label: "Certificates", value: "02", icon: "@" },
  { label: "Completed Works", value: "04", icon: "*" },
];

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-hidden text-white"
      style={{
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 18% 8%, rgba(47, 128, 237, 0.16), transparent 24rem), linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "auto, 24px 24px, 24px 24px",
      }}
    >
      <SiteLoader />
      <AnimatedHeader />

      <section
        id="top"
        className="mx-auto grid min-h-screen w-full max-w-7xl content-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_0.74fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.42em] text-zinc-500">
              <span aria-hidden="true" className="text-zinc-600">
                *
              </span>
              Available for work
            </p>

            <div>
              <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.035em] text-white text-balance sm:text-8xl">
                <span className="block">Frontend</span>
                <span className="block text-zinc-500">Developer</span>
              </h1>
              <p className="mt-8 text-lg font-medium text-zinc-400">
                fresh Graduate _
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
                I build modern web applications with clean, responsive
                interfaces and practical fullstack thinking. I turn ideas and
                designs into digital experiences that are clear, usable, and
                deploy-ready.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {heroTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/6 px-4 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-white/30 hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 pt-2 text-sm font-medium text-zinc-500">
              <SmoothLink
                section="work"
                className="block transition hover:text-white"
              >
                / explore my selected work
              </SmoothLink>
              <SmoothLink
                section="contact"
                className="block transition hover:text-white"
              >
                / open to full-time and freelance opportunities
              </SmoothLink>
            </div>
          </div>

          <TypingCodeCard />
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-[1fr_auto_1fr] sm:items-center lg:hidden">
          <p className="text-sm font-medium text-zinc-400">Explore my work</p>
          <SmoothLink
            section="work"
            className="hidden h-16 w-16 items-center justify-center rounded-full bg-white text-xs font-semibold text-zinc-950 transition hover:bg-blue-200 sm:flex"
          >
            Scroll
          </SmoothLink>
          <p className="text-sm leading-6 text-zinc-400 sm:text-right">
            Product-minded engineering for fast, accessible, deploy-ready web
            experiences.
          </p>
        </div>
      </section>

      <MotionSection
        id="about"
        className="mx-auto grid min-h-screen w-full max-w-7xl content-center px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mb-16 flex justify-center text-xs font-semibold uppercase tracking-[0.42em] text-zinc-600">
          <span className="animate-pulse">Scroll down</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.42em] text-zinc-600">
              About Me
            </p>
            <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.035em] text-white text-balance sm:text-7xl">
              Warit
              <span className="block">Panyeam</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
              Fresh graduate fullstack developer with a strong interest in
              modern frontend craft, clean UI systems, and practical backend
              logic. I focus on building responsive websites that feel clear,
              usable, and ready to ship.
            </p>

            <div className="mt-7 w-fit rounded-lg border border-white/10 bg-white/8 px-6 py-4 text-sm font-semibold italic text-zinc-200">
              &quot;Turning ideas into clean, modern, and meaningful digital
              experiences.&quot;
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Download CV
              </a>
              <SmoothLink
                section="work"
                className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
              >
                View Projects
              </SmoothLink>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/12 bg-zinc-900 p-3 transition hover:scale-[1.03] hover:border-white/28">
              <Image
                src="/profile-warit.png"
                alt="Warit Panyeam portrait"
                width={667}
                height={889}
                className="h-full w-full rounded-full object-cover object-[54%_34%] grayscale"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {aboutStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-zinc-900/86 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-zinc-900"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-zinc-300">
                  {stat.icon}
                </span>
                <span className="text-xl font-black text-white">
                  {stat.value}
                </span>
              </div>
              <div className="mt-7 flex items-end justify-between gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-300">
                  {stat.label}
                </h3>
                <span className="text-lg text-zinc-300">-&gt;</span>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        id="work"
        className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="py-10 sm:py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                Selected work
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white text-balance sm:text-5xl">
                Portfolio Showcase
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-400">
              Explore selected projects, experience, and technical expertise.
            </p>
          </div>

          <ShowcaseTabs />
        </div>
      </MotionSection>

      <MotionSection
        id="stack"
        className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-blue-400">Capabilities</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white text-balance sm:text-5xl">
              Fullstack skill set for modern web products.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stackGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/12 bg-white/6 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/9"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">
                  {group.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="contact"
        className="mx-auto w-full max-w-7xl px-5 py-18 sm:px-8 lg:px-10"
      >
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-2xl border border-white/12 bg-white/8 p-7 text-white sm:p-9">
            <p className="text-sm font-semibold text-blue-300">Contact Me</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-balance sm:text-5xl">
              Let&apos;s Build Something
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-zinc-200">
              Have something in mind? Send a message and let&apos;s connect.
              Reach out through GitHub for collaboration, freelance work, or
              full-time opportunities.
            </p>

            <a
              href="https://github.com/developwarit"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              Open GitHub
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-white/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white p-6 text-zinc-950 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.01em] text-zinc-950">
                  Contact Channels
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Quick links for reviewing code, current work, and deployed
                  portfolio.
                </p>
              </div>
              <span className="w-fit rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
                Ready
              </span>
            </div>

            <div className="mt-7 grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-950"
                  >
                    -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <footer className="mx-auto w-full max-w-7xl px-5 pb-8 text-sm text-zinc-600 sm:px-8 lg:px-10">
        <div className="border-t border-white/12 pt-6 text-zinc-500">
          (c) 2026 Warit Panyeam - All rights reserved.
        </div>
      </footer>
    </main>
  );
}
