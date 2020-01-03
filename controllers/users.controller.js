const User = require('../models/user.model.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the users database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

exports.create = (req, res) => {
 // Validate request
 console.log("Server Functions Log::Listing all available users")
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    const user = new User({
        name: req.body.name,
        last_name: req.body.last_name,
        id: req.body.id,
        join_date: req.body.join_date,
        status: req.body.status
    });
    user.save()
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
    console.log("Server Functions Log::Listing all available users")
    User.find()
    .then(users =>{
        res.send(users);
    }) 
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user){
            return res.status(404).send({
                message: "User not found with id " + req.params.productId
            });
            res.send(user);
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