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

const ExtraLect = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [variant, setvariant] = useState('');

const handleChange = (field) => (event) => {
  setFilters({ ...filters, [field]: event.target.value });
};

const labelStyles = {
  '& .MuiInputLabel-asterisk': {
    color: 'red'
  }
};

const [filters, setFilters] = useState({ course: '' });

const handleDownload = () => {
  // Your search or download logic here
  console.log("Search button clicked");
};

  return (
    <Box p={3}>
      {/* Page Header */}
      <Typography variant="h5" fontWeight={700} mb={2}>
        Extra Lectures 
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

        {/* Faculty Field */}
  <Grid item xs={12} sm={6} md={3}>
    <TextField
      fullWidth
      required
      label="Faculty *"
      placeholder="Use Faculty name/** all"
      value={filters.course}
      onChange={handleChange('course')}
      sx={{ minWidth: '250px' }}
      InputLabelProps={{ sx: labelStyles }}
    />
  </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
            
              <InputLabel >Variant</InputLabel>
              <Select
                value={variant}
                onChange={(e) => setvariant(e.target.value)}
                label="Variant"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="mca">MCA</MenuItem>
                <MenuItem value="btech">BTech</MenuItem>
              </Select>
            </FormControl>
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
        </Grid>
      </Paper>
    </Box>
    
  );
};

export default ExtraLect;
