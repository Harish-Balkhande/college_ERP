import React from 'react'
// import Header from './Header';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';



export default function Layout({ children }) {
  return (
    <div >
      {/* <Header /> */}
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, pl: 2, mt: { xs: '56px', sm: '84px' } }}>
          {children}
        </Box>
      </Box>

    </div >
  )
}
