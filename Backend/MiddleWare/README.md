# User & Task CRUD API

A REST API built with Express.js demonstrating full CRUD operations,
custom middleware, and request validation.

## Features
- Full CRUD for Users and Tasks (GET, POST, PUT, PATCH, DELETE)
- Custom middleware: request logging, request counter
- Input validation middleware
- Error handling middleware
- Routes organized with express.Router()

## Tech Stack
Node.js, Express.js, Postman (for testing)

## Endpoints — Users
| Method | Route | Description |
|---|---|---|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get one user |
| POST | /api/users | Create a user |
| PUT | /api/users/:id | Replace a user |
| PATCH | /api/users/:id | Update part of a user |
| DELETE | /api/users/:id | Delete a user |

## How to run
\`\`\`bash
npm install
npm run dev
\`\`\`