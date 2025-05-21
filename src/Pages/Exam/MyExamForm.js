import React, { useState } from "react";

const ExamForm = () => {
  const [examType, setExamType] = useState("");

  const handleSearch = () => {
    if (!examType) {
      alert("Please select an exam type.");
      return;
    }
    console.log("Searching for:", examType);
    // Add your search logic here
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ fontWeight: "bold" }}>My Exam Form</h2>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginTop: "20px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div>
          <label htmlFor="examType" style={{ fontWeight: "500" }}>
            Exam Type <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <select
            id="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "200px",
            }}
          >
            <option value="">Choose</option>
            <option value="Regular">Regular</option>
            <option value="Retest">Retest</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#1ed61e",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "22px",
          }}
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default ExamForm;
