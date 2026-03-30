const API = "http://localhost:3000/api/notes";
const TOKEN = "mysecrettoken";

let allNotes = [];

async function loadNotes() {
    const res = await fetch(API);
    const data = await res.json();

    allNotes = data;
    renderNotes(allNotes);
}

function renderNotes(data) {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(n => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <b>${n.title}</b><br>
                <small>${n.content}</small>
            </div>
            <div class="actions">
                <button onclick="editNote(${n.id})">✏️</button>
                <button onclick="deleteNote(${n.id})">🗑️</button>
            </div>
        `;

        list.appendChild(li);

        // animation
        li.style.opacity = 0;
        li.style.transform = "translateY(10px)";
        setTimeout(() => {
            li.style.transition = "0.3s";
            li.style.opacity = 1;
            li.style.transform = "translateY(0)";
        }, 50);
    });
}

async function addNote() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!title || !content) return alert("กรอกข้อมูลก่อน");

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": TOKEN
        },
        body: JSON.stringify({ title, content })
    });

    loadNotes();
}

// ลบ
async function deleteNote(id) {
    if (!confirm("ลบจริงไหม?")) return;

    await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": TOKEN
        }
    });

    allNotes = allNotes.filter(n => n.id !== id);
    renderNotes(allNotes);
}

async function editNote(id) {
    const note = allNotes.find(n => n.id === id);

    const newTitle = prompt("Edit title:", note.title);
    const newContent = prompt("Edit content:", note.content);

    if (!newTitle || !newContent) return;

    await deleteNote(id);

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": TOKEN
        },
        body: JSON.stringify({ title: newTitle, content: newContent })
    });

    loadNotes();
}

function searchNotes() {
    const keyword = document.getElementById("search").value.toLowerCase();

    const filtered = allNotes.filter(n =>
        n.title.toLowerCase().includes(keyword) ||
        n.content.toLowerCase().includes(keyword)
    );

    renderNotes(filtered);
}

function toggleDark() {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
}

if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
}

loadNotes();