const express = require('express');
const router = express.Router();
const books = require('./../../controllers/book.controller.js');
const users = require('./../../controllers/users.controller.js');


var bodyParser = require('body-parser').json();

// define a simple route
router.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
    // Create a new Book
    router.post('/books',bodyParser, books.create);

    // Retrieve all Books
    router.get('/books', books.findAll);

    router.post('/users',bodyParser, users.create);

    // Retrieve all Books
    router.get('/users', users.findAll);

    // Retrieve a single Book with bookId
    router.get('/books/:bookId', books.findOne);

    // Update a Book with bookId
    router.put('/books/:bookId', books.update);

    // Delete a Book with bookId
    router.delete('/books/:bookId', books.delete);

module.exports = router