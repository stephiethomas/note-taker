const express = require('express');
const uniqid = require('uniqid');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');
const {notes} = require('./develop/db/db.json');


//Express middleware
app.use(express.urlencoded({ extended: false}));


//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


fs.readFile('./develop/db/db.json'), (err, data) => {
    if (err) throw err;
    res.json.parse(data);
    
};

//Default response for any other request not found
app.use((req, res) => {
    res.status(404).end();
});


//deletes a note
app.delete('/api/notes/:id', (req, res) => {
notes.splice(req.params.id);
updateDb();
console.log('Deleted note with id', + req.params.id)
});

//updates the json file when a note is added or deleted
function updateDb () {
    fs.writeFile('./develop/db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return;
    });
};


app.listen(3001, () => {
console.log(`API server now on port 3001!`);
});


module.exports = app;