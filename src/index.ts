import dotenv from 'dotenv';
dotenv.config();

import express from "express"
import connect from "./utils/connect"
import createServer from './utils/server';

const app = createServer();
app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).json({ done: "worked" })
})

app.listen(5001, async () => {
	await connect()
	console.log("server running")
})

export default app;
