// src/pages/LabReports.js
import React, { useState } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Layout from '../components/Layout';

const LabReports = () => {
  const [reports, setReports] = useState([
    // Sample data
    { id: 1, test: 'Blood Sugar', date: '2024-10-10', result: 'Normal', file: 'Report1.pdf' },
    { id: 2, test: 'Cholesterol', date: '2024-09-15', result: 'High', file: 'Report2.pdf' },
  ]);
  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleView = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReport(null);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Lab Reports
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <List>
          {reports.map((report) => (
            <ListItem key={report.id} secondaryAction={
              <Button variant="outlined" onClick={() => handleView(report)}>
                View
              </Button>
            }>
              <ListItemText
                primary={`${report.test} - ${report.date}`}
                secondary={`Result: ${report.result}`}
              />
            </ListItem>
          ))}
          {reports.length === 0 && <Typography>No lab reports available.</Typography>}
        </List>
      </Paper>

      {/* Report Viewing Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Lab Report Details</DialogTitle>
        <DialogContent>
          {selectedReport && (
            <>
              <Typography variant="h6">{selectedReport.test}</Typography>
              <Typography variant="subtitle1">Date: {selectedReport.date}</Typography>
              <Typography variant="body1">Result: {selectedReport.result}</Typography>
              {/* Placeholder for actual report display */}
              <Button variant="contained" color="primary" href={`/reports/${selectedReport.file}`} target="_blank">
                Download Report
              </Button>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default LabReports;
