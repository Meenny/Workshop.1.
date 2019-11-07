var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/My_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

var userSchema = mongoose.Schema({
    date: {
        type: String
    },
    email: {
        type: String
    },
    feeling: {
        type: String
    }

})
var Users = module.exports = mongoose.model('users', userSchema);