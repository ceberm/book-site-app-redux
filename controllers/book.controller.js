const Book = require('../models/book.model.js');

exports.create = (req, res) => {
 // Validate request
 console.log("Server Functions Log::Listing all available books")
    if(!req.body) {
        return res.status(400).send({
            message: "Book content can not be empty"
        });
    }
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        img_url: req.body.img_url,
        publish_date: req.body.publish_date,
        description: req.body.description
    });
    book.save()
    .then(data => {
        res.send(data);
        console.log("Document Added!! " + data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
    
};

exports.findAll = (req, res) => {
    console.log("Server Functions Log::Listing all available books")
    Book.find()
    .then(books =>{
        res.send(books);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

exports.findOne = (req, res) => {
    Books.findById(req.params.bookId)
    .then(book => {
        if(!book){
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
            res.send(book);
        }
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.productId
        });
    });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};