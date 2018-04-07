const mongoose = require('mongoose');

const SignInSchema = mongoose.Schema({
    username: String,
    class: String,
    location: String
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('SignIn', SignInSchema)