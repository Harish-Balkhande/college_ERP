import { Box, FormControl, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function Dashboard() {

    const courseData = [
        {
            code: '122',
            name: "MACHINE LEARNING",
            RegisterCategory: 'Regular',
            Component: 'Theory',
            Credit: '3',
            RegistrationType: 'Regular',
            Faculty: 'Neha Sharma',
            Attendance: '82%',
            Status: 'Active'
        },
        {
            code: '123',
            name: "DATA STRUCTURES",
            RegisterCategory: 'Regular',
            Component: 'Theory',
            Credit: '4',
            RegistrationType: 'Regular',
            Faculty: 'Rajeev Malhotra',
            Attendance: '89%',
            Status: 'Active'
        },
        {
            code: '124',
            name: "OPERATING SYSTEMS",
            RegisterCategory: 'Regular',
            Component: 'Theory',
            Credit: '3',
            RegistrationType: 'Regular',
            Faculty: 'Sunita Rao',
            Attendance: '68%',
            Status: 'Active'
        },
        {
            code: '125',
            name: "DATABASE MANAGEMENT SYSTEMS",
            RegisterCategory: 'Regular',
            Component: 'Theory',
            Credit: '3',
            RegistrationType: 'Regular',
            Faculty: 'Vikas Mehta',
            Attendance: '91%',
            Status: 'Active'
        },
        {
            code: '126',
            name: "COMPUTER NETWORKS",
            RegisterCategory: 'Regular',
            Component: 'Theory',
            Credit: '3',
            RegistrationType: 'Regular',
            Faculty: 'Preeti Nair',
            Attendance: '74%',
            Status: 'Active'
        }

    ]
    return (
        <>
            <Typography sx={{margin:'15px', fontSize:'24px', fontFamily:'serif'}}>Dashboard</Typography>
            <Box sx={{ border: '1px solid gray', borderRadius:'10px', maxWidth: '95%', margin:'auto', padding: '12px' }}>
                <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Welcome
                            </Typography>

                            {/* Form contents go here */}
                            <Typography><strong>Your Registration Number :</strong> 45464646</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Attendance
                            </Typography>
                            {/* Form contents go here */}

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Performance
                            </Typography>

                            {/* Form contents go here */}

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Upcomming Classes
                            </Typography>

                            {/* Form contents go here */}

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Recent Published Result
                            </Typography>

                            {/* Form contents go here */}

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            component="fieldset"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: 2,
                                padding: 2,
                                marginTop: 2,
                                width: '200px',
                                height: '100px'
                            }}
                        >
                            <Typography
                                component="legend"
                                sx={{
                                    fontSize:'10px',
                                    fontWeight: 'bold',
                                    padding: '0 8px',
                                }}
                            >
                                Upcomming Exams
                            </Typography>

                            {/* Form contents go here */}

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Typography variant="h6" gutterBottom>
                    Course Components
                </Typography>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>S.No.</strong></TableCell>
                                <TableCell><strong>course code</strong></TableCell>
                                <TableCell><strong>Course Name</strong></TableCell>
                                <TableCell><strong>Register Category</strong></TableCell>
                                <TableCell><strong>Component</strong></TableCell>
                                <TableCell><strong>Credit</strong></TableCell>
                                <TableCell><strong>Registration Type</strong></TableCell>
                                <TableCell><strong>Faculty</strong></TableCell>
                                <TableCell><strong>Attendance %</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courseData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{row.code}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.RegisterCategory}</TableCell>
                                    <TableCell>{row.component}</TableCell>
                                    <TableCell>{row.Credit}</TableCell>
                                    <TableCell>{row.RegistrationType}</TableCell>
                                    <TableCell>{row.Faculty}</TableCell>
                                    <TableCell>{row.Attendance}</TableCell>
                                    <TableCell>{row.Status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
