

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
//         navigate('/home');  // Navigate to the home page upon successful sign-in
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
  
//     const email = data.get('email');
//     const password = data.get('password');
  
//     axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           console.log('User signed in successfully:', response.data);
//           localStorage.setItem('userId', response.data[0].id);
//           localStorage.setItem('userEmail', email);
//           navigate('/home'); 
//         } else {
//           console.error('Invalid email or password');
//         }
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


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
  
    const email = data.get('email');
    const password = data.get('password');
  
    axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
      .then(response => {
        if (response.data.length > 0) {
          console.log('User signed in successfully:', response.data);
          localStorage.setItem('userId', response.data[0].id);
          localStorage.setItem('userEmail', email);
          navigate('/home'); 
        } else {
          console.error('Invalid email or password');
        }
      })
      .catch(error => {
        console.error('There was an error signing in!', error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            sx={{mb:3}}
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'teal' }} /> : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ textDecoration: 'none', color: 'teal' }} to="/signup">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}


