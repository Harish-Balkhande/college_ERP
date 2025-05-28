import React, { useState } from 'react';
import '../../styles/student/admissionForm.css';

const formatPlaceholder = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

export default function EducationForm() {
  const [formData, setFormData] = useState({
    examPassed: 'BCA',
    boardUniversity: 'G H Raisoni University, Amravati',
    instituteSchool: 'Ghru Amravati College',
    rollNumber: '100',
    passingYear: '2023',
    resultType: 'Percentage',
    percentage: '7.4 %',
    stream: '',
    medium: '',
    mode: '',
    gapReason: '',
    gapYear: '',
    resultStatus: '',
    rank: '',
    degreeName: '',
    branchName: '',
    duration: '',
    discipline: '',
    examScheme: '',
    enrollmentNumber: '',
    markObtained: '',
    outOfMarked: '',
  });

  const [documents, setDocuments] = useState({
    xeroxDegreeMarksheet: null,
    degreeMarksheet: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setDocuments((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form">
          {/* Educational Qualification Section */}
          <div className="details education">
            <span className="title">Educational Qualification</span>
            <div className="fields">
              {Object.entries(formData).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleChange}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Documents Upload Section */}
          <div className="details documents">
            <span className="title">Documents</span>
            <div className="fields">
              {Object.entries(documents).map(([key, file]) => (
                <div className="input-field" key={key}>
                  <label style={{ display: 'block', marginBottom: '4px' }}>
                    {formatPlaceholder(key)}
                  </label>
                  <input
                    type="file"
                    name={key}
                    onChange={handleFileChange}
                  />
                  {file && (
                    <small style={{ display: 'block', marginTop: '4px' }}>
                      Selected: {file.name}
                    </small>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
