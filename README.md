# To-Do List Application

## Overview

This To-Do List application is a comprehensive task management system with user authentication. It features a clean, responsive interface built with Material UI, and uses json-server for data storage, making it easy to set up and ideal for rapid prototyping and development.

## Features

### User Authentication
- **Login Page**: Existing users can securely log in.
- **Registration Page**: New users can create an account with a username and password.

### Home Page
The main interface where users interact with their to-do list.

#### To-Do List Features
1. **Search Function**: 
   - Users can search for tasks using keywords.

2. **Add Function**: 
   - Create new tasks with the following details:
     - Task Description
     - Priority (High, Medium, Low)

3. **Delete Function**: 
   - Remove existing tasks from the list.

4. **Update Function**: 
   - Edit existing tasks, including description and priority.

5. **Priority Visualization**: 
   - Color-coded priorities for easy identification:
     - Red: High priority
     - Yellow: Medium priority
     - Green: Low priority

## Technical Specifications

- **Frontend**: React.js with Material UI for a responsive and modern interface.
- **Backend**: json-server for a full fake REST API
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication (simulated with json-server)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/sphllzulu/ToDoReact.git
   ```

2. Navigate to the project directory:
   ```
   cd ToDoReact
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Install json-server globally:
   ```
   npm install -g json-server
   ```

5. Create a `db.json` file in the root directory with initial data:
   ```json
   {
     "users": [],
     "tasks": []
   }
   ```



6. In a new terminal, start the React application and the server concurrently:
   ```
   npm start
   ```

7. Open your browser and visit `http://localhost:5173`

## Usage

1. **Register/Login**: Start by creating an account or logging in if you already have one.
2. **Add Tasks**: Click the "Add Task" button to create a new to-do item.
3. **Manage Tasks**: Use the intuitive interface to update, delete, or mark tasks as complete.
4. **Search**: Utilize the search bar to find specific tasks quickly.
5. **Priority Management**: Assign and update priorities to keep track of important tasks.

## API Endpoints

json-server provides a full fake REST API. Here are the main endpoints:

- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a single task
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update a task
- `DELETE /tasks/:id`: Delete a task
- `GET /users`: Get all users
- `POST /users`: Create a new user

For more information on using json-server, refer to the [json-server documentation](https://github.com/typicode/json-server).



