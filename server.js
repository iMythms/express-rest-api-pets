const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const B_PORT = process.env.BACK_END_PORT
const F_PORT = process.env.FRONT_END_PORT

const petRouter = require('./controllers/pets')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())
app.use(cors({ origin: `http://localhost:${F_PORT}` }))

// Routes go here
app.use('/pets', petRouter)

app.listen(B_PORT, () => {
	console.log(`Running on http://localhost:${B_PORT}`)
})
