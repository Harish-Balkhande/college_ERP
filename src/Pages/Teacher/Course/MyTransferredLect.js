import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const MyTransferredLect = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [lectureDate, setLectureDate] = useState('');

const handleDownload = () => {
  // Your search or download logic here
  console.log("Search button clicked");
};

  return (
    <Box p={3}>
      {/* Page Header */}
      <Typography variant="h5" fontWeight={700} mb={2}>
        My Transferred Lectures
      </Typography>

      {/* Search Box */}
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#008080',
            borderBottom: '1px solid lightgray',
            width: 'fit-content',
            mb: 2,
            fontWeight: 500
          }}
        >
          Search
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
            
              <InputLabel >Academic Session</InputLabel>
              <Select
                value={academicSession}
                onChange={(e) => setAcademicSession(e.target.value)}
                label="Academic Session"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
                <MenuItem value="2024-25">2024-25</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              required
              label="Lecture Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={lectureDate}
              onChange={(e) => setLectureDate(e.target.value)}
            />
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
    variant="contained"
    sx={{
      backgroundColor: 'limegreen',
      color: 'white',
      width: 150,
      height: 55,
      '&:hover': {
        backgroundColor: 'green'
      }
    }}
    onClick={handleDownload}
    startIcon={<SearchIcon />}
  >
    Search
  </Button>
</Box>

        </Grid>
      </Paper>
    </Box>
  );
};

export default MyTransferredLect;
