import React, { useState } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Paper,
  TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CourseAttainment = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [course, setCourse] = useState('');
  const [component, setComponent] = useState('');

  const academicSessions = [
    'Summer 2026',
    'Winter 2025',
    'Summer 2025',
    'Annual Year 2024-2025',
    'Winter 2024',
    'Summer 2024',
    'Annual Year 2023-2024',
    'Winter 2023',
    'Summer 2023',
    'Annual Year 2022-2023',
    'Winter 2022',
    'Summer 2022',
    'Annual Year 2021-2022',
    'Winter 2021'
  ];

  const components = ['Midterm Exam', 'Final Exam', 'Quiz', 'Assignment'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Course Attainment
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        <Box sx={{ 
          display: 'flex',
          alignItems: 'flex-end',
          gap: 2,
          flexWrap: 'wrap'
        }}>
          {/* Academic Session */}
          <FormControl sx={{ minWidth: 200, flex: 1 }} required>
            <InputLabel id="academic-session-label">
              Academic Session <span style={{ color: 'red' }}>*</span>
            </InputLabel>
            <Select
              labelId="academic-session-label"
              value={academicSession}
              label="Academic Session *"
              onChange={(e) => setAcademicSession(e.target.value)}
            >
              <MenuItem value="">
                <em>Choose...</em>
              </MenuItem>
              {academicSessions.map((session) => (
                <MenuItem key={session} value={session}>
                  {session}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Course */}
          <TextField
            fullWidth
            required
            label={
              <>
                Course <span style={{ color: 'red' }}>*</span>
              </>
            }
            placeholder="Search by code/name OR ** for all"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            sx={{ flex: 1 }}
          />

          {/* Component and Search Button container */}
          <Box sx={{ display: 'flex', flex: 1, minWidth: 'fit-content' }}>
            {/* Component */}
            <FormControl sx={{ flex: 1, minWidth: 200 }} required>
              <InputLabel id="component-label">
                Component <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <Select
                labelId="component-label"
                value={component}
                label="Component *"
                onChange={(e) => setComponent(e.target.value)}
              >
                <MenuItem value="">
                  <em>Choose</em>
                </MenuItem>
                {components.map((comp) => (
                  <MenuItem key={comp} value={comp}>
                    {comp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Search Button */}
            <Button 
              variant="contained" 
              startIcon={<SearchIcon />}
              color="primary"
              sx={{ 
                height: 56,
                minWidth: 120,
                textTransform: 'uppercase',
                ml: 1
              }}
            >
              Q SEARCH
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CourseAttainment;