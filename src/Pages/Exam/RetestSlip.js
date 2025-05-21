import React from 'react';
import { FaDownload } from 'react-icons/fa'; // For arrow icon

function RetestSlip() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/RETEST_EXAM_SLIP.pdf'; // Make sure PDF is in /public folder
    link.download = 'RETEST_EXAM_SLIP.pdf';
    link.click();
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      
      {/* Header above the box */}
      <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#333' }}>
        My Retest Exam Slip 
      </h2>

      {/* Box with download button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9'
      }}>
        <button 
          onClick={handleDownload}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <FaDownload />
          PDF Download
        </button>
      </div>
    </div>
  );
}

export default RetestSlip;
