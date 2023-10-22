const asyncHandler = require('express-async-handler')
const Expense = require('../model/expenseModel')

//@desc Get all expenses
//@route GET /api/expenses
//@access public
const getExpenses = asyncHandler(async(req, res)=>{
    const expenses = await Expense.find()
    res.status(200).json(expenses)
})


//@desc create expense
//@route GET /api/expenses/createExpense
//@access public
const createExpense = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const {expense, category, date} = req.body;
    if(!expense || !category || !date){
        res.status(400);
        throw new Error("All fields are required")
    }

    const expenses = await Expense.create({
        expense, 
        category, 
        date,
    })
    res.status(201).json({expenses})
})



//@desc delete expense
//@route GET /api/expenses/deleteExpense
//@access public
const deleteExpense = asyncHandler(async(req, res)=>{
    const expenses = await Expense.findById(req.params.id)
    if(!expenses){
        res.status(404)
        throw new Error("Expense not found")
    }

    
    await Expense.deleteOne({_id: req.params.id})
    res.status(200).json(expenses)
})



module.exports = { 
    getExpenses,
    createExpense,
    deleteExpense
}


