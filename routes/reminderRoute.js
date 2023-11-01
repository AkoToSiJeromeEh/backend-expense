const express = require('express');
const router = express.Router();
const {
    getReminders,
    createReminder,
    getSingleReminder,
    updateReminder,
    deleteReminder
} = require('../controllers/reminderController')

const validateToken = require('../middleware/verifyTokenHandler')

router.use(validateToken)

// get all reminders
router.route('/').get(getReminders)

// post reminder
router.route('/createReminder').post(createReminder)

// single reminder
router.route('/singleReminder/:id').get(getSingleReminder)

// update reminder
router.route('/updateReminder/:id').patch(updateReminder)

// delete reminder
router.route('/deleteReminder/:id').delete(deleteReminder)

module.exports = router;

