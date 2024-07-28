


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// let users = [];

// app.post('/signup', (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   users.push({ firstName, lastName, email, password });
//   res.status(200).json({ message: 'User signed up successfully' });
// });

// app.post('/signin', (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find(user => user.email === email && user.password === password);
//   if (user) {
//     res.status(200).json({ message: 'User signed in successfully' });
//   } else {
//     res.status(401).json({ message: 'Invalid email or password' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('todo.db');

// Initialize the database
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    description TEXT,
    priority TEXT,
    completed INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
});

// User sign-up endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const stmt = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");
  stmt.run(email, password, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'User signed up successfully', userId: this.lastID });
  });
  stmt.finalize();
});

// User sign-in endpoint

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT id FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(200).json({ message: 'User signed in successfully', userId: row.id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// Get tasks for a user
app.get('/tasks', (req, res) => {
  const userId = req.query.userId;
  db.all("SELECT * FROM tasks WHERE user_id = ?", [userId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { userId, title, description, priority, completed } = req.body;
  const stmt = db.prepare("INSERT INTO tasks (user_id, title, description, priority, completed) VALUES (?, ?, ?, ?, ?)");
  stmt.run(userId, title, description, priority, completed ? 1 : 0, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Task added successfully', taskId: this.lastID });
  });
  stmt.finalize();
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const { title, description, priority, completed } = req.body;
  const stmt = db.prepare("UPDATE tasks SET title = ?, description = ?, priority = ?, completed = ? WHERE id = ?");
  stmt.run(title, description, priority, completed ? 1 : 0, req.params.id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Task updated successfully' });
  });
  stmt.finalize();
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const stmt = db.prepare("DELETE FROM tasks WHERE id = ?");
  stmt.run(req.params.id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  });
  stmt.finalize();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


