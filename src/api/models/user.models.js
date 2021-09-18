const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		admin: {
			type: Boolean,
			default: false,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

userSchema.statics.encrypt = async function (password) {
	const hash = await bcrypt.hash(password, 10);
	return hash;
};

userSchema.statics.compare = async function (plainPassword, hash) {
	const isValid = await bcrypt.compare(plainPassword, hash);
	return isValid;
};

module.exports = model('user', userSchema);
