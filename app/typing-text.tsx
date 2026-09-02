"use client";

import { useState, useEffect } from "react";

type TypingTextProps = {
  text?: string;
  texts?: string[];
  className?: string;
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
};

export function TypingText({ 
  text, 
  texts, 
  className = "", 
  speed = 80, 
  delay = 1000,
  deleteSpeed = 40,
  pauseDuration = 2000
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textList = texts || (text ? [text] : []);

  useEffect(() => {
    if (textList.length === 0) return;

    let timeout: NodeJS.Timeout;
    let i = 0;
    let isDeleting = false;
    let currentTextIndex = 0;

    const type = () => {
      const currentText = textList[currentTextIndex];

      if (!isDeleting) {
        // Typing
        if (i <= currentText.length) {
          setDisplayText(currentText.slice(0, i));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          // Pause before deleting
          isDeleting = true;
          timeout = setTimeout(type, pauseDuration);
        }
      } else {
        // Deleting
        if (i > 0) {
          i--;
          setDisplayText(currentText.slice(0, i));
          timeout = setTimeout(type, deleteSpeed);
        } else {
          // Move to next text
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % textList.length;
          setCurrentIndex(currentTextIndex);
          timeout = setTimeout(type, 500);
        }
      }
    };

    // Initial delay before starting
    timeout = setTimeout(type, delay);

    return () => clearTimeout(timeout);
  }, [textList, speed, delay, deleteSpeed, pauseDuration]);

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
