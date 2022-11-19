const MONGOOSE = require('mongoose');

// Defining Schema into Model
const userSchema =  MONGOOSE.Schema({
    first_name : {type: String, required: true, trim: true},
    last_name : {type: String, required: true, trim: true},
    age: {type: Number, required: true, trim: true},
    username : {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    role: {type: String, required: true, trim: true},
    mobile_number : {type: Number, required: true, trim: true},
    email : {type: String, required: true, trim: true},
    password : {type: String, required: true, trim: true},
    registration_date : {type: Date, default: Date.now}, 
});

// Compiling Schema into Model
module.exports = MONGOOSE.model('user', userSchema);