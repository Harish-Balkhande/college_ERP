import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box,
} from "@mui/material";

const studentInfo = {
  name: "Tushar Kamlakar Petkar",
  regNumber: "GHRUA23015280237",
  batch: "2023-2025",
  stream: "MCA - MCA - III",
  section: "MCA_D_NGP",
  rollNumber: "NG-MCA-D-37",
  session: "Winter 2024",
  totalComponent: 8,
};

const courseData = [
  {
    course: "ARTIFICIAL INTELLIGENCE",
    component: "THEORY",
    variant: "DC528T303-MCA-DC528T303-Winter 2024-MCA_D_NGP",
    presents: 33,
    special: 0,
    lectures: 48,
    percentage: "69%",
  },
  {
    course: "CYBERSECURITY",
    component: "THEORY",
    variant: "DE528T304-MCA-DE528T304-Winter 2024-MCA_D_NGP",
    presents: 41,
    special: 0,
    lectures: 50,
    percentage: "82%",
  },
  {
    course: "DATA SCIENCE USING PYTHON",
    component: "THEORY",
    variant: "DC528T301-MCA-DC528T301-Winter 2024-MCA_D_NGP",
    presents: 34,
    special: 0,
    lectures: 45,
    percentage: "76%",
  },
  {
    course: "DATA SCIENCE USING PYTHON...",
    component: "PRACTICAL",
    variant: "DC528P308-MCA-DC528P308-Winter 2024-MCA_D_NGP",
    presents: 20,
    special: 0,
    lectures: 29,
    percentage: "69%",
  },
  {
    course: "MINI PROJECT AND SEMINAR",
    component: "PRACTICAL",
    variant: "PR528P310-MCA-PR528P310-Winter 2024-SEC_D_NGP",
    presents: 0,
    special: 0,
    lectures: 0,
    percentage: "0%",
  },
];

export default function AttendanceUI() {
  return (
    <Box p={2}>
      <Card variant="outlined">
        <CardContent>
    
          <Typography variant="h5" gutterBottom>
            My Attendance
          </Typography>
          <Grid container spacing={15}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography><strong>Name:</strong> {studentInfo.name}</Typography>
              <Typography><strong>Registration Number:</strong> {studentInfo.regNumber}</Typography>
              <Typography><strong>Academic Batch:</strong> {studentInfo.batch}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography><strong>Stream:</strong> {studentInfo.stream}</Typography>
              <Typography><strong>Class Section:</strong> {studentInfo.section}</Typography>
              <Typography><strong>Roll Number:</strong> {studentInfo.rollNumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography><strong>Academic Session:</strong> {studentInfo.session}</Typography>
              <Typography><strong>Total Component:</strong> {studentInfo.totalComponent}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Course Components
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>S.No.</strong></TableCell>
                <TableCell><strong>Course</strong></TableCell>
                <TableCell><strong>Course Component</strong></TableCell>
                <TableCell><strong>Course Variant</strong></TableCell>
                <TableCell><strong>Presents</strong></TableCell>
                <TableCell><strong>Special Attendance</strong></TableCell>
                <TableCell><strong>Lectures</strong></TableCell>
                <TableCell><strong>Attendance %</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>{row.component}</TableCell>
                  <TableCell>{row.variant}</TableCell>
                  <TableCell>{row.presents}</TableCell>
                  <TableCell>{row.special}</TableCell>
                  <TableCell>{row.lectures}</TableCell>
                  <TableCell>{row.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
