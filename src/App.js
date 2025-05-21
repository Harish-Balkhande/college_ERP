// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import StudentAdmissionForm from './Pages/Student/StudentAdmissionForm';
import Dashboard from './Pages/Student/Dashboard';
import Layout from './Components/Layout/Layout';
import AttendanceUI from './Pages/Student/Attendanence';
import StudentFeeDetails from './Pages/Student/StudentFeeDetails';
import StudentInformation from './Pages/Student/StudentInformation';
import ExamSchedule from "./Pages/Exam/ExamSchedule";
import HallTickets from "./Pages/Exam/HallTickets";
import ExamScore from "./Pages/Exam/ExamScore";
import ScoreCard from "./Pages/Exam/ScoreCard";
import RetestSlip from "./Pages/Exam/RetestSlip";
import MyExamForm from "./Pages/Exam/MyExamForm";
import DownloadExamForm from "./Pages/Exam/DownloadExamForm";
import MyRegisteredCourses from './Pages/MyRegistretedCourses';

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        {/* These components will show inside Layout via <Outlet /> */}

        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        {/* Student admission */}
        <Route path="admission-form" element={<StudentAdmissionForm />} />

        {/* Student routes */}
        <Route path="attendence" element={<AttendanceUI />} />
        <Route path="student-dashboard" element={<Dashboard />} />
        {/* Finance */}
        <Route path="student-fee-details" element={<StudentFeeDetails />} />

        <Route path="student-information" element={<StudentInformation />} />

        {/* Exam-related routes */}
        <Route path="schedule" element={<ExamSchedule />} />
        <Route path="hall-tickets" element={<HallTickets />} />
        <Route path="exam-score" element={<ExamScore />} />
        <Route path="score-card" element={<ScoreCard />} />
        <Route path="retest-slip" element={<RetestSlip />} />
        <Route path="my-exam-form" element={<MyExamForm />} />
        <Route path="download-exam-form" element={<DownloadExamForm />} />
        <Route path="registered-courses" element={<MyRegisteredCourses />} />
      </Route>
    </Routes>
  );
}

export default App;
