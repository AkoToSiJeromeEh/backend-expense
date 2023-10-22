const asyncHandler = require('express-async-handler')
const Income = require('../model/incomeModel')

//@desc Get all income
//@route GET /api/incomes
//@access private
const getIncome = asyncHandler(async(req, res)=>{
    const reminder = await Income.find()
    res.status(200).json(reminder)
})



//@desc create income
//@route GET /api/incomes/createIncome/:id
//@access private
const createIncome = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const {income} = req.body;
    if(!income){
        res.status(400);
        throw new Error("All fields are required")
    }

    const userIncome = await Income.create({
        income,
    })
    res.status(201).json({userIncome})
})



//@desc update income
//@route GET /api/incomes/updateIncome/:id
//@access private
const updateIncome = asyncHandler(async(req, res)=>{
    const income = await Income.findById(req.params.id)
    if(!income){
        res.status(404)
        throw new Error("Reminder not found")
    }

    const updatedIncome = await Income.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedIncome)
})



module.exports = { 
    getIncome,
    createIncome,
    updateIncome
}


