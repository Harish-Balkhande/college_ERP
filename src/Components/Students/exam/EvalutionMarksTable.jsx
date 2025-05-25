import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from '@mui/material';

const rows = [
  {
    courseName: 'DATA SCIENCE USING PYTHON LAB',
    registerCategory: 'REGULAR',
    courseComponent: 'PRACTICAL',
    courseVariant: 'DC528P308-MCA',
    evaluations: [
      {
        level: 'EXTERNAL-ESE',
        component: 'ESE',
        marks: '42 / 50',
        retestMarks: '--',
        retestStatus: '--',
      },
      {
        level: 'INTERNAL-IAE',
        component: 'IAE',
        marks: '44 / 50',
        retestMarks: '--',
        retestStatus: '--',
      }
    ]
  },
  {
    courseName: 'SYSTEM ANALYSIS AND DESIGN LAB',
    registerCategory: 'REGULAR',
    courseComponent: 'PRACTICAL',
    courseVariant: 'DC528P309-MC...',
    evaluations: [
      {
        level: 'EXTERNAL-ESE',
        component: 'ESE',
        marks: '45 / 50',
        retestMarks: '--',
        retestStatus: '--',
      },
      {
        level: 'INTERNAL-IAE',
        component: 'IAE',
        marks: '46 / 50',
        retestMarks: '--',
        retestStatus: '--',
      }
    ]
  }
];

export default function CourseMarksTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="inline course table">
        <TableHead sx={{ backgroundColor: '#333' }}>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>S.No.</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Name</TableCell>
            <TableCell sx={{ color: '#fff' }}>Register Category</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Component</TableCell>
            <TableCell sx={{ color: '#fff' }}>Course Variant</TableCell>
            <TableCell sx={{ color: '#fff' }}>Evaluation Level</TableCell>
            <TableCell sx={{ color: '#fff' }}>Evaluation Level Component</TableCell>
            <TableCell sx={{ color: '#fff' }}>Marks</TableCell>
            <TableCell sx={{ color: '#fff' }}>Retest Marks</TableCell>
            <TableCell sx={{ color: '#fff' }}>Retest Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <>
              <TableRow key={`main-${rowIndex}`}>
                <TableCell rowSpan={row.evaluations.length + 1}>{rowIndex + 1}</TableCell>
                <TableCell rowSpan={row.evaluations.length + 1}>
                  <Typography variant="body2" fontWeight={600}>
                    {row.courseName}
                  </Typography>
                </TableCell>
                <TableCell rowSpan={row.evaluations.length + 1}>{row.registerCategory}</TableCell>
                <TableCell rowSpan={row.evaluations.length + 1}>{row.courseComponent}</TableCell>
                <TableCell rowSpan={row.evaluations.length + 1}>{row.courseVariant}</TableCell>
              </TableRow>
              {row.evaluations.map((evalRow, evalIndex) => (
                <TableRow key={`eval-${rowIndex}-${evalIndex}`}>
                  <TableCell>{evalRow.level}</TableCell>
                  <TableCell>{evalRow.component}</TableCell>
                  <TableCell>{evalRow.marks}</TableCell>
                  <TableCell>{evalRow.retestMarks}</TableCell>
                  <TableCell>{evalRow.retestStatus}</TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
