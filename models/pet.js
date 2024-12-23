const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		min: 0,
	},
	breed: String,
	image: String,
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet
