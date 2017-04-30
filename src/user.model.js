const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : String 
});

// User 
const User = mongoose.model('user', UserSchema); //Mongoose ask MongoDB create a Collection

module.exports = User; // Reference