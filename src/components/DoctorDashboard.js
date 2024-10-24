// src/components/DoctorDashboard.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { auth } from '../firebase'; // Import your firebase auth instance

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [db] = useState(getFirestore());

  useEffect(() => {
    const fetchAppointments = async () => {
      const user = auth.currentUser;
      if (user) {
        const appointmentsRef = collection(db, 'appointments');
        const snapshot = await getDocs(appointmentsRef);
        const appointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAppointments(appointmentsData.filter(appointment => appointment.doctorId === user.uid));
      }
    };

    fetchAppointments();
  }, [db]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPatientName('');
    setPatientAge('');
    setPatientGender('');
    setPatientAddress('');
  };

  const handleAddPatient = async () => {
    try {
      await addDoc(collection(db, 'patients'), {
        name: patientName,
        age: patientAge,
        gender: patientGender,
        address: patientAddress,
      });
      handleClose();
      alert('Patient added successfully!');
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const handleLogout = () => {
    // Add logic to logout
  };

  return (
    <Container>
      <Typography variant="h4">Doctor Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>Admit New Patient</Button>
      <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</Button>

      <Typography variant="h5" style={{ marginTop: '20px' }}>Appointments</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Patient Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Patient</DialogTitle>
        <DialogContent>
          <TextField
            label="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Gender"
            value={patientGender}
            onChange={(e) => setPatientGender(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddPatient} color="primary">
            Add Patient
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DoctorDashboard;
