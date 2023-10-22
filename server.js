const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')

// const mysql = require('mysql')
const connectDb = require('./config/dbConnection')
const server = express()
const cors = require('cors')


connectDb()
server.use(cors())
server.use(express.json()) //passer - to be able to receive the data from the client into the server




// const reminderRoute = require('../server/routes/reminder-route')
//middleware
server.use("/api/users", require('./routes/userRoute'))
server.use("/api/incomes", require('./routes/incomeRoute'))
server.use("/api/expenses", require('./routes/expenseRoute'))
server.use("/api/reminders", require('./routes/reminderRoute'))
server.use(errorHandler)



server.get('/', (req, res) => {
    res.status(200).json({message: 'link to the client'})
    console.log('link to the client')
})


//port listening
const port = 3000;
server.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})