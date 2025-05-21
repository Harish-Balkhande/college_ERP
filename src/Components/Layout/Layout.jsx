// src/Components/Layout/Layout.js

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Outlet /> {/* This is where routed components will appear */}
        </main>
      </div>
    </div>
  );
}
