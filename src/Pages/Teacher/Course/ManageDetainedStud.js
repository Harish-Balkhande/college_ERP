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
import SearchIcon from '@mui/icons-material/Search';


const ManageDetainedStud = () => {
  const [filters, setFilters] = useState({
    
    academicSession: '',
    component:'',
    courseVariant:'',
    course: '',
    classSession: '',
    variantGroup:''
  });

  const [resetClicked, setResetClicked] = useState(false);

  const handleChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
    setResetClicked(false);
  };

  const handleReset = () => {
    setFilters({
      component:'',
      academicSession: '',
      course: '',
      classSession: '',
      variantGroup:'',
      courseVariant:''
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
       Manage Detained Students
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Search
        </Typography>
        <Grid container spacing={3}>
        


          

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '200px' }}>
              <InputLabel sx={labelStyles}>Session *</InputLabel>
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
                    
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth required sx={{ minWidth: '190px' }}>
              <InputLabel sx={labelStyles}>Component *</InputLabel>
              <Select
                value={filters.component}
                onChange={handleChange('component')}
                label="Component *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="I">I</MenuItem>
                <MenuItem value="II">II</MenuItem>
                <MenuItem value="III">III</MenuItem>
                <MenuItem value="IV">IV</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        
          
          


        <Grid item xs={12} sm={6} md={6} lg={4}>
                      <FormControl fullWidth required sx={{ minWidth: '280px' }}>
                        <InputLabel sx={labelStyles}>Variant Group *</InputLabel>
                        <Select
                          value={filters.variantGroup}
                          onChange={handleChange('variantGroup')}
                          label="Variant Group *"
                        >
                          <MenuItem value="">Choose</MenuItem>
                          <MenuItem value="a">A</MenuItem>
                          <MenuItem value="b">B</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

          

          <Grid item xs={12} sm={6} md={6} lg={4}>
                      <FormControl fullWidth required sx={{ minWidth: '280px' }}>
                        <InputLabel sx={labelStyles}>Course Variant *</InputLabel>
                        <Select
                          value={filters.courseVariant}
                          onChange={handleChange('courseVariant')}
                          label="Course Variant *"
                        >
                          <MenuItem value="">Choose</MenuItem>
                          <MenuItem value="a">A</MenuItem>
                          <MenuItem value="b">B</MenuItem>
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

export default ManageDetainedStud;
