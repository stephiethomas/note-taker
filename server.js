const express = require('express');
const app = express();
const uniqid = require('uniqid');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/htmlRoutes');
const htmlRoutes = require('./routes/apiRoutes/htmlRoutes');


//Express middleware
app.use(express.urlencoded({ extended: false}));


//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//Default response for any other request not found
app.use((req, res) => {
    res.status(404).end();
});








app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});


