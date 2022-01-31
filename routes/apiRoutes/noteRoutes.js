const fs = require('fs');
const router = express.Router();
const saveNote = fs.readFileSync(path.join(__dirname, "../db/db.json"));


//note get route
router.get('/notes', (req, res) => {
    res.json(saveNote);
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
    let pushNotes = req.body;
    saveNote.push(pushNotes);

    fs.writeFileSync('/db/db.json', JSON.stringify(saveNote));
    res.json(saveNote);
});




module.exports = router