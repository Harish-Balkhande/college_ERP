// Layout.js
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout({ role = 'teacher' }) {
  const [showExamSubmenu, setShowExamSubmenu] = useState(false);
  const [showAttendanceSubmenu, setShowAttendanceSubmenu] = useState(false);
  const [showAdmissionSubmenu, setShowAdmissionSubmenu] = useState(false);
  const [showFinanceSubmenu, setShowFinanceSubmenu] = useState(false);

  const showAnySubmenu =
    showExamSubmenu ||
    showAttendanceSubmenu ||
    showAdmissionSubmenu ||
    showFinanceSubmenu;

  return (
    <div>
      {/* Fixed Topbar */}
      <Header />

      {/* Content Below Topbar */}
      <div style={{ display: 'flex', position: 'absolute', top: '60px', width: '100%' }}>
        {/* Sidebar */}
        <Sidebar
          role={role}
          showExamSubmenu={showExamSubmenu}
          setShowExamSubmenu={setShowExamSubmenu}
          showAttendanceSubmenu={showAttendanceSubmenu}
          setShowAttendanceSubmenu={setShowAttendanceSubmenu}
          showAdmissionSubmenu={showAdmissionSubmenu}
          setShowAdmissionSubmenu={setShowAdmissionSubmenu}
          showFinanceSubmenu={showFinanceSubmenu}
          setShowFinanceSubmenu={setShowFinanceSubmenu}
        />

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            padding: '20px',
            marginLeft: showAnySubmenu ? 400 : 250,
            transition: 'margin-left 0.3s ease',
            minHeight: 'calc(100vh - 60px)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
