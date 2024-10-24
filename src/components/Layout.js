// src/components/Layout.js
import React from 'react';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container>
      {children}  {/* This will render the content passed to the Layout */}
    </Container>
  );
};

export default Layout;
