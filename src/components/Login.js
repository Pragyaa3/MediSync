// src/components/LoginForm.js
import React, { useState } from 'react'; // Ensure useState is imported
import { TextField, Button, Typography, Container } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error (show a message to the user if needed)
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Login</Typography>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
