import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar,
    List, CssBaseline, Typography, Divider, IconButton,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
    Paper
} from '@mui/material';

import {
    Menu as MenuIcon, ChevronLeft as ChevronLeftIcon,
    Inbox as InboxIcon, ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

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

export default function Sidebar2() {
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
            { label: 'Exam Schedule' },
            { label: 'Hall Ticket' },
            { label: 'Score Card' },
            { label: 'Retest Exam Slip' },
            { label: 'Exam Form' },
            { label: 'Download Exam Form' },
        ],
        finance: [
            { label: 'Fee', to: '/fee' },
            { label: 'Payment', to: '/payment' },
        ],
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
                <Toolbar>
                    <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Student Dashboard
                    </Typography>
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
                            <ListItemIcon><InboxIcon /></ListItemIcon>
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
                                <ListItemIcon><InboxIcon /></ListItemIcon>
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
