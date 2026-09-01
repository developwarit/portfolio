"use client";

import { ContentBlock } from "../types";
import { QuizBlock } from "./quiz-block";

type Props = {
  blocks: ContentBlock[];
};

export function LessonContent({ blocks }: Props) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-2xl font-bold text-[#E6EDF7]">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="leading-[1.8] text-[#E6EDF7]/90" style={{ lineHeight: 1.8 }}>
                {block.text}
              </p>
            );
          case "image":
            return (
              <img key={i} src={block.src} alt={block.alt} className="rounded-xl" />
            );
          case "quiz":
            return (
              <QuizBlock
                key={i}
                question={block.question}
                multiple={block.multiple}
                options={block.options}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
