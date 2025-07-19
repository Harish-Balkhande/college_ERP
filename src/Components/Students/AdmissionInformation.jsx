import React, { useEffect, useState } from 'react';
import '../../styles/student/admissionForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdmissionInformation() {
  const { accessToken } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const [responseMessage, setResponseMessage] = useState({ message: "", successStatus: false });
  const [isExisting, setIsExisting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [enrollmentData, setEnrollmentData] = useState({
    dateOfAdmission: '', enrollmentSession: '', academicBatch: '', degree: '', branch: '', scheme: '',
    admissionCategory: '', feesCategory: '', studentGroup: '', year: '', semester: '',
    enrollmentType: '', shift: '', entranceRegNo: '', entranceMeritNo: '', referenceName: ''
  });

  const [currentAcademicInfo, setCurrentAcademicInfo] = useState({
    currentSession: '', currentYear: '', currentSemester: '', classSection: '', admissionStatus: '',
    degree: '', branch: '', scheme: ''
  });

  // Get admission info on mount
  useEffect(() => {
    const getFilledData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/api/students/get-admission-information`, {
          headers: { "Authorization": `Bearer ${accessToken}` }
        });

        const data = response.data;
        if (data && Object.keys(data).length > 0) {
          const {
            dateOfAdmission, enrollmentSession, academicBatch, degree,
            branch, scheme, admissionCategory, feesCategory, studentGroup,
            year, semester, enrollmentType, shift, entranceRegNo,
            entranceMeritNo, referenceName,
            currentSession, currentYear, currentSemester, classSection,
            admissionStatus, currentDegree, currentBranch, currentScheme
          } = data;

          setEnrollmentData({
            dateOfAdmission, enrollmentSession, academicBatch, degree,
            branch, scheme, admissionCategory, feesCategory, studentGroup,
            year, semester, enrollmentType, shift, entranceRegNo,
            entranceMeritNo, referenceName
          });

          setCurrentAcademicInfo({
            currentSession, currentYear, currentSemester, classSection,
            admissionStatus,
            degree: currentDegree || degree,
            branch: currentBranch || branch,
            scheme: currentScheme || scheme
          });

          setIsExisting(true);
          setIsEditing(false);
        }
      } catch (error) {
        console.error("Error fetching admission info:", error);
        const jwtStatus = error?.response?.data?.jwtStatus;
        const statusCode = error?.response?.status;

        console.log("JWT Status:", jwtStatus); // <-- You will now see this
        console.log("HTTP Status Code:", statusCode);

        if (jwtStatus === "expired") {
          navigate("/");
        }
      }
    };

    getFilledData();
  }, [accessToken, navigate]);

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    const updater = section === 'enrollment' ? setEnrollmentData : setCurrentAcademicInfo;
    updater(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...enrollmentData, ...currentAcademicInfo };
      const url = isExisting
        ? `${process.env.REACT_APP_ROOT_URL}/api/students/update-admission-information`
        : `${process.env.REACT_APP_ROOT_URL}/api/students/save-admission-information`;

      const method = isExisting ? 'put' : 'post';

      const response = await axios[method](url, payload, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      });

      setResponseMessage({
        message: response.data.message,
        successStatus: response.data.successStatus
      });

      setIsEditing(false);
      setIsExisting(true);
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMessage({
        message: "Failed to save data.",
        successStatus: false
      });
    }
  };

  const formatLabel = key =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  const renderFetchedData = () => (
    <div className="fetched-info">
      <h3>Admission Information</h3>
      {[...Object.entries(enrollmentData), ...Object.entries(currentAcademicInfo)].map(([key, val]) => (
        <p key={key}><strong>{formatLabel(key)}:</strong> {val || '--'}</p>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );

  return (
    <div className="container">
      {isExisting && !isEditing ? (
        renderFetchedData()
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="details">
            <span className="title">Enrollment Information</span>
            <div className="fields">
              {Object.entries(enrollmentData).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <label>{formatLabel(key)}</label>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={(e) => handleChange(e, 'enrollment')}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="details">
            <span className="title">Current Academic Info</span>
            <div className="fields">
              {Object.entries(currentAcademicInfo).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <label>{formatLabel(key)}</label>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={(e) => handleChange(e, 'current')}
                  />
                </div>
              ))}
            </div>
          </div>

          <button type="submit">{isExisting ? 'Update' : 'Save'}</button>

          {responseMessage.message && (
            <div style={{ marginTop: '1rem', color: responseMessage.successStatus ? 'green' : 'red' }}>
              {responseMessage.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
