# TaskTrek

please find attached the design: https://www.figma.com/design/3RycUoOJXc4TpMT2XCr34C/Untitled?node-id=0-1&t=lNUFE09nWtafiGNm-1

TaskTrek is a to-do list application that allows users to manage their tasks efficiently. The application features user authentication and a simple, intuitive interface for managing to-do items.

##Features
Pages
###Login Page
Users can log in with their credentials.
###Registration Page
New users can register with:
Username
Password

Home Page
Displays the to-do list items.
To-Do List Features
Search Function

Users can search for items by keyword.
Add Function

Users can add a new item to the to-do list with:
Task Description
Priority (High, Medium, Low)
Delete Function

Users can delete existing items from the to-do list.
Update Function

Users can edit existing items on the to-do list.
Priority Colours

Priority levels are represented by colours:
Red for High
Yellow for Medium
Green for Low
General Requirements
CRUD Operations

Implement Create, Read, Update, and Delete operations for to-do list items.
Data Storage

Uses JSON Server to store user information and to-do list items.
Responsiveness

Ensure the application is responsive and user-friendly.
Validation

Implement proper validation for input fields to prevent errors.
Authentication & Authorization

Implement user authentication and authorization to protect user data.
UI Design
Integrate Material UI to enhance the application's appearance and usability.
Setup
Prerequisites
Node.js and npm installed
###Installation
Clone the Repository
git clone --branch json-server https://github.com/sphllzulu/ToDoReact.git
cd tasktrek
###Install Dependencies
npm install
Set Up JSON Server

Install JSON Server globally:
npm install -g json-server
npm start
The application will be available at http://localhost:5173. This will start both the application and the server at the same time

Usage
Register a New User
Navigate to the registration page and fill in the username and password fields.
Log In
Use the credentials from registration to log in.
Manage To-Do List
On the home page, you can add, update, search, and delete to-do list items.
Priorities

Visual representation of priority levels is provided by colours.
