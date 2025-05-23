import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar,
    List, CssBaseline, Typography, Divider, IconButton,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
    Paper,
    Button,
    Tooltip,
    Avatar,
    Menu,
    MenuItem
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import {
    Menu as MenuIcon, ChevronLeft as ChevronLeftIcon,
    Inbox as InboxIcon, School as SchoolIcon,
    CalendarToday as CalendarTodayIcon, Book as BookIcon,
    Assignment as AssignmentIcon, AccountBalanceWallet as AccountBalanceWalletIcon,
    Dashboard as DashboardIcon, ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import Layout from './Layout';

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
    }),
);

export default function Sidebar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [hoveredMenu, setHoveredMenu] = React.useState(null);
    const drawerRef = React.useRef(null);
    const submenuRef = React.useRef(null);
    const [drawerReady, setDrawerReady] = React.useState(false);

    const submenuItems = {
        admission: [
            { label: 'Student Information', to: '/student-information' },
        ],
        attendance: [
            { label: 'My Attendance', to: '/attendence' },
        ],
        course: [
            { label: 'Subjects', to: '/subjects' },
            { label: 'Faculty', to: '/faculty' },
        ],
        exam: [
            { label: 'Exam Schedule', to: '/schedule' },
            { label: 'Hall Ticket', to: '/hall-tickets' },
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
        admission: <SchoolIcon />,
        attendance: <CalendarTodayIcon />,
        course: <BookIcon />,
        exam: <AssignmentIcon />,
        finance: <AccountBalanceWalletIcon />,
    };

    const handleClickOutside = (event) => {
        if (
            (!drawerRef.current || !drawerRef.current.contains(event.target)) &&
            (!submenuRef.current || !submenuRef.current.contains(event.target))
        ) {
            setOpen(false);
            setHoveredMenu(null);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = (event, key) => {
        setOpen(true);
        setDrawerReady(false);
        setTimeout(() => {
            setDrawerReady(true);
            if (submenuItems[key]) {
                setHoveredMenu(key);
            } else {
                setHoveredMenu(null);
            }
        }, 200);
    };

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Left side: Logo and menu icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
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

                    {/* Center: Navigation links */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Right side: User avatar */}
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography>Welcome (username here)</Typography>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={open}
                onMouseEnter={() => setOpen(true)}
                ref={drawerRef}
            >
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={Link}
                            to="/student-dashboard"
                            onMouseEnter={(e) => handleMouseEnter(e, null)}
                        >
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    {Object.keys(submenuItems).map((key) => (
                        <ListItem
                            key={key}
                            disablePadding
                            sx={{ display: 'block' }}
                            onMouseEnter={(e) => handleMouseEnter(e, key)}
                        >
                            <ListItemButton>
                                <ListItemIcon>{menuIcons[key]}</ListItemIcon>
                                <ListItemText primary={key.charAt(0).toUpperCase() + key.slice(1)} />
                                <ChevronRightIcon />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {hoveredMenu && drawerReady && (
                <Box
                    ref={submenuRef}
                    onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: drawerRef.current
                            ? drawerRef.current.getBoundingClientRect().left + drawerRef.current.offsetWidth
                            : drawerWidth,
                        width: drawerWidth,
                        height: '100vh',
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: 3,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1300,
                    }}
                >
                    <List component="div" disablePadding>
                        {submenuItems[hoveredMenu].map((item, index) => (
                            <ListItemButton
                                key={index}
                                component={item.to ? Link : 'div'}
                                to={item.to || undefined}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            )}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

            </Box>
        </Box>
    );

}
