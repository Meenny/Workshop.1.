var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/My_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

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
    }
})
var User = module.exports = mongoose.model('user_db', userSchema);