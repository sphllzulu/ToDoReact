Please click this link to see the design: https://www.figma.com/design/3RycUoOJXc4TpMT2XCr34C/Untitled?node-id=0-1&t=gnjZ72AjLqOJ5xkQ-1

# Three-Page To-Do List App

This is a simple to-do list application with three main pages: **Login**, **Registration**, and **Home**. The application allows users to register, log in, and manage their to-do lists. It uses **SQLite** for data storage and **Material UI** for styling, providing a modern, responsive user interface.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Database](#database)
- [CRUD Operations](#crud-operations)
- [UI/UX](#uiux)


---

## Features

### Pages

1. **Login Page**
   - Users can log in using their credentials (username and password).

2. **Registration Page**
   - New users can register by providing a username and password.
   - User information is securely stored in an SQLite database.

3. **Home Page**
   - Displays the user’s to-do list items.
   - Users can perform the following actions on their to-do list:
     - **Search**: Search for tasks by keyword.
     - **Add**: Add new tasks to the to-do list with a description and priority.
     - **Update**: Edit existing tasks.
     - **Delete**: Remove tasks from the list.

### To-Do List Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Priority Levels**: Users can assign a priority (High, Medium, Low) to tasks, represented by different colours:
  - High (Red)
  - Medium (Yellow)
  - Low (Green)
- **Search Functionality**: Users can search through tasks using keywords.

---

## Technologies

- **Frontend**: ReactJS, Material-UI for styling
- **Backend**: SQLite for database management
- **State Management**: React Context or Redux (optional, based on project size)
- **Validation**: Form validation for login, registration, and to-do inputs

---

## Installation

### Prerequisites

- **Node.js** (for running the React application)
- **SQLite** (for managing the database)

### Steps

1. Clone the repository:

   ```bash
   https://github.com/sphllzulu/ToDoReact.git
   cd ToDoReact

2. Install the dependencies:

   ```bash
   npm install
   
3. Start the project by running server and project at the same time:

   ```bash
   npm start


## Usage
Login & Registration
Login: Users can log in with their registered credentials.
Registration: New users must provide a unique username and password to register.
To-Do List Management
Add Tasks: Users can add tasks with a description and priority level (High, Medium, Low).
Search Tasks: A search bar allows users to filter tasks by keywords.
Edit Tasks: Users can update the description and priority of existing tasks.
Delete Tasks: Users can remove tasks from their to-do list.
Database
The app uses SQLite as its database to manage user and task data. Here are the key details stored in the database:

## User Information
Username
Password (stored securely)
Task Information

## Task Description
Priority (High, Medium, Low)
Associated user (to ensure each user can only see their own tasks)
CRUD Operations
The app supports full CRUD functionality for managing the to-do list:
Create: Users can add new tasks with a description and priority level.
Read: Tasks are displayed on the home page, with a search function to filter them.
Update: Users can edit existing tasks to change their description or priority.
Delete: Users can delete tasks they no longer need.

## UI/UX
Material UI: The app uses Material UI components for a clean and modern user interface.
Priority Colours: Tasks are colour-coded by priority to provide a visual representation:
Red: High priority
Yellow: Medium priority
Green: Low priority
Responsive Design: The app is fully responsive and works on different screen sizes, including mobile devices.
Security
User Authentication: Users must log in with valid credentials to access their to-do list.
Authorisation: Only the logged-in user can access their own tasks.
Validation: Input fields for login, registration, and to-do items are properly validated to prevent errors and bad data.


   
