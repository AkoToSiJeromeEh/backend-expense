const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, 'Add the title for reminder']
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: [true, 'Add the content for reminder']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reminder', reminderSchema)