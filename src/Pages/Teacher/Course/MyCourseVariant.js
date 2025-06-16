import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const MyCourseVariant = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy empty array (you can replace with real data)
  const tableData = [];

  const tableHeaders = [
    'S.No.',
    'Course Code',
    'Session Name',
    'Course Name',
    'Registered Category',
    'Course Component',
    'Course Variant',
    'Section',
    'Class Room',
    'Date Range',
    'Time Slots'
  ];

  return (
    <Box p={3}>
      {/* 🔷 Page-level Header */}
      <Typography variant="h5" fontWeight={700} mb={3}>
        My Course Variant 
      </Typography>

    <Paper elevation={4} sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          List of My Course Variants
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#333' }}>
              {tableHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={tableHeaders.length} align="center">
                  <Box display="flex" flexDirection="column" alignItems="center" py={4}>
                    <SearchOffIcon fontSize="large" color="disabled" />
                    <Typography color="text.secondary">No Record found</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.courseCode}</TableCell>
                  <TableCell>{row.sessionName}</TableCell>
                  <TableCell>{row.courseName}</TableCell>
                  <TableCell>{row.registeredCategory}</TableCell>
                  <TableCell>{row.courseComponent}</TableCell>
                  <TableCell>{row.courseVariant}</TableCell>
                  <TableCell>{row.section}</TableCell>
                  <TableCell>{row.classRoom}</TableCell>
                  <TableCell>{row.dateRange}</TableCell>
                  <TableCell>{row.timeSlots}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </Box>
  );
};

export default MyCourseVariant;
