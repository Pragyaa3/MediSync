// src/components/SearchBox.js
import React, { useState } from 'react';
import { TextField, Button, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Placeholder for search logic (e.g., API call)
    // For demonstration, we'll use static data
    const mockResults = [
      { id: 1, name: 'Dr. Emily Clark', specialization: 'Cardiology', location: 'Clinic A' },
      { id: 2, name: 'Dr. Michael Brown', specialization: 'Pediatrics', location: 'Clinic B' },
    ];
    setResults(mockResults);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            label="Search for Doctors or Hospitals"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary" fullWidth startIcon={<SearchIcon />} onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Search Results */}
      {results.length > 0 && (
        <List sx={{ marginTop: 2 }}>
          {results.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.name}
                secondary={`${item.specialization} • ${item.location}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default SearchBox;
