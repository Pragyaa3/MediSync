// src/components/Registration.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Snackbar } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Use imported auth and db from firebase.js

const Registration = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!name || !email || !password || !gender || !phone || !address || (isDoctor && (!specialization || !experience || !education))) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        name,
        dob,
        gender,
        phone,
        address,
        email,
        userType: isDoctor ? 'doctor' : 'patient',
        ...(isDoctor && { specialization, experience, education }),
      };

      // Log the user data to debug
      console.log("User Data:", userData);

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Check if the document already exists
      if (userDoc.exists()) {
        // If it exists, update the document
        await setDoc(userDocRef, userData, { merge: true });
        setMessage('User data updated successfully!');
      } else {
        // If it does not exist, create a new document
        await setDoc(userDocRef, userData);
        setMessage('Registration successful!');
      }

      // Set success message and open Snackbar
      setOpen(true);

      // Navigate to the dashboard after successful registration
      if (isDoctor) {
        navigate('DoctorDashboard'); // Navigate to the doctor dashboard
      } else {
        navigate('/Dashboard'); // Navigate to the patient dashboard
      }
    } catch (error) {
      console.error("Error registering:", error.message);
      // Set error message and open Snackbar
      setMessage("Error registering: " + error.message);
      setOpen(true);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Registration</Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={isDoctor}
              onChange={() => setIsDoctor(!isDoctor)}
            />
            Register as Doctor
          </label>
        </div>
        {isDoctor && (
          <>
            <TextField
              label="Specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Experience (years)"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
          </>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>

      {/* Snackbar for alerts */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </Container>
  );
};

export default Registration;
