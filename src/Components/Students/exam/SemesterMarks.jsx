import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const gradeData = [
  {
    semester: "Semester II, Summer 2024",
    sgpa: 6.89,
    courses: [
      {
        code: "DC528P206",
        name: "OPERATING SYSTEMS",
        component: "PRACTICAL",
        session: "Summer 2024",
        credits: 2,
        marks: "88 / 100",
        percentage: "88%",
        grade: "AA",
        gradePoint: 10,
        result: "PASS",
        registerType: "REGULAR",
        status: "ACTIVE"
      }
    ]
  },
  {
    semester: "Semester III, Winter 2024",
    sgpa: 8.25,
    courses: [
        {
        code: "DC528P206",
        name: "OPERATING SYSTEMS",
        component: "PRACTICAL",
        session: "Summer 2024",
        credits: 2,
        marks: "88 / 100",
        percentage: "88%",
        grade: "AA",
        gradePoint: 10,
        result: "PASS",
        registerType: "REGULAR",
        status: "ACTIVE"
      }
    ]
  }
];

const SemesterMarks = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box p={2} >
      {gradeData.map((semester, index) => (
        <Accordion
          key={semester.semester}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Typography fontWeight={600}>{semester.semester}</Typography>
              <Typography fontWeight={600}>SGPA : {semester.sgpa}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{overflow:'scroll'}}>
            {semester.courses.length > 0 ? (
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#174D38", color: "#fff" }}>
                    {[
                      "S. No.",
                      "Course Code",
                      "Course Name",
                      "Course Component",
                      "Session",
                      "Credits",
                      "Marks",
                      "Percentage",
                      "Grade",
                      "Grade Point",
                      "Result",
                      "Register Type",
                      "Status"
                    ].map((heading) => (
                      <TableCell key={heading} sx={{ color: "white" }}>
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {semester.courses.map((course, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{idx + 1}</TableCell>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.component}</TableCell>
                      <TableCell>{course.session}</TableCell>
                      <TableCell>{course.credits}</TableCell>
                      <TableCell>{course.marks}</TableCell>
                      <TableCell>{course.percentage}</TableCell>
                      <TableCell>{course.grade}</TableCell>
                      <TableCell>{course.gradePoint}</TableCell>
                      <TableCell>
                        <Chip
                          label={course.result}
                          color="success"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{course.registerType}</TableCell>
                      <TableCell>
                        <Chip
                          label={course.status}
                          color="success"
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Typography>No courses found for this semester.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SemesterMarks;
