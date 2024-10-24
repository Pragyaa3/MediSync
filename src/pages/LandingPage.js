// src/pages/LandingPage.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import custom CSS for additional styles

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="lg" sx={{ marginTop: 8 }}>
      <Paper elevation={6} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to MediSync
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Your personal health management platform. Register or log in to get started!
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => navigate('/registration')}
              sx={{ padding: '15px', fontSize: '1.2rem' }}
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => navigate('/login')}
              sx={{ padding: '15px', fontSize: '1.2rem' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LandingPage;
