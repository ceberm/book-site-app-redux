const express = require('express');
const bodyParser = require('body-parser');

// Require Notes routes
const Routes = require('./config/routes/book.routes.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(Routes)

// Configuring the database
const dbConfig = require('./config/database.config.js');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// listen for requests
app.listen(dbConfig.serverport, () => {
    console.log("Server is listening on port " + dbConfig.serverport);
});


// Connecting to the database
mongoose.connect('mongodb://localhost:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the book database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});