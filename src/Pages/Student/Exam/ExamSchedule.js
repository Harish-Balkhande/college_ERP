// src/Pages/Exam/ExamSchedule.js
import React from "react";

const ExamSchedule = () => {
  const exams = [
    {
      sno: 1,
      semester: "III",
      courseCode: "DC528T301",
      courseName: "DIGITAL SIGNAL PROCESSING",
      courseComponent: "THEORY",
      evaluationLevel: "EXTERNAL-ESE",
      evaluationLevelComponent: "ESE",
      examMode: "Offline",
      examDate: "21/05/2025",
      examTime: "11:00 AM To 02:00 PM",
      examCentre: "N/A",
      examVenue: "N/A",
      attemptNo: 1,
      type: "Retest EXT",
    },
    {
      sno: 2,
      semester: "III",
      courseCode: "DC528T302",
      courseName: "MICROCONTROLLERS",
      courseComponent: "THEORY",
      evaluationLevel: "EXTERNAL-ESE",
      evaluationLevelComponent: "ESE",
      examMode: "Offline",
      examDate: "22/05/2025",
      examTime: "11:00 AM To 02:00 PM",
      examCentre: "N/A",
      examVenue: "N/A",
      attemptNo: 1,
      type: "Retest EXT",
    },
    {
      sno: 3,
      semester: "III",
      courseCode: "DC528T303",
      courseName: "DATA COMMUNICATION",
      courseComponent: "THEORY",
      evaluationLevel: "EXTERNAL-ESE",
      evaluationLevelComponent: "ESE",
      examMode: "Offline",
      examDate: "23/05/2025",
      examTime: "11:00 AM To 02:00 PM",
      examCentre: "N/A",
      examVenue: "N/A",
      attemptNo: 1,
      type: "Retest EXT",
    },
    {
      sno: 4,
      semester: "III",
      courseCode: "UC528T307",
      courseName: "SOFT SKILLS",
      courseComponent: "THEORY",
      evaluationLevel: "EXTERNAL-ESE",
      evaluationLevelComponent: "ESE",
      examMode: "Offline",
      examDate: "27/05/2025",
      examTime: "11:00 AM To 02:00 PM",
      examCentre: "N/A",
      examVenue: "N/A",
      attemptNo: 1,
      type: "Retest EXT",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Exam Schedule</h2>
      <h4>Exam Schedule List</h4>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "14px"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0", textAlign: "left" }}>
            <th style={thStyle}>S.No.</th>
            <th style={thStyle}>Semester</th>
            <th style={thStyle}>Course Code</th>
            <th style={thStyle}>Course Name</th>
            <th style={thStyle}>Course Component</th>
            <th style={thStyle}>Evaluation Level</th>
            <th style={thStyle}>Evaluation Level Component</th>
            <th style={thStyle}>Exam Mode</th>
            <th style={thStyle}>Exam Date</th>
            <th style={thStyle}>Exam Time</th>
            <th style={thStyle}>Exam Centre</th>
            <th style={thStyle}>Exam Venue</th>
            <th style={thStyle}>Attempt No</th>
            <th style={thStyle}>Type</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.sno} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{exam.sno}</td>
              <td style={tdStyle}>{exam.semester}</td>
              <td style={tdStyle}>{exam.courseCode}</td>
              <td style={tdStyle}>{exam.courseName}</td>
              <td style={tdStyle}>{exam.courseComponent}</td>
              <td style={tdStyle}>{exam.evaluationLevel}</td>
              <td style={tdStyle}>{exam.evaluationLevelComponent}</td>
              <td style={tdStyle}>{exam.examMode}</td>
              <td style={tdStyle}>{exam.examDate}</td>
              <td style={tdStyle}>{exam.examTime}</td>
              <td style={tdStyle}>{exam.examCentre}</td>
              <td style={tdStyle}>{exam.examVenue}</td>
              <td style={tdStyle}>{exam.attemptNo}</td>
              <td style={tdStyle}>{exam.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "8px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "8px",
  verticalAlign: "top",
};

export default ExamSchedule;
