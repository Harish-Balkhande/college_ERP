import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const labelStyles = {
  '& .MuiInputLabel-asterisk': {
    color: 'red'
  }
};

const ManageCourse = () => {
  const [filters, setFilters] = useState({
    degree: '',
    branch: '',
    courseCode: ''
  });

  const [showNoRecords, setShowNoRecords] = useState(true);

  const handleChange = (field) => (e) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const handleSearch = () => {
    // Dummy logic to show no records
    setShowNoRecords(true);
  };

  const handleReset = () => {
    setFilters({ degree: '', branch: '', courseCode: '' });
    setShowNoRecords(true);
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'limegreen',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'green'
    }
  }));



  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Manage Course
      </Typography>

      {/* Search Filters */}
      <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
        <Typography variant="subtitle1" color="green" gutterBottom>
          Search
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
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

          <Grid item xs={12} sm={4} md={3}>
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

          <Grid item xs={12} sm={1}>
            <Typography textAlign="center" fontWeight="bold">OR</Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Course"
              fullWidth
              value={filters.courseCode}
              onChange={handleChange('courseCode')}
              placeholder="Enter Course Code"
              InputLabelProps={{ sx: labelStyles }}
            />
          </Grid>

          <Grid item xs={12} sm={2} md={2}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              sx={{ backgroundColor: 'limegreen', '&:hover': { backgroundColor: 'green' } }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Course List */}
      <Paper sx={{ p: 2 }} elevation={3}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight={600} pl={2}>
            Course List
          </Typography>
          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CustomButton startIcon={<AddIcon />}> Add</CustomButton>
              </Grid>
              <Grid item>
                <TextField placeholder="Search" size="small" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Table */}
        <Table>
          <TableHead sx={{ backgroundColor: '#333' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>S.No</TableCell>
              <TableCell sx={{ color: '#fff' }}>Code</TableCell>
              <TableCell sx={{ color: '#fff' }}>Course Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Short Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showNoRecords && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Box py={4} textAlign="center" color="gray">
                    <Typography variant="h6">No Record found</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ManageCourse;
