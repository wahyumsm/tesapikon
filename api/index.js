const express = require("express");
const app = express();

// Contoh data siswa
const students = [
  { id: 1, name: "Ucok", age: 15, grade: "10th" },
  { id: 2, name: "Budi", age: 16, grade: "11th" },
  { id: 3, name: "Siti", age: 14, grade: "9th" },
];

// Endpoint utama
app.get("/siswadata", (req, res) => res.send("vercel ucok"));

// Endpoint untuk mendapatkan data siswa
app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
