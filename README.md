Please click this link to see the design: https://drive.google.com/file/d/1WTH8KrsuTGMPzIx0K203wmf1Vu7R3Wox/view?usp=sharing

#Introduction
This is a simple yet powerful To-Do List application built with React and Vite. It allows users to register, log in, and manage their to-do list items with features such as adding, updating, deleting, and searching tasks. User data and tasks are stored in an SQLite database.

#Features
User Authentication: Users can register and log in with their credentials.
To-Do List Management: Users can add, edit, delete, and search to-do list items.
Priority Indication: Task priorities are color-coded for easy identification.
CRUD Operations: Full support for creating, reading, updating, and deleting tasks.
Responsive Design: The application is responsive and user-friendly.
Material UI Integration: Material UI is used for a modern and visually appealing interface.
Pages
#Login Page
Users can log in with their username and password.

#Registration Page
New users can register by providing a username and password.

#Home Page
Displays the to-do list items and allows users to:

Search for items by keyword.
Add new items with a task description and priority.
Edit existing items.
Delete items.

#Setup and Installation
#Prerequisites
Node.js (>=14.x)
npm or yarn

Installation Steps
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/react-vite-todo.git
cd react-vite-todo
Install Dependencies

bash
Copy code
npm install
# or
yarn install
Setup SQLite Database

Ensure SQLite is installed on your system.
Run the provided SQL script to create the necessary tables (users and tasks).
sql
Copy code
-- create_db.sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  description TEXT,
  priority TEXT,
  completed BOOLEAN,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
Start the Backend Server
node server.js
Start the Frontend Development Server

npm run dev
# or
yarn dev

#Usage
Registration
Go to the registration page and create a new account.
Login
Log in using your registered credentials.
Home Page
Manage your to-do list items: add, edit, delete, and search tasks.
Technologies Used
Frontend:
React
Vite
Material UI

Backend:
Node.js
Express
SQLite

#Important Notes
Ensure that the backend server is running on http://localhost:3001 as expected.
Modify the backend server configuration if needed to match your environment setup.
Store sensitive information securely and avoid hardcoding secrets in your codebase.

#Acknowledgements
This project was created using React and Vite.
UI components are styled with Material UI.
