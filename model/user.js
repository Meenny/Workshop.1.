var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    text: {
        type: String
    },
    phonenumber: {
        type: String,
    },

})
var User = module.exports = mongoose.model('user_db', userSchema);