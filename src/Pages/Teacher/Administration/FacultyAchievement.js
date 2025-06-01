import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

const FacultyAchievement = () => {
  const [department, setDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const allDepartments = [
    'ACCOUNT SECTION',
    'ADMINISTRATION',
    'Admin',
    'BCA AND MCA',
    'CIVIL ENGINEERING',
    'COMPUTER SCIENCE AND ENGINEERING',
    'DEPT. OF MSC CHEMISTRY',
    'DEPT. OF MSC CS',
    'ELECTRICAL ENGINEERING',
    'ELECTRONICS AND TELECOMMUNICATION',
    'ERP',
    'EXAMINATION',
    'FIRE AND INDUSTRIAL SAFETY',
    'FIRST YEAR ENGINEERING',
    'FORENSIC SCIENCE',
    'HR',
    'Hostel',
    'LIBRARY',
    'MECHANICAL ENGINEERING',
    'Marketing',
    'Others',
    'SCHOOL OF HOTEL MANAGEMENT',
    'SCHOOL OF LAW',
    'SCHOOL OF MANAGEMENT STUDIES',
    'SCHOOL OF PHARMACY',
    'SPORTS DEPT',
    'STORE SECTION',
    'STUDENT SECTION'
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  const filteredDepartments = allDepartments.filter(dept =>
    dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.toLowerCase().includes(department.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Faculty Achievement
      </Typography>
      
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <TextField
          select
          label={
             <span>
              Department <span style={{ color: 'red' }}>*</span>
            </span>
          }
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          sx={{ minWidth: 250 }}
          InputLabelProps={{ shrink: true }}
        >
          <MenuItem value="">
            <em>Choose</em>
          </MenuItem>
          {allDepartments.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
          label={
         <span>
          Search faculty name or ** for all <span style={{ color: 'red' }}>*</span>
         </span>
        }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          sx={{ width: 350 }}  // Reduced width
         required
        />
        <Button 
          variant="contained" 
          onClick={handleSearch}
          startIcon={<SearchIcon />}
          sx={{ height: '56px' }}
        >
          Search
        </Button>
      </Stack>
      
      {showResults && (
        <Paper elevation={3} sx={{ maxWidth: 400 }}>
          <List>
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((dept, index) => (
                <React.Fragment key={dept}>
                  <ListItem>
                    <ListItemText primary={dept} />
                  </ListItem>
                  {index < filteredDepartments.length - 1 && <Divider />}
                </React.Fragment>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No departments found" />
              </ListItem>
            )}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default FacultyAchievement;