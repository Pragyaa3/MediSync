// src/pages/Profile.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Layout from '../components/Layout';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, Anytown, USA',
    insurance: 'ABC Health Insurance',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Handle save logic (e.g., API call)
    alert('Profile saved successfully!');
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              name="email"
              value={profile.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Insurance Provider"
              name="insurance"
              value={profile.insurance}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Profile;
