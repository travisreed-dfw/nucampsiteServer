const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	admin: {
		type: Boolean,
		default: false,
	},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
