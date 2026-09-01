"use client";

import { useState } from "react";
import { QuizOption } from "../types";

type Props = {
  question: string;
  multiple: boolean;
  options: QuizOption[];
};

export function QuizBlock({ question, multiple, options }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const toggle = (id: string) => {
    if (checked) return;
    if (multiple) {
      setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    } else {
      setSelected([id]);
    }
  };

  const handleCheck = () => setChecked(true);

  return (
    <div className="rounded-xl border border-[#1E2A44] bg-[#111C33] p-6">
      <div className="mb-1 flex items-center gap-2">
        <span className="rounded-md bg-[#F59E0B]/20 px-2 py-0.5 text-xs font-semibold text-[#F59E0B]">
          แบบทดสอบ
        </span>
      </div>
      <h3 className="mb-4 text-lg font-semibold text-[#E6EDF7]">{question}</h3>

      <div className="space-y-3">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          const isCorrect = opt.correct;
          let borderColor = "border-[#1E2A44]";
          let bgColor = "bg-[#0B1220]";
          if (checked) {
            if (isCorrect) {
              borderColor = "border-[#22C55E]";
              bgColor = "bg-[#22C55E]/10";
            } else if (isSelected && !isCorrect) {
              borderColor = "border-[#EF4444]";
              bgColor = "bg-[#EF4444]/10";
            }
          } else if (isSelected) {
            borderColor = "border-[#2563EB]";
            bgColor = "bg-[#2563EB]/10";
          }

          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all duration-150 ${borderColor} ${bgColor} hover:border-[#2563EB]/50`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded ${
                  multiple ? "border-2" : "rounded-full border-2"
                } ${isSelected ? "border-[#2563EB] bg-[#2563EB]" : "border-[#93A4C0]"}`}
              >
                {isSelected && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <div className="flex-1">
                <span className="text-[#E6EDF7]">{opt.text}</span>
                {checked && (
                  <p className={`mt-1 text-sm ${isCorrect ? "text-[#22C55E]" : isSelected ? "text-[#EF4444]" : "text-[#93A4C0]"}`}>
                    {opt.explanation}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {!checked && (
        <button
          onClick={handleCheck}
          disabled={selected.length === 0}
          className="mt-4 rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2563EB]/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ตรวจคำตอบ
        </button>
      )}

      {checked && (
        <div className="mt-4 rounded-lg border border-[#1E2A44] bg-[#0B1220] p-4">
          <p className="text-sm text-[#93A4C0]">
            {selected.some((id) => options.find((o) => o.id === id)?.correct)
              ? "✅ คำตอบบางข้อถูกต้อง! ลองดูคำอธิบายใต้แต่ละตัวเลือก"
              : "❌ ยังไม่ถูกทั้งหมด ลองทบทวนเนื้อหาอีกครั้ง"}
          </p>
        </div>
      )}
    </div>
  );
}
