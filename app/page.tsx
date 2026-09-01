import Image from "next/image";
import { AnimatedHeader } from "./animated-header";
import { ContactForm } from "./contact-form";
import { ShowcaseTabs } from "./showcase-tabs";
import { TypingText } from "./typing-text";
import { MotionSection } from "./motion-section";
import { FadeIn } from "./fade-in";
import { TypingCodeCard } from "./typing-code-card";
import { Timeline } from "./timeline";

const techIcons = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/developwarit", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

const projectLinks = [
  { label: "W10 Dashboards", href: "https://w10-jet.vercel.app/" },
  { label: "OT Plus", href: "https://ot-plus.vercel.app/" },
  { label: "SafeMaeMoh", href: "https://emergencyegt.vercel.app/" },
];

const aboutStats = [
  { label: "Projects Built", value: "04+" },
  { label: "Real-world Systems", value: "02" },
  { label: "Technologies in Use", value: "03+" },
];

const stackGroups = [
  {
    title: "Frontend",
    description: "สร้างอินเทอร์เฟซที่ตอบสนองและทันสมัย",
    items: [
      { name: "React", project: "W10 Dashboards" },
      { name: "Next.js", project: " Website" },
      { name: "TypeScript", project: "W10 Dashboards, OT Plus" },
      { name: "Tailwind CSS", project: "All projects" },
    ],
  },
  {
    title: "Backend",
    description: "พัฒนา API และแอปพลิเคชันฝั่งเซิร์ฟเวอร์",
    items: [
      { name: "Next.js API Routes", project: "W10 Dashboards" },
      { name: "Server Actions", project: "Multiple projects" },
      { name: "Node.js", project: "Exploring" },
      { name: "REST APIs", project: "W10 Dashboards" },
    ],
  },
  {
    title: "Database",
    description: "ออกแบบและจัดการระบบข้อมูลที่เชื่อถือได้",
    items: [
      { name: "SQL", project: "All projects" },
      { name: "PostgreSQL", project: "W10 Dashboards" },
      { name: "Supabase", project: "OT Plus" },
      { name: "Neon", project: "College System" },
    ],
  },
  {
    title: "Tools",
    description: "เครื่องมือที่ใช้ในการสร้างและส่งมอบโปรเจกต์",
    items: [
      { name: "Git", project: "All projects" },
      { name: "Vercel", project: "Deployment" },
      { name: "Figma", project: "UI Design" },
      { name: "VS Code", project: "Development" },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900">
      <AnimatedHeader />

      {/* Hero Section */}
      <section id="top" className="pt-24 pb-12 sm:pt-28 lg:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Left: Profile Photo */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100 shadow-lg sm:h-72 sm:w-72 lg:h-96 lg:w-96 mx-auto lg:mx-0">
                  <Image
                    src="/profile-warit.png"
                    alt="Warit Panyeam portrait"
                    width={667}
                    height={889}
                    className="h-full w-full object-cover object-[54%_34%]"
                  />
                </div>
                <span className="absolute bottom-4 right-4 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
                <span className="font-extrabold">วริทธิ์ ปานแย้ม</span>
                <svg className="inline-block ml-2 h-6 w-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"/>
                </svg>
              </h1>

              <p className="max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                ผมสร้างแอปพลิเคชันเว็บสมัยใหม่ตั้งแต่เริ่มต้นไอเดียจนถึงการใช้งานจริง โดยออกแบบส่วนติดต่อผู้ใช้ที่ใช้งานง่าย สร้างระบบ Backend และทำงานกับฐานข้อมูล SQL
              </p>

              {/* Tech Icons - Marquee Animation */}
              <div className="overflow-hidden lg:max-w-md">
                <div className="flex w-fit animate-marquee gap-3">
                  {[...techIcons, ...techIcons].map((tech, i) => (
                    <div
                      key={`${tech.name}-${i}`}
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-sm"
                      title={tech.name}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Typing Animation */}
              <div className="text-lg text-gray-500">
                <span>ผมเป็น </span>
                <TypingText
                  texts={["Full-Stack Developer", "UX/UI Design", "Frontend", "Backend"]}
                  speed={80}
                  delay={1500}
                  deleteSpeed={40}
                  pauseDuration={2000}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                <a
                  href="#work"
                  className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  ดูผลงาน
                </a>

                <a
                  href="https://github.com/developwarit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <FadeIn><MotionSection id="about" className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-center">
            <div className="flex-1 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">เกี่ยวกับผม</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">วริทธิ์ ปานแย้ม</h2>              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
                ผมเริ่มเรียนรู้การพัฒนาเว็บไซต์เพราะต้องการสร้างสิ่งที่ผู้คนใช้จริง เมื่อเวลาผ่านไป ผมค้นพบความหลงใหลในการสร้างอินเทอร์เฟซที่สะอาดตาและใช้งานได้จริง และแก้ไขปัญหาจริงผ่านโค้ด ผมเป็นเด็กจบใหม่ที่มีความกระตือรือร้นที่จะเติบโต เรียนรู้ และมีส่วนร่วมในโครงการที่มีความหมาย
              </p>
              <div className="mt-6 rounded-lg bg-gray-100 px-5 py-3 text-sm font-medium italic text-gray-700">
                &quot;เปลี่ยนไอเดียให้กลายเป็นงานดิจิทัลที่ดูสะอาดตา ทันสมัย และมีความหมาย&quot;
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/cv.pdf" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">Download CV</a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">View Projects</a>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-start">
              <TypingCodeCard />
            </div>
          </div>
        </div>
      </MotionSection></FadeIn>

      {/* Experience Section */}
      <FadeIn delay={100}><MotionSection id="experience" className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Journey</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ประสบการณ์และการศึกษา</h2>
          </div>
          <Timeline />
        </div>
      </MotionSection></FadeIn>

      {/* Projects Section */}
      <FadeIn delay={200}><MotionSection id="work" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Project Showcase</h2>
          </div>
          <ShowcaseTabs />
        </div>
      </MotionSection></FadeIn>

      {/* Tech Stack Section */}
      <FadeIn delay={300}><MotionSection id="stack" className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Skills</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ชุดทักษะ Fullstack สำหรับเว็บแอปพลิเคชันสมัยใหม่</h2>
          </div>
          <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
            {stackGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">{group.description}</p>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-0.5 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {item.name}
                      </div>
                      <span className="ml-3.5 text-xs text-gray-400">{item.project}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </MotionSection></FadeIn>

      {/* Contact Section */}
      <FadeIn delay={400}><MotionSection id="contact" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-[#faf9f7] p-7 sm:p-9">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact me</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">ติดต่อมาได้เลยหากต้องการร่วมงาน แลกเปลี่ยนความคิด หรือแค่ทักทาย</p>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-[#faf9f7] p-7 sm:p-9">
                <h3 className="text-lg font-bold text-gray-900">ช่องทางติดต่อ</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        {link.icon === "github" && (
                          <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {link.icon === "linkedin" && (
                          <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{link.label}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-[#faf9f7] p-7 sm:p-9">
                <h3 className="text-lg font-bold text-gray-900">ผลงานของฉัน</h3>
                <div className="mt-5 space-y-3">
                  {projectLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-4 transition hover:border-gray-300 hover:shadow-sm">
                      <span className="text-sm font-semibold text-gray-700">{link.label}</span>
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection></FadeIn>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-8">
            {/* Brand Column */}
            <div className="max-w-xs">
              <p className="text-xl font-bold tracking-tight text-gray-900">dev.warit</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                สร้างสรรค์ประสบการณ์ดิจิทัลที่น่าจดจำ ผ่านโค้ดที่สะอาดและการออกแบบที่พิถีพิถัน
              </p>
            </div>

            {/* Navigation Column */}
            <div className="flex gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">สำรวจ</p>
                <ul className="mt-4 space-y-3">
                  <li><a href="#top" className="text-sm text-gray-600 transition hover:text-gray-900">หน้าแรก</a></li>
                  <li><a href="#about" className="text-sm text-gray-600 transition hover:text-gray-900">เกี่ยวกับ</a></li>
                  <li><a href="#work" className="text-sm text-gray-600 transition hover:text-gray-900">ผลงาน</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">ชุมชน</p>
                <ul className="mt-4 space-y-3">
                  <li><a href="/courses" className="text-sm text-gray-600 transition hover:text-gray-900">คอร์สเรียน</a></li>
                  <li><a href="/blog" className="text-sm text-gray-600 transition hover:text-gray-900">บทความ</a></li>
                </ul>
              </div>
            </div>

            {/* Social Column */}
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">เชื่อมต่อ</p>
              <div className="flex gap-3">
                <a href="https://github.com/developwarit" target="_blank" rel="noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-md">
                  <svg className="h-5 w-5 text-gray-600 transition group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-md">
                  <svg className="h-5 w-5 text-gray-600 transition group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} dev.warit All rights reserved.</p>
            <p className="text-xs text-gray-400">ออกแบบและพัฒนาด้วย ♥ dev.warit</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
