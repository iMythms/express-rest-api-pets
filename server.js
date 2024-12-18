const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT

const petRouter = require('./controllers/pets')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

// Routes go here
app.use('/pets', petRouter)

app.listen(PORT, () => {
	console.log(`Running on localhost:${PORT}`)
})
