export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const headerOffset = 78;
  const start = window.scrollY;
  const end =
    target.getBoundingClientRect().top + window.scrollY - headerOffset;

  if (prefersReducedMotion) {
    window.scrollTo(0, end);
    return;
  }

  const distance = end - start;
  const duration = 860;
  const startTime = performance.now();
  const easeOutQuint = (progress: number) => 1 - (1 - progress) ** 5;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * easeOutQuint(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
