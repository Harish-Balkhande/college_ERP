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
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const TeachingPlan = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [courseVariant, setCourseVariant] = useState('');
  const [showHidden, setShowHidden] = useState(false);

  const academicSessions = [
    'Summer 2026',
    'Winter 2025',
    'Summer 2025',
    'Annual Year 2024-2025',
    'Winter 2024',
    'Summer 2024'
  ];

  const courseVariants = [
    'Regular',
    'Accelerated',
    'Evening',
    'Weekend',
    'Online'
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Teaching Plan
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Search
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 3,
            flexWrap: 'wrap'
          }}
        >
          {/* Academic Session */}
          <FormControl sx={{ minWidth: 200 }} required>
            <InputLabel id="academic-session-label">
              Academic Session *
            </InputLabel>
            <Select
              labelId="academic-session-label"
              value={academicSession}
              label="Academic Session *"
              onChange={(e) => setAcademicSession(e.target.value)}
            >
              <MenuItem value="">
                <em>Choose</em>
              </MenuItem>
              {academicSessions.map((session) => (
                <MenuItem key={session} value={session}>
                  {session}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Course Variant */}
          <FormControl sx={{ minWidth: 200 }} required>
            <InputLabel id="course-variant-label">
              Course Variant *
            </InputLabel>
            <Select
              labelId="course-variant-label"
              value={courseVariant}
              label="Course Variant *"
              onChange={(e) => setCourseVariant(e.target.value)}
            >
              <MenuItem value="">
                <em>Choose</em>
              </MenuItem>
              {courseVariants.map((variant) => (
                <MenuItem key={variant} value={variant}>
                  {variant}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Search & Eye Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              color="success"
              sx={{
                height: 56,
                minWidth: 120,
                textTransform: 'uppercase',
                fontWeight: 'bold'
              }}
            >
              Search
            </Button>

            <IconButton
              size="small"
              onClick={() => setShowHidden(!showHidden)}
              sx={{
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: 1,
                width: 40,
                height: 40
              }}
            >
              {showHidden ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default TeachingPlan;
