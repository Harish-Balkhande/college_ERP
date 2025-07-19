import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar,
    List, CssBaseline, Typography, Divider, IconButton,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
    Button, Tooltip, Avatar, Menu, MenuItem
} from '@mui/material';

import {
    Menu as MenuIcon, ChevronLeft as ChevronLeftIcon,
    School as SchoolIcon, CalendarToday as CalendarTodayIcon,
    Book as BookIcon, Assignment as AssignmentIcon,
    AccountBalanceWallet as AccountBalanceWalletIcon,
    Dashboard as DashboardIcon, ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const settings = [
  { label: 'Profile', path: '/profile' },
  { label: 'Account', path: '/account' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Logout', path: '/logout' }
];


const colorPalette = {
    sidebar: { background: '#4D1717', icon: '#fff', text: '#fff' },
    navbar: { background: 'whitesmoke', icon: 'black', text: 'black' },
    submenubar: { background: 'blanchedalmond', text: 'black' },
};

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    })
);

export default function Layout({ children }) {
    const auth = useSelector((state) => state.auth);
    const { fullName, isAuthenticated } = auth;

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [hoveredMenu, setHoveredMenu] = React.useState(null);
    const drawerRef = React.useRef(null);
    const submenuRef = React.useRef(null);
    const closeTimerRef = React.useRef(null);

    const submenuItems = {
        admission: [{ label: 'Student Information', to: '/student-information' }],
        attendance: [{ label: 'My Attendance', to: '/attendence' }],
        course: [
            { label: 'Admission Form', to: '/admission-form' },
            { label: 'Faculty', to: '/faculty' },
        ],
        exam: [
            { label: 'Exam Schedule', to: '/schedule' },
            { label: 'Hall Ticket', to: '/hall-tickets' },
            { label: 'Exam Score', to: '/exam-score' },
            { label: 'Score Card', to: '/score-card' },
            { label: 'Retest Exam Slip', to: '/retest-slip' },
            { label: 'Exam Form', to: '/my-exam-form' },
            { label: 'Download Exam Form', to: '/download-exam-form' },
        ],
        finance: [
            { label: 'Fee', to: '/student-fees-details' },
            { label: 'Payment', to: '/payment' },
        ],
    };

    const menuIcons = {
        dashboard: <DashboardIcon />,
        admission: <SchoolIcon />,
        attendance: <CalendarTodayIcon />,
        course: <BookIcon />,
        exam: <AssignmentIcon />,
        finance: <AccountBalanceWalletIcon />,
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const startCloseTimer = () => {
        closeTimerRef.current = setTimeout(() => {
            setOpen(false);
            setHoveredMenu(null);
        }, 300);
    };

    const cancelCloseTimer = () => {
        clearTimeout(closeTimerRef.current);
    };

    const handleMouseEnterMenu = (key = null) => {
    cancelCloseTimer();

    if (!open) {
        setOpen(true); // Open main menu tray
        if (key) {
            // Delay submenu open until drawer transition finishes
            setTimeout(() => {
                setHoveredMenu(key);
            }, 225); // Match the transition duration
        } else {
            setHoveredMenu(null);
        }
    } else {
        setHoveredMenu(key || null);
    }
};


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: colorPalette.navbar.background,
                        color: colorPalette.navbar.text,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {pages.map((page) => (
                            <Button key={page} sx={{ my: 2, color: 'white' }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
                        {isAuthenticated && (
                            <Box>
                                <Typography>Welcome</Typography>
                                <Typography>{fullName}</Typography>
                            </Box>
                        )}

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Avatar" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting.label}
                                    component={Link}
                                    to={setting.path}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">{setting.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={open}
                ref={drawerRef}
                onMouseEnter={cancelCloseTimer}
                onMouseLeave={startCloseTimer}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: colorPalette.sidebar.background,
                            color: colorPalette.sidebar.text,
                        },
                    },
                }}
            >
                <DrawerHeader>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={Link}
                            to="/student-dashboard"
                            onMouseEnter={() => handleMouseEnterMenu(null)}
                        >
                            <ListItemIcon sx={{ color: colorPalette.sidebar.icon }}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ color: colorPalette.sidebar.text }} />
                        </ListItemButton>
                    </ListItem>
                    {Object.keys(submenuItems).map((key) => (
                        <ListItem
                            key={key}
                            disablePadding
                            sx={{ display: 'block' }}
                            onMouseEnter={() => handleMouseEnterMenu(key)}
                        >
                            <ListItemButton>
                                <ListItemIcon sx={{ color: colorPalette.sidebar.icon }}>
                                    {menuIcons[key]}
                                </ListItemIcon>
                                <ListItemText primary={key.charAt(0).toUpperCase() + key.slice(1)} />
                                <ChevronRightIcon />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {hoveredMenu && (
                <Box
                    ref={submenuRef}
                    onMouseEnter={cancelCloseTimer}
                    onMouseLeave={startCloseTimer}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: drawerRef.current
                            ? drawerRef.current.getBoundingClientRect().left + drawerRef.current.offsetWidth
                            : drawerWidth,
                        width: drawerWidth,
                        height: '100vh',
                        backgroundColor: colorPalette.submenubar.background,
                        boxShadow: 3,
                        zIndex: 1300,
                    }}
                >
                    <List disablePadding>
                        {submenuItems[hoveredMenu].map((item, index) => (
                            <ListItemButton
                                key={index}
                                component={Link}
                                to={item.to}
                                sx={{ color: colorPalette.submenubar.text }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            )}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
