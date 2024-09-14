// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import axios from 'axios';

// export default function SignIn() {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
  
//     const user = {
//       email: data.get('email'),
//       password: data.get('password'),
//     };
  
//     axios.post('http://localhost:3001/signin', user)
//       .then(response => {
//         console.log('User signed in successfully:', response.data);
//         localStorage.setItem('userId', response.data.userId);
//         localStorage.setItem('userEmail', user.email); 
//         navigate('/');  // Navigate to the home page upon successful sign-in
//       })
//       .catch(error => {
//         console.error('There was an error signing in!', error);
//       });
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <TextField
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             variant='standard'
//           />
//           <TextField
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             variant='standard'
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="outlined"
//             sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
            
//             <Grid item>
//               <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }


// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { initializeDatabase, signInUser } from './db'; // Import database functions

// export default function SignIn() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     initializeDatabase(); // Initialize the database when the component mounts
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
    
//     const email = data.get('email');
//     const password = data.get('password');
//     console.log('Sign In Attempt:', { email, password });

//     try {
//       const userId = await signInUser(email, password);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('userEmail', email);
//       navigate('/'); // Navigate to the home page upon successful sign-in
//     } catch (error) {
//       console.error('There was an error signing in!', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <TextField
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             variant='standard'
//           />
//           <TextField
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             variant='standard'
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="outlined"
//             sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useDatabase } from './DatabaseContext'; // Import the context

// export default function SignIn() {
//   const navigate = useNavigate();
//   const { dbInitialized, signInUser } = useDatabase();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const email = data.get('email');
//     const password = data.get('password');

//     if (!dbInitialized) {
//       console.error('Database is not initialized.');
//       return;
//     }

//     try {
//       const userId = await signInUser(email, password);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('userEmail', email);
//       navigate('/'); // Navigate to the home page upon successful sign-in
//     } catch (error) {
//       console.error('There was an error signing in!', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <TextField
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             variant='standard'
//           />
//           <TextField
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             variant='standard'
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="outlined"
//             sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useDatabase } from './DatabaseContext'; // Import the context

// export default function SignIn() {
//   const navigate = useNavigate();
//   const { dbInitialized, signInUser } = useDatabase();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const email = data.get('email');
//     const password = data.get('password');

//     if (!dbInitialized) {
//       console.error('Database is not initialized. Please wait until the database setup is complete.');
//       return;
//     }

//     try {
//       // Validate email and password
//       if (!email || !password) {
//         throw new Error('Email and password fields cannot be empty.');
//       }

//       // Attempt to sign in the user
//       const userId = await signInUser(email, password);
      
//       // If successful, store user data and navigate
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('userEmail', email);
//       navigate('/'); // Navigate to the home page upon successful sign-in
//     } catch (error) {
//       // Provide detailed error messages
//       if (error.message.includes('Invalid email or password')) {
//         console.error('Error signing in: Invalid email or password. Please check your credentials and try again.');
//       } else if (error.message.includes('Database is not initialized')) {
//         console.error('Error: The database is not initialized. Please wait for the initialization to complete.');
//       } else {
//         console.error('There was an error signing in!', error.message);
//       }
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <TextField
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             variant='standard'
//           />
//           <TextField
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             variant='standard'
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="outlined"
//             sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useDatabase } from './DatabaseContext'; // Import the context

// export default function SignIn() {
//   const navigate = useNavigate();
//   const { dbInitialized, signInUser } = useDatabase();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const email = data.get('email');
//     const password = data.get('password');

//     if (!dbInitialized) {
//       console.error('Database is not initialized. Please wait until the database setup is complete.');
//       return;
//     }

//     try {
//       // Validate email and password
//       if (!email || !password) {
//         throw new Error('Email and password fields cannot be empty.');
//       }

//       // Attempt to sign in the user
//       const userId = await signInUser(email, password);
      
//       if (!userId) {
//         throw new Error('Invalid email or password.');
//       }

//       // If successful, store user data and navigate
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('userEmail', email);
//       navigate('/home'); // Navigate to the home page upon successful sign-in
//     } catch (error) {
//       // Provide detailed error messages
//       console.error('Error signing in:', error.message);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <TextField
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             variant='standard'
//           />
//           <TextField
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             variant='standard'
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="outlined"
//             sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDatabase } from './DatabaseContext'; // Import the context
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SignIn() {
  const navigate = useNavigate();
  const { dbInitialized, signInUser } = useDatabase();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('info');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (!dbInitialized) {
      console.error('Database is not initialized. Please wait until the database setup is complete.');
      return;
    }

    try {
      if (!email || !password) {
        throw new Error('Email and password fields cannot be empty.');
      }

      const userId = await signInUser(email, password);

      if (!userId) {
        throw new Error('Invalid email or password.');
      }

      localStorage.setItem('userId', userId);
      localStorage.setItem('userEmail', email);
      navigate('/home');

    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'teal', transition: 'all 0.3s ease-in-out', '&:hover': { bgcolor: 'darkcyan' } }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: 'teal' }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            variant='outlined'
            sx={{ mb: 2 }}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant='outlined'
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mb: 2, color: 'teal', border: '2px solid teal', '&:hover': { border: '2px solid darkcyan', color: 'darkcyan' } }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ textDecoration: 'none', color: 'teal', fontWeight: 'bold' }} to="/signup">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
