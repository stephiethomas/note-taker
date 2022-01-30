const express = require('express')
const router = express.Router();
const {notes} = require('../../develop/db/db.json');


//note get route
router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    res.json(notes[req.params.id, notes]);
});

//note post route
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('Error');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});




module.exports = router