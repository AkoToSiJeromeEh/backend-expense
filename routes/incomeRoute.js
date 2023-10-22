const express = require('express');
const router = express.Router();
const {
    getIncome,
    createIncome,
    updateIncome
} = require('../controllers/incomeController')




// get all income
router.route('/').get(getIncome)

// post income
router.route('/createIncome').post(createIncome)


// update income
router.route('/updateIncome/:id').patch(updateIncome)


module.exports = router;

