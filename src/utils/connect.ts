import mongoose from "mongoose";
async function connect() {
	const dbUri = process.env.dbUri
	try {
		await mongoose.connect(dbUri);
		console.log("Connected to DB")
	} catch (error) {
		console.log("Could not connect to DB")
		process.exit(1)
	}
}

export default connect;
