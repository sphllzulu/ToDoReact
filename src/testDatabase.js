// testDatabase.js
import { initializeDatabase, signUpUser, addTask, listUsers, listTasksForUser } from './db';

initializeDatabase().then(() => {
  // Sign up a user
  const userId = signUpUser('test@example.com', 'password123');
  console.log(`User ID: ${userId}`);

  // Add tasks for the user
  addTask(userId, 'Task 1', 'Description for task 1', 'High', false);
  addTask(userId, 'Task 2', 'Description for task 2', 'Low', true);

  // List users
  const users = listUsers();
  console.log('Users:', users);

  // List tasks for the user
  const tasks = listTasksForUser(userId);
  console.log('Tasks:', tasks);
});
