
const cors =require('cors')
const express = require('express')
const connectDb = require('./config/database')
const router = require('./config/routes')
// const {userRouter}=require('./app/controllers/usercontroller')


const app = express()
const port = 3020

// connect to mongo database
connectDb() 
app.use(cors())
// express to parse json
app.use(express.json())
app.use('/', router)

// app.use('/users',router)
app.listen(port, () => {
    console.log('listening on port', port)
})