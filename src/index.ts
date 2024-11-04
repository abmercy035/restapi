import dotenv from 'dotenv';
dotenv.config();

import express from "express"
import connect from "./utils/connect"
import createServer from './utils/server';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import { swaggerJSDoc } from 'swa';
import config from "config"
import options from "./swagger";

const port = 5001

const app = createServer();
app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).json({ done: "worked" })
})



const specs = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, async () => {
	await connect();
	console.log(`app is running on http://localhost:${port}`);
});

export default app;
