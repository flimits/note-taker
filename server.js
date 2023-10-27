const express = require('express');
const path = require('path');
// const api = require('./public/assets/js/index');
const PORT = 3001;
const app = express();
const db = require('./db/db.json');
const { publicDecrypt } = require('crypto');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log(`${req.method} just for slash`);
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'db/db.json'));
    console.log(`${req.method} this is api call fo notes`)
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
    console.log(`${req.method} just for notes`);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log(`${req.method} just for anything`);
});

app.listen(PORT, () =>
    console.log(`App listening at https://localhost:${PORT}`)
);