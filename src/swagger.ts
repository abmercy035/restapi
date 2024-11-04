import { AddHelpTextContext } from './../node_modules/z-schema/node_modules/commander/typings/index.d';
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "CRUD REST API",
			version: "1.0.0",
			description: "API Documentation"
		},
		servers: [
			{
				url: "http://localhost:5001",
				description: "Local server"
			}
		],
		components: {
			securitySchemes: {
				cookiesAuth: {
					type: "apiKey",
					in: "cookie",
					name: "token"
				}
			},
			schemas: {
				CreateUserInput: {
					type: "object",
					required: ["email", "password", "first_name", "last_name", "middle_name"],
					properties: {
						email: {
							type: "string",
							description: "Email of the user",
							format: "email"
						},
						password: {
							type: "string",
							description: "Password of the user",
							format: "password"
						},
						first_name: {
							type: "string",
							description: "First name of the user",
							format: "string"
						},
						last_name: {
							type: "string",
							ddescription: "Last name of the user",
							format: "string"
						},
						middle_name: {
							type: "string",
							description: "Middle name of the user",
							format: "string"
						}
					}
				},
				GetUserInput: {
					type: "object",
					required: ["email", "password"],
					properties: {
						email: {
							type: "string",
							description: "Email of the user",
							format: "email"
						},
						password: {
							type: "string",
							description: "Password of the user",
							format: "password"
						}
					}
				},
				User: {
					type: "object",
					properties: {
						email: {
							type: "string",
							description: "Email of the user",
							format: "email"
						},
						first_name: {
							type: "string",
							description: "First name of the user",
							format: "string"
						},
						last_name: {
							type: "string",
							ddescription: "Last name of the user",
							format: "string"
						},
						middle_name: {
							type: "string",
							description: "Middle name of the user",
							format: "string"
						}
					}
				}
			},
			responses: {
				200: {
					description: "OK - User found",
					contents: "application/json"
				},
				201: {
					description: "Created - User created successfully",
					contents: "application/json"
				},
				400: {
					description: "Bad Request - Invalid request",
					contents: "application/json"
				},
				401: {
					description: "Unauthorized - Invalid credentials",
					contents: "application/json",
				},
				403: {
					description: "Forbidden - Invalid credentials",
					contents: "application/json",
				},
				409: {
					description: "conflict - Duplicate user",
					contents: "application/json",
				},
				404: {
					description: "Not Found - User not found",
					contents: "application/json",
				},
				500: {
					description: "Internal Server Error - Server error",
					contents: "application/json",
				}
			}
		},
		security: [{
			cookiesAuth: []
		}]
	}
	,
	apis: ["./src/routes.ts"]
}
export default options;
