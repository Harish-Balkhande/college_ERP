// import React, { useState } from 'react';
// import '../../styles/student/admissionForm.css';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// export default function StudentAcademicRecords() {
//   const { accessToken } = useSelector(state => state.auth);

//   const [record, setRecord] = useState({
//   examPassed: "Bachelor of Computer Applications (BCA)",
//   boardOrUniversity: "G H Raisoni University, Amravati",
//   instituteOrSchool: "GHRU Amravati College of Computer Science",
//   rollNumber: "10002345",
//   passingYear: "2023",
//   resultType: "CGPA",
//   percentage: "7.4 CGPA",
//   stream: "Computer Applications",
//   medium: "English",
//   mode: "Regular",
//   gapReason: "Health issues during 2021 academic year",
//   gapYear: "2021",
//   resultStatus: "Pass",
//   examRank: "5th Rank in University",
//   degreeName: "Bachelor of Computer Applications",
//   branchName: "Computer Science",
//   durationInYear: "3",
//   discipline: "Information Technology",
//   examScheme: "Semester",
//   enrollmentNumber: "GHRAU2020BCA1001",
//   markObtained: "740",
//   outOfMarked: "1000",
//   xeroxOfDegreeMarksheet: "Available",
//   degreeMarksheet: "Available"
// });

//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   const formatLabel = (key) =>
//     key
//       .replace(/([A-Z])/g, ' $1')
//       .replace(/^./, str => str.toUpperCase())
//       .replace('Of', 'of');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setRecord(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage('');

//     const formData = new FormData();
//     for (const key in record) {
//       if (record[key]) {
//         formData.append(key, record[key]);
//       }
//     }
//     console.log(record.xeroxOfDegreeMarksheet, record.degreeMarksheet);
//     console.log("Form data : ", formData);
//     try {
//       await axios.post(
//         `${process.env.REACT_APP_ROOT_URL}/api/students/save-academic-records`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${accessToken}`,
//           },
//         }
//       );
//       setResponseMessage('Academic record saved successfully!');
//     } catch (error) {
//       console.error('Error saving academic record:', error);
//       setResponseMessage('Failed to save academic record.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="details address">
//           <span className="title">Educational Qualification</span>
//           <div className="fields">
//             {Object.entries(record).map(([key, val]) => (
//               <div className="input-field" key={key}>
//                 <label htmlFor={key}>{formatLabel(key)}</label>
//                 {key === 'xeroxOfDegreeMarksheet' || key === 'degreeMarksheet' ? (
//                   <input
//                     type="file"
//                     id={key}
//                     name={key}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     id={key}
//                     name={key}
//                     value={val || ""}
//                     onChange={handleChange}
//                     placeholder={formatLabel(key)}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div style={{ marginTop: '1.5rem' }}>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Saving...' : 'Save Academic Records'}
//           </button>
//         </div>

//         {/* Response Message */}
//         {responseMessage && (
//           <div style={{ marginTop: '1rem', color: loading ? 'black' : 'green' }}>
//             {responseMessage}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import '../../styles/student/admissionForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const formatLabel = key =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace('Of', 'of');

export default function StudentAcademicRecords() {
  const { accessToken } = useSelector(state => state.auth);

  const initialRecord = {
    examPassed: '',
    boardOrUniversity: '',
    instituteOrSchool: '',
    rollNumber: '',
    passingYear: '',
    resultType: '',
    percentage: '',
    stream: '',
    medium: '',
    mode: '',
    gapReason: '',
    gapYear: '',
    resultStatus: '',
    examRank: '',
    degreeName: '',
    branchName: '',
    durationInYear: '',
    discipline: '',
    examScheme: '',
    enrollmentNumber: '',
    markObtained: '',
    outOfMarked: '',
    xeroxOfDegreeMarksheet: null,
    degreeMarksheet: null
  };

  const [record, setRecord] = useState(initialRecord);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isExisting, setIsExisting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_ROOT_URL}/api/students/get-academic-records`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (res.data && Object.keys(res.data).length) {
          setRecord({
            ...initialRecord,
            ...res.data,
            xeroxOfDegreeMarksheet: null,
            degreeMarksheet: null
          });
          setIsExisting(true);
          setIsEditing(false);
        } else {
          setIsEditing(true);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setIsEditing(true);
      }
    };
    fetchRecord();
  }, [accessToken]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setRecord(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    const formData = new FormData();
    for (const key in record) {
      if (record[key] !== null && record[key] !== '') {
        formData.append(key, record[key]);
      }
    }

    try {
      const url = isExisting
        ? `${process.env.REACT_APP_ROOT_URL}/api/students/update-academic-records`
        : `${process.env.REACT_APP_ROOT_URL}/api/students/save-academic-records`;
      const method = isExisting ? 'put' : 'post';

      await axios[method](url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      });

      setResponseMessage('Academic record saved successfully!');
      setIsEditing(false);
      setIsExisting(true);
    } catch (err) {
      console.error('Save error:', err);
      setResponseMessage('Failed to save academic record.');
    } finally {
      setLoading(false);
    }
  };

  const renderDisplay = () => (
    <div className="container">
      <div className="form">
        <h2>Academic Records</h2>
        {Object.entries(record).map(([key, val]) => {
          if (key === 'xeroxOfDegreeMarksheet' || key === 'degreeMarksheet') {
            return (
              <p key={key}><strong>{formatLabel(key)}:</strong> {isExisting && val ? 'Uploaded' : 'Not uploaded'}</p>
            );
          }
          return (
            <p key={key}><strong>{formatLabel(key)}:</strong> {val || '--'}</p>
          );
        })}
        <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    </div>
  );

  const renderForm = () => (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Academic Records</h2>
        <div className="fields">
          {Object.entries(record).map(([key, val]) => (
            <div className="input-field" key={key}>
              <label htmlFor={key}>{formatLabel(key)}</label>
              {key === 'xeroxOfDegreeMarksheet' || key === 'degreeMarksheet' ? (
                <input
                  type="file"
                  id={key}
                  name={key}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={val || ""}
                  onChange={handleChange}
                  placeholder={formatLabel(key)}
                  required={key !== 'gapReason' && key !== 'gapYear' && key !== 'examRank'}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-actions" style={{ marginTop: '1.5rem' }}>
          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : (isExisting ? 'Update' : 'Save Academic Records')}
          </button>
        </div>

        {responseMessage && (
          <div style={{ marginTop: '1rem', color: responseMessage.includes('Failed') ? 'red' : 'green' }}>
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  );

  return isExisting && !isEditing ? renderDisplay() : renderForm();
}
