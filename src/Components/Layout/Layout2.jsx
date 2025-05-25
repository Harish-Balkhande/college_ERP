import React from 'react'
// import Header from './Header';
import Sidebar from './Layout';
import { Box } from '@mui/material';



export default function Layout2({ children }) {
  return (
    <div >
      {/* <Header /> */}
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, pr:4, mt: { xs: '56px', sm: '84px' } }}>
          {children}
        </Box>
      </Box>

    </div >
  )
}
