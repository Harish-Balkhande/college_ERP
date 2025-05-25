// import React from 'react';

// const ExamScore = () => {
//   const containerStyle = {
//     fontFamily: 'Arial, sans-serif',
//     padding: '20px',
//     background: '#f9f9f9',
//   };

//   const headingStyle = {
//     marginBottom: '20px',
//     color: '#333',
//   };

//   const infoStyle = {
//     marginBottom: '20px',
//   };

//   const pStyle = {
//     margin: '4px 0',
//   };

//   const tabsStyle = {
//     marginBottom: '20px',
//   };

//   const buttonStyle = {
//     padding: '10px 15px',
//     marginRight: '10px',
//     border: 'none',
//     background: '#e0e0e0',
//     cursor: 'pointer',
//   };

//   const activeButtonStyle = {
//     ...buttonStyle,
//     background: '#007bff',
//     color: 'white',
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     background: 'white',
//   };

//   const thTdStyle = {
//     border: '1px solid #ddd',
//     padding: '8px',
//     textAlign: 'center',
//   };

//   const thStyle = {
//     ...thTdStyle,
//     backgroundColor: '#f2f2f2',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Exam Score</h2>

//       <div style={infoStyle}>
//         <p style={pStyle}><strong>Name:</strong> Ram Swami</p>
//         <p style={pStyle}><strong>Registration Number:</strong> GHRU23XYZ</p>
//         <p style={pStyle}><strong>Stream:</strong> BTech</p>
//         <p style={pStyle}><strong>Academic Session:</strong> Winter 2024</p>
//         <p style={pStyle}><strong>Class Section:</strong> BT_D_NGP</p>
//         <p style={pStyle}><strong>Total Components:</strong> 8</p>
//         <p style={pStyle}><strong>Academic Batch:</strong> 2023-2025</p>
//         <p style={pStyle}><strong>Roll Number:</strong> NG-BTECH-D-37</p>
//         <p style={pStyle}><strong>CGPA:</strong> 7.53</p>
//       </div>

//       <div style={tabsStyle}>
//         <button style={activeButtonStyle}>Evaluation Level Component Marks</button>
//         <button style={buttonStyle}>Course Component Marks</button>
//         <button style={buttonStyle}>Semester Marks</button>
//       </div>

//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>S.No.</th>
//             <th style={thStyle}>Course Name</th>
//             <th style={thStyle}>Register Category</th>
//             <th style={thStyle}>Course Component</th>
//             <th style={thStyle}>Course Variant</th>
//             <th style={thStyle}>Evaluation Level</th>
//             <th style={thStyle}>Evaluation Level Component</th>
//             <th style={thStyle}>Marks</th>
//             <th style={thStyle}>Retest Marks</th>
//             <th style={thStyle}>Retest Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={thTdStyle}>1</td>
//             <td style={thTdStyle}>DIGITAL SIGNAL PROCESSING LAB</td>
//             <td style={thTdStyle}>REGULAR</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}>70</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//           </tr>
//           <tr>
//             <td style={thTdStyle}>2</td>
//             <td style={thTdStyle}>MICROCONTROLLERS LAB</td>
//             <td style={thTdStyle}>REGULAR</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}>66</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//           </tr>
//           <tr>
//             <td style={thTdStyle}>3</td>
//             <td style={thTdStyle}>DATA COMMUNICATION</td>
//             <td style={thTdStyle}>REGULAR</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}>50</td>
//             <td style={thTdStyle}></td>
//             <td style={thTdStyle}></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExamScore;



import React, { useState } from 'react';
import EvalutionMarks from '../../../Components/Students/exam/EvalutionMarksTable';
import CourseComponentMarks from '../../../Components/Students/exam/CourseComponentMarks';

const ExamScore = () => {
  const [activeTab, setActiveTab] = useState('evaluation');
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (id) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const baseCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      background: '#f9f9f9',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      marginBottom: '20px',
      color: '#333',
      textAlign: 'center',
    },
    infoTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      background: 'white',
    },
    infoCell: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    infoHeader: {
      backgroundColor: '#f2f2f2',
      width: '20%',
    },
    tabs: {
      marginBottom: '20px',
      display: 'flex',
      borderBottom: '1px solid #ddd',
    },
    tabButton: {
      padding: '10px 15px',
      marginRight: '10px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
    },
    activeTab: {
      borderBottom: '3px solid #007bff',
      color: '#007bff',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
    },
    thTd: baseCellStyle,
    th: {
      ...baseCellStyle,
      backgroundColor: '#f2f2f2',
    },
    expandButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    componentRow: {
      backgroundColor: '#f1f1f1',
    },
    semesterHeader: {
      backgroundColor: '#e9ecef',
      padding: '10px',
      margin: '20px 0 10px 0',
      fontWeight: 'bold',
    }
  };

  const semesterMarksData = [
    {
      semester: 'Semester III, Winter 2024',
      courses: [
        {
          id: 1,
          courseCode: 'DCS28P308',
          courseName: 'DATA SCIENCE...',
          courseComponent: 'PRACTICAL',
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
          id: 2,
          courseCode: 'DCS28P309',
          courseName: 'SYSTEM ANALY...',
          courseComponent: 'PRACTICAL',
          session: 'Winter 2024',
          credits: 2,
          marks: '91 / 99',
          percentage: '91%',
          grade: 'AA',
          gradePoint: 10,
          result: 'PASS',
          registerType: 'REGULAR',
          status: 'ACTIVE'
        }
      ]
    }
  ];

  const renderSemesterTab = () => (
    <div>
      {semesterMarksData.map((semester, semIndex) => (
        <div key={semIndex}>
          <div style={styles.semesterHeader}>{semester.semester}</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>S.No.</th>
                <th style={styles.th}>Course Code</th>
                <th style={styles.th}>Course Name</th>
                <th style={styles.th}>Course Component</th>
                <th style={styles.th}>Session</th>
                <th style={styles.th}>Credits</th>
                <th style={styles.th}>Marks</th>
                <th style={styles.th}>Percentage</th>
                <th style={styles.th}>Grade</th>
                <th style={styles.th}>Grade Point</th>
                <th style={styles.th}>Result</th>
                <th style={styles.th}>Register Type</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map((course, index) => (
                <React.Fragment key={course.id}>
                  <tr>
                    <td style={styles.thTd}>{index + 1}</td>
                    <td style={styles.thTd}>{course.courseCode}</td>
                    <td style={styles.thTd}>{course.courseName}</td>
                    <td style={styles.thTd}>{course.courseComponent}</td>
                    <td style={styles.thTd}>{course.session}</td>
                    <td style={styles.thTd}>{course.credits}</td>
                    <td style={styles.thTd}>{course.marks}</td>
                    <td style={styles.thTd}>{course.percentage}</td>
                    <td style={styles.thTd}>{course.grade}</td>
                    <td style={styles.thTd}>{course.gradePoint}</td>
                    <td style={styles.thTd}>{course.result}</td>
                    <td style={styles.thTd}>{course.registerType}</td>
                    <td style={styles.thTd}>{course.status}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Exam Score</h2>

      <table style={styles.infoTable}>
        <tbody>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Name:</td>
            <td style={styles.infoCell}>TUSHAR KAMLAKAR PETKAR</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Stream:</td>
            <td style={styles.infoCell}>GENERAL - GENERAL - MC...</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Academic Session:</td>
            <td style={styles.infoCell}>Winter 2024</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Registration Number:</td>
            <td style={styles.infoCell}>GHRUA23015280237</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Class Section:</td>
            <td style={styles.infoCell}>MCA_D_NGP</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Total Components:</td>
            <td style={styles.infoCell}>8</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Academic Batch:</td>
            <td style={styles.infoCell}>2023-2025</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Roll Number:</td>
            <td style={styles.infoCell}>NG-MCA-D-37</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>CGPA:</td>
            <td style={styles.infoCell}>7.53</td>
          </tr>
          <tr>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Major:</td>
            <td style={styles.infoCell}>--</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}>Minor:</td>
            <td style={styles.infoCell}>--</td>
            <td style={{ ...styles.infoCell, ...styles.infoHeader }}></td>
            <td style={styles.infoCell}></td>
          </tr>
        </tbody>
      </table>

      <div style={styles.tabs}>
        <button
          style={activeTab === 'evaluation' ? { ...styles.tabButton, ...styles.activeTab } : styles.tabButton}
          onClick={() => setActiveTab('evaluation')}
        >
          Evaluation Level Component Marks
        </button>
        <button
          style={activeTab === 'course' ? { ...styles.tabButton, ...styles.activeTab } : styles.tabButton}
          onClick={() => setActiveTab('course')}
        >
          Course Component Marks
        </button>
        <button
          style={activeTab === 'semester' ? { ...styles.tabButton, ...styles.activeTab } : styles.tabButton}
          onClick={() => setActiveTab('semester')}
        >
          Semester Marks
        </button>
      </div>

      {activeTab === 'evaluation' && <EvalutionMarks />}
      {activeTab === 'course' && <CourseComponentMarks />}
      {activeTab === 'semester' && renderSemesterTab()}
    </div>
  );
};

export default ExamScore;
