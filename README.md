# To-Do List Application

## Overview

This To-Do List Application is a single-page app with three main pages: **Login**, **Registration**, and **Home**. Users can manage their to-do list items with features such as adding, editing, deleting, and searching items. The app uses `sql.js` for data storage and Material-UI for styling. Below is the link for the design: https://www.figma.com/design/3RycUoOJXc4TpMT2XCr34C/Untitled?node-id=0-1&t=yDPh4iIONZwQ1XyB-1. Please find attached the linl to the deployed app: https://to-do-react-git-sqljs-sipheleles-projects-aabc7221.vercel.app/

## Features

### Pages

- **Login Page**
  - Users can log in using their credentials.

- **Registration Page**
  - New users can register with the following details:
    - Username
    - Password

- **Home Page**
  - Displays the to-do list items.
  - Allows users to manage their tasks with the following features:
    - **Search Function**: Search for items by keyword.
    - **Add Function**: Add new items with:
      - Task Description
      - Priority (High, Medium, Low)
    - **Delete Function**: Remove existing items.
    - **Update Function**: Edit existing items.
    - **Priority Colors**: 
      - Red for High
      - Yellow for Medium
      - Green for Low

## Technical Requirements

- **CRUD Operations**: Implement Create, Read, Update, and Delete operations for managing to-do list items.
- **Data Storage**: Use `sql.js` to handle user information and to-do list items.
- **Responsiveness**: Ensure the application is responsive and user-friendly across various devices.
- **Validation**: Include proper validation for input fields to prevent errors.
- **Authentication & Authorization**: Protect user data with authentication and authorization mechanisms.
- **Styling**: Utilize Material-UI to enhance the application's appearance and user experience.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sphllzulu/ToDoReact.git
   cd ToDoReact

2. **Install dependancies**

   ```bash
   npm install

3. **Run the project**

   ```bash
   npm run dev

## Usage
### Registration

Navigate to the registration page.
Enter your username and password.
Submit the form to create a new account.

### Login
Go to the login page.
Enter your credentials.
Submit the form to log in.

## Manage To-Do List
Search: Use the search bar to find specific tasks.
Add: Click the add button and fill in the task details.
Edit: Click the edit icon next to a task to modify its details.
Delete: Click the delete icon next to a task to remove it.
View Priorities: Tasks are color-coded by priority.   
