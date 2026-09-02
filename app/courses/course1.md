คุณคือ Senior Frontend Engineer ที่เชี่ยวชาญ React + TypeScript + Tailwind CSS
ช่วยสร้างหน้า "Course Learning Page" (LMS) ธีมมืด รองรับภาษาไทย

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS สำหรับ styling
- lucide-react สำหรับไอคอน
- ไม่ใช้ UI library หนัก ๆ เขียน component เอง

## Layout (Desktop)
- Top bar สูง 56px: ปุ่ม "← ย้อนกลับ" ชิดซ้าย, ปุ่ม "ดู Tutorial" ชิดขวา
- Sidebar ซ้าย กว้าง 288px: 
  - หัวข้อ "บทที่ 1" (ตัวเล็ก สีจาง) + ชื่อบท "Intro to Generative AI" (ตัวหนา)
  - รายการหมวด (accordion) แต่ละหมวดแสดงชื่อ + ความคืบหน้า (2/7)
  - กางแล้วแสดงรายการบทเรียนย่อย พร้อมไอคอนสถานะ: เสร็จแล้ว (เช็คเขียว), กำลังเรียน (จุดส้ม), ยังไม่เริ่ม (วงกลมเทา)
  - ปุ่มพับ/กาง sidebar
- Content area: หัวข้อบทเรียน + เนื้อหา จำกัด max-width 768px จัดชิดซ้ายพร้อม padding 32px
- Bottom bar sticky: ตัวเลขหน้า "5/15" ตรงกลางซ้าย, ปุ่ม "← ก่อนหน้า" (secondary) และ "ถัดไป →" (primary สีน้ำเงิน) ชิดขวา

## Design Tokens
- background: #0B1220 / surface: #111C33 / border: #1E2A44
- primary: #2563EB / success: #22C55E / warning: #F59E0B
- text: #E6EDF7 / text-muted: #93A4C0
- radius: 12px, การ์ดใน sidebar radius 10px

## ฟอนต์ไทย (สำคัญมาก)
- ใช้ Google Font "IBM Plex Sans Thai" (หรือ Noto Sans Thai) โหลดผ่าน next/font/google
- ตั้ง line-height อย่างน้อย 1.7 สำหรับข้อความไทย ป้องกันสระบน/วรรณยุกต์ชนกัน
- ห้ามใช้ฟอนต์ที่ไม่รองรับ Thai glyph
- ข้อความ UI ทั้งหมดเป็นภาษาไทยที่สะกดถูกต้อง เช่น "ย้อนกลับ", "ก่อนหน้า", "ถัดไป", "ตรวจคำตอบ", "ข้อควรระวังในการใช้งาน AI"

## Components ที่ต้องสร้าง (แยกไฟล์)
1. <CourseLayout> — โครงหลัก
2. <TopBar>
3. <CourseSidebar> + <SectionAccordion> + <LessonItem>
4. <LessonContent> — รองรับ block types: heading, paragraph, image, video, quiz
5. <QuizBlock> — โจทย์แบบเลือกหลายคำตอบ (checkbox), ปุ่ม "ตรวจคำตอบ", แสดงผลถูก/ผิดรายข้อ + คำอธิบาย
6. <BottomNav> — ปุ่มก่อนหน้า/ถัดไป + progress
7. <FeedbackPanel> — panel เลื่อนออกจากขวา: dropdown "หัวข้อ Feedback", แสดงเนื้อหาที่เลือก (read-only, scrollable), textarea "ข้อเสนอแนะ", ปุ่ม "ส่งความคิดเห็น", ปุ่มปิด (X)

## Data Model (TypeScript)
สร้าง types และ mock data ให้ครบ:
type LessonStatus = 'completed' | 'in-progress' | 'locked'
type Lesson = { id, title, status, blocks: ContentBlock[] }
type Section = { id, title, lessons: Lesson[] }
type Course = { id, title, chapterLabel, sections: Section[] }
type ContentBlock = 
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'quiz'; question: string; multiple: boolean; options: {id,text,correct,explanation}[] }

## ข้อกำหนดเพิ่มเติม
- Responsive: จอ <1024px ให้ sidebar กลายเป็น drawer เปิดด้วยปุ่ม hamburger
- Accessibility: ใช้ semantic HTML, aria-expanded บน accordion, aria-current บนบทเรียนปัจจุบัน, focus ring ชัดเจน, keyboard navigation ได้
- ชื่อหมวดยาวเกินให้ truncate + tooltip แสดงชื่อเต็ม
- มี transition นุ่ม ๆ 150–200ms บน hover และการกาง accordion
- ไม่มี hardcode สี ใช้ Tailwind config extend theme

## Output
1. โครงสร้างโฟลเดอร์
2. โค้ดแต่ละไฟล์ครบถ้วน พร้อม comment ภาษาไทยอธิบายส่วนสำคัญ
3. tailwind.config.ts ที่ตั้ง token ไว้แล้ว
4. mock data ตัวอย่าง 3 sections พร้อม quiz 1 ข้อ

หน้าเว็บ Next.js ของฉันแสดงภาษาไทยผิด สระและวรรณยุกต์ซ้อนกัน/หายไป 
เช่น "ถัดไป" กลายเป็น "ถัไป", "ย้อนกลับ" กลายเป็น "ยอดกล้อ"

ช่วยวินิจฉัยสาเหตุที่เป็นไปได้ทั้งหมด และให้วิธีแก้แบบเป็นขั้นตอน ครอบคลุม:
- การเลือกและโหลดฟอนต์ผ่าน next/font/google (โค้ดตัวอย่างเต็ม)
- การตั้ง subsets ให้มี 'thai'
- line-height / letter-spacing ที่เหมาะกับภาษาไทย
- font fallback stack ที่ถูกต้อง
- ปัญหา encoding (UTF-8) และ lang="th" บน <html>
- กรณีข้อความมาจาก API/CMS แล้ว encoding เพี้ยน
ให้โค้ดที่พร้อมคัดลอกไปใช้
คุณคือ Senior Fullstack Engineer ที่เชี่ยวชาญ Next.js + Auth.js + PostgreSQL
ช่วยเพิ่มระบบ Authentication ให้เว็บ LMS (Course Learning Platform) ของฉัน

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Auth.js (NextAuth v5) สำหรับ authentication
- Prisma ORM + PostgreSQL
- bcrypt สำหรับ hash รหัสผ่าน
- zod สำหรับ validate ฟอร์ม
- react-hook-form + Tailwind CSS
- Resend (หรือ Nodemailer) สำหรับส่งอีเมล

## วิธีล็อกอินที่ต้องรองรับ
1. Google OAuth (Sign in with Google)
2. Email + Password (Credentials) — สมัครสมาชิกเอง
3. รองรับ Account Linking: ถ้าอีเมลเดียวกันสมัครไว้แล้ว 
   แล้วมาล็อกอินด้วย Google ให้ผูกเข้าบัญชีเดิม ไม่สร้างบัญชีซ้ำ

## หน้าจอที่ต้องสร้าง (ธีมมืด ภาษาไทย ให้เข้ากับ design tokens เดิม)
- /login — ปุ่ม "เข้าสู่ระบบด้วย Google" (มีโลโก้), เส้นคั่น "หรือ", 
  ฟอร์มอีเมล+รหัสผ่าน, ลิงก์ "ลืมรหัสผ่าน?", ลิงก์ "ยังไม่มีบัญชี? สมัครสมาชิก"
- /register — ชื่อ, อีเมล, รหัสผ่าน, ยืนยันรหัสผ่าน, checkbox ยอมรับเงื่อนไข
  + แถบวัดความแข็งแรงรหัสผ่าน (อ่อน/กลาง/แข็งแรง)
- /verify-email — หน้าแจ้งให้ตรวจอีเมล + ปุ่มส่งลิงก์ใหม่ (มี cooldown 60 วินาที)
- /forgot-password และ /reset-password
- /profile — แก้ไขชื่อ, รูปโปรไฟล์, เปลี่ยนรหัสผ่าน, ดูบัญชีที่เชื่อมต่ออยู่

## Database Schema (Prisma)
สร้าง model ให้ครบ: User, Account, Session, VerificationToken (ตาม Auth.js adapter)
เพิ่ม field ใน User: name, email, emailVerified, image, hashedPassword (nullable), 
role (STUDENT | INSTRUCTOR | ADMIN), createdAt
เพิ่ม model UserProgress: userId, lessonId, status, completedAt 
เพื่อเก็บความคืบหน้าการเรียนผูกกับบัญชี

## Security Requirements
- Hash รหัสผ่านด้วย bcrypt (salt rounds 12) ห้ามเก็บ plain text
- Validate ฝั่ง server ด้วย zod ทุก endpoint ไม่เชื่อ client อย่างเดียว
- รหัสผ่านขั้นต่ำ 8 ตัว มีตัวพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข
- Rate limiting หน้า login/register (เช่น 5 ครั้ง/นาที ต่อ IP)
- ใช้ JWT session strategy, httpOnly cookie, secure ใน production
- CSRF protection (Auth.js จัดการให้ แต่อธิบายว่าทำงานยังไง)
- ข้อความ error ต้องไม่บอกว่า "ไม่พบอีเมลนี้" หรือ "รหัสผ่านผิด" แยกกัน 
  ให้ใช้ "อีเมลหรือรหัสผ่านไม่ถูกต้อง" ป้องกัน user enumeration

## Route Protection
- สร้าง middleware.ts ป้องกันเส้นทาง /course/*, /profile/*, /dashboard/*
- ยังไม่ล็อกอิน → redirect ไป /login?callbackUrl=<หน้าที่พยายามเข้า>
- ล็อกอินแล้วเข้า /login หรือ /register → redirect ไป /dashboard
- บทเรียนที่ status = 'locked' ต้องเช็คสิทธิ์ฝั่ง server ด้วย ไม่ใช่แค่ซ่อน UI

## UX Details ที่ต้องมี
- Loading state บนปุ่มขณะกำลัง submit (spinner + disable ปุ่ม)
- Error message ภาษาไทยที่เข้าใจง่าย แสดงใต้ field ที่ผิด
- Toast แจ้งเตือนเมื่อสำเร็จ เช่น "สมัครสมาชิกสำเร็จ กรุณาตรวจสอบอีเมล"
- Top bar เดิม: ถ้าล็อกอินแล้วแสดง avatar + dropdown (โปรไฟล์ / ความคืบหน้า / ออกจากระบบ)
- ฟอนต์ IBM Plex Sans Thai, line-height 1.7, ข้อความไทยสะกดถูกต้องทุกจุด

## Output ที่ต้องการ
1. โครงสร้างโฟลเดอร์ทั้งหมด
2. schema.prisma ฉบับเต็ม
3. auth.ts / auth.config.ts (Auth.js config)
4. API routes: /api/auth/[...nextauth], /api/register, 
   /api/verify-email, /api/forgot-password, /api/reset-password
5. โค้ดหน้า UI ทุกหน้าพร้อม validation
6. middleware.ts
7. ไฟล์ .env.example พร้อมคอมเมนต์ว่าแต่ละตัวหาค่าจากไหน
8. ขั้นตอนตั้งค่า Google OAuth ใน Google Cloud Console แบบทีละขั้น
   (สร้าง project → OAuth consent screen → Credentials → redirect URI ที่ต้องใส่)

ใส่ comment ภาษาไทยอธิบายส่วนที่ซับซ้อน
คุณคือ Senior Fullstack Engineer ที่เชี่ยวชาญ Next.js + Auth.js + PostgreSQL
ช่วยเพิ่มระบบ Authentication ให้เว็บ LMS (Course Learning Platform) ของฉัน

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Auth.js (NextAuth v5) สำหรับ authentication
- Prisma ORM + PostgreSQL
- bcrypt สำหรับ hash รหัสผ่าน
- zod สำหรับ validate ฟอร์ม
- react-hook-form + Tailwind CSS
- Resend (หรือ Nodemailer) สำหรับส่งอีเมล

## วิธีล็อกอินที่ต้องรองรับ
1. Google OAuth (Sign in with Google)
2. Email + Password (Credentials) — สมัครสมาชิกเอง
3. รองรับ Account Linking: ถ้าอีเมลเดียวกันสมัครไว้แล้ว 
   แล้วมาล็อกอินด้วย Google ให้ผูกเข้าบัญชีเดิม ไม่สร้างบัญชีซ้ำ

## หน้าจอที่ต้องสร้าง (ธีมมืด ภาษาไทย ให้เข้ากับ design tokens เดิม)
- /login — ปุ่ม "เข้าสู่ระบบด้วย Google" (มีโลโก้), เส้นคั่น "หรือ", 
  ฟอร์มอีเมล+รหัสผ่าน, ลิงก์ "ลืมรหัสผ่าน?", ลิงก์ "ยังไม่มีบัญชี? สมัครสมาชิก"
- /register — ชื่อ, อีเมล, รหัสผ่าน, ยืนยันรหัสผ่าน, checkbox ยอมรับเงื่อนไข
  + แถบวัดความแข็งแรงรหัสผ่าน (อ่อน/กลาง/แข็งแรง)
- /verify-email — หน้าแจ้งให้ตรวจอีเมล + ปุ่มส่งลิงก์ใหม่ (มี cooldown 60 วินาที)
- /forgot-password และ /reset-password
- /profile — แก้ไขชื่อ, รูปโปรไฟล์, เปลี่ยนรหัสผ่าน, ดูบัญชีที่เชื่อมต่ออยู่

## Database Schema (Prisma)
สร้าง model ให้ครบ: User, Account, Session, VerificationToken (ตาม Auth.js adapter)
เพิ่ม field ใน User: name, email, emailVerified, image, hashedPassword (nullable), 
role (STUDENT | INSTRUCTOR | ADMIN), createdAt
เพิ่ม model UserProgress: userId, lessonId, status, completedAt 
เพื่อเก็บความคืบหน้าการเรียนผูกกับบัญชี

## Security Requirements
- Hash รหัสผ่านด้วย bcrypt (salt rounds 12) ห้ามเก็บ plain text
- Validate ฝั่ง server ด้วย zod ทุก endpoint ไม่เชื่อ client อย่างเดียว
- รหัสผ่านขั้นต่ำ 8 ตัว มีตัวพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข
- Rate limiting หน้า login/register (เช่น 5 ครั้ง/นาที ต่อ IP)
- ใช้ JWT session strategy, httpOnly cookie, secure ใน production
- CSRF protection (Auth.js จัดการให้ แต่อธิบายว่าทำงานยังไง)
- ข้อความ error ต้องไม่บอกว่า "ไม่พบอีเมลนี้" หรือ "รหัสผ่านผิด" แยกกัน 
  ให้ใช้ "อีเมลหรือรหัสผ่านไม่ถูกต้อง" ป้องกัน user enumeration

## Route Protection
- สร้าง middleware.ts ป้องกันเส้นทาง /course/*, /profile/*, /dashboard/*
- ยังไม่ล็อกอิน → redirect ไป /login?callbackUrl=<หน้าที่พยายามเข้า>
- ล็อกอินแล้วเข้า /login หรือ /register → redirect ไป /dashboard
- บทเรียนที่ status = 'locked' ต้องเช็คสิทธิ์ฝั่ง server ด้วย ไม่ใช่แค่ซ่อน UI

## UX Details ที่ต้องมี
- Loading state บนปุ่มขณะกำลัง submit (spinner + disable ปุ่ม)
- Error message ภาษาไทยที่เข้าใจง่าย แสดงใต้ field ที่ผิด
- Toast แจ้งเตือนเมื่อสำเร็จ เช่น "สมัครสมาชิกสำเร็จ กรุณาตรวจสอบอีเมล"
- Top bar เดิม: ถ้าล็อกอินแล้วแสดง avatar + dropdown (โปรไฟล์ / ความคืบหน้า / ออกจากระบบ)
- ฟอนต์ IBM Plex Sans Thai, line-height 1.7, ข้อความไทยสะกดถูกต้องทุกจุด

## Output ที่ต้องการ
1. โครงสร้างโฟลเดอร์ทั้งหมด
2. schema.prisma ฉบับเต็ม
3. auth.ts / auth.config.ts (Auth.js config)
4. API routes: /api/auth/[...nextauth], /api/register, 
   /api/verify-email, /api/forgot-password, /api/reset-password
5. โค้ดหน้า UI ทุกหน้าพร้อม validation
6. middleware.ts
7. ไฟล์ .env.example พร้อมคอมเมนต์ว่าแต่ละตัวหาค่าจากไหน
8. ขั้นตอนตั้งค่า Google OAuth ใน Google Cloud Console แบบทีละขั้น
   (สร้าง project → OAuth consent screen → Credentials → redirect URI ที่ต้องใส่)

ใส่ comment ภาษาไทยอธิบายส่วนที่ซับซ้อนช่วยตรวจสอบระบบ authentication ของฉันแบบ security audit
[วางโค้ด auth.ts, register route, middleware.ts ที่นี่]

ตรวจตามหัวข้อนี้ พร้อมระบุระดับความรุนแรง (Critical / High / Medium / Low):
1. การเก็บและ hash รหัสผ่าน
2. Session และ cookie configuration
3. User enumeration และ timing attack
4. Rate limiting และ brute force protection
5. Token expiry (verification / reset password)
6. Authorization — เช็คสิทธิ์ฝั่ง server ครบไหม
7. Input validation และ SQL injection
8. Secrets management (.env ไม่หลุดขึ้น git)
9. Open redirect จาก callbackUrl

แต่ละข้อบอกว่าผ่านหรือไม่ผ่าน ถ้าไม่ผ่านให้โค้ดที่แก้แล้ว

ข้อควรรู้ 3 ข้อ:

Account Linking เป็นจุดที่พังบ่อยที่สุด — คนสมัครด้วยอีเมลก่อน แล้วมากด Google ทีหลัง ถ้าไม่จัดการจะได้บัญชีซ้ำหรือ error OAuthAccountNotLinked
Redirect URI ใน Google Console ต้องใส่ทั้ง http://localhost:3000/api/auth/callback/google (dev) และโดเมนจริง (prod) ไม่งั้นล็อกอินไม่ผ่าน
callbackUrl ต้อง validate ว่าเป็น path ภายในเว็บเท่านั้น ไม่งั้นโดน open redirect พาผู้ใช้ไปเว็บฟิชชิ่งได้

คุณคือ Senior Fullstack Engineer (Next.js + TypeScript + Prisma)
ช่วยสร้าง Admin Dashboard ให้เว็บ LMS ที่มีระบบ auth อยู่แล้ว (Auth.js + PostgreSQL)

## สิทธิ์การเข้าถึง
- role: ADMIN เข้าได้ทุกอย่าง
- role: INSTRUCTOR เข้าได้เฉพาะคอร์สที่ตัวเองเป็นเจ้าของ
- role: STUDENT เข้าไม่ได้ → redirect ไป /dashboard พร้อม toast "ไม่มีสิทธิ์เข้าถึง"
- เช็คสิทธิ์ทั้งใน middleware และซ้ำอีกครั้งใน server action/API ห้ามเช็คแค่ฝั่ง UI

## หน้าจอที่ต้องสร้าง (ธีมมืด ใช้ design tokens เดิม ภาษาไทยทั้งหมด)

### /admin — ภาพรวม
- การ์ดสถิติ 4 ใบ: ผู้เรียนทั้งหมด, คอร์สที่เปิดสอน, อัตราเรียนจบ (%), ผู้เรียนใหม่เดือนนี้
- กราฟเส้น: ผู้เรียนใหม่ย้อนหลัง 30 วัน (ใช้ recharts)
- ตาราง: 10 กิจกรรมล่าสุด (ใครสมัคร / ใครเรียนจบบทไหน / เมื่อไหร่)

### /admin/courses — จัดการคอร์ส
- ตารางคอร์ส: ชื่อ, จำนวนบทเรียน, ผู้เรียน, สถานะ (ร่าง/เผยแพร่/ปิด), แก้ไขล่าสุด
- ค้นหา + กรองตามสถานะ + เรียงลำดับ + pagination (20 แถว/หน้า)
- ปุ่ม "สร้างคอร์สใหม่", เมนู 3 จุดต่อแถว: แก้ไข / ทำสำเนา / เผยแพร่ / ลบ
- ลบต้องมี confirm dialog ให้พิมพ์ชื่อคอร์สยืนยัน (soft delete เท่านั้น)

### /admin/courses/[id]/edit — แก้ไขเนื้อหา
- ฟอร์มข้อมูลคอร์ส: ชื่อ, คำอธิบาย, รูปปก (อัปโหลด), หมวดหมู่, ระดับความยาก
- จัดการ Section/Lesson แบบ drag-and-drop เรียงลำดับใหม่ได้ (ใช้ dnd-kit)
- Editor เนื้อหาบทเรียนแบบ block: heading, paragraph, image, video, quiz
- ปุ่ม "บันทึกร่าง" กับ "เผยแพร่" แยกกัน + auto-save ทุก 30 วินาที
- ปุ่ม "ดูตัวอย่าง" เปิดหน้าเรียนจริงในแท็บใหม่

### /admin/students — จัดการผู้เรียน
- ตาราง: avatar, ชื่อ, อีเมล, วิธีล็อกอิน (Google/Email), คอร์สที่ลงทะเบียน, ความคืบหน้า, วันสมัคร
- คลิกดูรายละเอียด: timeline การเรียน, บทที่จบแล้ว, คะแนน quiz
- Action: เปลี่ยน role, ระงับบัญชี, ส่งอีเมลแจ้งเตือน, export CSV

## Data & API
- ใช้ Server Components ดึงข้อมูล + Server Actions สำหรับ mutation
- Pagination แบบ cursor-based ไม่ใช้ OFFSET (รองรับข้อมูลเยอะ)
- ทุก mutation ต้อง revalidatePath หลังสำเร็จ
- Optimistic UI สำหรับ action เบา ๆ เช่น เปลี่ยนสถานะเผยแพร่
- Audit log: บันทึกทุกการแก้ไข (ใคร ทำอะไร เมื่อไหร่ ค่าเดิม→ค่าใหม่)

## Prisma Schema เพิ่มเติม
model Course { id, title, slug, description, coverImage, category, level, 
  status, authorId, publishedAt, deletedAt, createdAt, updatedAt }
model AuditLog { id, userId, action, entityType, entityId, before, after, createdAt }
เพิ่ม model Enrollment: userId, courseId, enrolledAt, completedAt

## Output
1. โครงสร้างโฟลเดอร์ทั้งหมด
2. schema.prisma ส่วนที่เพิ่ม + migration command
3. โค้ดทุกหน้าพร้อม loading.tsx และ error.tsx
4. Server Actions พร้อม zod validation และ permission check
5. Reusable components: <DataTable>, <StatCard>, <ConfirmDialog>, <RoleBadge>
6. ฟอนต์ IBM Plex Sans Thai, line-height 1.7, ข้อความไทยสะกดถูกต้องทุกจุด

ใส่ comment ภาษาไทยอธิบายส่วนที่ซับซ้อน

ช่วยสร้างระบบออกใบประกาศนียบัตร (Certificate) ให้เว็บ LMS 
ที่มี Next.js 14 + Prisma + Auth.js อยู่แล้ว

## เงื่อนไขการออกใบประกาศ
- เรียนครบทุกบทเรียนในคอร์ส (100%)
- ทำแบบทดสอบท้ายคอร์สผ่านเกณฑ์ (ค่าเริ่มต้น 70% กำหนดต่อคอร์สได้)
- ตรวจสอบเงื่อนไขฝั่ง server เท่านั้น ห้ามเชื่อค่าจาก client เด็ดขาด
- ออกใบได้ครั้งเดียวต่อ user ต่อ course (unique constraint)

## Prisma Schema
model Certificate {
  id            String   @id @default(cuid())
  certificateNo String   @unique   // รูปแบบ: CERT-2026-000001
  verifyCode    String   @unique   // random 12 ตัว สำหรับตรวจสอบสาธารณะ
  userId        String
  courseId      String
  recipientName String   // snapshot ชื่อ ณ วันที่ออก
  courseTitle   String   // snapshot ชื่อคอร์ส
  score         Int?
  issuedAt      DateTime @default(now())
  revokedAt     DateTime?
  @@unique([userId, courseId])
}

## ฟีเจอร์ที่ต้องมี

### 1. หน้าแสดงใบประกาศ /certificate/[verifyCode]
- ดีไซน์ใบประกาศแนวนอน A4 (297x210mm) พื้นหลังสว่าง กรอบสวยงาม
- แสดง: โลโก้, "ใบประกาศนียบัตร", ชื่อผู้เรียน (ตัวใหญ่), 
  "ได้ผ่านการอบรมหลักสูตร", ชื่อคอร์ส, วันที่ออก, เลขที่ใบประกาศ, 
  ลายเซ็นผู้อำนวยการ, QR code ลิงก์หน้าตรวจสอบ
- ฟอนต์ไทยที่เหมาะกับงานทางการ: Sarabun หรือ Noto Serif Thai
- วันที่แสดงเป็น พ.ศ. รูปแบบ "1 กันยายน 2569"
- เข้าได้แบบสาธารณะ ไม่ต้องล็อกอิน (แชร์ให้คนอื่นดูได้)

### 2. ดาวน์โหลด PDF
- ปุ่ม "ดาวน์โหลด PDF" เจนฝั่ง server ด้วย @react-pdf/renderer หรือ Puppeteer
- ฝังฟอนต์ไทยลงไฟล์ PDF ให้ถูกต้อง (สำคัญมาก สระ/วรรณยุกต์ต้องไม่เพี้ยน)
- ชื่อไฟล์: certificate-{courseSlug}-{certificateNo}.pdf
- ความละเอียดพร้อมพิมพ์ 300 DPI

### 3. หน้าตรวจสอบ /verify
- ช่องกรอก verifyCode หรือสแกน QR
- ผลลัพธ์: ✅ ถูกต้อง (แสดงชื่อ+คอร์ส+วันที่) / ❌ ไม่พบ / ⚠️ ถูกเพิกถอน
- Rate limit 10 ครั้ง/นาที ป้องกัน brute force เดารหัส

### 4. หน้ารวมใบประกาศของฉัน /my-certificates
- Grid การ์ดใบประกาศทั้งหมดที่ได้รับ
- แต่ละใบมีปุ่ม: ดู, ดาวน์โหลด PDF, แชร์ (คัดลอกลิงก์ + แชร์ LinkedIn)

### 5. ฝั่ง Admin
- /admin/certificates: ตารางใบประกาศทั้งหมด, ค้นหา, กรองตามคอร์ส
- ออกใบด้วยตนเอง (กรณีพิเศษ) + เพิกถอนใบ พร้อมระบุเหตุผล
- Export CSV

## Trigger การออกใบ
- เมื่อบันทึก progress แล้วครบ 100% ให้เช็คเงื่อนไขอัตโนมัติ
- ถ้าผ่าน → สร้าง Certificate + ส่งอีเมลแจ้ง (Resend) พร้อมลิงก์และไฟล์แนบ
- แสดง modal ยินดีด้วยพร้อม confetti ในหน้าเรียน

## Output
1. schema.prisma ส่วนที่เพิ่ม
2. Server Action: issueCertificate() พร้อม validation ครบ
3. โค้ดทุกหน้า + component <CertificateTemplate> ที่ใช้ร่วมกันได้ทั้ง web และ PDF
4. API route สำหรับเจน PDF
5. Email template ภาษาไทย
6. วิธี generate QR code และ certificateNo แบบ atomic ไม่ชนกัน

ใส่ comment ภาษาไทยอธิบายส่วนที่ซับซ้อน
3 จุดที่มักพลาดในระบบนี้:

ฟอนต์ไทยใน PDF — ปัญหาเดิมที่เจอในหน้าเว็บจะกลับมาหนักกว่าใน PDF ต้อง embed ไฟล์ .ttf ตรง ๆ ไม่ใช่อ้างชื่อฟอนต์เฉย ๆ ไม่งั้นสระลอยหมด
Snapshot ข้อมูล — ต้องเก็บชื่อผู้เรียนและชื่อคอร์สลงในตาราง Certificate เลย ถ้าไป join เอาตอนแสดงผล วันหลังผู้ใช้เปลี่ยนชื่อ ใบประกาศเก่าจะเปลี่ยนตามด้วย
เลขที่ใบประกาศชนกัน — ถ้าใช้ COUNT + 1 แล้วมีคนเรียนจบพร้อมกัน จะได้เลขซ้ำ ควรใช้ PostgreSQL sequence หรือ transaction แบบล็อกแถว