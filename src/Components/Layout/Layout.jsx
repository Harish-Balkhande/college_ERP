// Layout.js

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [showExamSubmenu, setShowExamSubmenu] = useState(false);
  const [showAttendanceSubmenu, setShowAttendanceSubmenu] = useState(false);
  const [showAdmissionSubmenu, setShowAdmissionSubmenu] = useState(false);
  const [showFinanceSubmenu, setShowFinanceSubmenu] = useState(false);

  const showAnySubmenu = showExamSubmenu || showAttendanceSubmenu || showAdmissionSubmenu || showFinanceSubmenu;

  return (
    <div style={{
      position:"absolute", top:'60px'
    }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar
          showExamSubmenu={showExamSubmenu}
          setShowExamSubmenu={setShowExamSubmenu}
          showAttendanceSubmenu={showAttendanceSubmenu}
          setShowAttendanceSubmenu={setShowAttendanceSubmenu}
          showAdmissionSubmenu={showAdmissionSubmenu}
          setShowAdmissionSubmenu={setShowAdmissionSubmenu}
          showFinanceSubmenu={showFinanceSubmenu}
          setShowFinanceSubmenu={setShowFinanceSubmenu}
        />
        <main
          style={{
            flex: 1,
            width:'100%',
            padding: '20px',
            marginLeft: showAnySubmenu ? 400 : 250,
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
