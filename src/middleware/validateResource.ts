import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
	try {
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		next();
		return;
	}
	catch (e: any) {
		res.status(400).send(e.message)
		return 
	}
}

export default validateResource