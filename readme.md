# 🔐 Secure Notes

---

## 📁 Project Structure

```
Secure Notes
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
└── frontend
    ├── index.html
    ├── script.js
    └── style.css
```

---

## 🚀 Quick Start

### 1. ติดตั้งแพ็กเกจ (Backend)

```bash
npm install
```

---

### 2. สร้างไฟล์ `.env`

สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` แล้วใส่ค่า:

```env
PORT=3000
SECRET_TOKEN=mysecrettoken
```

---

ค่าต้องตรงกับฝั่ง Frontend (`script.js`):

```js
const API = "http://localhost:3000/api/notes";
const TOKEN = "mysecrettoken";
```

> ❗ หากเปลี่ยน `PORT` หรือ `TOKEN` ต้องแก้ให้ตรงกันทั้ง **Backend และ Frontend**

---

### 3. รันเซิร์ฟเวอร์

```bash
node server.js
```

หรือ

```bash
npm start
```

---

### 4. เปิด Frontend

เปิดไฟล์:

```
frontend/index.html
```

โดยการดับเบิลคลิก หรือเปิดผ่าน Browser

---

## ⚙️ ฟังก์ชันหลัก

### 📥 `loadNotes()`

โหลดโน้ตทั้งหมดจาก Backend

---

### ➕ `addNote()`

เพิ่มโน้ตใหม่

> ต้องส่ง `Authorization Token`

---

### ❌ `deleteNote(id)`

ลบโน้ตตาม ID

> ต้องส่ง `Authorization Token`

---

### ✏️ `editNote(id)`

แก้ไขโน้ต

> ใช้วิธี "ลบแล้วเพิ่มใหม่"

---

### 🔍 `searchNotes()`

ค้นหาโน้ตจาก:

* Title
* Content

---
🌙 toggleDark()

สลับโหมด:

Light Mode
Dark Mode

และจะบันทึกค่าลง localStorage






