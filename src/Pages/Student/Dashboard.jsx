import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const student_data = {
    student_name: "Mr. Tushar Petkar",
    reg_num: "GHRUA23015280237",
    roll_no: "NG-MCA-D-37",
    total_student: 122,
    present_student: 86,
    student_performance: "7.53 CGPA",
    upcomming_classes: "",
}
const absent_student = student_data.total_student - student_data.present_student;
// #EAEBD0,F4E7E1, ECFAE5
const colorPalette = {
    background: '#F2F2F2',
    sectionBackground: '#E8F9FF',
    display: '#fff',
    tableHead: { background: '#174D38', text: '#fff' },
    tableBody:{col1:'#CBCBCB', col2:'#F2F2F2'},
    text: 'black',
}

export default function Dashboard() {
    const [pieChartData, setPieChartData] = useState([
        { id: 0, value: student_data.present_student, label: 'Present' },
        { id: 1, value: absent_student, label: 'Absent' }
    ]);

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
        <Box sx={{ backgroundColor: colorPalette.sectionBackground }}>
            <Typography sx={{fontFamily:'Oswald', fontWeight:900, fontSize:'24px',margin:'20px'}}>Dashboard</Typography>

            <Grid container spacing={1} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <Grid item xs={12} sm={12} md={4} >
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Welcome
                        </Typography>

                        {/* Form contents go here */}
                        <p style={{ fontSize: "12px" }}><strong>Registration Number :</strong>{student_data.reg_num}</p>
                        <p style={{ fontSize: "12px" }}><strong>Roll Number :</strong>{student_data.roll_no}</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Attendance
                        </Typography>
                        {/* Form contents go here */}
                        <PieChart
                            height={100}
                            width={100}
                            series={[
                                {
                                    data: pieChartData,
                                    innerRadius: 20,
                                    outerRadius: 50,
                                    // arcLabel: (item) => `${item.value}`,
                                },
                            ]}
                        />
                    </Paper>
                </Grid>

                {/* Performance */}
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Performance
                        </Typography>
                        <Typography fontSize={32} color='#39d039'  ><strong>{student_data.student_performance
                        }</strong></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Upcomming Classes
                        </Typography>

                        {/* Form contents go here */}

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Recent Published Result
                        </Typography>

                        {/* Form contents go here */}

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3}
                        component="fieldset"
                        sx={{
                            border: 'none',
                            borderRadius: 2,
                            padding: 2,
                            marginTop: 2,
                            width: '300px',
                            height: '150px',
                            backgroundColor: colorPalette.display
                        }}
                    >
                        <Typography
                            component="legend"
                            sx={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '0 8px',
                            }}
                        >
                            Upcomming Exams
                        </Typography>

                        {/* Form contents go here */}

                    </Paper>
                </Grid>
            </Grid>

            {/* Table */}
            <Box mt={3} >
                <Typography variant="h6" gutterBottom sx={{fontFamily:'Oswald', fontWeight:900, fontSize:'24px',margin:'20px'}} >
                    Course Components
                </Typography>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead >
                            <TableRow sx={{backgroundColor: colorPalette.tableHead.background}}>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>S.No.</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>course code</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Course Name</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Register Category</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Component</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Credit</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Registration Type</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Faculty</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Attendance %</strong></TableCell>
                                <TableCell sx={{color: colorPalette.tableHead.text}}><strong>Status</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courseData.map((row, index) => (
                                <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? colorPalette.tableBody.col1 : colorPalette.tableBody.col2}}>
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
        </Box>
    )
}