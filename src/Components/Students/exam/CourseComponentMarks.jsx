import React from 'react';
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const courseComponentData = [
  {
    courseName: 'ARTIFICIAL INTELLIGENCE',
    registerCategory: 'REGULAR',
    courseComponent: 'THEORY',
    courseVariant: 'DC528T303-MCA-DC528T30...',
    credits: 3,
    grade: 'BB',
    marks: '71 / 100',
    percentage: '71%',
    result: 'PASS',
    status: 'ACTIVE',
  }
];

export default function CourseComponentMarks() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="course component marks table">
        <TableHead sx={{ backgroundColor: '#333' }}>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>S.No.</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Name</TableCell>
            <TableCell sx={{ color: '#fff' }}>Register Category</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Component</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Variant</TableCell>
            <TableCell sx={{ color: '#fff' }}>Credits</TableCell>
            <TableCell sx={{ color: '#fff' }}>Grade</TableCell>
            <TableCell sx={{ color: '#fff' }}>Marks</TableCell>
            <TableCell sx={{ color: '#fff' }}>Percentage</TableCell>
            <TableCell sx={{ color: '#fff' }}>Result</TableCell>
            <TableCell sx={{ color: '#fff' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseComponentData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.courseName}</TableCell>
              <TableCell>{row.registerCategory}</TableCell>
              <TableCell>{row.courseComponent}</TableCell>
              <TableCell>{row.courseVariant}</TableCell>
              <TableCell>{row.credits}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.marks}</TableCell>
              <TableCell>{row.percentage}</TableCell>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
