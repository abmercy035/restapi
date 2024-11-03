import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	middle_name: { type: String, required: true },
	password: { type: String, required: true },
},
	{ timestamps: true })

const UserModel = mongoose.model("User", userSchema);
export default UserModel