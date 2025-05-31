import React, { useState } from 'react';
import EvalutionMarks from '../../../Components/Students/exam/EvalutionMarksTable';
import CourseComponentMarks from '../../../Components/Students/exam/CourseComponentMarks';
import SemesterMarks from '../../../Components/Students/exam/SemesterMarks';
import StudentInformationDisplay from '../../../Components/StudentInformationDisplay';
import '../../../styles/examScore.css';

const ExamScore = () => {
  const [activeTab, setActiveTab] = useState('evaluation');

  return (
    <div className="exam-container">
      <h2 className="exam-heading">Exam Score</h2>

      <StudentInformationDisplay />

      {/* Tabs */}
      <div className="exam-tabs">
        <button
          className={`tab-button ${activeTab === 'evaluation' ? 'active' : ''}`}
          onClick={() => setActiveTab('evaluation')}
        >
          Evaluation Level Component Marks
        </button>
        <button
          className={`tab-button ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => setActiveTab('course')}
        >
          Course Component Marks
        </button>
        <button
          className={`tab-button ${activeTab === 'semester' ? 'active' : ''}`}
          onClick={() => setActiveTab('semester')}
        >
          Semester Marks
        </button>
      </div>

      {activeTab === 'evaluation' && <EvalutionMarks />}
      {activeTab === 'course' && <CourseComponentMarks />}
      {activeTab === 'semester' && <SemesterMarks />}
    </div>
  );
};

export default ExamScore;
