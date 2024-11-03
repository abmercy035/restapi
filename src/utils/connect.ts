import mongoose from "mongoose";
async function connect() {
	const MONGODBURL = process.env.MONGODBURL
	try {
		await mongoose.connect(MONGODBURL);
		console.log("Connected to DB")
	} catch (error) {
		console.log("Could not connect to DB")
		process.exit(1)
	}
}

export default connect;
