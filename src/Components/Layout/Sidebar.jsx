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

              {/* Courses */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherCoursesSubmenu(!showTeacherCoursesSubmenu);
                }}
              >
                <FaBookOpen className="icon" /> Courses
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

              {/* Notification */}
              <li
                className="menu-item"
                onClick={() => {
                  closeAllSubmenus();
                  setShowTeacherNotificationSubmenu(!showTeacherNotificationSubmenu);
                }}
              >
                <FaBullhorn className="icon" /> Notification
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
      {role === "teacher" && showTeacherAdminSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/teacher/administration/faculty-achievement")}>
              Faculty Achievement
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
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/course-attainment")}>
              Course Attainment
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/teaching-plan")}>
              Teaching Plan
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/my-course-variant")}>
              My Course Variant
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/my-transferred-lectures")}>
              My Transferred Lectures
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/lecture-transfer")}>
              Lecture Transfer
            </li>
            <li className="submenu-item" onClick={() => navigate("/teacher/courses/extra-lectures")}>
              Extra Lectures
            </li>
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
                  <li className="submenu-item" onClick={() => navigate("/teacher/courses/reports/teaching-plan-report")}>
                    Teaching Plan Report
                  </li>
                </ul>
              </div>
            )}
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
                  <li className="submenu-item" onClick={() => navigate("/teacher/exam/reports/generic")}>
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
            <li className="submenu-item" onClick={() => navigate("/teacher/exam/public-marks")}>
              Public Marks
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