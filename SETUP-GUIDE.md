# คู่มือตั้งค่า Auth.js + Database

## 1. สร้าง PostgreSQL Database (Supabase - ฟรี)

1. ไปที่ https://supabase.com
2. สมัครสมาชิก / Login
3. กด "New Project"
4. กรอกข้อมูล:
   - Organization: เลือกหรือสร้างใหม่
   - Project name: `lms-portfolio`
   - Database Password: ตั้งรหัสผ่าน (เก็บไว้)
   - Region: Southeast Asia (Singapore)
5. กด "Create new project"
6. ไปที่ Settings > Database
7. คัดลอก Connection string > URI
8. ใส่ใน `.env.local`:
   ```
   # Connect to Postgres via the shared transaction-mode pooler (IPv4-only)
   DATABASE_URL="postgresql://postgres.simotimfpyhzbhsqhjzs:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

   # Connect to Postgres via the shared session-mode pooler (used for migrations)
   DIRECT_URL="postgresql://postgres.simotimfpyhzbhsqhjzs:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
   ```

## 2. ตั้งค่า Google OAuth

### ขั้นตอนที่ 2.1: สร้าง Google Cloud Project
1. ไปที่ https://console.cloud.google.com
2. กด "Select a project" > "New Project"
3. ตั้งชื่อ: `lms-portfolio-auth`
4. กด "Create"

### ขั้นตอนที่ 2.2: เปิดใช้ Google+ API
1. ใน Google Cloud Console ไปที่ APIs & Services > Library
2. ค้นหา "Google+ API" หรือ "People API"
3. กด "Enable"

### ขั้นตอนที่ 2.3: สร้าง OAuth Consent Screen
1. ไปที่ APIs & Services > OAuth consent screen
2. เลือก "External" > กด "Create"
3. กรอกข้อมูล:
   - App name: `LMS Portfolio`
   - User support email: อีเมลของคุณ
   - Developer contact: อีเมลของคุณ
4. กด "Save and Continue"
5. Scopes: กด "Add or Remove Scopes" > เลือก `email`, `profile` > กด "Update"
6. กด "Save and Continue"
7. Test users: เพิ่มอีเมลของคุณ (สำหรับทดสอบ)
8. กด "Save and Continue"

### ขั้นตอนที่ 2.4: สร้าง OAuth Credentials
1. ไปที่ APIs & Services > Credentials
2. กด "+ Create Credentials" > "OAuth client ID"
3. Application type: `Web application`
4. Name: `LMS Portfolio`
5. Authorized redirect URIs: เพิ่ม:
   - `http://localhost:3000/api/auth/callback/google` (สำหรับ dev)
   - `https://your-domain.vercel.app/api/auth/callback/google` (สำหรับ prod)
6. กด "Create"
7. คัดลอก Client ID และ Client Secret

### ขั้นตอนที่ 2.5: ใส่ค่าใน .env.local
```
GOOGLE_CLIENT_ID="xxxxxxxxxxxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret-here"
your-client-secret-here

GOOGLE_CLIENT_ID="your-client-id-here"
GOOGLE_CLIENT_SECRET="your-client-secret-here"
```

## 3. ตั้งค่า .env.local

สร้างไฟล์ `.env.local` ใน root ของโปรเจค:

```env
# Database (Supabase)
DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres"

# Auth.js
NEXTAUTH_SECRET="สร้างด้วย: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

## 4. รัน Prisma Migration

```bash
npx prisma db push
# หรือ
npx prisma migrate dev --name init
```

## 5. ทดสอบ

```bash
npm run dev
```

1. ไปที่ http://localhost:3000/login
2. กด "เข้าสู่ระบบด้วย Google"
3. ล็อกอินด้วย Google account ที่เพิ่มเป็น test user

## หมายเหตุ

- **Account Linking**: ถ้าผู้ใช้สมัครด้วยอีเมลก่อน แล้วล็อกอินด้วย Google ทีหลัง ระบบจะผูกเข้าบัญชีเดิมอัตโนมัติ
- **Security**: ใช้ bcrypt hash รหัสผ่าน (salt rounds 12), JWT session, httpOnly cookie
- **Error Messages**: ใช้ "อีเมลหรือรหัสผ่านไม่ถูกต้อง" ป้องกัน user enumeration
