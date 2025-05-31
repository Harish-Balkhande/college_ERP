import React from "react";
import "../styles/studentInfoDisplay.css";

const studentData = [
  { label: "Name", value: "TUSHAR KAMLAKAR PETKAR" },
  { label: "Stream", value: "GENERAL - GENERAL - MCA" },
  { label: "Academic Session", value: "Summer 2025" },
  { label: "Registration Number", value: "GHRUA23015280237" },
  { label: "Class Section", value: "MCA_D_NGP" },
  { label: "Total Components", value: "2" },
  { label: "Academic Batch", value: "2023-2025" },
  { label: "Roll Number", value: "NG-MCA-D-37" },
  { label: "CGPA", value: "7.53" },
  { label: "Major", value: "--" },
  { label: "Minor", value: "--" }
];

const StudentInformationDisplay = () => {
  return (
    <div className="student-card">
      <div className="student-title">Student Information</div>
      <div className="student-grid">
        {studentData.map(({ label, value }) => (
          <div className="student-item" key={label}>
            <span className="label">{label}</span>
            <span className="value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInformationDisplay;
