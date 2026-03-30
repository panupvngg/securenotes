1.JS Engine vs Runtime
    - Frontend: รันในเบราว์เซอร์ (Runtime: Browser) ใช้เอนจินตามเบราว์เซอร์ เช่น V8(Chrome), SpiderMonkey(Firefox), JavaScriptCore(Safari). เข้าถึง DOM, fetch, localStorage.
    - Backend: รันด้วย Node.js (Runtime: Node) ใช้เอนจิน V8 เช่นกัน แต่มี API ของ Node (process, network) และไม่มี DOM
2.DOM (Vanilla JS)
    loadNotes() ดึงข้อมูลแล้วเรียก renderNotes().
    renderNotes(): เคลียร์ ด้วย innerHTML="", สร้าง ใหม่ด้วย createElement/innerHTML แล้ว appendChild.
    search/delete/edit จะปรับ allNotes แล้วเรียก renderNotes() ใหม่.
    toggleDark(): สลับคลาสที่ body เพื่อเปลี่ยนธีมผ่าน CSS.
3.HTTP/HTTPS (กด “Add Note”)
    - เบราว์เซอร์เรียก fetch POST /api/notes
        - Headers สำคัญ: Content-Type: application/json, Authorization: (+ อาจมี OPTIONS preflight เพราะใช้ Authorization)
        - Body: {title, content}
    - เซิร์ฟเวอร์ Express ตรวจ token, บันทึกโน้ต, ตอบ 201 JSON จากนั้น frontend เรียก GET /api/notes เพื่อรีเฟรชรายการ
    - เข้ารหัสป้องกันดักฟัง token/ข้อมูล, กันการแก้ไขระหว่างทาง, ยืนยันตัวตนเซิร์ฟเวอร์ และรองรับฟีเจอร์สมัยใหม่ของเบราว์เซอร์
4. Environment Variables
    - เก็บ SECRET_TOKEN ใน .env ฝั่งเซิร์ฟเวอร์เพื่อไม่ให้รั่วไปยังผู้ใช้/ซอร์สหน้าเว็บ
    - ถ้าใส่ไว้ฝั่ง frontend ใครๆ ก็เห็น token แล้วเรียก API แทนเราได้ (เสี่ยงถูกโจมตี/สแปม)
    - เดโมนี้ฝัง TOKEN ใน script.js เพื่อความง่ายเฉพาะทดสอบ ควรเปลี่ยนเป็นระบบยืนยันตัวตนจริง (เช่น session/JWT ใน HttpOnly cookie) ในงานโปรดักชัน