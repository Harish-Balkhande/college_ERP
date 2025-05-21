import React, { useState } from "react";

function ScoreCard() {
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [examType, setExamType] = useState("");

  const handleDownload = () => {
    alert("Download");
  };

  const styles = {
    container: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 6,
      margin: 20,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      maxWidth: 700,
    },
    title: {
      marginBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      // Text outside the box, so not part of container
    },
    searchBox: {
      border: "1px solid #ccc",
      padding: "15px 20px", // padding inside the box
      marginBottom: 20,
      borderRadius: 4,
      display: "flex",
      gap: 20,
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "#fff",
      fontWeight: "normal",
    },
    form: {
      display: "flex",
      gap: 20,
      marginBottom: 20,
      flexWrap: "wrap",
      border: "1px solid #ccc", // Moved border here to wrap form fields and button
      padding: 20,
      borderRadius: 4,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
    },
    fieldBox: {
      minWidth: 200,
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: 5,
      fontSize: 14,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
    asterisk: {
      color: "red",
      marginLeft: 4,
    },
    select: {
      padding: 8,
      borderRadius: 4,
      border: "1px solid #ccc",
      fontSize: 14,
    },
    button: {
      padding: "10px 25px",
      backgroundColor: "#28a745",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      height: 40,
      alignSelf: "flex-end",
      marginLeft: 10,
    },
  };

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={styles.title}>Score Card</h2>

      <div style={styles.form}>
        <div style={styles.fieldBox}>
          <label style={styles.label}>
            Semester
            <span style={styles.asterisk}>*</span>
          </label>
          <select
            style={styles.select}
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
          </select>
        </div>

        <div style={styles.fieldBox}>
          <label style={styles.label}>
            Academic Session
            <span style={styles.asterisk}>*</span>
          </label>
          <select
            style={styles.select}
            value={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>

        <div style={styles.fieldBox}>
          <label style={styles.label}>
            Exam Type
            <span style={styles.asterisk}>*</span>
          </label>
          <select
            style={styles.select}
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="Midterm">Midterm</option>
            <option value="Final">Final</option>
            <option value="Re-Exam">Re-Exam</option>
          </select>
        </div>

        <button style={styles.button} onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
}

export default ScoreCard;
