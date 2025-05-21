import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  // Submenu states
  const [examOpen, setExamOpen] = React.useState(false);
  const [financeOpen, setFinanceOpen] = React.useState(false);
  const [admissionOpen, setAdmissionOpen] = React.useState(false);
  const [attendanceOpen, setAttendanceOpen] = React.useState(false);
  const [courseOpen, setCourseOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ m: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>

            {/* Dashboard (no submenu) */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to='/student-dashboard'>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            {/* Admission with submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setAdmissionOpen(!admissionOpen)}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Admission" />
                {admissionOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={admissionOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton component={Link} to="/student-information" >
                    <ListItemText primary="Student Information" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>

            {/* Attendance with submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setAttendanceOpen(!attendanceOpen)}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Attendance" />
                {attendanceOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={attendanceOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton component={Link} to='/attendence'>
                    <ListItemText primary="My Attendance" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>

            {/* Course with submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setCourseOpen(!courseOpen)}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Course" />
                {courseOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={courseOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton>
                    <ListItemText primary="My Courses" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>

            {/* Exam with submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setExamOpen(!examOpen)}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="Exam" />
                {examOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={examOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  'Exam Schedule',
                  'Hall Ticket',
                  'Score Card',
                  'Retest Exam Slip',
                  'Exam Form',
                  'Download Exam Form',
                ].map((text) => (
                  <ListItem key={text} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Finance with submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setFinanceOpen(!financeOpen)}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Finance" />
                {financeOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={financeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton component={Link} to='/student-fees-details' >
                    <ListItemText primary="Finance Details" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>

            {/* Registered Courses (no submenu) */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="Registered Courses" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
