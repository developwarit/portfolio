import { Course } from './types';

export const courseData: Course = {
  id: 'gen-ai-intro',
  title: 'Intro to Generative AI',
  chapterLabel: 'บทที่ 1',
  sections: [
    {
      id: 's1',
      title: 'ทำคความรู้จักกับ Generative AI',
      lessons: [
        {
          id: 'l1',
          title: 'ทำไมเราถึงใช้ AI ช่วยทำงาน',
          status: 'completed',
          blocks: [
            { type: 'heading', text: 'ทำไมเราถึงใช้ AI ช่วยทำงาน' },
            { type: 'paragraph', text: 'ในยุคที่ AI เข้ามามีบทบาทในชีวิตประจำวัน การเรียนรู้วิธีใช้ AI ให้เกิดประโยชน์สูงสุดจึงเป็นทักษะที่จำเป็น ไม่ว่าจะเป็นการเขียนบทความ วิเคราะห์ข้อมูล หรือสร้างรูปภาพ AI สามารถช่วยเราทำงานได้เร็วขึ้นและมีประสิทธิภาพมากขึ้น' },
            { type: 'paragraph', text: 'การใช้ AI ไม่ได้หมายความว่าจะมาแทนที่มนุษย์ แต่เป็นเครื่องมือที่ช่วยให้เราทำงานได้ดีขึ้น เหมือนกับที่เครื่องคิดเลขช่วยให้เราคำนวณได้เร็วขึ้น' },
          ],
        },
        {
          id: 'l2',
          title: 'Generative AI คืออะไร',
          status: 'completed',
          blocks: [
            { type: 'heading', text: 'Generative AI คืออะไร?' },
            { type: 'paragraph', text: 'Generative AI เป็นรูปแบบหนึ่งของ AI ที่ไม่ได้แค่วิเคราะห์ข้อมูล แต่สามารถสร้างสิ่งใหม่ๆ ได้ เช่น สร้างข้อความ รูปภาพ เสียง หรือวิดีโอ' },
            { type: 'paragraph', text: 'ตัวอย่างที่เราคุ้นเคย เช่น ChatGPT ที่ช่วยเขียนบทความ DALL-E ที่สร้างรูปภาพจากคำอธิบาย หรือ Runway ที่สร้างวิดีโอ' },
          ],
        },
        {
          id: 'l3',
          title: 'คุณสมบัติเด่นของ Generative AI',
          status: 'in-progress',
          blocks: [
            { type: 'heading', text: 'คุณสมบัติเด่นของ Generative AI' },
            { type: 'paragraph', text: 'Generative AI มีคุณสมบัติเด่นหลายข้อที่ทำให้แตกต่างจาก AI แบบเดิม:' },
            { type: 'paragraph', text: '1. เข้าใจภาษาธรรมชาติ - ไม่ต้องเขียนโค้ดก็ใช้งานได้' },
            { type: 'paragraph', text: '2. สร้างเนื้อหาได้หลากหลาย - ทั้งข้อความ รูปภาพ เสียง วิดีโอ' },
            { type: 'paragraph', text: '3. เรียนรู้จาก context - จำบทสนทนาและปรับคำตอบตามความต้องการ' },
            { type: 'paragraph', text: '4. ทำงานได้รวดเร็ว - ช่วยประหยัดเวลาทำงานได้อย่างมาก' },
            {
              type: 'quiz',
              question: 'ข้อใดไม่ใช่คุณสมบัติเด่นของ Generative AI?',
              multiple: false,
              options: [
                { id: 'a', text: 'เข้าใจภาษาธรรมชาติ', correct: false, explanation: 'นี่คือคุณสมบัติเด่นข้อหนึ่งของ Generative AI' },
                { id: 'b', text: 'สร้างเนื้อหาได้หลากหลาย', correct: false, explanation: 'Generative AI สร้างได้ทั้งข้อความ รูปภาพ เสียง วิดีโอ' },
                { id: 'c', text: 'ทำงานได้ช้ากว่ามนุษย์', correct: true, explanation: 'Generative AI ทำงานได้เร็วกว่ามนุษย์มาก ช่วยประหยัดเวลา' },
                { id: 'd', text: 'เรียนรู้จาก context', correct: false, explanation: 'Generative AI จำบทสนทนาได้และปรับคำตอบตาม' },
              ],
            },
          ],
        },
        {
          id: 'l4',
          title: 'ตัวอย่างเครื่องมือ Generative AI',
          status: 'locked',
          blocks: [
            { type: 'heading', text: 'ตัวอย่างเครื่องมือ Generative AI' },
            { type: 'paragraph', text: 'ในปัจจุบันมีเครื่องมือ Generative AI มากมายให้เลือกใช้ แต่ละเครื่องมือมีจุดเด่นที่แตกต่างกัน' },
          ],
        },
        {
          id: 'l5',
          title: 'การใช้งาน Generative AI',
          status: 'locked',
          blocks: [
            { type: 'heading', text: 'การใช้งาน Generative AI' },
            { type: 'paragraph', text: 'เราจะมาเรียนรู้วิธีใช้งาน Generative AI อย่างมีประสิทธิภาพ' },
          ],
        },
        {
          id: 'l6',
          title: 'ขั้นตอนการทำงานของ Generative AI',
          status: 'locked',
          blocks: [
            { type: 'heading', text: 'ขั้นตอนการทำงานของ Generative AI' },
            { type: 'paragraph', text: 'Generative AI ทำงานอย่างไร? มาทำความเข้าใจเบื้องหลังกัน' },
          ],
        },
        {
          id: 'l7',
          title: 'เริ่มต้นใช้งาน Chat GPT',
          status: 'locked',
          blocks: [
            { type: 'heading', text: 'เริ่มต้นใช้งาน Chat GPT' },
            { type: 'paragraph', text: 'มาลองใช้ Chat GPT กันจริงๆ เริ่มจากคำถามง่ายๆ ไปจนถึงการเขียน Prompt ที่ซับซ้อน' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'เทคนิคการเขียน Prompt',
      lessons: [
        {
          id: 'l8',
          title: 'Prompt คืออะไร',
          status: 'completed',
          blocks: [
            { type: 'heading', text: 'Prompt คืออะไร' },
            { type: 'paragraph', text: 'Prompt คือคำสั่งหรือคำขอที่เราส่งให้ AI เพื่อให้สร้างคำตอบที่เราต้องการ การเขียน Prompt ที่ดีจะช่วยให้ได้ผลลัพธ์ที่ตรงใจมากขึ้น' },
          ],
        },
        {
          id: 'l9',
          title: 'โครงสร้างของ Prompt',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'โครงสร้างของ Prompt' }, { type: 'paragraph', text: 'Prompt ที่ดีควรมีโครงสร้างที่ชัดเจน' }],
        },
        {
          id: 'l10',
          title: 'เทคนิคการเขียน Prompt',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'เทคนิคการเขียน Prompt' }, { type: 'paragraph', text: 'เทคนิคต่างๆ ที่จะช่วยให้เขียน Prompt ได้ดีขึ้น' }],
        },
        {
          id: 'l11',
          title: 'ตัวอย่าง Prompt สำหรับงานต่างๆ',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'ตัวอย่าง Prompt สำหรับงานต่างๆ' }, { type: 'paragraph', text: 'รวมตัวอย่าง Prompt ที่ใช้ได้จริงในสายงานต่างๆ' }],
        },
        {
          id: 'l12',
          title: 'ฝึกเขียน Prompt',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'ฝึกเขียน Prompt' }, { type: 'paragraph', text: 'มาฝึกเขียน Prompt กันจริงๆ' }],
        },
        {
          id: 'l13',
          title: 'สรุป Prompt Engineering',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'สรุป Prompt Engineering' }, { type: 'paragraph', text: 'สรุปทุกอย่างที่เรียนรู้เกี่ยวกับ Prompt Engineering' }],
        },
      ],
    },
    {
      id: 's3',
      title: 'ข้อคิดประกันการใช้งาน AI',
      lessons: [
        {
          id: 'l14',
          title: 'ข้อจำกัดของ AI',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'ข้อจำกัดของ AI' }, { type: 'paragraph', text: 'AI มีข้อจำกัดอะไรบ้างที่เราควรรู้' }],
        },
        {
          id: 'l15',
          title: 'จริยธรรมในการใช้ AI',
          status: 'locked',
          blocks: [{ type: 'heading', text: 'จริยธรรมในการใช้ AI' }, { type: 'paragraph', text: 'เราควรใช้ AI อย่างมีจริยธรรม' }],
        },
      ],
    },
  ],
};

// หา lesson ทั้งหมดเป็น array เดียว
export function getAllLessons(course: Course) {
  return course.sections.flatMap((s) => s.lessons);
}

// หา lesson ปัจจุบันตาม index
export function getLessonByIndex(course: Course, index: number) {
  const all = getAllLessons(course);
  return all[index] || null;
}
