// src/pages/NotFound.js
import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for doesn't exist.
      </Typography>
    </Layout>
  );
};

export default NotFound;
