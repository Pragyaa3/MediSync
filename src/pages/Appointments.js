// src/pages/Appointments.js
import React, { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import Layout from '../components/Layout';

const Appointments = () => {
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState([
    // Sample data
    { id: 1, doctor: 'Dr. Smith', date: '2024-11-01', time: '10:00 AM', location: 'Clinic A' },
    { id: 2, doctor: 'Dr. Johnson', date: '2024-11-05', time: '2:00 PM', location: 'Clinic B' },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle appointment scheduling (placeholder)
  const handleSchedule = () => {
    setOpen(false);
    alert('Appointment scheduled successfully!');
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Appointments
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Schedule New Appointment
      </Button>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h6">Upcoming Appointments</Typography>
        <List>
          {appointments.map((appt) => (
            <ListItem key={appt.id}>
              <ListItemText
                primary={`${appt.doctor} - ${appt.date} at ${appt.time}`}
                secondary={`Location: ${appt.location}`}
              />
            </ListItem>
          ))}
          {appointments.length === 0 && <Typography>No upcoming appointments.</Typography>}
        </List>
      </Paper>

      {/* Appointment Scheduling Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule New Appointment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Doctor's Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Time"
            type="time"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSchedule} variant="contained" color="primary">
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default Appointments;
