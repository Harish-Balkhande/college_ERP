import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Link,
  Divider,
} from '@mui/material';

const reportData = {
  A: ['ADD COURSE REPORT', 'ADDRESS REPORT'],
  C: [
    'COURSE ALLOTMENT REPORT',
    'COURSE CONFIRM FOR EXAM REPORT',
    'COURSE REGISTRATION NOT DONE REPORT',
    'COURSE REGISTRATION SLIP FOR FACULTY ADVISOR',
    'COURSE REGISTRATION SLIP OF STUDENT',
  ],
  F: ['FINAL DETENTION LIST'],
  O: ['OFFER COURSE SUMMARY REPORT', 'OFFERED COURSE REPORT'],
  P: ['PROVISIONAL DETENSION LIST REPORT'],
  S: ['SUBJECT WISE COUNT REPORT'],
  T: ['TEACHING PLAN NOT ENTERED REPORT'],
};

const alphabets = ['A', 'C', 'D', 'F', 'O', 'P', 'S', 'T'];

const CoGenericReport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('A-Z');

  const filterReports = () => {
    let filtered = { ...reportData };

    if (filter !== 'A-Z') {
      filtered = Object.fromEntries(
        Object.entries(filtered).filter(([key]) => key === filter)
      );
    }

    if (searchTerm.trim() !== '') {
      filtered = Object.fromEntries(
        Object.entries(filtered).map(([key, reports]) => [
          key,
          reports.filter((r) =>
            r.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        ]).filter(([_, reports]) => reports.length > 0)
      );
    }

    return filtered;
  };

  const filteredReports = filterReports();

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Reports
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        <Typography fontWeight={500}>
          Filter : <Link underline="hover" sx={{ cursor: 'pointer' }} onClick={() => setFilter('A-Z')}>A-Z</Link>
        </Typography>
        {alphabets.map((char) => (
          <Link
            key={char}
            underline="hover"
            sx={{ cursor: 'pointer' }}
            onClick={() => setFilter(char)}
          >
            {char}
          </Link>
        ))}

        <TextField
          placeholder="Search Here"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ ml: 'auto', minWidth: 300 }}
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 4, maxHeight: '60vh', overflowY: 'auto' }}>
        <Grid container spacing={4}>
          {Object.entries(filteredReports).map(([letter, reports]) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={letter}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {letter}
              </Typography>
              {reports.map((report, idx) => (
                <Typography
                  key={idx}
                  component={Link}
                  href="#"
                  underline="hover"
                  color="primary"
                  display="block"
                  mb={0.5}
                >
                  {report}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CoGenericReport;
