import React, { useState } from "react";

const DownloadExamForm = () => {
  const [examType, setExamType] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  const handleSearch = () => {
    if (!examType) {
      alert("Please select an exam type.");
      return;
    }

    // Simulate search action
    console.log("Searched for:", examType);
    setShowDownload(true); // Show download button
  };

  const handleDownload = () => {
    // Simulated download logic
    const fileContent = `Exam Type: ${examType}`;
    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${examType}_exam_form.txt`;
    link.click();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ fontWeight: "bold" }}>Download Exam Form</h2>

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
            onChange={(e) => {
              setExamType(e.target.value);
              setShowDownload(false);
            }}
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

        {showDownload && (
  <button
    onClick={handleDownload}
    style={{
      backgroundColor: "#007bff",
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
    ⬇️ Download form   
  </button> //whenever we select exam type then we click on search then the download form button shows
)}

      </div>
    </div>
  );
};

export default DownloadExamForm;
