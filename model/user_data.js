var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    email: {
        type: String
    },
    date: {
        type: String
    },
    feeling: {
        type: String,
    },

})
var Users = module.exports = mongoose.model('users', userSchema);