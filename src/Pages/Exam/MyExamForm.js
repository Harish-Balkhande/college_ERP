import React, { useState } from "react";

const ExamForm = () => {
  const [examType, setExamType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSearch = () => {
    if (!examType) {
      alert("Please select an exam type.");
      return;
    }
    setShowForm(true);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontWeight: "bold" }}>My Exam Form</h2>

      {/* Search Exam Type */}
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

      {/* Exam Form Display */}
      {showForm && (
        <div style={{ marginTop: "30px" }}>
          {/* Student Info */}
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ color: "green", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              Student Information
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", lineHeight: "1.8em" }}>
              <div style={{ width: "50%" }}>
                <strong>Registration Number:</strong> GHRUA23015280237<br />
                <strong>Semester:</strong> III<br />
                <strong>Academic Batch:</strong> 2023–2025<br />
                <strong>Fees Status:</strong>{" "}
                <span
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  NO DUES
                </span>
              </div>
              <div style={{ width: "50%" }}>
                <strong>Name:</strong> TUSHAR PETKAR<br />
                <strong>Degree:</strong> MCA<br />
                <strong>Academic Session:</strong> Winter 2024<br />
                <strong>Branch:</strong> MASTER OF COMPUTER APPLICATION<br />
                <strong>Approval Status:</strong> --<br />
                <strong>Outstanding Fees:</strong> ₹ 0.00
              </div>
            </div>
          </div>

          {/* Course List */}
          <div
            style={{
              border: "1px solid #ccc",
              marginTop: "20px",
              borderRadius: "5px",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Course List</h3>

            {/* Scrollable Table Container */}
            <div style={{ maxHeight: "250px", overflowY: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#333", color: "#fff", position: "sticky", top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{ padding: "10px" }}></th>
                    <th>S.No.</th>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Component</th>
                    <th>Credits</th>
                    <th>Register Session</th>
                    <th>Register Type</th>
                    <th>Register</th>
                    <th>Register Status</th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} style={{ textAlign: "center", borderBottom: "1px solid #eee" }}>
                      <td>
                        <input type="checkbox" checked readOnly />
                      </td>
                      <td>{i + 1}</td>
                      <td>DC528T30{i + 1}</td>
                      <td>Course Name {i + 1}</td>
                      <td>THEORY</td>
                      <td>3</td>
                      <td>Winter 2024</td>
                      <td>Regular</td>
                      <td>Yes</td>
                      <td>
                        <span
                          style={{
                            backgroundColor: "#28a745",
                            color: "white",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            fontWeight: "bold",
                          }}
                        >
                          ACTIVE
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamForm;
