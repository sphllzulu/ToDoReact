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


const LOCAL_STORAGE_KEY = 'tasks';

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

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setTasks(savedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  };

  const fetchTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setTasks(savedTasks);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddTask = () => {
    const newTask = { ...formData, id: Date.now() };

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
            padding:2,
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
          <Container key={task.id}>
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
                  <p className="task-priority"  sx={{display:'none'}} >Priority: {task.priority}</p>
                </Box>
              </Box>
              <Box>
                <Button sx={{color:'grey'}} onClick={() => handleEditTask(index)}><EditIcon /></Button>
                <Button sx={{color:'grey'}} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
              </Box>
            </Box>
          </Container>
        ))}
      </Box>
    </div>
  );
};

export default ToDoList;


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
// import { Container } from '@mui/material';
// import Header from './Header';
// import { initializeDatabase, fetchTasks, addTask, updateTask, deleteTask } from './db'; // Import database functions

// const LOCAL_STORAGE_KEY = 'userId';

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

//   useEffect(() => {
//     const userId = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (userId) {
//       initializeDatabase().then(() => {
//         const userTasks = fetchTasks(userId);
//         setTasks(userTasks);
//       });
//     }
//   }, []);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = () => {
//     const userId = localStorage.getItem(LOCAL_STORAGE_KEY);
//     const newTask = { ...formData };

//     if (editIndex !== null) {
//       const taskId = tasks[editIndex].id;
//       updateTask(taskId, newTask.title, newTask.description, newTask.priority, newTask.completed);
//       setEditIndex(null);
//     } else {
//       addTask(userId, newTask.title, newTask.description, newTask.priority, newTask.completed);
//     }

//     const updatedTasks = fetchTasks(userId);
//     setTasks(updatedTasks);
//     setFormData({ title: '', description: '', priority: '', completed: false });
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     const taskId = tasks[index].id;
//     deleteTask(taskId);
//     const userId = localStorage.getItem(LOCAL_STORAGE_KEY);
//     const updatedTasks = fetchTasks(userId);
//     setTasks(updatedTasks);
//   };

//   const handleCheckboxChange = (index) => {
//     const taskId = tasks[index].id;
//     const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
//     updateTask(taskId, updatedTask.title, updatedTask.description, updatedTask.priority, updatedTask.completed);
//     const userId = localStorage.getItem(LOCAL_STORAGE_KEY);
//     const updatedTasks = fetchTasks(userId);
//     setTasks(updatedTasks);
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
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
//       <Header />
//       <Container>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             padding: 2,
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
//       </Container>
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
//           <Container key={task.id}>
//             <Box
//               className={`task-box ${task.completed ? 'completed' : ''}`}
//               sx={{
//                 backgroundColor: getPriorityColor(task.priority),
//                 padding: 2,
//                 marginBottom: 2,
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
//                   <p className="task-priority" sx={{ display: 'none' }}>Priority: {task.priority}</p>
//                 </Box>
//               </Box>
//               <Box>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//               </Box>
//             </Box>
//           </Container>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default ToDoList;


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
// import { Container } from '@mui/material';
// import Header from './Header';
// import { useDatabase } from './DatabaseContext';

// const ToDoList = () => {
//   const { dbInitialized, addTask, fetchTasks } = useDatabase();
//   const [tasks, setTasks] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     priority: '',
//     completed: false
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!dbInitialized) {
//         console.error('Database is not initialized.');
//         return;
//       }

//       try {
//         const userId = parseInt(localStorage.getItem('userId'), 10);
//         const fetchedTasks = await fetchTasks(userId);
//         setTasks(fetchedTasks || []);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     loadTasks();
//   }, [dbInitialized]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = async () => {
//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     const userId = parseInt(localStorage.getItem('userId'), 10);
//     const newTask = { ...formData, id: Date.now() };

//     try {
//       if (editIndex !== null) {
//         // Update logic here
//       } else {
//         await addTask(userId, formData.title, formData.description, formData.priority, formData.completed);
//       }
//       setFormData({ title: '', description: '', priority: '', completed: false });
//       // Refresh the task list
//       const fetchedTasks = await fetchTasks(userId);
//       setTasks(fetchedTasks || []);
//       setEditIndex(null);
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     // Handle delete logic here
//   };

//   const handleCheckboxChange = (index) => {
//     // Handle checkbox change logic here
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
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
//       <Header />
//       <Container>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             padding: 2,
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
//       </Container>
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
//           <Container key={task.id}>
//             <Box
//               className={`task-box ${task.completed ? 'completed' : ''}`}
//               sx={{
//                 backgroundColor: getPriorityColor(task.priority),
//                 padding: 2,
//                 marginBottom: 2,
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
//                   <p className="task-priority" sx={{ display: 'none' }}>Priority: {task.priority}</p>
//                 </Box>
//               </Box>
//               <Box>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//               </Box>
//             </Box>
//           </Container>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default ToDoList;


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
// import { Container } from '@mui/material';
// import Header from './Header';
// import { useDatabase } from './DatabaseContext';

// const ToDoList = () => {
//   const { dbInitialized, addTask, fetchTasks } = useDatabase();
//   const [tasks, setTasks] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     priority: '',
//     completed: false
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!dbInitialized) {
//         console.error('Database is not initialized.');
//         return;
//       }

//       try {
//         const userId = parseInt(localStorage.getItem('userId'), 10);
//         if (isNaN(userId)) {
//           console.error('Invalid user ID.');
//           return;
//         }
//         const fetchedTasks = await fetchTasks(userId);
//         setTasks(fetchedTasks || []);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     loadTasks();
//   }, [dbInitialized]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = async () => {
//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     const userId = parseInt(localStorage.getItem('userId'), 10);
//     if (isNaN(userId)) {
//       console.error('Invalid user ID.');
//       return;
//     }

//     try {
//       if (editIndex !== null) {
//         // Update logic here
//       } else {
//         await addTask(userId, formData.title, formData.description, formData.priority, formData.completed);
//       }
//       setFormData({ title: '', description: '', priority: '', completed: false });
//       // Refresh the task list
//       const fetchedTasks = await fetchTasks(userId);
//       setTasks(fetchedTasks || []);
//       setEditIndex(null);
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     // Handle delete logic here
//   };

//   const handleCheckboxChange = (index) => {
//     // Handle checkbox change logic here
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
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
//       <Header />
//       <Container>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             padding: 2,
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
//       </Container>
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
//           <Container key={task.id}>
//             <Box
//               className={`task-box ${task.completed ? 'completed' : ''}`}
//               sx={{
//                 backgroundColor: getPriorityColor(task.priority),
//                 padding: 2,
//                 marginBottom: 2,
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
//                   <p className="task-priority" sx={{ display: 'none' }}>Priority: {task.priority}</p>
//                 </Box>
//               </Box>
//               <Box>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//               </Box>
//             </Box>
//           </Container>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default ToDoList;




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
// import { Container } from '@mui/material';
// import Header from './Header';
// import { useDatabase } from './DatabaseContext';

// const ToDoList = () => {
//   const { dbInitialized, addTask, fetchTasks, updateTask, deleteTask } = useDatabase();
//   const [tasks, setTasks] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     priority: '',
//     completed: false
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const loadTasks = async () => {
//       if (!dbInitialized) {
//         console.error('Database is not initialized.');
//         return;
//       }

//       try {
//         const userId = parseInt(localStorage.getItem('userId'), 10);
//         if (isNaN(userId)) {
//           console.error('Invalid user ID.');
//           return;
//         }
//         const fetchedTasks = await fetchTasks(userId);
//         setTasks(fetchedTasks || []);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     loadTasks();
//   }, [dbInitialized]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAddTask = async () => {
//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     const userId = parseInt(localStorage.getItem('userId'), 10);
//     if (isNaN(userId)) {
//       console.error('Invalid user ID.');
//       return;
//     }

//     try {
//       if (editIndex !== null) {
//         const taskId = tasks[editIndex].id;
//         await updateTask(taskId, formData.title, formData.description, formData.priority, formData.completed);
//         setEditIndex(null);
//       } else {
//         await addTask(userId, formData.title, formData.description, formData.priority, formData.completed);
//       }
//       setFormData({ title: '', description: '', priority: '', completed: false });
//       // Refresh the task list
//       const fetchedTasks = await fetchTasks(userId);
//       setTasks(fetchedTasks || []);
//     } catch (error) {
//       console.error('Error adding/updating task:', error);
//     }
//   };

//   const handleEditTask = (index) => {
//     setFormData(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = async (index) => {
//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     const taskId = tasks[index].id;
//     try {
//       await deleteTask(taskId);
//       // Refresh the task list
//       const userId = parseInt(localStorage.getItem('userId'), 10);
//       const fetchedTasks = await fetchTasks(userId);
//       setTasks(fetchedTasks || []);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleCheckboxChange = async (index) => {
//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     const taskId = tasks[index].id;
//     const newCompletedStatus = !tasks[index].completed;
//     try {
//       await updateTask(taskId, tasks[index].title, tasks[index].description, tasks[index].priority, newCompletedStatus);
//       // Refresh the task list
//       const userId = parseInt(localStorage.getItem('userId'), 10);
//       const fetchedTasks = await fetchTasks(userId);
//       setTasks(fetchedTasks || []);
//     } catch (error) {
//       console.error('Error updating task status:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchKeyword(event.target.value);
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
//       <Header />
//       <Container>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             padding: 2,
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
//       </Container>
//       <Box sx={{ width: '100%', margin: '0 auto', marginTop: 3 }}>
//         {filteredTasks.map((task, index) => (
//           <Container key={task.id}>
//             <Box
//               className={`task-box ${task.completed ? 'completed' : ''}`}
//               sx={{
//                 backgroundColor: getPriorityColor(task.priority),
//                 padding: 2,
//                 marginBottom: 2,
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
//                   <p className="task-priority" sx={{ display: 'none' }}>Priority: {task.priority}</p>
//                 </Box>
//               </Box>
//               <Box>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleEditTask(index)}><EditIcon /></Button>
//                 <Button sx={{ color: 'grey' }} onClick={() => handleDeleteTask(index)}><DeleteIcon /></Button>
//               </Box>
//             </Box>
//           </Container>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default ToDoList;
