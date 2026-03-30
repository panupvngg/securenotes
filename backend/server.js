const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const SECRET = process.env.SECRET_TOKEN;

let notes = [];

// 🔹 Middleware ตรวจ Token
function auth(req, res, next) {
    const token = req.headers.authorization;

    if (token !== SECRET) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}

// 🔹 GET notes
app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// 🔹 POST note
app.post("/api/notes", auth, (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Missing data" });
    }

    const newNote = {
        id: Date.now(),
        title,
        content
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

// 🔹 DELETE note
app.delete("/api/notes/:id", auth, (req, res) => {
    const id = parseInt(req.params.id);

    notes = notes.filter(note => note.id !== id);
    res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});