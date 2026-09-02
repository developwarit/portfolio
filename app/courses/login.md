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