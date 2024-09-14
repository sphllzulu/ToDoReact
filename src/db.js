// import initSqlJs from 'sql.js';

// let db;

// export const initializeDatabase = async () => {
//   try {
//     const SQL = await initSqlJs({
//       locateFile: (file) => `/sql-wasm.wasm` // Adjust the path as necessary
//     });

//     db = new SQL.Database();

//     // Create tables if they don't exist
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       email TEXT UNIQUE,
//       password TEXT
//     )`);

//     db.run(`CREATE TABLE IF NOT EXISTS tasks (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       userId INTEGER,
//       title TEXT,
//       description TEXT,
//       priority TEXT,
//       completed BOOLEAN,
//       FOREIGN KEY (userId) REFERENCES users (id)
//     )`);

    
    

//     // Check if tables were created
//     const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
//     const tableNames = tables[0].values.flat();
    
//     console.log('Tables in database:', tableNames);

//     if (!tableNames.includes('users') || !tableNames.includes('tasks')) {
//       throw new Error('Database tables were not created correctly.');
//     }

//   } catch (error) {
//     console.error('Error initializing database:', error);
//   }
// };


// export const listUsers = () => {
//   const stmt = db.prepare('SELECT * FROM users');
//   const result = stmt.all();
//   stmt.free();
//   console.log('All Users:', result); 
//   return result;
// };


// // Sign up a new user
// export const signUpUser = (email, password) => {
//   const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)', []);
//   stmt.run([email, password]);
//   const userId = db.exec('SELECT last_insert_rowid() AS id')[0].values[0][0];
//   stmt.free();
//   return userId;
// };

// // Sign in a user
// export const signInUser = (email, password) => {
//   const stmt = db.prepare('SELECT id FROM users WHERE email = ? AND password = ?');
//   stmt.bind([email, password]);
//   const result = stmt.getAsObject();
//   stmt.free();
//   console.log('Query Result:', result);
//   if (result.id) return result.id;
//   throw new Error('Invalid email or password');
// };

// // Add a task
// export const addTask = (userId, title, description, priority, completed) => {
//   const stmt = db.prepare('INSERT INTO tasks (userId, title, description, priority, completed) VALUES (?, ?, ?, ?, ?)');
//   stmt.run([userId, title, description, priority, completed]);
//   stmt.free();
// };

// // Update a task
// export const updateTask = (id, title, description, priority, completed) => {
//   const stmt = db.prepare('UPDATE tasks SET title = ?, description = ?, priority = ?, completed = ? WHERE id = ?');
//   stmt.run([title, description, priority, completed, id]);
//   stmt.free();
// };

// // Delete a task
// export const deleteTask = (id) => {
//   const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
//   stmt.run([id]);
//   stmt.free();
// };

// // Fetch tasks for a user
// export const fetchTasks = (userId) => {
//   const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
//   stmt.bind([userId]);
//   const result = stmt.getAsObject();
//   stmt.free();
//   return result;
// };



// import initSqlJs from 'sql.js';

// let db;

// export const initializeDatabase = async () => {
//   try {
//     const SQL = await initSqlJs({
//       locateFile: (file) => `/sql-wasm.wasm` // Adjust the path as necessary
//     });

//     db = new SQL.Database();

//     // Create tables if they don't exist
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       email TEXT UNIQUE,
//       password TEXT
//     )`);

//     db.run(`CREATE TABLE IF NOT EXISTS tasks (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       userId INTEGER,
//       title TEXT,
//       description TEXT,
//       priority TEXT,
//       completed BOOLEAN,
//       FOREIGN KEY (userId) REFERENCES users (id)
//     )`);

//     // Check if tables were created
//     const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
//     const tableNames = tables[0].values.flat();
    
//     console.log('Tables in database:', tableNames);

//     if (!tableNames.includes('users') || !tableNames.includes('tasks')) {
//       throw new Error('Database tables were not created correctly.');
//     }

//   } catch (error) {
//     console.error('Error initializing database:', error);
//   }
// };

// export const listUsers = () => {
//   const stmt = db.run('SELECT * FROM users');
//   const result = stmt.all();
//   stmt.free();
//   console.log('All Users:', result); 
//   return result;
// };

// // Sign up a new user
// export const signUpUser = (email, password) => {
//   const stmt = db.run('INSERT INTO users (email, password) VALUES (?, ?)');
//   stmt.run([email, password]);
//   const userId = db.exec('SELECT last_insert_rowid() AS id')[0].values[0][0];
//   stmt.free();
//   return userId;
// };

// // Sign in a user
// export const signInUser = (email, password) => {
//   const stmt = db.run('SELECT id FROM users WHERE email = ? AND password = ?');
//   stmt.bind([email, password]);
//   const result = stmt.get();
//   stmt.free();
//   console.log('Query Result:', result);
//   if (result && result.id) return result.id;
//   throw new Error('Invalid email or password');
// };

// // Add a task
// export const addTask = (userId, title, description, priority, completed) => {
//   const stmt = db.run('INSERT INTO tasks (userId, title, description, priority, completed) VALUES (?, ?, ?, ?, ?)');
//   stmt.run([userId, title, description, priority, completed]);
//   stmt.free();
// };

// // Update a task
// export const updateTask = (id, title, description, priority, completed) => {
//   const stmt = db.run('UPDATE tasks SET title = ?, description = ?, priority = ?, completed = ? WHERE id = ?');
//   stmt.run([title, description, priority, completed, id]);
//   stmt.free();
// };

// // Delete a task
// export const deleteTask = (id) => {
//   const stmt = db.run('DELETE FROM tasks WHERE id = ?');
//   stmt.run([id]);
//   stmt.free();
// };

// // Fetch tasks for a user
// export const fetchTasks = (userId) => {
//   const stmt = db.run('SELECT * FROM tasks WHERE userId = ?');
//   stmt.bind([userId]);
//   const result = stmt.all();
//   stmt.free();
//   return result;
// };



import initSqlJs from 'sql.js';

let db;

export const initializeDatabase = async () => {
  try {
    const SQL = await initSqlJs({
      locateFile: (file) => `/sql-wasm.wasm` // Adjust the path as necessary
    });

    db = new SQL.Database();

    // Create tables if they don't exist
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      title TEXT,
      description TEXT,
      priority TEXT,
      completed BOOLEAN,
      FOREIGN KEY (userId) REFERENCES users (id)
    )`);

    // Check if tables were created
    const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
    const tableNames = tables[0].values.flat();
    
    console.log('Tables in database:', tableNames);

    if (!tableNames.includes('users') || !tableNames.includes('tasks')) {
      throw new Error('Database tables were not created correctly.');
    }

  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initializeDatabase().then(() => {
  console.log('Database initialized successfully.');
}).catch(error => {
  console.error('Error during database initialization:', error);
});

export const listUsers = () => {
  const stmt = db.prepare('SELECT * FROM users');
  const result = stmt.all();
  stmt.free();
  console.log('All Users:', result); 
  return result;
};

export const listTasksForUser = (userId) => {
  const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
  stmt.bind([userId]);
  const result = stmt.all();
  stmt.free();
  console.log(`Tasks for user ID ${userId}:`, result);
  return result;
};

// Sign up a new user
export const signUpUser = (email, password) => {
  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  stmt.run([email, password]);
  const userId = db.exec('SELECT last_insert_rowid() AS id')[0].values[0][0];
  stmt.free();
  return userId;
};

export const signInUser = async (email, password) => {
  try {
    console.log("signInUser called with:", email, password);

    // Adjust the query based on whether you are hashing passwords
    const query = `SELECT id FROM users WHERE email = ? AND password = ?`;
    const result = db.exec(query, [email, password]); // Ensure this executes correctly

    console.log("Query Result:", result);

    if (result.length === 0 || result[0].values.length === 0) {
      console.log("No user found with the provided email and password.");
      return undefined;  // Return undefined if no user is found
    }

    // Extract user ID from the result
    const user = result[0].values[0]; // Accessing values array
    const userId = user[0]; // The ID is the first element of the array

    console.log("User found:", { id: userId });

    return userId;  // Return user ID if found
  } catch (error) {
    console.error("Error in signInUser:", error);
    throw new Error("Error during sign-in.");
  }
};



// Add a task
export const addTask = (userId, title, description, priority, completed) => {
  const stmt = db.prepare('INSERT INTO tasks (userId, title, description, priority, completed) VALUES (?, ?, ?, ?, ?)');
  stmt.run([userId, title, description, priority, completed]);
  stmt.free();
};

// Update a task
export const updateTask = (id, title, description, priority, completed) => {
  const stmt = db.prepare('UPDATE tasks SET title = ?, description = ?, priority = ?, completed = ? WHERE id = ?');
  stmt.run([title, description, priority, completed, id]);
  stmt.free();
};

// Delete a task
export const deleteTask = (id) => {
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
  stmt.run([id]);
  stmt.free();
};

// Fetch tasks for a user
export const fetchTasks = (userId) => {
  const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
  stmt.bind([userId]);
  const result = stmt.all();
  stmt.free();
  return result;
};



// import initSqlJs from 'sql.js';

// let db;

// export const initializeDatabase = async () => {
//   try {
//     const SQL = await initSqlJs({
//       locateFile: (file) => `/sql-wasm.wasm` // Adjust the path as necessary
//     });

//     db = new SQL.Database();

//     // Create tables if they don't exist
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       email TEXT UNIQUE,
//       password TEXT
//     )`);

//     db.run(`CREATE TABLE IF NOT EXISTS tasks (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       userId INTEGER,
//       title TEXT,
//       description TEXT,
//       priority TEXT,
//       completed INTEGER, -- Use INTEGER for BOOLEAN values
//       FOREIGN KEY (userId) REFERENCES users (id)
//     )`);

//     // Check if tables were created
//     const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
//     const tableNames = tables[0].values.flat();
    
//     console.log('Tables in database:', tableNames);

//     if (!tableNames.includes('users') || !tableNames.includes('tasks')) {
//       throw new Error('Database tables were not created correctly.');
//     }

//   } catch (error) {
//     console.error('Error initializing database:', error);
//   }
// };

// initializeDatabase().then(() => {
//   console.log('Database initialized successfully.');
// }).catch(error => {
//   console.error('Error during database initialization:', error);
// });

// export const listUsers = () => {
//   try {
//     const stmt = db.prepare('SELECT * FROM users');
//     const result = stmt.all();
//     stmt.free();
//     console.log('All Users:', result); 
//     return result;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     return [];
//   }
// };

// export const listTasksForUser = (userId) => {
//   try {
//     const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
//     stmt.bind([userId]);
//     const result = stmt.all();
//     stmt.free();
//     console.log(`Tasks for user ID ${userId}:`, result);
//     return result;
//   } catch (error) {
//     console.error(`Error fetching tasks for user ${userId}:`, error);
//     return [];
//   }
// };

// export const signUpUser = (email, password) => {
//   try {
//     const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
//     const result = stmt.run([email, password]);
//     const userId = result.lastInsertRowid;  // Get last inserted row ID
//     stmt.free();
//     return userId;
//   } catch (error) {
//     console.error('Error signing up user:', error);
//     throw error;
//   }
// };

// export const signInUser = (email, password) => {
//   try {
//     const stmt = db.prepare('SELECT id FROM users WHERE email = ? AND password = ?');
//     stmt.bind([email, password]);
//     const result = stmt.getAsObject();
//     stmt.free();
//     console.log('Query Result:', result);
//     if (result && result.id) return result.id;
//     throw new Error('Invalid email or password');
//   } catch (error) {
//     console.error('Error signing in user:', error);
//     throw error;
//   }
// };

// export const addTask = (userId, title, description, priority, completed) => {
//   try {
//     const stmt = db.prepare('INSERT INTO tasks (userId, title, description, priority, completed) VALUES (?, ?, ?, ?, ?)');
//     stmt.run([userId, title, description, priority, completed ? 1 : 0]);  // Store BOOLEAN as 1 or 0
//     stmt.free();
//   } catch (error) {
//     console.error('Error adding task:', error);
//   }
// };

// export const updateTask = (id, title, description, priority, completed) => {
//   try {
//     const stmt = db.prepare('UPDATE tasks SET title = ?, description = ?, priority = ?, completed = ? WHERE id = ?');
//     stmt.run([title, description, priority, completed ? 1 : 0, id]);  // Store BOOLEAN as 1 or 0
//     stmt.free();
//   } catch (error) {
//     console.error('Error updating task:', error);
//   }
// };

// export const deleteTask = (id) => {
//   try {
//     const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
//     stmt.run([id]);
//     stmt.free();
//   } catch (error) {
//     console.error('Error deleting task:', error);
//   }
// };

// export const fetchTasks = (userId) => {
//   try {
//     const stmt = db.prepare('SELECT * FROM tasks WHERE userId = ?');
//     stmt.bind([userId]);
//     const result = stmt.all();
//     stmt.free();
//     return result;
//   } catch (error) {
//     console.error(`Error fetching tasks for user ${userId}:`, error);
//     return [];
//   }
// };
