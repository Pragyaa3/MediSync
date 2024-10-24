// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // MediSync primary color
    },
    secondary: {
      main: '#ff5722', // MediSync accent color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    // Define other typography variants as needed
  },
});

export default theme;
