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

const ManageQuestionSet = () => {
  const [academicSession, setAcademicSession] = useState('');
  const [course, setCourse] = useState('');
  const [component, setComponent] = useState('');
  const [examName, setExamName] = useState('');

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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Manage Question Set
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

      {/* Table Section */}
      <Paper
        elevation={3}
        sx={{
          p: 0,
          borderRadius: 1,
          overflow: 'hidden'
        }}
      >
        <Typography variant="h6" sx={{ px: 3, py: 2 }}>
          Question Set
        </Typography>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#3a3a3a' }}>
              <TableCell sx={{ color: '#fff' }}>
                <Checkbox sx={{ color: '#fff' }} />
              </TableCell>
              <TableCell sx={{ color: '#fff' }}>S.No.</TableCell>
              <TableCell sx={{ color: '#fff' }}>Question Set Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Max Marks</TableCell>
              <TableCell sx={{ color: '#fff' }}>Status</TableCell>
              <TableCell sx={{ color: '#fff' }}>Created By</TableCell>
              <TableCell sx={{ color: '#fff' }}>Action By</TableCell>
              <TableCell sx={{ color: '#fff' }}>Action Date</TableCell>
              <TableCell sx={{ color: '#fff' }}>Remarks</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell colSpan={9} align="center" sx={{ backgroundColor: '#f2f2f2', py: 5 }}>
                <SearchOutlinedIcon sx={{ fontSize: 40, color: 'lightgray', mb: 1 }} />
                <Typography color="textSecondary">No Record found</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ManageQuestionSet;
