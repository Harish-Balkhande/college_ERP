import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaCalendarCheck,
  FaPenFancy,
  FaMoneyBillWave,
  FaBookOpen,
} from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import "../../styles/sidebar.css"; // your CSS file path

function Sidebar() {
  const navigate = useNavigate();

  const [showExamSubmenu, setShowExamSubmenu] = useState(false);
  const [showAttendanceSubmenu, setShowAttendanceSubmenu] = useState(false);
  const [showAdmissionSubmenu, setShowAdmissionSubmenu] = useState(false);
  const [showFinanceSubmenu, setShowFinanceSubmenu] = useState(false);

  // Ref wrapping both sidebar and submenu
  const wrapperRef = useRef(null);

  // Close all submenus
  const closeAllSubmenus = () => {
    setShowExamSubmenu(false);
    setShowAttendanceSubmenu(false);
    setShowAdmissionSubmenu(false);
    setShowFinanceSubmenu(false);
  };

  // Close submenus on click outside sidebar+submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeAllSubmenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar-wrapper" ref={wrapperRef}>
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="menu-list">
          {/* Dashboard */}
          <li
            className="menu-item"
            onClick={() => {
              closeAllSubmenus();
              navigate("student-dashboard");
            }}
          >
            <FaUserGraduate className="icon" /> Dashboard
          </li>

          {/* Admission */}
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

          {/* Attendance */}
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

          {/* Exam */}
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

          {/* Finance */}
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
              className="menu-item bold"
              onClick={() => {
               closeAllSubmenus();
               navigate("/leave-application");
              }}
>
            <FaRegFileAlt className="icon" /> Leave Application
          </li>

          {/* My Registered Courses */}
          <li
            className="menu-item bold"
            onClick={() => {
              closeAllSubmenus();
              navigate("/registered-courses");
            }}
          >
            <FaBookOpen className="icon" /> My Registered Courses
          </li>

        </ul>
      </div>

      {/* Submenus */}
      {showAdmissionSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li
              className="submenu-item"
              onClick={() => navigate("admission-form")}
            >
              Student Admission
            </li>
          </ul>
        </div>
      )}

      {showAttendanceSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li
              className="submenu-item"
              onClick={() => navigate("attendence")}
            >
              My Attendance
            </li>
          </ul>
        </div>
      )}

      {showExamSubmenu && (
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
              My Retest Exam Slip
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

      {showFinanceSubmenu && (
        <div className="submenu">
          <ul className="submenu-list">
            <li className="submenu-item" onClick={() => navigate("/student-fee-details")}>
              Student Fee Details
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
