"use client";

import { useLanguage } from "./language-context";
import { TypingText } from "./typing-text";
import { RotatingText } from "./rotating-text";
import { MagneticButton } from "./magnetic-button";
import { SmoothLink } from "./smooth-link";
import { TypingCodeCard } from "./typing-code-card";

const heroTags = ["Next.js", "React", "Flutter", "Node.js", "PostgreSQL", "Tailwind"];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-screen w-full max-w-7xl content-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.74fr] lg:items-center">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.42em] text-zinc-500">
            <span aria-hidden="true" className="text-zinc-600">*</span>
            {t("hero.available")}
          </p>

          <div>
            <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.035em] text-white text-balance sm:text-8xl">
              <span className="block">{t("hero.title1")}</span>
              <span className="block text-zinc-500">{t("hero.title2")}</span>
            </h1>
            <div className="mt-8 text-lg font-medium text-zinc-400">
              <TypingText text={t("hero.typing")} speed={100} delay={1500} />
            </div>
            <div className="mt-2">
              <RotatingText
                texts={[t("hero.rotate1"), t("hero.rotate2"), t("hero.rotate3"), t("hero.rotate4")]}
                className="text-xl font-medium text-zinc-400"
                interval={3000}
              />
            </div>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
              {t("hero.description")}
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
            <SmoothLink section="work" className="block transition hover:text-white">
              {t("hero.cta1")}
            </SmoothLink>
            <SmoothLink section="contact" className="block transition hover:text-white">
              {t("hero.cta2")}
            </SmoothLink>
          </div>
        </div>

        <TypingCodeCard />
      </div>

      <div className="mt-10 grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-[1fr_auto_1fr] sm:items-center lg:hidden">
        <p className="text-sm font-medium text-zinc-400">{t("hero.explore")}</p>
        <SmoothLink
          section="work"
          className="hidden h-16 w-16 items-center justify-center rounded-full bg-white text-xs font-semibold text-zinc-950 transition hover:bg-blue-200 sm:flex"
        >
          {t("hero.scroll")}
        </SmoothLink>
        <p className="text-sm leading-6 text-zinc-400 sm:text-right">
          {t("hero.productMinded")}
        </p>
      </div>
    </section>
  );
}
