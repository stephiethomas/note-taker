const router = require('express').Router();
const {notes} = require('../../develop/db/db.json');


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
//Display notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


module.exports = router