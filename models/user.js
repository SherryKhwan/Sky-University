const MONGOOSE = require('mongoose');

// Defining Schema into Model
const userSchema =  MONGOOSE.Schema({
    first_name : {type: String, required: false, trim: true},
    last_name : {type: String, required: false, trim: true},
    father_name : {type: String, required: false, trim: true},
    age: {type: String, required: false, trim: true},
    username : {type: String, required: false, trim: true},
    address: {type: String, required: false, trim: true},
    role: {type: String, required: true, trim: true},
    mobile_number : {type: Number, required: false, trim: true},
    email : {type: String, required: true, trim: true},
    password : {type: String, required: true, trim: true},
    program : {type: String, required: false, trim: true},
    registration_date : {type: Date, default: Date.now}, 
});

// Compiling Schema into Model
module.exports = MONGOOSE.model('user', userSchema);