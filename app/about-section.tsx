"use client";

import { useLanguage } from "./language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-400">WP</span>
                  </div>
                  <p className="mt-4 text-zinc-500">Warit Panyeam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-zinc-500">
              {t("about.label")}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              {t("about.name")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {t("about.description")}
            </p>
            <p className="mt-4 text-lg font-medium text-zinc-300 italic">
              &ldquo;{t("about.quote")}&rdquo;
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black text-white">04+</p>
                <p className="mt-1 text-sm text-zinc-500">{t("about.projectsBuilt")}</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">02</p>
                <p className="mt-1 text-sm text-zinc-500">{t("about.realSystems")}</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">03+</p>
                <p className="mt-1 text-sm text-zinc-500">{t("about.techInUse")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
