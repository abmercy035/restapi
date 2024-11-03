import { Express, Request, Response } from "express"
import { createUserSchema } from "./schema/user.schema";
import validateResource from "./middleware/validateResource";
import { createUserHandler, getUserHandler } from "./controller/user.controller";
function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => {
		res.sendStatus(200)
	})

	app.post("/api/users", validateResource(createUserSchema), createUserHandler);
	app.get("/api/user", getUserHandler);
}



export default routes;