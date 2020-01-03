const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    last_name: String,
    id: String,
    join_date: Date,
    status: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);