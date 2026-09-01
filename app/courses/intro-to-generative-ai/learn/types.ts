// ประเภทข้อมูลสำหรับระบบ LMS
export type LessonStatus = 'completed' | 'in-progress' | 'locked';

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'quiz'; question: string; multiple: boolean; options: QuizOption[] };

export type QuizOption = {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  status: LessonStatus;
  blocks: ContentBlock[];
};

export type Section = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  chapterLabel: string;
  sections: Section[];
};
