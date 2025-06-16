import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';

const TeachingPlanReport = () => {
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
        Teaching Plan Report
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Filters
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
              <InputLabel sx={labelStyles}>Academic Batch *</InputLabel>
              <Select
                value={filters.academicBatch}
                onChange={handleChange('academicBatch')}
                label="Academic Batch *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="2022-23">2022-23</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
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
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
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
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
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
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
              <InputLabel sx={labelStyles}>Faculty *</InputLabel>
              <Select
                value={filters.scheme}
                onChange={handleChange('scheme')}
                label="Scheme *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="ram">Ram Swami</MenuItem>
                <MenuItem value="swati">Swati Deshmukh</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '280px' }}>
              <InputLabel sx={labelStyles}>Course Variant *</InputLabel>
              <Select
                value={filters.semester}
                onChange={handleChange('semester')}
                label="Semester *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="a">A</MenuItem>
                <MenuItem value="b">B</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              required
              label="Course *"
              placeholder="Use ** / Course Code / Name"
              value={filters.course}
              onChange={handleChange('course')}
              sx={{ minWidth: '280px' }}
              InputLabelProps={{ sx: labelStyles }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box mt={2} display="flex" gap={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: resetClicked ? 'limegreen' : 'inherit',
                  color: resetClicked ? 'white' : 'black',
                  '&:hover': {
                    backgroundColor: resetClicked ? 'green' : 'rgba(0, 0, 0, 0.08)'
                  }
                }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'limegreen', color: 'white', '&:hover': { backgroundColor: 'green' } }}
                onClick={handleDownload}
              >
                Download
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TeachingPlanReport;
