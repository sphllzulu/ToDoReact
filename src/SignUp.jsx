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

export default function SignUp() {
  const navigate = useNavigate();
  const { dbInitialized, signUpUser } = useDatabase();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (!dbInitialized) {
      console.error('Database is not initialized.');
      return;
    }

    try {
      const userId = await signUpUser(email, password);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userEmail', email);
      navigate('/');  // Navigate to the home page upon successful sign-up
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
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
          Sign Up
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
            autoComplete="new-password"
            variant='outlined'
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mb: 2, color: 'teal', border: '2px solid teal', '&:hover': { border: '2px solid darkcyan', color: 'darkcyan' } }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ textDecoration: 'none', color: 'teal', fontWeight: 'bold' }} to="/">Already have an account? Sign In</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
