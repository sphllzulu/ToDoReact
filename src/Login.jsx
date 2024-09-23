
import React from 'react';
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
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };
  
    axios.post('http://localhost:3001/signin', user)
      .then(response => {
        console.log('User signed in successfully:', response.data);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userEmail', user.email); 
        navigate('/home');  // Navigate to the home page upon successful sign-in
      })
      .catch(error => {
        console.error('There was an error signing in!', error);
      });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ borderRadius: 2, boxShadow: 3, p: 4, backgroundColor: 'white' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 1,
          padding: 3,
          backgroundColor: 'white',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', color: 'teal' }}>
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
            variant="outlined"
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
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2, 
              backgroundColor: 'teal', 
              color: 'white', 
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'darkcyan' } 
            }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link style={{ textDecoration: 'none', color: 'teal', fontWeight: 'bold' }} to="/signup">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
