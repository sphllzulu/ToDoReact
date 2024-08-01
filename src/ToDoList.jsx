// import React, { useEffect, useState } from 'react';
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
// import axios from 'axios';


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
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = () => {
//     axios.get(`http://localhost:3001/tasks?userId=${userId}`)
//       .then(response => {
//         setTasks(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the tasks!', error);
//       });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = () => {
//     const newTask = { ...formData, userId };

//     if (editIndex !== null) {
//       axios.put(`http://localhost:3001/tasks/${tasks[editIndex].id}`, newTask)
//         .then(() => {
//           fetchTasks();
//           setEditIndex(null);
//         })
//         .catch(error => {
//           console.error('There was an error updating the task!', error);
//         });
//     } else {
//       axios.post('http://localhost:3001/tasks', newTask)
//         .then(() => {
//           fetchTasks();
//         })
//         .catch(error => {
//           console.error('There was an error adding the task!', error);
//         });
//     }

//     setFormData({ title: '', description: '', priority: '', completed: false });
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     axios.delete(`http://localhost:3001/tasks/${tasks[index].id}`)
//       .then(() => {
//         fetchTasks();
//       })
//       .catch(error => {
//         console.error('There was an error deleting the task!', error);
//       });
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
//     axios.put(`http://localhost:3001/tasks/${tasks[index].id}`, updatedTask)
//       .then(() => {
//         fetchTasks();
//       })
//       .catch(error => {
//         console.error('There was an error updating the task status!', error);
//       });
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
//         return '#FFBF00';
//       case 'Low':
//         return '#006400';
//       default:
//         return 'transparent';
//     }
//   };

//   return (
//     <div className="toDo"   style={{padding:'10px'}}>
//       <Header />
      
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             padding: 2,
//             border: '1px solid teal',
            
            
            
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}
//         >
//           <TextField
//             id="search"
//             label="Search"
//             variant="outlined"
//             fullWidth
//             value={searchKeyword}
//             onChange={handleSearch}
//           />
//           <TextField
//             id="title"
//             name="title"
//             label="Title"
//             variant="outlined"
//             fullWidth
//             value={formData.title}
//             onChange={handleInputChange}
//           />
//           <TextField
//             id="description"
//             name="description"
//             label="Description"
//             variant="outlined"
//             fullWidth
//             value={formData.description}
//             onChange={handleInputChange}
//           />
//           <FormControl fullWidth>
//             <InputLabel id="priority-label">Priority</InputLabel>
//             <Select
//               labelId="priority-label"
//               id="priority"
//               name="priority"
//               value={formData.priority}
//               label="Priority"
//               onChange={handleInputChange}
//             >
//               <MenuItem value={'High'}>High</MenuItem>
//               <MenuItem value={'Medium'}>Medium</MenuItem>
//               <MenuItem value={'Low'}>Low</MenuItem>
//             </Select>
//           </FormControl>
//           <Button variant="outlined" sx={{ border: '1px solid teal', color: 'teal', width: '50px' }} onClick={handleAddTask}>
//             {editIndex !== null ? 'Update' : 'Add'}
//           </Button>
//         </Box>
      
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
          
//             <Box
//               className={`task-box ${task.completed ? 'completed' : ''}`}
//               sx={{
//                 backgroundColor: getPriorityColor(task.priority),
//                 padding: 2,
//                 marginBottom: 1,
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderRadius: 1,
//                 minHeight: '50px',
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Checkbox
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 <Box>
//                   <h3>{task.title}</h3>
//                   <p className="task-description">{task.description}</p>
//                   <p className="task-priority">Priority: {task.priority}</p>
//                 </Box>
//               </Box>
//               <Box>
//                 <Button sx={{ color: 'lightgrey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
//                 <Button sx={{ color: 'lightgrey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//               </Box>
//             </Box>
       
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

// Get the API URL from environment variables
const apiUrl = import.meta.env.VITE_API_URL;

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
    axios.get(`${apiUrl}/tasks?userId=${userId}`) // Use environment variable
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
      axios.put(`${apiUrl}/tasks/${tasks[editIndex].id}`, newTask) // Use environment variable
        .then(() => {
          fetchTasks();
          setEditIndex(null);
        })
        .catch(error => {
          console.error('There was an error updating the task!', error);
        });
    } else {
      axios.post(`${apiUrl}/tasks`, newTask) // Use environment variable
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
    axios.delete(`${apiUrl}/tasks/${tasks[index].id}`) // Use environment variable
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
    axios.put(`${apiUrl}/tasks/${tasks[index].id}`, updatedTask) // Use environment variable
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
        return '#FF2400'; // Red for high priority
      case 'Medium':
        return '#FFBF00'; // Yellow for medium priority
      case 'Low':
        return '#006400'; // Green for low priority
      default:
        return 'transparent';
    }
  };

  return (
    <div className="toDo" style={{ padding: '10px' }}>
      <Header />
      
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          padding: 2,
          border: '1px solid teal',
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
      
      <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
        {filteredTasks.map((task, index) => (
          <Box
            key={task.id} // Add a key to help React identify elements
            className={`task-box ${task.completed ? 'completed' : ''}`}
            sx={{
              backgroundColor: getPriorityColor(task.priority),
              padding: 2,
              marginBottom: 1,
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
              <Box>
                <h3>{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <p className="task-priority">Priority: {task.priority}</p>
              </Box>
            </Box>
            <Box>
              <Button sx={{ color: 'lightgrey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
              <Button sx={{ color: 'lightgrey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ToDoList;
