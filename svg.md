สำหรับโลโก้จริงของแบรนด์พวกนี้ วิธีที่ถูกต้องและเป๊ะที่สุดคือใช้ไลบรารีไอคอนที่รวบรวม SVG ของแบรนด์ AI ไว้แล้ว (อัปเดตตามโลโก้จริง ไม่ต้องวาดเอง) ที่เหมาะกับ Next.js ที่สุดคือ @lobehub/icons เพราะมีครบทั้ง ChatGPT/OpenAI, Gemini, Microsoft Copilot, Claude, Perplexity และ Cursor ในแพ็กเกจเดียว

ติดตั้ง
bash
npm install @lobehub/icons
ใช้งานใน Next.js (Client Component)
tsx
'use client';

import { OpenAI, Gemini, MicrosoftCopilot, Claude, Perplexity, Cursor } from '@lobehub/icons';

const tools = [
  { Icon: OpenAI, label: 'ChatGPT' },
  { Icon: Gemini, label: 'Gemini' },
  { Icon: MicrosoftCopilot, label: 'Microsoft Copilot' },
  { Icon: Claude, label: 'Claude' },
  { Icon: Perplexity, label: 'Perplexity' },
  { Icon: Cursor, label: 'Cursor' },
];

export default function AiToolsRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-neutral-100 px-6 py-8">
      <h2 className="w-full text-center text-xl font-bold mb-2">
        กลุ่มเครื่องมือ AI ที่ใช้บ่อยๆ
      </h2>
      {tools.map(({ Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon size={28} />
          <span className="font-semibold text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}

หมายเหตุสำคัญ:

Icon.Color มีให้เลือกใช้เวอร์ชันสีตามแบรนด์จริง เช่น <OpenAI.Color size={28} /> ถ้าต้องการสีเหมือนภาพตัวอย่าง
ต้อง 'use client' เพราะไอคอนพวกนี้ render เป็น React component ฝั่ง client
โลโก้แบรนด์เหล่านี้เป็นเครื่องหมายการค้าของแต่ละบริษัท — ใช้เพื่อ "แสดงว่าเว็บรองรับ/อ้างอิงถึงเครื่องมือเหล่านี้" ได้ตามปกติ (fair use ทั่วไปในวงการ) แต่ไม่ควรใช้ในลักษณะที่ทำให้เข้าใจผิดว่าเป็นพันธมิตรหรือได้รับการรับรองอย่างเป็นทางการ

ถ้าอยากได้ SVG ไฟล์ดิบ แทนการใช้ React component (เช่น เพื่อฝังใน <Image> หรือ background) แนะนำโหลดจาก Simple Icons ได้เช่นกัน — มีให้ค้นหาแล้วดาวน์โหลดเป็น .svg ไฟล์เดี่ยวๆ ต่อแบรนด์

