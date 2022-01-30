const express = require('express')
const router = express.Router();
const {notes} = require('../../develop/db/db');


//note get route
router.get('/notes', (req, res) => {
    let note = notes;
    if (req.query) {
        note = filterByQuery(req.query, notes);
    }
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const note = findByID(req.params.id, notes);
    if(note) {
       res.json(notes);
    } else {
        res.send(404);
    }
    
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