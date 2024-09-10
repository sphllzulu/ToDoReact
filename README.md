Please click this link to see the design: https://drive.google.com/file/d/1WTH8KrsuTGMPzIx0K203wmf1Vu7R3Wox/view?usp=sharing

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
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

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
   git clone https://github.com/yourusername/todo-sqlite-app.git
   cd todo-sqlite-app

2. Install the dependencies:

   ```bash
   npm install
   
3. Start the project by running server and project at the same time:

   ```bash
   npm start
