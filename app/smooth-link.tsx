"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { scrollToSection } from "./smooth-scroll";

type SmoothLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  section: string;
  children: ReactNode;
};

export function SmoothLink({
  section,
  children,
  onClick,
  ...props
}: SmoothLinkProps) {
  return (
    <a
      {...props}
      href={`#${section}`}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          event.preventDefault();
          scrollToSection(section);
        }
      }}
    >
      {children}
    </a>
  );
}
