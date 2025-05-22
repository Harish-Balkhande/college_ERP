import React from 'react';

const ExamScore = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    background: '#f9f9f9',
  };

  const headingStyle = {
    marginBottom: '20px',
    color: '#333',
  };

  const infoStyle = {
    marginBottom: '20px',
  };

  const pStyle = {
    margin: '4px 0',
  };

  const tabsStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    marginRight: '10px',
    border: 'none',
    background: '#e0e0e0',
    cursor: 'pointer',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: '#007bff',
    color: 'white',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    background: 'white',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Exam Score</h2>

      <div style={infoStyle}>
        <p style={pStyle}><strong>Name:</strong> Ram Swami</p>
        <p style={pStyle}><strong>Registration Number:</strong> GHRU23XYZ</p>
        <p style={pStyle}><strong>Stream:</strong> BTech</p>
        <p style={pStyle}><strong>Academic Session:</strong> Winter 2024</p>
        <p style={pStyle}><strong>Class Section:</strong> BT_D_NGP</p>
        <p style={pStyle}><strong>Total Components:</strong> 8</p>
        <p style={pStyle}><strong>Academic Batch:</strong> 2023-2025</p>
        <p style={pStyle}><strong>Roll Number:</strong> NG-BTECH-D-37</p>
        <p style={pStyle}><strong>CGPA:</strong> 7.53</p>
      </div>

      <div style={tabsStyle}>
        <button style={activeButtonStyle}>Evaluation Level Component Marks</button>
        <button style={buttonStyle}>Course Component Marks</button>
        <button style={buttonStyle}>Semester Marks</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No.</th>
            <th style={thStyle}>Course Name</th>
            <th style={thStyle}>Register Category</th>
            <th style={thStyle}>Course Component</th>
            <th style={thStyle}>Course Variant</th>
            <th style={thStyle}>Evaluation Level</th>
            <th style={thStyle}>Evaluation Level Component</th>
            <th style={thStyle}>Marks</th>
            <th style={thStyle}>Retest Marks</th>
            <th style={thStyle}>Retest Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>1</td>
            <td style={thTdStyle}>DIGITAL SIGNAL PROCESSING LAB</td>
            <td style={thTdStyle}>REGULAR</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}>70</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
          </tr>
          <tr>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>MICROCONTROLLERS LAB</td>
            <td style={thTdStyle}>REGULAR</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}>66</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
          </tr>
          <tr>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>DATA COMMUNICATION</td>
            <td style={thTdStyle}>REGULAR</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}>50</td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamScore;
