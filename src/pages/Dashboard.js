// src/pages/Dashboard.js
import React from 'react';
import { Typography, Grid, Paper, Box, Button } from '@mui/material';
import Layout from '../components/Layout';
import SearchBox from '../components/SearchBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Dashboard = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Welcome, Jane Doe
      </Typography>
      <Grid container spacing={3}>
        {/* Upcoming Appointments */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Upcoming Appointments</Typography>
            {/* Appointment List */}
            <Box mt={2}>
              <Typography>No upcoming appointments.</Typography>
            </Box>
            <Box mt={2}>
              <Button variant="outlined" color="primary">
                View All
              </Button>
            </Box>
          </Paper>
        </Grid>
        {/* Recent Lab Reports */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Recent Lab Reports</Typography>
            {/* Lab Report List */}
            <Box mt={2}>
              <Typography>No recent lab reports.</Typography>
            </Box>
            <Box mt={2}>
              <Button variant="outlined" color="primary">
                View All
              </Button>
            </Box>
          </Paper>
        </Grid>
        {/* Health Metrics */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Health Metrics</Typography>
            {/* Health Metrics Content */}
            <Box mt={2}>
              <Typography>No health metrics recorded.</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Search Box */}
        <Grid item xs={12}>
          <SearchBox />
        </Grid>
        {/* Quick Actions */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <TrendingUpIcon fontSize="large" color="primary" />
                <Typography variant="h5" component="div" sx={{ mt: 1 }}>
                  Track Health
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Monitor your vital health metrics.
                </Typography>
                <Button size="small" variant="contained" color="primary">
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <AssignmentTurnedInIcon fontSize="large" color="primary" />
                <Typography variant="h5" component="div" sx={{ mt: 1 }}>
                  Manage Prescriptions
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  View and renew your prescriptions.
                </Typography>
                <Button size="small" variant="contained" color="primary">
                  View Prescriptions
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <FavoriteIcon fontSize="large" color="primary" />
                <Typography variant="h5" component="div" sx={{ mt: 1 }}>
                  Health Tips
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Receive personalized health tips.
                </Typography>
                <Button size="small" variant="contained" color="primary">
                  Get Tips
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
