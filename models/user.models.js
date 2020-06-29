const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var userSchema=Schema({
    PhoneId: {type:String,required:true},
    latitude: {type:String,required:true},
    longitude: {type:String,required:true},
    date: { type: Date, required: true }
});

var user = mongoose.model('userSchema', userSchema, 'userData');
module.exports =user;