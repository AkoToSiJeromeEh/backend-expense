const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    expense: {
        type: Number,
        required: [true, 'Add the amount for expense']
    },
    category: {
        type: String,
        required: [true, 'Add the category for expense']
    },
    date: {
        type: Date,
        default: Date.now(),
        required: [true, 'Add the date for expense']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Expense', expenseSchema)