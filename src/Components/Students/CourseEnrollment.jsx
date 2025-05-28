import React, { useState } from 'react';
import '../../styles/student/admissionForm.css';

// Utility to convert camelCase to Title Case
const formatPlaceholder = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

export default function CourseEnrollment() {
  const [enrollmentData, setEnrollmentData] = useState({
    dateOfAdmission: '2023-08-16',
    enrollmentSession: 'Winter 2023',
    academicBatch: '2023-2025',
    degree: 'MCA',
    branch: 'MASTER OF COMPUTER APPLICATION',
    scheme: 'MASTER OF COMPUTER APPLICATION 2023-24',
    admissionCategory: 'Management',
    feesCategory: 'General',
    studentGroup: 'Beta',
    year: 'I',
    semester: 'I',
    enrollmentType: 'First Year',
    shift: 'SHIFT 1',
    entranceRegNo: '--',
    entranceMeritNo: '--',
    referenceName: '--',
  });

  const [currentAcademicInfo, setCurrentAcademicInfo] = useState({
    currentSession: 'Winter 2024',
    currentYear: 'II',
    currentSemester: 'III',
    classSection: 'Mca_d_ngp',
    admissionStatus: 'ACTIVE',
    currentDegree: 'MCA',
    currentBranch: 'MASTER OF COMPUTER APPLICATION',
    currentScheme: 'MASTER OF COMPUTER APPLICATION 2023-24',
  });

  const handleEnrollmentChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcademicChange = (e) => {
    const { name, value } = e.target;
    setCurrentAcademicInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container'>
      <form>
        <div className='form'>
          {/* Enrollment Information */}
          <div className='details enrollment'>
            <span className='title'>Enrollment Information</span>
            <div className='fields'>
              {Object.entries(enrollmentData).map(([key, val]) => (
                <div className='input-field' key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleEnrollmentChange}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Current Academic Info */}
          <div className='details academic'>
            <span className='title'>Current Academic Info</span>
            <div className='fields'>
              {Object.entries(currentAcademicInfo).map(([key, val]) => (
                <div className='input-field' key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleAcademicChange}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
