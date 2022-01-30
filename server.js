const express = require('express');
const app = express();
const uniqid = require('uniqid');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');
const {notes} = require('./develop/db/db.json');
const e = require('express');

fs.readFile('./develop/db/db.json'), (err, data) => {
    if (err) throw err;
    res.json.parse(data);
    
};

//note get route
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id, notes]);
});

//note post route
app.post('api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('Error');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

//deletes a note
app.delete('/api/notes/:id', (req, res) => {
notes.splice(req.params.id);
updateDb();
console.log('Deleted note with id', + req.params.id)
});

//Display notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


//updates the json file when a note is added or deleted
function updateDb () {
    fs.writeFile('./develop/db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return;
    });
};

module.exports = app;












app.listen(3001, () => {
console.log(`API server now on port 3001!`);
});