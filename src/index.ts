import express from "express"


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).json({ done: "worked" })
})




app.listen(5001, ()=>{
	console.log("server running")
})

export default app
