const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Provide username"]
    },
    password: {
        type: String,
        required: [true, "Provide password"]
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema);