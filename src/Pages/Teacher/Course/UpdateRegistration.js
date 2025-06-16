import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const UpdateRegistration = () => {
  const [filters, setFilters] = useState({
    academicBatch: '',
    academicSession: '',
    degree: '',
    branch: '',
    scheme: '',
    semester: '',
    course: ''
  });

  const [resetClicked, setResetClicked] = useState(false);

  const handleChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
    setResetClicked(false);
  };

  const handleReset = () => {
    setFilters({
      academicBatch: '',
      academicSession: '',
      degree: '',
      branch: '',
      scheme: '',
      semester: '',
      course: ''
    });
    setResetClicked(true);
  };

  const handleDownload = () => {
    // Download logic
    console.log('Download clicked', filters);
    setResetClicked(false);
  };

   const labelStyles = {
    '& .MuiInputLabel-asterisk': {
      color: 'red'
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Update Course Registration
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Search
        </Typography>
        <Grid container spacing={3}>
        


          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '190px' }}>
              <InputLabel sx={labelStyles}>Academic Batch *</InputLabel>
              <Select
                value={filters.academicSession}
                onChange={handleChange('academicBatch')}
                label="Academic Batch *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="mca">MCA</MenuItem>
                <MenuItem value="btech">BTech</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '200px' }}>
              <InputLabel sx={labelStyles}>Academic Session *</InputLabel>
              <Select
                value={filters.academicSession}
                onChange={handleChange('academicSession')}
                label="Academic Session *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="Monsoon">Monsoon</MenuItem>
                <MenuItem value="Winter">Winter</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '190px' }}>
              <InputLabel sx={labelStyles}>Degree *</InputLabel>
              <Select
                value={filters.degree}
                onChange={handleChange('degree')}
                label="Degree *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="btech">BTech</MenuItem>
                <MenuItem value="mtech">MTech</MenuItem>
                <MenuItem value="mca">MCA</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '190px' }}>
              <InputLabel sx={labelStyles}>Branch *</InputLabel>
              <Select
                value={filters.branch}
                onChange={handleChange('branch')}
                label="Branch *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="cse">CSE</MenuItem>
                <MenuItem value="ece">ECE</MenuItem>
              </Select>
            </FormControl>
          </Grid>



          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '190px' }}>
              <InputLabel sx={labelStyles}>Semester *</InputLabel>
              <Select
                value={filters.branch}
                onChange={handleChange('semester')}
                label="Semester *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="I">I</MenuItem>
                <MenuItem value="II">II</MenuItem>
                <MenuItem value="III">III</MenuItem>
                <MenuItem value="IV">IV</MenuItem>
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
      '&:hover': { backgroundColor: 'green' }
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

export default UpdateRegistration;
