

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
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };
  
    axios.post('http://localhost:3001/signup', user)
      .then(response => {
        console.log('User signed up successfully:', response.data);
       localStorage.setItem('userId', response.data.userId);
       localStorage.setItem('userEmail', user.email); 
        navigate('/');  // Navigate to the home page upon successful sign-up
      })
      .catch(error => {
        console.error('There was an error signing up!', error);
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
          Sign up
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
            variant='standard'
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            variant='standard'
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, color: 'teal', mb: 2, border: '2px solid teal' }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ textDecoration: 'none', color: 'teal' }} to="/">Already have an account? Sign In</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}




