// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './ToDoList.css';
// import Header from './Header';

// const ToDoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     priority: '',
//     completed: false
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = () => {
//     if (editIndex !== null) {
//       const updatedTasks = tasks.map((task, index) =>
//         index === editIndex ? formData : task
//       );
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, formData]);
//     }
//     setFormData({ title: '', description: '', priority: '', completed: false });
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchKeyword.toLowerCase())
//   );

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'High':
//         return '#FF2400';
//       case 'Medium':
//         return 'yellow';
//       case 'Low':
//         return 'green';
//       default:
//         return 'transparent';
//     }
//   };

//   return (
//     <div className="toDo">
//       <Header/>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//           padding: 3,
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}
//       >
//         <TextField
          
//           id="search"
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={searchKeyword}
//           onChange={handleSearch}
//         />
//         <TextField
//           id="title"
//           name="title"
//           label="Title"
//           variant="outlined"
//           fullWidth
//           value={formData.title}
//           onChange={handleInputChange}
//         />
//         <TextField
//           id="description"
//           name="description"
//           label="Description"
//           variant="outlined"
//           fullWidth
//           value={formData.description}
//           onChange={handleInputChange}
//         />
//         <FormControl fullWidth>
//           <InputLabel id="priority-label">Priority</InputLabel>
//           <Select
//             labelId="priority-label"
//             id="priority"
//             name="priority"
//             value={formData.priority}
//             label="Priority"
//             onChange={handleInputChange}
//           >
//             <MenuItem value={'High'}>High</MenuItem>
//             <MenuItem value={'Medium'}>Medium</MenuItem>
//             <MenuItem value={'Low'}>Low</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="outlined" sx={{ width: '30%' }} onClick={handleAddTask}>
//           {editIndex !== null ? 'Update' : 'Add'}
//         </Button>
//       </Box>
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
//           <Box
//             key={index}
//             className={`task-box ${task.completed ? 'completed' : ''}`}
//             sx={{
//               backgroundColor : getPriorityColor(task.priority),
//               padding: 2,
//               marginBottom: 2,
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderRadius: 1,
//               minHeight: '50px',
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Checkbox
//                 checked={task.completed}
//                 onChange={() => handleCheckboxChange(index)}
//               />
//               <Box  >
//                 <h3>{task.title}</h3>
//                 <p className="task-description">{task.description}</p>
//                 <p className="task-priority">Priority: {task.priority}</p>
//               </Box>
//             </Box>
//             <Box >
//               <Button onClick={() => handleEditTask(index)}><EditIcon /></Button>
//               <Button onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default ToDoList;



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
import './ToDoList.css';
import Header from './Header';
import axios from 'axios';
import { Container } from '@mui/material';

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
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get(`http://localhost:3001/tasks?userId=${userId}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddTask = () => {
    const newTask = { ...formData, userId };

    if (editIndex !== null) {
      axios.put(`http://localhost:3001/tasks/${tasks[editIndex].id}`, newTask)
        .then(() => {
          fetchTasks();
          setEditIndex(null);
        })
        .catch(error => {
          console.error('There was an error updating the task!', error);
        });
    } else {
      axios.post('http://localhost:3001/tasks', newTask)
        .then(() => {
          fetchTasks();
        })
        .catch(error => {
          console.error('There was an error adding the task!', error);
        });
    }

    setFormData({ title: '', description: '', priority: '', completed: false });
  };

  const handleEditTask = (index) => {
    setFormData(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    axios.delete(`http://localhost:3001/tasks/${tasks[index].id}`)
      .then(() => {
        fetchTasks();
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    axios.put(`http://localhost:3001/tasks/${tasks[index].id}`, updatedTask)
      .then(() => {
        fetchTasks();
      })
      .catch(error => {
        console.error('There was an error updating the task status!', error);
      });
  };

  const filteredTasks = tasks.filter(
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
      <Header/>
      <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          
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
        <Button variant="outlined" sx={{ border:'1px solid teal',color:'teal',width:'50px' }} onClick={handleAddTask}>
          {editIndex !== null ? 'Update' : 'Add'}
        </Button>
      </Box>
      </Container>
      <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
        {filteredTasks.map((task, index) => (
          <Container>
          <Box
            key={index}
            className={`task-box ${task.completed ? 'completed' : ''}`}
            sx={{
              backgroundColor : getPriorityColor(task.priority),
              padding: 2,
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 1,
              minHeight: '50px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <Box  >
                <h3>{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <p className="task-priority">Priority: {task.priority}</p>
              </Box>
            </Box>
            <Box >
              <Button onClick={() => handleEditTask(index)}><EditIcon /></Button>
              <Button onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
            </Box>
          </Box>
          </Container>
        ))}
      </Box>
      
    </div>
  );
};

export default ToDoList;
