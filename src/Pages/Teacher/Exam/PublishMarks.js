import React, { useState } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Checkbox
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const PublishMarks = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [course, setCourse] = useState('');
  const [component, setComponent] = useState('');
  const [examName, setExamName] = useState('');
  const [examVariant, setExamVariant] = useState('');

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

  const examNames = [
    'First Term Examination',
    'Second Term Examination',
    'Annual Examination',
    'Special Examination'
  ];
  const examVariantOptions = ['Midterm', 'Final'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Publish Marks
      </Typography>

      {/* Search Panel */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 2
          }}
        >
          <FormControl fullWidth required>
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
          />

          <FormControl fullWidth required>
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

          <FormControl fullWidth required>
            <InputLabel id="exam-name-label">
              Exam Name <span style={{ color: 'red' }}>*</span>
            </InputLabel>
            <Select
              labelId="exam-name-label"
              value={examName}
              label="Exam Name *"
              onChange={(e) => setExamName(e.target.value)}
            >
              <MenuItem value="">
                <em>Choose</em>
              </MenuItem>
              {examNames.map((exam) => (
                <MenuItem key={exam} value={exam}>
                  {exam}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth required>
            <InputLabel id="exam-variant-label">
              Course Variant <span style={{ color: 'red' }}>*</span>
            </InputLabel>
            <Select
              labelId="exam-variant-label"
              value={examVariant}
              label="Exam Variant *"
              onChange={(e) => setExamVariant(e.target.value)}
            >
              <MenuItem value="">
                <em>Choose</em>
              </MenuItem>
              {examVariantOptions.map((exam) => (
                <MenuItem key={exam} value={exam}>
                  {exam}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Variant Line */}
        <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="body1">
            <strong>Variant Group:</strong> --
          </Typography>
          <Typography variant="body1">
            <strong>Evaluation Level:</strong> --
          </Typography>
          <Typography variant="body1">
            <strong>Evaluation Level Component:</strong> --
          </Typography>
          <Typography variant="body1">
            <strong>Exam Type:</strong> --
          </Typography>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" startIcon={<SearchIcon />} color="primary">
            Q Search
          </Button>
        </Box>
      </Paper>

     
    </Box>
  );
};

export default PublishMarks;
