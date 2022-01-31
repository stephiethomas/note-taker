const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//Display notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// fs.readFile('./develop/db/db.json'), (err, data) => {
//     const note = JSON.parse(data);
//     if (err) {
//     return;
//  };
// };

//deletes a note
router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id);
    updateDb();
    console.log('Deleted note with id', + req.params.id)
    });

// //updates the json file when a note is added or deleted
// function updateDb () {
//     fs.writeFile('./db/db.json', JSON.stringify(notes, '\t'), err => {
//         if (err) throw err;
//        return;
//         });
//     };

//     const getNotes = (formData = {}) => {
//         let queryUrl = '/api/notes?';

//         Object.entries(formData.forEach(([key,value]) => {
//             queryUrl += `${key}=${value}&`;
//         }));
//         console.log(queryUrl);
        
//         fetch(queryUrl)
//         .then(response => {
//             if (!response.ok) {
//                 return alert('Error:' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(noteData => {
//             console.log(noteData);
//             printResults(noteData);
//         });
//     };

module.exports = router;