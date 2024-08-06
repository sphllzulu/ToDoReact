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

// Sign in a user
export const signInUser = (email, password) => {
  const stmt = db.prepare('SELECT id FROM users WHERE email = ? AND password = ?');
  stmt.bind([email, password]);
  const result = stmt.getAsObject();
  stmt.free();
  console.log('Query Result:', result);
  if (result && result.id) return result.id;
  throw new Error('Invalid email or password');
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
