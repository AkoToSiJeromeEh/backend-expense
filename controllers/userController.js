const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/userModel')


//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        res.status(404)
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({username})
    if(userAvailable){
        res.status(400)
        throw new Error("Username already taken")
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        password: hashedPassword
    })

    console.log(`user created ${user}`)

    if(user){
        res.status(201).json({ username: user.username, password: user.password})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: "Register user"})
})


//@desc Register user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async(req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        res.status(400)
        throw new Error("All fields are required")
    }

    const user = await User.findOne({username})

    //compare password with hashedPassword
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({message: 'Pwet'})
    }else{
        res.status(401)
        throw new Error("Username or password is not valid")
    }

    res.json({message: "Login the user"})
})


//@desc Register user
//@route POST /api/users/register
//@access public
const currentUser = asyncHandler(async(req, res)=>{
    res.json(req.user)
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}

