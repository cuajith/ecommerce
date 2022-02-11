const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRouter = require('./userRouter')
const cors = require('cors')
const morgan = require('morgan')

mongoose.connect("mongodb+srv://ajith080:mongoatlas@cluster0.62w7s.mongodb.net/User?retryWrites=true&w=majority", 
()=>console.log("Database Connected"))

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api', userRouter)

app.listen(4000, ()=>console.log("server started"))


