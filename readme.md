Secure Notes 



backend
    ├─ server.js          
    ├─ package.json
    ├─ package-lock.json
    ├─ .env
frontend              
    ├─ index.html         
    ├─ script.js
    └─ style.css



เริ่มต้นใช้งาน (Quick Start)
ติดตั้งแพ็กเกจ
npm install
สร้างไฟล์ .env ในรูทโปรเจกต์
env


PORT=3000
SECRET_TOKEN=mysecrettoken
ค่าด้านบนต้องสอดคล้องกับฝั่ง frontend:
script.js กำหนด API เป็น http://localhost:3000/api/notes
และ TOKEN = "mysecrettoken"
หากเปลี่ยน PORT หรือ TOKEN ต้องแก้ให้ตรงกันทั้งสองฝั่ง
รันเซิร์ฟเวอร์
node server.js

npm start
เปิด frontend
ดับเบิลคลิกเปิดไฟล์ index.html ในเบราเซอร์ได้เลย


const API = "http://localhost:3000/api/notes";
const TOKEN = "mysecrettoken";
ฟังก์ชันหลัก:
loadNotes(): โหลดโน้ตทั้งหมด
addNote(): เพิ่มโน้ต (ต้องส่ง Authorization)
deleteNote(id): ลบโน้ต (ต้องส่ง Authorization)
editNote(id): แก้ไขโดยลบแล้วเพิ่มใหม่
searchNotes(): ค้นหาจาก title หรือ content
toggleDark(): สลับโหมดมืด/สว่าง และจำค่าไว้ใน localStorage
