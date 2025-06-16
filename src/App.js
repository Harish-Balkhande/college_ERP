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
import LeaveApplication from './Pages/LeaveApplication';

// Teacher pages
import TeacherDashboard from './Pages/Teacher/TeacherDashboard';
import TeacherAttendance from './Pages/Teacher/TeacherAttendance';
import TeacherAdministration from './Pages/Teacher/TeacherAdministration';

//teacher exam
import TeacherExam from './Pages/Teacher/TeacherExam';
import ManageQuestionSet from './Pages/Teacher/Exam/ManageQuestionSet';
import EnterMarks from './Pages/Teacher/Exam/EnterMarks';
import PublishMarks from './Pages/Teacher/Exam/PublishMarks';
import GenericReport from './Pages/Teacher/Exam/GenericReports';
import StudentProgression from './Pages/Teacher/Exam/StudentProgression';

//administration
import FacultyAchievement from './Pages/Teacher/Administration/FacultyAchievement';

//teacher-course
import ActivityLock from './Pages/Teacher/Course/ActivityLock';
import CountReport from './Pages/Teacher/Course/CountReport';
import ManageCourseVariant from './Pages/Teacher/Course/ManageCourseVariant';
import EffectiveAndRegiDate from './Pages/Teacher/Course/EffectiveAndRegiDate';
import ExtraLect from './Pages/Teacher/Course/ExtraLect';
import CoGenericReport from './Pages/Teacher/Course/CoGenericReport';
import LectTransfer from './Pages/Teacher/Course/LectTransfer';
import MajorMinorRegi from './Pages/Teacher/Course/MajorMinorRegi';
import ManageCourse from './Pages/Teacher/Course/ManageCourse';
import ManageDetainedStud from './Pages/Teacher/Course/ManageDetainedStud';
import MyTransferredLect from './Pages/Teacher/Course/MyTransferredLect';
import OfferCourse from './Pages/Teacher/Course/OfferCourse';
import TeachingPlanReport from './Pages/Teacher/Course/TeachingPlanReport';
import UpdateRegistration from './Pages/Teacher/Course/UpdateRegistration';
import CourseAttainment from './Pages/Teacher/Course/CourseAttainment' ;
import TeachingPlan from './Pages/Teacher/Course/TeachingPlan';
import MyCourseVariant from './Pages/Teacher/Course/MyCourseVariant';


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

        <Route path="leave-application" element={<LeaveApplication />} />
      </Route>
         
        {/* Teacher layout in separate route */}
       <Route path="/teacher" element={<Layout role="teacher" />}>
       <Route path="dashboard" element={<TeacherDashboard />} />
       <Route path="attendance" element={<TeacherAttendance />} />

       <Route path="administration" element={<TeacherAdministration />} />
       <Route path="/teacher/administration/faculty-achievement" element={<FacultyAchievement />} />

       <Route path="exam" element={<TeacherExam />} />
       <Route path="/teacher/exam/manage-question-set" element={<ManageQuestionSet />} />
       <Route path="/teacher/exam/enter-marks" element={<EnterMarks/>} />
       <Route path="/teacher/exam/mark-publish" element={<PublishMarks/>} />
       <Route path="/teacher/exam/generic-reports" element={<GenericReport/>} />
       <Route path="/teacher/exam/student-progress" element={<StudentProgression/>} />

       <Route path="/teacher/courses/activity-lock" element={<ActivityLock/>} />
       <Route path="/teacher/courses/count-report" element={<CountReport/>} />
       <Route path="/teacher/courses/course-variant" element={<ManageCourseVariant/>} />
       <Route path="/teacher/courses/effective-regi-date" element={<EffectiveAndRegiDate/>} />
       <Route path="/teacher/courses/extra-lect" element={<ExtraLect/>} />
       <Route path="/teacher/courses/co-generic-reports" element={<CoGenericReport/>} />
       <Route path="/teacher/courses/lect-transfer" element={<LectTransfer/>} />
       <Route path="/teacher/courses/major-minor-reg" element={<MajorMinorRegi/>} />
       <Route path="/teacher/courses/manage-course" element={<ManageCourse/>} />
       <Route path="/teacher/courses/manage-detained-stud" element={<ManageDetainedStud/>} />
       <Route path="/teacher/courses/my-transfer-lect" element={<MyTransferredLect/>} />
       <Route path="/teacher/courses/offer-course" element={<OfferCourse/>} />
       <Route path="/teacher/courses/teaching-plan-report" element={<TeachingPlanReport/>} />
       <Route path="/teacher/courses/reg-update" element={<UpdateRegistration/>} />
       <Route path="/teacher/courses/my-course-variant" element={<MyCourseVariant/>} />
       <Route path="/teacher/courses/course-attainment" element={<CourseAttainment/>} />
       <Route path="/teacher/courses/teaching-plan" element={<TeachingPlan/>} />

       </Route>
    </Routes>
  );
}

export default App;
