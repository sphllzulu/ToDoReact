import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const ToDoList = () => {
  return (
    
    <div className='toDo'>
        <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Priority" variant="outlined" />
      <Button variant="outlined">Add</Button>
    </Box>

    </div>
    
      
    
    

  )
}

export default ToDoList

