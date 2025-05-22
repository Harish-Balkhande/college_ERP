// This component is used to define the routes of different pages using react-router-dom

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Signup from './Pages/Signup';
import StudentAdmissionForm from './Pages/Student/StudentAdmissionForm';
import Dashboard from './Pages/Student/Dashboard';
import Layout from './Components/Layout/Layout';
import AttendanceUI from './Pages/Student/Attendanence';
import StudentFeesDetails from './Pages/Student/StudentFeesDetails';
import StudentInformation from './Pages/Student/StudentInformation';

// import MyRegisteredCourses from '../src/Pages/Student/Exam//MyRegistretedCourses';
import MyExamForm from './Pages/Student/Exam/MyExamForm';
import ExamSchedule from './Pages/Student/Exam/ExamSchedule';
import HallTickets from './Pages/Student/Exam/HallTickets';
import ExamScore from './Pages/Student/Exam/ExamScore';
import ScoreCard from './Pages/Student/Exam/ScoreCard';
import RetestSlip from './Pages/Student/Exam/RetestSlip';
import DownloadExamForm from './Pages/Student/Exam/DownloadExamForm';


function App() {
  return (
    <Layout>
      <div style={{
        position:'absolute',
        left: 80
      }}>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admission-form' element={<StudentAdmissionForm />} />
          {/* Students path */}
          <Route path='/attendence' element={<AttendanceUI />} />
          <Route path='/student-dashboard' element={<Dashboard />} />
          <Route path='/student-information' element={<StudentInformation />} />
          {/* Exam-related routes */}
          <Route path="/schedule" element={<ExamSchedule />} />
          <Route path="/hall-tickets" element={<HallTickets />} />
          <Route path="/exam-score" element={<ExamScore />} />
          <Route path="/score-card" element={<ScoreCard />} />
          <Route path="/retest-slip" element={<RetestSlip />} />
          <Route path="/my-exam-form" element={<MyExamForm />} />
          <Route path="/download-exam-form" element={<DownloadExamForm />} />
          {/* <Route path="/registered-courses" element={<MyRegisteredCourses />} /> */}
          {/* end of Exam-related routes */}
          <Route path='/student-fees-details' element={<StudentFeesDetails />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
