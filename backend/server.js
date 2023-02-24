const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const PORT = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()

connectDB()

console.log(process.env.PORT)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to Support API'})
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))