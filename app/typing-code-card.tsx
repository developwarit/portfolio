"use client";

import { useState, useEffect } from "react";

const codeLines = [
  "const startButton = document.querySelector('#start');",
  "",
  "const progress = {",
  "  lesson: 1,",
  "  completed: false,",
  "};",
  "",
  "function startCourse() {",
  "  progress.completed = true;",
  "  startButton.textContent = 'Building...';",
  "}",
];

export function TypingCodeCard() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("app.js");

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const line = codeLines[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push(line.charAt(0));
          } else {
            newLines[currentLine] = line.substring(0, currentChar + 1);
          }
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex gap-1 ml-4">
            {["index.html", "styles.css", "app.js"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition ${
                  activeTab === tab ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 font-mono text-sm leading-6 bg-gray-900 text-gray-100 min-h-[240px]">
          {displayedLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 text-gray-500 text-right mr-4 select-none">{i + 1}</span>
              <span className={`flex-1 ${
                line.includes("const") || line.includes("function") ? "text-blue-400" :
                line.includes("true") || line.includes("false") ? "text-orange-400" :
                line.includes("'") ? "text-green-400" :
                "text-gray-100"
              }`}>
                {line}
                {i === currentLine && <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse" />}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white text-xs">
          <span>Ln {Math.min(currentLine + 1, codeLines.length)}, Col {currentChar + 1}</span>
          <span>JavaScript</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}
