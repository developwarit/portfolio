1. พื้นหลังสีฟ้าที่หัวข้อ ไม่ใช่ CSS ของการ์ด

ตรง

กลุ่มเครื่องมือ AI ที่ใช้บ่อยๆ

ที่มีพื้นหลังสีฟ้า น่าจะเกิดจาก การเลือกข้อความ (Text Selection) ใน Browser ครับ ไม่ใช่พื้นหลังที่คุณเขียนไว้

ลองคลิกพื้นที่ว่างบนหน้าเว็บ หรือกด Esc แล้วดูใหม่ ถ้าสีฟ้าหาย แปลว่าใช่เลย

ถ้าต้องการกำหนดสีตอนเลือกข้อความเอง สามารถใช้:

::selection {
  background: #dbeafe;
  color: #0f172a;
}
2. ไอคอนตอนนี้ไม่ใช่ Logo ของ AI Tools จริง

จากภาพตอนนี้:

ChatGPT → 🙂
Gemini → 🔺
Copilot → ⚪
Claude → ◇
Perplexity → ✳
Cursor → ▶

ดูเหมือนคุณกำลังใช้ ไอคอนทั่วไปจาก Icon Library แทน Official Logo ครับ

ถ้าเป้าหมายคือให้เป็น โลโก้ของแต่ละเครื่องมือจริง ๆ ผมไม่แนะนำให้ใช้ Bot, Triangle, Circle ฯลฯ เพราะคนดูจะรู้สึกว่าเป็น icon category มากกว่า AI Tools ที่คุณใช้จริง

ผมแนะนำให้ Section นี้ออกมาแบบนี้
             กลุ่มเครื่องมือ AI ที่ใช้บ่อยๆ

     [ChatGPT]   [Gemini]   [Copilot]   [Claude]   [Perplexity]   [Cursor]

แต่ละตัว:

┌────┐
│ SVG│  ChatGPT
└────┘

┌────┐
│ SVG│  Gemini
└────┘

ใช้ Official SVG Logo และกำหนดพื้นที่ไอคอนเท่ากัน เช่น 32 × 32px

<div className="flex items-center gap-3">
  <div className="flex h-8 w-8 items-center justify-center">
    <img
      src="/icons/ai/chatgpt.svg"
      alt="ChatGPT"
      className="h-7 w-7 object-contain"
    />
  </div>

  <span className="text-sm font-semibold">
    ChatGPT
  </span>
</div>
ส่วน Layout ของคุณตอนนี้

ผมว่าระยะห่างโดยรวม ดีขึ้นแล้ว แต่หัวข้อควรเอา selection ออกก่อน และ Logo ควรเปลี่ยนเป็นของจริงทั้งหมด

สรุป:

สิ่งที่เห็น	สาเหตุ	แก้ยังไง
หัวข้อมีพื้นฟ้าครอบ	Text Selection	คลิกที่ว่าง/กด Esc
ChatGPT เป็นหน้ายิ้ม	ใช้ Generic Icon	เปลี่ยนเป็น SVG Logo
Gemini เป็นสามเหลี่ยม	Generic Icon	เปลี่ยนเป็น SVG Logo
Copilot เป็นวงกลม	Generic Icon	เปลี่ยนเป็น SVG Logo
Claude เป็นเพชร	Generic Icon	เปลี่ยนเป็น SVG Logo
Perplexity เป็นดอกจัน	Generic Icon	เปลี่ยนเป็น SVG Logo
Cursor เป็นปุ่ม Play	Generic Icon	เปลี่ยนเป็น SVG Logo

ดังนั้นยังไม่ต้องปรับ CSS ใหญ่ครับ — Layout ตอนนี้ใช้ได้แล้ว แก้เรื่อง Official SVG Logo + ขนาดไอคอนให้เท่ากัน จะดูดีขึ้นเยอะครับ