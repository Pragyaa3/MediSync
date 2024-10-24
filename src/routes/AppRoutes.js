// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Registration from '../components/Registration'; // Import your registration component
import Login from '../components/Login'; // Import your login component
import Dashboard from '../pages/Dashboard';
import DoctorDashboard from '../components/DoctorDashboard';
import Profile from '../pages/Profile';
import Appointments from '../pages/Appointments';
import LabReports from '../pages/LabReports';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path= "/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/lab-reports" element={<LabReports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
