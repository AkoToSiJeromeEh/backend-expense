const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    income: {
        type: Number,
        required: [true, 'Add the amount for income']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Income', incomeSchema)