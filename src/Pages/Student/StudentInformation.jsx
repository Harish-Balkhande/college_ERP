import { Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalInformation from '../../Components/Students/student_information/PersonalInformation';
import AdmissionInformation from '../../Components/Students/student_information/AdmissionInformation';
import AddressInformation from '../../Components/Students/student_information/AddressInformation';

const theme = createTheme({
    typography: {
        fontFamily: 'Lobster, sans-serif',
    },
});

export default function StudentInformation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const basicDetails = {
        title: '',
        name_format: 'First Middle Last',
        name: 'Mr. Tushar Kamlakar Petkar',
        maritalStatus: 'Unmarried',
        gender: 'male',
        DOB: '21/05/2002',
        email_id: 'petkar@gmail.com',
        instituteEmail: '--',
        mobileNo: '4517584578',
        alternateMobile: '--'
    }
    return (
        <Paper sx={{ width: '90%', margin: 'auto', padding: '20px' }}>
            {/* Heading */}
            <ThemeProvider theme={theme}>
                <Typography variant='h5' component="h6" sx={{ margin: '10px 0px' }}>Student Information</Typography>
            </ThemeProvider>

            {/* profile picture and name */}
            <Grid container gap={3} direction="row" alignItems="center" >
                <Grid item >
                    <Box sx={{ width: '70px', height: '70px', borderRadius: '50px', border: '1px solid black' }}></Box>
                </Grid>
                <Grid item><Box><Typography>{basicDetails.name}</Typography></Box></Grid>
            </Grid>

            <Box sx={{ mt:2 }}>
                <Box>
                    {/* Tabs section */}
                    <Tabs
                        variant='scrollable'
                        onChange={handleChange}
                        value={value}
                        scrollButtons="auto"
                    >
                        <Tab label="Personal Information" />
                        <Tab label="Admission Information" />
                        <Tab label="Address Information" />
                        <Tab label="Parents Details" />
                        <Tab label="Bank Details" />
                    </Tabs>
                </Box>
                <Box sx={{ mt: 2, border:'1px solid gray' }}>
                    {value === 0 && <PersonalInformation />}
                    {value === 1 && <AdmissionInformation />}
                    {value === 2 && <AddressInformation />}
                </Box>
            </Box>
        </Paper>
    )
}
