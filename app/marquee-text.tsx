"use client";

import { motion } from "framer-motion";

type MarqueeTextProps = {
  items: string[];
  className?: string;
  speed?: number;
  separator?: string;
};

export function MarqueeText({
  items,
  className = "",
  speed = 25,
  separator = "✦",
}: MarqueeTextProps) {
  const text = items.join(` ${separator} `);
  const duplicated = `${text} ${separator} ${text} ${separator} ${text}`;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: [0, -(text.length * 0.55)] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block pr-4">{duplicated}</span>
      </motion.div>
    </div>
  );
}

type ReverseMarqueeTextProps = {
  items: string[];
  className?: string;
  speed?: number;
  separator?: string;
};

export function ReverseMarqueeText({
  items,
  className = "",
  speed = 30,
  separator = "•",
}: ReverseMarqueeTextProps) {
  const text = items.join(` ${separator} `);
  const duplicated = `${text} ${separator} ${text} ${separator} ${text}`;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: [-(text.length * 0.55), 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block pr-4">{duplicated}</span>
      </motion.div>
    </div>
  );
}
