import { Express, Request, Response } from "express"
import { createUserHandler, deleteUserHandler, getAllUserHandler, getUserHandler, updateUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import requireUser from "./middleware/requireUser";
function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => {
		res.status(200).send("app is healthy");
	})

	/**
	* @swagger
	* tags:
	*   name: User
	*   description: User management endpoint
		*/

	/**
	* @swagger
	*   /api/users:
	*      post:
	*       summary: Create a new user
	*       tags: [User]
	*       requestBody:
	*         required: true
	*         content:
	*           application/json:
	*             schema:
	*               $ref: '#/components/schemas/CreateUserInput'
	*       responses:
	*        "201":
	*          description: The created user
	*          contents:
	*            application/json:
	*              schema:
	*                type:
	*                  $ref: '#/components/schemas/User'
	*          $ref: '#/components/responses/201'
	*        "401":
	*          $ref: '#/components/responses/409'
	*        "409":
	*          $ref: '#/components/responses/409'
	*        "400":
	*          $ref: '#/components/responses/400'
	*        "500":
	*          $ref: '#/components/responses/500'
	*/

	app.post("/api/users", validateResource(createUserSchema), createUserHandler);

	/**
	* @swagger
	*   /api/user:
	*      post:
	*       summary: get a user
	*       tags: [User]
	*       requestBody:
	*         required: true
	*         content:
	*           application/json:
	*            schema:
	*              $ref: '#/components/schemas/GetUserInput'
	*       responses:
	*        "200":
	*          $ref: '#/components/schemas/User'
	*        "401":
	*          $ref: '#/components/responses/409'
	*        "400":
	*          $ref: '#/components/responses/400'
	*        "403":
	*          $ref: '#/components/responses/403'
	*        "409":
	*          $ref: '#/components/responses/409'
	*        "500":
	*          $ref: '#/components/responses/500'
	*/

	app.post("/api/user", getUserHandler);


}

export default routes;
