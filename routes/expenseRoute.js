const express = require('express');
const router = express.Router();
const {
    getExpenses,
    createExpense,
    deleteExpense
} = require('../controllers/expenseController')

const validateToken = require('../middleware/verifyTokenHandler')

router.use(validateToken);

// get all Expenses
router.route('/expenses').get(getExpenses)

// post Expense
router.route('/createExpense').post(createExpense)


// delete Expense
router.route('/deleteExpense/:id').delete(deleteExpense)

module.exports = router;

