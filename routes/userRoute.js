const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    currentUser
}  = require('../controllers/userController')

const validateToken = require('../middleware/verifyTokenHandler')

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current', validateToken, currentUser)

module.exports = router;