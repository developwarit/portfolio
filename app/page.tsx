import Image from "next/image";
import { AnimatedHeader } from "./animated-header";
import { ContactForm } from "./contact-form";
import { Currently } from "./currently";
import { HeroAnimation } from "./hero-animation";
import { MagneticButton } from "./magnetic-button";
import { RotatingText } from "./rotating-text";
import { TerminalMode } from "./terminal-mode";
import { Timeline } from "./timeline";
import { MarqueeText } from "./marquee-text";
import { MotionSection } from "./motion-section";
import { ShowcaseTabs } from "./showcase-tabs";
import { SiteLoader } from "./site-loader";
import { SmoothLink } from "./smooth-link";
import { TextReveal } from "./text-reveal";
import { TypingCodeCard } from "./typing-code-card";

const heroTags = ["Next.js", "React", "Flutter", "Node.js", "PostgreSQL", "Tailwind"];

const stackGroups = [
  {
    title: "Comfortable",
    description: "Technologies I use daily with confidence.",
    items: [
      { name: "React", project: "W10 Dashboards" },
      { name: "Next.js", project: "Portfolio Website" },
      { name: "TypeScript", project: "W10 Dashboards, OT Plus" },
      { name: "Tailwind CSS", project: "All projects" },
    ],
  },
  {
    title: "Learning",
    description: "Currently exploring and growing in these areas.",
    items: [
      { name: "Node.js", project: "Exploring" },
      { name: "REST APIs", project: "W10 Dashboards" },
      { name: "Database Design", project: "Learning" },
      { name: "Authentication", project: "Learning" },
    ],
  },
  {
    title: "Tools",
    description: "The workflow pieces that turn builds into shipped work.",
    items: [
      { name: "Git", project: "All projects" },
      { name: "Vercel", project: "Deployment" },
      { name: "Figma", project: "UI Design" },
      { name: "Postman", project: "API Testing" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", username: "@developwarit", href: "https://github.com/developwarit", icon: "github" },
  { label: "LinkedIn", username: "@linkedin", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Email", username: "warit@example.com", href: "mailto:warit@example.com", icon: "email" },
  { label: "Instagram", username: "@instagram", href: "https://instagram.com", icon: "instagram" },
];

const projectLinks = [
  { label: "W10 Dashboards", href: "https://w10-jet.vercel.app/" },
  { label: "OT Plus", href: "https://ot-plus.vercel.app/" },
  { label: "Source Code", href: "https://github.com/developwarit/portfolio" },
];

const aboutStats = [
  { label: "Projects Built", value: "04+", icon: "<>" },
  { label: "Real-world Systems", value: "02", icon: "@" },
  { label: "Technologies in Use", value: "03+", icon: "*" },
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
      <TerminalMode />

      <section
        id="top"
        className="relative mx-auto grid min-h-screen w-full max-w-7xl content-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32"
      >
        <HeroAnimation />
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
              <div className="mt-2">
                <RotatingText
                  texts={["Learn → Build → Share _", "เรียนรู้ สร้าง แบ่งปัน _", "From Ideas to Reality _", "Growing Together _"]}
                  className="text-xl font-medium text-zinc-400"
                  interval={3000}
                />
              </div>
              <TextReveal
                as="p"
                text="I build modern web applications from idea to deployment — crafting intuitive interfaces, building backend systems, and working with SQL databases."
                className="mt-4 max-w-xl text-base leading-8 text-zinc-400"
                delay={0.3}
                staggerDelay={0.02}
              />
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

      {/* Marquee divider */}
      <div className="border-y border-white/8 bg-white/[0.02] py-4">
        <MarqueeText
          items={["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Git", "Vercel", "Figma", "Postman"]}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600"
          speed={35}
        />
      </div>

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
              ABOUT ME
            </p>
            <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.035em] text-white text-balance sm:text-7xl">
              Warit
              <span className="block">Panyeam</span>
            </h2>
              <TextReveal
                as="p"
                text="สวัสดีครับ ผมวฤทธิ์ ผู้ที่กำลังเรียนรู้และหลงใหลในการสร้างสรรค์สิ่งต่าง ๆ ผ่านเทคโนโลยี ผมสนใจการพัฒนาเว็บไซต์ การออกแบบ UX/UI รวมถึงการนำ AI และ Vibe Coding มาช่วยเปลี่ยนไอเดียให้กลายเป็นสิ่งที่ใช้งานได้จริง"
                className="mt-7 max-w-xl text-base leading-8 text-zinc-400"
                delay={0.2}
                staggerDelay={0.02}
              />

            <div className="mt-7 w-fit rounded-lg border border-white/10 bg-white/8 px-6 py-4 text-sm font-semibold italic text-zinc-200">
              &quot;Turning ideas into clean, modern, and meaningful digital
              experiences.&quot;
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticButton
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-blue-100"
                strength={0.25}
              >
                Download CV
              </MagneticButton>
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-zinc-950"
                strength={0.25}
              >
                <SmoothLink section="work">
                  View Projects
                </SmoothLink>
              </MagneticButton>
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

      {/* Experience Timeline */}
      <MotionSection
        id="experience"
        className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-400">Journey</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white text-balance sm:text-5xl">
            Experience & Education
          </h2>
        </div>
        <Timeline />
      </MotionSection>

      {/* Currently Section */}
      <MotionSection
        id="currently"
        className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-blue-400">Currently</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white text-balance sm:text-5xl">
            What I&apos;m Doing Now
          </h2>
        </div>
        <Currently />
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
                      key={item.name}
                      className="flex flex-col gap-1 text-sm text-zinc-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {item.name}
                      </div>
                      <span className="ml-5 text-xs text-zinc-500">
                        {item.project}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Second marquee divider */}
      <div className="border-y border-white/8 bg-white/[0.02] py-4">
        <MarqueeText
          items={["Frontend Developer", "Fullstack Developer", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs"]}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600"
          speed={40}
          separator="•"
        />
      </div>

      {/* AI Tools Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-white mb-8">ใช้งานเครื่องมือ AI อยู่บ่อยๆ</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg><span className="font-medium">ChatGPT</span></div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24A7.17 7.17 0 0 1 4.83 16.83A7.13 7.13 0 0 1 4 12a7.14 7.14 0 0 1 .84-3.58A7.17 7.17 0 0 1 12 0a7.17 7.17 0 0 1 7.17 7.17c0 1.3-.36 2.51-.98 3.57A7.13 7.13 0 0 1 19.17 12c0 1.76-.67 3.37-1.79 4.58A7.17 7.17 0 0 1 12 24z"/></svg><span className="font-medium">Gemini</span></div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg><span className="font-medium">Microsoft Copilot</span></div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.709 15.955l4.72-2.798c.588-.336.588-1.22 0-1.556L4.709 8.803C4.081 8.44 3.471 9.01 3.471 9.727v8.501c0 .717.61 1.287 1.238.927zM19.291 8.045l-4.72 2.798c-.588.336-.588 1.22 0 1.556l4.72 2.798c.628.363 1.238-.207 1.238-.927V8.972c0-.717-.61-1.287-1.238-.927zM15.049 3.143L9.826 14.226c-.392.726.118 1.621.94 1.621h10.446c.822 0 1.332-.895.94-1.621L16.951 3.143c-.392-.726-1.51-.726-1.902 0z" transform="rotate(-90 12 12)"/></svg><span className="font-medium">Claude</span></div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg><span className="font-medium">Perplexity</span></div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12l-6-10.5v7H6l6 10.5v-7H24z"/></svg><span className="font-medium">Cursor</span></div>
          </div>
        </div>
      </section>

      <MotionSection
        id="contact"
        className="mx-auto w-full max-w-7xl px-5 py-18 sm:px-8 lg:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Left: Contact Form */}
          <div className="rounded-2xl border border-white/12 bg-white/8 p-7 sm:p-9">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
              Feel free to reach out if you want to collaborate, discuss ideas,
              or simply say hello.
            </p>

            <ContactForm />
          </div>

          {/* Right: Connect & Projects */}
          <div className="space-y-6">
            {/* Connect With Me */}
            <div className="rounded-2xl border border-white/12 bg-white/8 p-7 sm:p-9">
              <h3 className="text-lg font-bold text-white">Connect With Me</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <MagneticButton
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/25 hover:bg-white/8"
                    strength={0.15}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-zinc-300 transition group-hover:bg-white/15">
                      {link.icon === "github" && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {link.icon === "linkedin" && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {link.icon === "instagram" && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {link.icon === "tiktok" && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{link.label}</p>
                      <p className="text-xs text-zinc-500 truncate">{link.username}</p>
                    </div>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* My Projects */}
            <div className="rounded-2xl border border-white/12 bg-white/8 p-7 sm:p-9">
              <h3 className="text-lg font-bold text-white">My Projects</h3>
              <div className="mt-6 space-y-3">
                {projectLinks.map((link) => (
                  <MagneticButton
                    key={link.label}
                    href={link.href}
                    className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/25 hover:bg-white/8"
                    strength={0.1}
                  >
                    <span className="text-sm font-semibold text-zinc-200">{link.label}</span>
                    <svg className="h-4 w-4 text-zinc-500 transition group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <footer className="mx-auto w-full max-w-7xl px-5 pb-8 text-sm text-zinc-600 sm:px-8 lg:px-10">
        <div className="border-t border-white/12 pt-12">
          {/* Thanks Message */}
          <div className="mb-8 text-center">
            <p className="text-2xl font-bold text-white">Thanks for stopping by. 👋</p>
            <p className="mt-2 text-zinc-400">Let&apos;s create something meaningful together.</p>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="font-semibold text-zinc-300">© 2026 Warit Panyeam</p>
              <p className="text-xs text-zinc-500">Built with Next.js & Tailwind CSS</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-600">
            ✨ Designed & Developed by Warit
          </p>
        </div>
      </footer>
    </main>
  );
}
