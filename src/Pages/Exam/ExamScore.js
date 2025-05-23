import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExamScore = () => {
  const [activeTab, setActiveTab] = useState('course');
  const [expandedRows, setExpandedRows] = useState([]);
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const toggleRow = (id) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const studentInfo = {
    name: "Ram Swami",
    regNumber: "GHRUA23015280237",
    batch: "2023-2025",
    stream: "GENERAL - GENERAL - MCA",
    section: "MCA_D_NGP",
    rollNumber: "NG-MCA-D-37",
    session: "Winter 2024",
    totalComponents: 8,
    cgpa: 7.53
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      background: '#f9f9f9',
      maxWidth: '1200px',
      margin: 'auto'
    },
    heading: {
      marginBottom: '20px',
      color: '#333',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    infoTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    infoCell: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
    infoHeader: {
      backgroundColor: '#f2f2f2',
      width: '20%',
      fontWeight: 'bold'
    },
    tabs: {
      marginBottom: '20px',
      display: 'flex',
      borderBottom: '1px solid #ddd',
    },
    tabButton: {
      padding: '12px 20px',
      marginRight: '10px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'all 0.3s ease'
    },
    activeTab: {
      borderBottom: '3px solid #1976d2',
      color: '#1976d2',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    thTd: {
      border: '1px solid #ddd',
      padding: '12px',
      textAlign: 'center',
    },
    th: {
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold'
    },
    expandButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#1976d2'
    },
    componentRow: {
      backgroundColor: '#f9f9f9',
    },
    accordionHeader: {
      backgroundColor: '#f5f5f5 !important',
      borderBottom: '1px solid #ddd'
    },
    detailedTableHeader: {
      backgroundColor: '#212121 !important',
      '& th': {
        color: 'white !important',
        fontWeight: 'bold !important'
      }
    }
  };

  const evaluationData = [
    {
      id: 1,
      courseName: 'DIGITAL SIGNAL PROCESSING LAB',
      registerCategory: 'REGULAR',
      courseComponent: '',
      courseVariant: '',
      evaluationLevel: '',
      evaluationLevelComponent: '',
      marks: 70,
      retestMarks: '',
      retestStatus: '',
      details: {
        type: 'LAB',
        component: 'DSP Practical',
        marks: 70
      }
    },
    {
      id: 2,
      courseName: 'MICROCONTROLLERS LAB',
      registerCategory: 'REGULAR',
      courseComponent: '',
      courseVariant: '',
      evaluationLevel: '',
      evaluationLevelComponent: '',
      marks: 66,
      retestMarks: '',
      retestStatus: '',
      details: {
        type: 'LAB',
        component: 'MCU Practical',
        marks: 66
      }
    },
    {
      id: 3,
      courseName: 'DATA COMMUNICATION',
      registerCategory: 'REGULAR',
      courseComponent: '',
      courseVariant: '',
      evaluationLevel: '',
      evaluationLevelComponent: '',
      marks: 50,
      retestMarks: '',
      retestStatus: '',
      details: {
        type: 'THEORY',
        component: 'DC Theory',
        marks: 50
      }
    }
  ];

  const courseData = [
    {
      id: 1,
      courseName: 'ARTIFICIAL INTELLIGENCE',
      registerCategory: 'REGULAR',
      components: [{
        type: 'THEORY',
        variant: 'DCS28T303-MCA-DCS28T30...',
        credits: 3,
        grade: 'BB',
        marks: '71/100',
        percentage: '71%',
        result: 'PASS',
        status: 'ACTIVE'
      }]
    },
    {
      id: 2,
      courseName: 'DATA SCIENCE',
      registerCategory: 'REGULAR',
      components: [{
        type: 'LAB',
        variant: 'DCS28P304-MCA-DCS28P30...',
        credits: 2,
        grade: 'AB',
        marks: '65/100',
        percentage: '65%',
        result: 'PASS',
        status: 'ACTIVE'
      }]
    }
  ];

  // Updated semesterData with detailed info for all semesters
  const semesterData = [
    {
      id: 'sem1',
      name: 'Semester 1',
      sgpa: 7.5,
      detailed: true,
      courses: [
        {
          code: 'DCS28T301',
          name: 'Artificial Intelligence',
          component: 'THEORY',
          session: 'Winter 2023',
          credits: 3,
          marks: '71 / 100',
          percentage: '71%',
          grade: 'BB',
          gradePoint: 7,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        },
        {
          code: 'DCS28P302',
          name: 'Data Science Lab',
          component: 'PRACTICAL',
          session: 'Winter 2023',
          credits: 2,
          marks: '65 / 100',
          percentage: '65%',
          grade: 'AB',
          gradePoint: 8,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        }
      ]
    },
    {
      id: 'sem2',
      name: 'Semester 2',
      sgpa: 7.9,
      detailed: true,
      courses: [
        {
          code: 'CN528T305',
          name: 'Computer Networks',
          component: 'THEORY',
          session: 'Summer 2024',
          credits: 3,
          marks: '75 / 100',
          percentage: '75%',
          grade: 'BA',
          gradePoint: 8,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        },
        {
          code: 'OS528P306',
          name: 'OS Lab',
          component: 'PRACTICAL',
          session: 'Summer 2024',
          credits: 2,
          marks: '89 / 100',
          percentage: '89%',
          grade: 'AA',
          gradePoint: 10,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        }
      ]
    },
    {
      id: 'sem3',
      name: 'Semester III, Winter 2024',
      sgpa: 8.25,
      detailed: true,
      courses: [
        {
          code: 'DC528P308',
          name: 'DATA SCIENCE LAB',
          component: 'PRACTICAL',
          session: 'Winter 2024',
          credits: 2,
          marks: '86 / 100',
          percentage: '86%',
          grade: 'AB',
          gradePoint: 9,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        },
        {
          code: 'DC528P309',
          name: 'SYSTEM ANALYSIS LAB',
          component: 'PRACTICAL',
          session: 'Winter 2024',
          credits: 2,
          marks: '91 / 100',
          percentage: '91%',
          grade: 'AA',
          gradePoint: 10,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        },
        {
          code: 'DC528T310',
          name: 'MICROPROCESSORS AND MICROCONTROLLERS',
          component: 'THEORY',
          session: 'Winter 2024',
          credits: 3,
          marks: '74 / 100',
          percentage: '74%',
          grade: 'BB',
          gradePoint: 7,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        }
      ]
    }
  ];

  // Render detailed semester table for all semesters
  const renderSemesterMarksTab = () => (
    <div>
      {semesterData.map((sem) => (
        <Accordion
          key={sem.id}
          expanded={expandedAccordion === sem.id}
          onChange={handleAccordionChange(sem.id)}
          style={{ marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            style={styles.accordionHeader}
          >
            <Typography style={{ flexGrow: 1, fontWeight: 600 }}>{sem.name}</Typography>
            <Typography style={{ fontWeight: 600 }}>SGPA: {sem.sgpa}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: 0 }}>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead style={styles.detailedTableHeader}>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Course Code</TableCell>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Component</TableCell>
                    <TableCell>Session</TableCell>
                    <TableCell>Credits</TableCell>
                    <TableCell>Marks</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Grade Point</TableCell>
                    <TableCell>Result</TableCell>
                    <TableCell>Register Type</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sem.courses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{course.code || '-'}</TableCell>
                      <TableCell>{course.name || '-'}</TableCell>
                      <TableCell>{course.component || '-'}</TableCell>
                      <TableCell>{course.session || studentInfo.session}</TableCell>
                      <TableCell>{course.credits || '-'}</TableCell>
                      <TableCell>{course.marks || '-'}</TableCell>
                      <TableCell>{course.percentage || '-'}</TableCell>
                      <TableCell>{course.grade || '-'}</TableCell>
                      <TableCell>{course.gradePoint || '-'}</TableCell>
                      <TableCell>
                        {course.result ? (
                          <Chip label={course.result} color="success" size="small" />
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell>{course.registerType || '-'}</TableCell>
                      <TableCell>
                        {course.status ? (
                          <Chip label={course.status} color="primary" size="small" />
                        ) : (
                          '-'
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );

  const renderEvaluationTab = () => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={styles.detailedTableHeader}>
          <TableRow>
            <TableCell>Evaluation Level</TableCell>
            <TableCell>Course Component</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Retest Marks</TableCell>
            <TableCell>Retest Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {evaluationData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.evaluationLevel || '-'}</TableCell>
              <TableCell>{item.courseComponent || '-'}</TableCell>
              <TableCell>{item.marks}</TableCell>
              <TableCell>{item.retestMarks || '-'}</TableCell>
              <TableCell>{item.retestStatus || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderCourseComponentTab = () => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={styles.detailedTableHeader}>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Register Category</TableCell>
            <TableCell>Component Type</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseData.map((course) => (
            <React.Fragment key={course.id}>
              <TableRow>
                <TableCell colSpan={8} style={{ fontWeight: 'bold', backgroundColor: '#eee' }}>
                  {course.courseName} ({course.registerCategory})
                </TableCell>
              </TableRow>
              {course.components.map((comp, index) => (
                <TableRow key={index}>
                  <TableCell>{/* Empty: courseName shown in parent row */}</TableCell>
                  <TableCell>{course.registerCategory}</TableCell>
                  <TableCell>{comp.type}</TableCell>
                  <TableCell>{comp.credits}</TableCell>
                  <TableCell>{comp.grade}</TableCell>
                  <TableCell>{comp.marks}</TableCell>
                  <TableCell>
                    <Chip label={comp.result || 'PASS'} color="success" size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip label={comp.status || 'ACTIVE'} color="primary" size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div style={styles.container}>
      <Typography style={styles.heading}>Student Exam Scores</Typography>

      <table style={styles.infoTable}>
        <tbody>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Name</td>
            <td style={styles.infoCell}>{studentInfo.name}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Reg Number</td>
            <td style={styles.infoCell}>{studentInfo.regNumber}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Batch</td>
            <td style={styles.infoCell}>{studentInfo.batch}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Stream</td>
            <td style={styles.infoCell}>{studentInfo.stream}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Section</td>
            <td style={styles.infoCell}>{studentInfo.section}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Roll Number</td>
            <td style={styles.infoCell}>{studentInfo.rollNumber}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Session</td>
            <td style={styles.infoCell}>{studentInfo.session}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Total Components</td>
            <td style={styles.infoCell}>{studentInfo.totalComponents}</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>CGPA</td>
            <td style={styles.infoCell}>{studentInfo.cgpa}</td>
          </tr>
        </tbody>
      </table>

      <div style={styles.tabs}>
        <button
          style={{ ...styles.tabButton, ...(activeTab === 'course' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('course')}
        >
          Course Component
        </button>
        <button
          style={{ ...styles.tabButton, ...(activeTab === 'evaluation' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('evaluation')}
        >
          Evaluation Level
        </button>
        <button
          style={{ ...styles.tabButton, ...(activeTab === 'semester' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('semester')}
        >
          Semester-wise Marks
        </button>
      </div>

      {activeTab === 'course' && renderCourseComponentTab()}
      {activeTab === 'evaluation' && renderEvaluationTab()}
      {activeTab === 'semester' && renderSemesterMarksTab()}
    </div>
  );
};

export default ExamScore;
