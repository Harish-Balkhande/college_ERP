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

const MyLectures = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [lectureStatus, setLectureStatus] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [filters, setFilters] = useState({
    course: '',
    semester: '',
    variantGroup: '',
    courseVariant: ''
  });

  const handleChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  const handleDownload = () => {
    console.log('Search clicked');
    console.log({
      academicSession,
      startDate,
      endDate,
      lectureStatus,
      attendanceStatus,
      ...filters
    });
  };

  const labelStyles = {
    '& .MuiInputLabel-asterisk': {
      color: 'red'
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        My Lectures
      </Typography>

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
          {/* Academic Session */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
              <InputLabel sx={labelStyles}>Academic Session *</InputLabel>
              <Select
                value={academicSession}
                onChange={(e) => setAcademicSession(e.target.value)}
                label="Academic Session *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
                <MenuItem value="2024-25">2024-25</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Variant Group */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
              <InputLabel>Variant Group *</InputLabel>
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

          {/* Course Variant */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
              <InputLabel>Course Variant *</InputLabel>
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

          

          {/* Start Date */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              required
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true, sx: labelStyles }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>

          {/* End Date */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              required
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true, sx: labelStyles }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>

          {/* Lecture Status */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
              <InputLabel sx={labelStyles}>Lecture Status *</InputLabel>
              <Select
                value={lectureStatus}
                onChange={(e) => setLectureStatus(e.target.value)}
                label="Lecture Status *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="deleted">Deleted</MenuItem>
                <MenuItem value="holiday">Holiday</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Attendance Status */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: '250px' }}>
              <InputLabel>Attendance Status *</InputLabel>
              <Select
                value={attendanceStatus}
                onChange={(e) => setAttendanceStatus(e.target.value)}
                label="Attendance Status *"
              >
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="marked">Marked</MenuItem>
                <MenuItem value="not-marked">Not-marked</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} mt={2}>
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

export default MyLectures;
