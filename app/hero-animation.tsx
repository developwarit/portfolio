"use client";

import { motion } from "framer-motion";

const floatingElements = [
  { x: "10%", y: "20%", size: 80, delay: 0, duration: 6 },
  { x: "85%", y: "30%", size: 60, delay: 1, duration: 7 },
  { x: "20%", y: "70%", size: 50, delay: 2, duration: 5 },
  { x: "75%", y: "75%", size: 70, delay: 0.5, duration: 8 },
  { x: "50%", y: "40%", size: 40, delay: 1.5, duration: 6 },
];

const gridLines = Array.from({ length: 12 }, (_, i) => i);

const particlePositions = [
  { left: "12%", top: "18%", duration: 3.2, delay: 0.5 },
  { left: "85%", top: "25%", duration: 4.1, delay: 1.2 },
  { left: "45%", top: "72%", duration: 3.8, delay: 0.8 },
  { left: "78%", top: "68%", duration: 4.5, delay: 2.1 },
  { left: "22%", top: "45%", duration: 3.5, delay: 0.3 },
  { left: "92%", top: "55%", duration: 4.2, delay: 1.8 },
  { left: "8%", top: "82%", duration: 3.9, delay: 0.9 },
  { left: "65%", top: "15%", duration: 4.3, delay: 2.5 },
  { left: "35%", top: "88%", duration: 3.1, delay: 1.4 },
  { left: "55%", top: "32%", duration: 4.0, delay: 0.6 },
  { left: "18%", top: "62%", duration: 3.7, delay: 1.9 },
  { left: "72%", top: "78%", duration: 4.4, delay: 0.2 },
  { left: "42%", top: "22%", duration: 3.3, delay: 2.3 },
  { left: "88%", top: "42%", duration: 4.1, delay: 1.1 },
  { left: "28%", top: "52%", duration: 3.6, delay: 0.7 },
  { left: "62%", top: "85%", duration: 4.2, delay: 2.0 },
  { left: "52%", top: "38%", duration: 3.4, delay: 1.6 },
  { left: "15%", top: "75%", duration: 4.0, delay: 0.4 },
  { left: "78%", top: "35%", duration: 3.8, delay: 2.2 },
  { left: "38%", top: "58%", duration: 4.3, delay: 1.3 },
];

export function HeroAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute left-[15%] top-[25%] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[10%] top-[40%] h-48 w-48 rounded-full bg-purple-500/10 blur-[80px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[40%] h-56 w-56 rounded-full bg-cyan-500/8 blur-[90px]"
        animate={{
          x: [0, 25, -35, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Code Tags */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            scale: [0.8, 1, 1, 0.8],
            y: [0, -15, -15, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <span className="text-xs font-mono text-zinc-400">
            {["</>", "{ }", "( )", "[ ]", "#"][i]}
          </span>
        </motion.div>
      ))}

      {/* Animated Grid Lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {gridLines.map((i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i + 1) * 8.33}%`}
            y1="0"
            x2={`${(i + 1) * 8.33}%`}
            y2="100%"
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}
        {gridLines.map((i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${(i + 1) * 8.33}%`}
            x2="100%"
            y2={`${(i + 1) * 8.33}%`}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>

      {/* Floating Particles */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          style={{
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Dots Pattern */}
      <div className="absolute right-[5%] top-[15%] grid grid-cols-4 gap-3 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="h-1.5 w-1.5 rounded-full bg-blue-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rotating Ring */}
      <motion.div
        className="absolute right-[12%] top-[35%] h-32 w-32 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/50" />
      </motion.div>

      {/* Pulse Circle */}
      <motion.div
        className="absolute left-[8%] top-[55%] h-24 w-24 rounded-full border border-white/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
