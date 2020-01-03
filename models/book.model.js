const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    author: String,
    img_url: String,
    publish_date: Date,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Books', BookSchema);