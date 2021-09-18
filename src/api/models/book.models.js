const { Schema, model } = require('mongoose');


const bookSchema = new Schema(
	{
		author: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
		puntuation: {
			type: Number,
			default: 0,
		},
	},
	{
		versionKey: false,
		timestamp: true,
	}
);
module.exports = model("book", bookSchema)