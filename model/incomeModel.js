const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({

    income: {
        type: Number,
        required: [true, 'Add the amount for income']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Income', incomeSchema)