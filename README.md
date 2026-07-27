# Student Management API

A RESTful API built using Node.js and Express.js to manage student records using an in-memory array.

---

## Features

- Get all students
- Get student by ID
- Add a student
- Update a student
- Delete a student
- Validation middleware
- Logger middleware
- Global error handler
- Search by name
- Sort students alphabetically

---

## Technologies Used

- Node.js
- Express.js
- JavaScript

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Run the project.

```bash
npm run dev
```

Server runs on

```
http://localhost:3000
```

---

## Project Structure

```
src/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── services/
│── utils/
│── app.js
│── server.js
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| POST | /students | Create student |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |

---

## Search

```
GET /students?name=rahul
```

---

## Sorting

```
GET /students?sort=name
```

---

## HTTP Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

---

## Author

Your Name
