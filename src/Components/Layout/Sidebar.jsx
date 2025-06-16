import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUserGraduate,
  FaCalendarCheck,
  FaPenFancy,
  FaMoneyBillWave,
  FaBookOpen,
  FaRegFileAlt,
  FaChalkboardTeacher,
  FaBullhorn,
  FaUserTie,
  FaFileAlt,
} from "react-icons/fa";
import "../../styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine role based on URL path
  const isTeacherRoute = location.pathname.startsWith("/teacher");
  const role = isTeacherRoute ? "teacher" : "student";

  // State for student submenus
  const [showExamSubmenu, setShowExamSubmenu] = useState(false);
  const [showAttendanceSubmenu, setShowAttendanceSubmenu] = useState(false);
  const [showAdmissionSubmenu, setShowAdmissionSubmenu] = useState(false);
  const [showFinanceSubmenu, setShowFinanceSubmenu] = useState(false);

  // State for teacher submenus
  const [showTeacherAdminSubmenu, setShowTeacherAdminSubmenu] = useState(false);
  const [showTeacherAttendanceSubmenu, setShowTeacherAttendanceSubmenu] = useState(false);
  const [showTeacherAttendanceReportsSubmenu, setShowTeacherAttendanceReportsSubmenu] = useState(false);
  const [showTeacherCoursesSubmenu, setShowTeacherCoursesSubmenu] = useState(false);
  const [showCourseReportsSubmenu, setShowCourseReportsSubmenu] = useState(false);
  const [showTeacherExamSubmenu, setShowTeacherExamSubmenu] = useState(false);
  const [showTeacherExamReportsSubmenu, setShowTeacherExamReportsSubmenu] = useState(false);
  const [showTeacherNotificationSubmenu, setShowTeacherNotificationSubmenu] = useState(false);
  const [showCourseMasterSubmenu, setShowCourseMasterSubmenu] = useState(false);
  const [showTeacherAdmissionSubmenu, setShowTeacherAdmissionSubmenu] = useState(false); // New state for admission reports
   const [showTeacherAdmissionReportsSubmenu, setShowTeacherAdmissionReportsSubmenu] = useState(false);
  const wrapperRef = useRef(null);

  const closeAllSubmenus = () => {
    // Close all student submenus
    setShowExamSubmenu(false);
    setShowAttendanceSubmenu(false);
    setShowAdmissionSubmenu(false);
    setShowFinanceSubmenu(false);

    // Close all teacher submenus
    setShowTeacherAdminSubmenu(false);
    setShowTeacherAttendanceSubmenu(false);
    setShowTeacherAttendanceReportsSubmenu(false);
    setShowTeacherCoursesSubmenu(false);
    setShowCourseReportsSubmenu(false);
    setShowTeacherExamSubmenu(false);
    setShowTeacherExamReportsSubmenu(false);
    setShowTeacherNotificationSubmenu(false);
    setShowCourseMasterSubmenu(false);
    setShowAdmissionSubmenu(false); // Close admission reports submenu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeAllSubmenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sidebar-wrapper" ref={wrapperRef}>
      <div className="sidebar">
        <ul className="menu-list">
          {/* Dashboard */}
          <li
            className="menu-item"
            onClick={() => {
              closeAllSubmenus();
              navigate(role === "teacher" ? "/teacher/dashboard" : "/student-dashboard");
            }}
          >
            {role === "teacher" ? <FaChalkboardTeacher className="icon" /> : <FaUserGraduate className="icon" />} 
            Dashboard
          </li>

          {/* Student Menu Items */}
          {role === "student" && (
            <>
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowAdmissionSubmenu(!showAdmissionSubmenu);
                }}
              >
                <FaUserGraduate className="icon" /> Admission
                <span className="triangle">{showAdmissionSubmenu ? "▼" : "▶"}</span>
              </li>

              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowAttendanceSubmenu(!showAttendanceSubmenu);
                }}
              >
                <FaCalendarCheck className="icon" /> Attendance
                <span className="triangle">{showAttendanceSubmenu ? "▼" : "▶"}</span>
              </li>

              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowExamSubmenu(!showExamSubmenu);
                }}
              >
                <FaPenFancy className="icon" /> Exam
                <span className="triangle">{showExamSubmenu ? "▼" : "▶"}</span>
              </li>

              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowFinanceSubmenu(!showFinanceSubmenu);
                }}
              >
                <FaMoneyBillWave className="icon" /> Finance
                <span className="triangle">{showFinanceSubmenu ? "▼" : "▶"}</span>
              </li>

              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  navigate("/leave-application");
                }}
              >
                <FaRegFileAlt className="icon" /> Leave Application
              </li>

              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  navigate("/registered-courses");
                }}
              >
                <FaBookOpen className="icon" /> My Registered Courses
              </li>
            </>
          )}

          {/* Teacher Menu Items */}
          {role === "teacher" && (
            <>
              {/* Master */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowCourseMasterSubmenu(!showCourseMasterSubmenu);
                }}
              >
                <FaBookOpen className="icon" />Course Master
                <span className="triangle">{showCourseMasterSubmenu ? "▼" : "▶"}</span>
              </li>

              {/* Administration */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherAdminSubmenu(!showTeacherAdminSubmenu);
                }}
              >
                <FaUserTie className="icon" /> Administration
                <span className="triangle">{showTeacherAdminSubmenu ? "▼" : "▶"}</span>
              </li>


              {/* Admission  - NEW */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherAdmissionSubmenu(!showTeacherAdmissionSubmenu);
                }}
              >
                <FaFileAlt className="icon" /> Admission 
                <span className="triangle">{showTeacherAdmissionSubmenu ? "▼" : "▶"}</span>
              </li>

              {/* Attendance */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherAttendanceSubmenu(!showTeacherAttendanceSubmenu);
                }}
              >
                <FaCalendarCheck className="icon" /> Attendance
                <span className="triangle">{showTeacherAttendanceSubmenu ? "▼" : "▶"}</span>
              </li>

              {/* Course */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherCoursesSubmenu(!showTeacherCoursesSubmenu);
                }}
              >
                <FaBookOpen className="icon" /> Course
                <span className="triangle">{showTeacherCoursesSubmenu ? "▼" : "▶"}</span>
              </li>

              {/* Exam */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherExamSubmenu(!showTeacherExamSubmenu);
                }}
              >
                <FaPenFancy className="icon" /> Exam
                <span className="triangle">{showTeacherExamSubmenu ? "▼" : "▶"}</span>
              </li>

              {/* Manage Notification */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherNotificationSubmenu(!showTeacherNotificationSubmenu);
                }}
              >
                <FaBullhorn className="icon" /> Manage Notification
                <span className="triangle">{showTeacherNotificationSubmenu ? "▼" : "▶"}</span>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Student Submenus */}
      {role === "student" && showAdmissionSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("admission-form")}>
              Student Admission
            </li>
          </ul>
        </div>
      )}

      {role === "student" && showAttendanceSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("attendence")}>
              My Attendance
            </li>
          </ul>
        </div>
      )}

      {role === "student" && showExamSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/schedule")}>
              Exam Schedule
            </li>
            <li className="submenu-item" onClick={() => navigate("/hall-tickets")}>
              My Hall Tickets
            </li>
            <li className="submenu-item" onClick={() => navigate("/exam-score")}>
              Exam Score
            </li>
            <li className="submenu-item" onClick={() => navigate("/score-card")}>
              Score Card
            </li>
            <li className="submenu-item" onClick={() => navigate("/retest-slip")}>
              My Retest Slip
            </li>
            <li className="submenu-item" onClick={() => navigate("/my-exam-form")}>
              My Exam Form
            </li>
            <li className="submenu-item" onClick={() => navigate("/download-exam-form")}>
              Download Exam Form
            </li>
          </ul>
        </div>
      )}

      {role === "student" && showFinanceSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/student-fee-details")}>
              Student Fee Details
            </li>
          </ul>
        </div>
      )}

      {/* Teacher Submenus */}
      {role === "teacher" && showCourseMasterSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-evaluation-level")}>
              Course Evaluation Level
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-evaluation-level-component")}>
              Course Evaluation Level Component
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-elective-group")}>
              Course Elective Group
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-category")}>
              Course Category
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-category-group")}>
              Course Category Group
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/scheme-course-plan")}>
              Scheme Course Plan
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/course-type")}>
              Course Type
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/program-outcome-master")}>
              Program Outcome Master
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/course-master/program-specific-outcome-master")}>
              Program Specific Outcome Master
            </li>
          </ul>
        </div>
      )}

      {role === "teacher" && showTeacherAdminSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/teacher/administration/faculty-achievement")}>
              Faculty Achievement
            </li>
          </ul>
        </div>
      )}

     

   {role === "teacher" && showTeacherAdmissionSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li 
              className="submenu-item has-submenu" 
              onClick={(e) => {
                e.stopPropagation();
                setShowTeacherAdmissionReportsSubmenu(!showTeacherAdmissionReportsSubmenu);
              }}
            >
              Admission Reports
              <span className="triangle">{showTeacherAdmissionReportsSubmenu ? "▼" : "▶"}</span>
            </li>
            {showTeacherAdmissionReportsSubmenu && (
              <div className="nested-submenu">
                <ul className="submenu-list">
                  <li className="submenu-item" onClick={() => navigate("/teacher/admisiion/reports/generic")}>
                    Generic Reports
                  </li>
                </ul>
              </div>
            )}

      <li className="submenu-item" onClick={() => navigate("/teacher/admission/student-admission-record")}>
        Student Admission Record
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/student-academic-record")}>
        Student Academic Record
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/new-admission")}>
        New Admission
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/class-section-allotment")}>
        Class-Section Allotment
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/roll-no-allotment")}>
        Roll No. Allotment
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/faculty-advisor-allotment")}>
        Faculty Advisor Allotment
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/university-registration-allotment")}>
        University Registration Number Allotment
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/allotted-students")}>
        Allotted Students
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/cancel-admission")}>
        Cancel Admission
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/identity-card")}>
        Identity Card
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/admission-slip")}>
        Student Admission Slip
      </li>
      <li className="submenu-item" onClick={() => navigate("/teacher/admission/admissionform")}>
        Student Admission Form
      </li>
    </ul>
  </div>
)}

      {role === "teacher" && showTeacherAttendanceSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li 
              className="submenu-item has-submenu" 
              onClick={(e) => {
                e.stopPropagation();
                setShowTeacherAttendanceReportsSubmenu(!showTeacherAttendanceReportsSubmenu);
              }}
            >
              Attendance Reports
              <span className="triangle">{showTeacherAttendanceReportsSubmenu ? "▼" : "▶"}</span>
            </li>
            {showTeacherAttendanceReportsSubmenu && (
              <div className="nested-submenu">
                <ul className="submenu-list">
                  <li className="submenu-item" onClick={() => navigate("/teacher/attendance/reports/generic")}>
                    Generic Reports
                  </li>
                </ul>
              </div>
            )}
            <li className="submenu-item" onClick={() => navigate("/teacher/attendance/view-course-component")}>
              View Course Component Attendance
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/attendance/my-calendar")}>
              My Calendar
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/attendance/my-lectures")}>
              My Lectures
            </li>
          </ul>
        </div>
      )}

      {role === "teacher" && showTeacherCoursesSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">

            <li 
              className="submenu-item has-submenu" 
              onClick={(e) => {
                e.stopPropagation();
                setShowCourseReportsSubmenu(!showCourseReportsSubmenu);
              }}
            >
              Course Reports
              <span className="triangle">{showCourseReportsSubmenu ? "▼" : "▶"}</span>
            </li>
            
            {showCourseReportsSubmenu && (
              <div className="nested-submenu">
                <ul className="submenu-list">
                  <li className="submenu-item" onClick={() => navigate("/teacher/courses/co-generic-reports")}>
                    Generic Reports
                  </li>
                  <li className="submenu-item" onClick={() => navigate("/teacher/courses/count-report")}>
                    Course Wise Count Report
                  </li>
                  <li className="submenu-item" onClick={() => navigate("/teacher/courses/teaching-plan-report")}>
                    Teaching Plan Report
                  </li>
                </ul>
              </div>
            )}
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/manage-course")}>
              Manage Course
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/offer-course")}>
              Offer Course
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/course-variant")}>
              Manage Course Variant
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/course-attainment")}>
              Course Attainment
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/offer-course")}>
              Search Offered Course
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/activity-lock")}>
              Course Activity Locking
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/reg-update")}>
              Update Course Registration
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/effective-regi-date")}>
              Manage Course Effective and Registration Date
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/major-minor-reg")}>
              Manage Student Academic Major/Minor Registration
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/teaching-plan")}>
              Teaching Plan
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/my-course-variant")}>
              My Course Variant
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/my-transfer-lect")}>
              My Transferred Lectures
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/lect-transfer")}>
              Lecture Transfer
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/extra-lect")}>
              Extra Lectures
            </li>
             <li className="submenu-item" onClick={() => navigate("/teacher/courses/manage-detained-stud")}>
              Manage Detained Students
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/manage-detained-stud")}>
              Manage Detained Students
            </li>
           
            
        
          </ul>
        </div>
      )}

      {role === "teacher" && showTeacherExamSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li 
              className="submenu-item has-submenu" 
              onClick={(e) => {
                e.stopPropagation();
                setShowTeacherExamReportsSubmenu(!showTeacherExamReportsSubmenu);
              }}
            >
              Exam Reports
              <span className="triangle">{showTeacherExamReportsSubmenu ? "▼" : "▶"}</span>
            </li>
            
            {showTeacherExamReportsSubmenu && (
              <div className="nested-submenu">
                <ul className="submenu-list">
                  <li className="submenu-item" onClick={() => navigate("/teacher/exam/generic-reports")}>
                    Generic Reports
                  </li>
                </ul>
              </div>
            )}
            
            <li className="submenu-item" onClick={() => navigate("/teacher/exam/manage-question-set")}>
              Manage Question Set
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/exam/enter-marks")}>
              Enter Marks
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/exam/mark-publish")}>
              Publish Marks
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/exam/student-progress")}>
              Student Progression
            </li>
          </ul>
        </div>
      )}

      {role === "teacher" && showTeacherNotificationSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/teacher/notification/manage-noticeboard")}>
              Manage Noticeboard
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;