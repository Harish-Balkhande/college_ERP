import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaCalendarCheck,
  FaPenFancy,
  FaMoneyBillWave,
  FaBookOpen,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const [showExamSubmenu, setShowExamSubmenu] = useState(false);
  const [showAttendanceSubmenu, setShowAttendanceSubmenu] = useState(false);
  const [showAdmissionSubmenu, setShowAdmissionSubmenu] = useState(false);
  const [showFinanceSubmenu, setShowFinanceSubmenu] = useState(false);

  // Close all submenus
  const closeAllSubmenus = () => {
    setShowExamSubmenu(false);
    setShowAttendanceSubmenu(false);
    setShowAdmissionSubmenu(false);
    setShowFinanceSubmenu(false);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        

        <ul style={styles.menuList}>
          {/* Dashboard */}
          <li
            style={styles.menuItem}
           onClick={()=>navigate("student-dashboard")}
          >
            <FaUserGraduate style={styles.icon} /> Dashboard
       
          </li>

          {/* Admission */}
          <li
            style={styles.menuItem}
            onClick={() => {
              setShowAdmissionSubmenu(!showAdmissionSubmenu);
              closeAllSubmenus();
              setShowAdmissionSubmenu(!showAdmissionSubmenu);
            }}
          >
            <FaUserGraduate style={styles.icon} /> Admission
            <span style={styles.triangle}>
              {showAdmissionSubmenu ? "▼" : "▶"}
            </span>
          </li>

          {/* Attendance */}
          <li
            style={styles.menuItem}
            onClick={() => {
              closeAllSubmenus();
              setShowAttendanceSubmenu(!showAttendanceSubmenu);
            }}
          >
            <FaCalendarCheck style={styles.icon} /> Attendance
            <span style={styles.triangle}>
              {showAttendanceSubmenu ? "▼" : "▶"}
            </span>
          </li>

          {/* Exam */}
          <li
            style={styles.menuItem}
            onClick={() => {
              closeAllSubmenus();
              setShowExamSubmenu(!showExamSubmenu);
            }}
          >
            <FaPenFancy style={styles.icon} /> Exam
            <span style={styles.triangle}>
              {showExamSubmenu ? "▼" : "▶"}
            </span>
          </li>

          {/* Finance */}
          <li
            style={styles.menuItem}
            onClick={() => {
              closeAllSubmenus();
              setShowFinanceSubmenu(!showFinanceSubmenu);
            }}
          >
            <FaMoneyBillWave style={styles.icon} /> Finance
            <span style={styles.triangle}>
              {showFinanceSubmenu ? "▼" : "▶"}
            </span>
          </li>

          {/* My Registered Courses */}
          <li
            style={{ ...styles.menuItem, fontWeight: "bold" }}
            onClick={() => {
              closeAllSubmenus();
              navigate("/registered-courses");
            }}
          >
            <FaBookOpen style={styles.icon} /> My Registered Courses
          </li>
        </ul>
      </div>

      {/* Admission Submenu */}
      {showAdmissionSubmenu && (
        <div style={styles.submenu}>
          <ul style={styles.subMenuList}>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("admission-form")}
            >
              Student Admission
            </li>
          </ul>
        </div>
      )}

      {/* Attendance Submenu */}
      {showAttendanceSubmenu && (
        <div style={styles.submenu}>
          <ul style={styles.subMenuList}>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("attendence")}
            >
              My Attendance
            </li>
          </ul>
        </div>
      )}

      {/* Exam Submenu */}
      {showExamSubmenu && (
        <div style={styles.submenu}>
          <ul style={styles.subMenuList}>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/schedule")}
            >
              Exam Schedule
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/hall-tickets")}
            >
              My Hall Tickets
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/exam-score")}
            >
              Exam Score
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/score-card")}
            >
              Score Card
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/retest-slip")}
            >
              My Retest Exam Slip
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/my-exam-form")}
            >
              My Exam Form
            </li>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/download-exam-form")}
            >
              Download Exam Form
            </li>
          </ul>
        </div>
      )}

      {/* Finance Submenu */}
      {showFinanceSubmenu && (
        <div style={styles.submenu}>
          <ul style={styles.subMenuList}>
            <li
              style={styles.subMenuItem}
              onClick={() => navigate("/student-fee-details")}
            >
              Student Fee Details
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  sidebar: {
    width: "220px",
    background: "black",
    padding: "20px",
    height: "100vh",
    borderRight: "1px solid #ccc",
    color: "white",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    cursor: "pointer",
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  icon: {
    marginRight: "10px",
  },
  triangle: {
    marginLeft: "auto",
    fontSize: "12px",
  },
  submenu: {
    width: "180px",
    backgroundColor: "#708090",
    height: "100vh",
    color: "white",
    borderLeft: "1px solid #ccc",
  },
  subMenuList: {
    listStyle: "none",
    padding: "20px",
    margin: 0,
  },
  subMenuItem: {
    padding: "10px 8px",
    cursor: "pointer",
    color: "white",
    borderBottom: "1px solid #aaa",
  },
};

export default Sidebar;
