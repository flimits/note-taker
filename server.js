const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.port || 3001;

const app = express();
const db = require('./db/db.json');
// const { publicDecrypt } = require('crypto');

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
});

app.post("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'db/db.json'));
    console.log(`${req.method} this is api call fo notes`);


    const { title, text } = req.body;

    const newNote = {
        title,
        text
    };

    // Obtain existing reviews
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);

            // Let's add a new note
            parsedNotes.push(newNote);

            db.push(newNote);

            // Update the note db with latest note added.
            fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('Successfully updated note!')
            );
        }
    });



});

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