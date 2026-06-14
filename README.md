# Employee Management System

A full-stack Employee Management System built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and Mongoose.

## Live Demo

Frontend: https://employee-management-system-9fb3.vercel.app

Backend API: https://employee-management-system-gfl9.onrender.com/api/employees

---

## Features

### Employee Management
- Add new employees
- View employee records
- Edit employee details
- Delete employees

### Search & Filter
- Search employees by keyword
- Instant search results

### Sorting
- Sort employees by salary (ascending/descending)

### Dashboard Statistics
- Total employee count displayed dynamically

### Responsive Design
- Desktop-friendly interface
- Mobile-responsive layout

### Database Integration
- MongoDB Atlas cloud database
- Data persistence across sessions

### Deployment
- Frontend deployed on Vercel
- Backend deployed on Render

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel
- Render

---

## Project Structure

```
employee-management-system/
│
├── backend/
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
│
└── screenshots/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/A-MOHAN-VAMSI/employee-management-system.git

cd employee-management-system
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://admin:Admin12345@cluster0.vjuzsyb.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

Start server:

```bash
npm run dev
```

---

### Frontend Setup

Open:

```text
frontend/index.html
```

using Live Server or any local web server.

---

## API Endpoints

### Get All Employees

```http
GET /api/employees
```

### Create Employee

```http
POST /api/employees
```

### Update Employee

```http
PUT /api/employees/:id
```

### Delete Employee

```http
DELETE /api/employees/:id
```

---

## Screenshots

### Dashboard Home

![Dashboard Home](employee-management-system/screenshots/Dashboard%20Home.png)

### Employee Added

![Employee Added](employee-management-system/screenshots/Employee%20Added.png)

### Edit Employee

![Edit Employee](employee-management-system/screenshots/Edit%20Employee.png)

### Search Employee

![Search Employee](employee-management-system/screenshots/Search%20Employee.png)

### Delete Confirmation

![Delete Confirmation](employee-management-system/screenshots/Delete%20Confirmation.png)

### MongoDB Atlas Collection

![MongoDB Atlas Collection](employee-management-system/screenshots/MongoDB%20Atlas%20Collection.png)

### Render Deployment

![Render Deployment](employee-management-system/screenshots/Render%20Deployment.png)

### Mobile Responsive View

![Mobile Responsive View](employee-management-system/screenshots/Mobile%20Responsive%20View.jpeg)

---

## Learning Outcomes

Through this project I learned:

- REST API development with Express.js
- MongoDB Atlas integration using Mongoose
- CRUD operations
- Frontend and backend integration
- Cloud deployment using Render and Vercel
- Responsive web design
- Git and GitHub workflow

---

## Author

A Mohan Vamsi

GitHub: https://github.com/A-MOHAN-VAMSI
LinkedIn: https://www.linkedin.com/in/akula-mohan-vamsi-445a6936a/