

var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    username:String,
    password:String
}, {collection : 'user'});
var user = mongoose.model('user', schema);
exports = user;
