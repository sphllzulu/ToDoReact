import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';
import Header from './Header';
import './ToDoList.css'; // Import your custom CSS

const LOCAL_STORAGE_KEY = 'tasks';
const USER_ID_KEY = 'userId'; // Key for storing the current user's ID

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    completed: false
  });
  const [editIndex, setEditIndex] = useState(null);
  const userId = localStorage.getItem(USER_ID_KEY); // Retrieve the current user's ID

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setTasks(savedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddTask = () => {
    if (!userId) {
      console.error('User not logged in. Cannot add task.');
      return;
    }

    const newTask = { ...formData, id: Date.now(), userId };

    let updatedTasks;
    if (editIndex !== null) {
      updatedTasks = tasks.map((task, index) =>
        index === editIndex ? newTask : task
      );
      setEditIndex(null);
    } else {
      updatedTasks = [...tasks, newTask];
    }

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setFormData({ title: '', description: '', priority: '', completed: false });
  };

  const handleEditTask = (index) => {
    setFormData(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredTasks = tasks
    .filter(task => task.userId === userId) // Filter tasks by user ID
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        task.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#FF2400';
      case 'Medium':
        return 'yellow';
      case 'Low':
        return 'green';
      default:
        return 'transparent';
    }
  };

  return (
    <div className="toDo">
      <Header />
      <Container>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            padding: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}
        >
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            fullWidth
            value={searchKeyword}
            onChange={handleSearch}
          />
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            value={formData.description}
            onChange={handleInputChange}
          />
          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              id="priority"
              name="priority"
              value={formData.priority}
              label="Priority"
              onChange={handleInputChange}
            >
              <MenuItem value={'High'}>High</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'Low'}>Low</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" sx={{ border: '1px solid teal', color: 'teal', width: '50px' }} onClick={handleAddTask}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </Box>
      </Container>
      <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
        {filteredTasks.map((task, index) => (
          <Container key={task.id} className="task-container">
            <Box
              className={`task-box ${task.completed ? 'completed' : ''}`}
              sx={{
                backgroundColor: getPriorityColor(task.priority),
                padding: 2,
                marginBottom: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 1,
                minHeight: '50px',
                animation: 'slideUp 0.5s ease-out',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                <Box>
                  <h3>{task.title}</h3>
                  <p className="task-description">{task.description}</p>
                  <p className="task-priority">Priority: {task.priority}</p>
                </Box>
              </Box>
              <Box>
                <Button sx={{ color: 'grey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
                <Button sx={{ color: 'grey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
              </Box>
            </Box>
          </Container>
        ))}
      </Box>
    </div>
  );
};

export default ToDoList;


