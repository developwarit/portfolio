"use client";

import { useState, useEffect } from "react";

type TypingTextProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
};

export function TypingText({ text, className = "", speed = 80, delay = 1000 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block ml-0.5 font-bold transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      >
        _
      </span>
    </span>
  );
}
