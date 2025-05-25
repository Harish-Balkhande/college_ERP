import { Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StudentDataSection from '../../Components/Students/student_information/StudentDataSection';

// Sample data
const personalInformationData = [
  {
    title: "Basic Information",
    fields: {
      "Display Name Format": "First Middle Last",
      "Name": "Tushar kamlakar Petkar",
      "Marital Status": "",
      "Gender": "",
      "DOB": "",
      "Email": "",
      "Institute Email": '',
      "Mobile": "",
      "Alternate Mobile": '',
      "Father's Name": "",
      "Mother's Name": "",
    }
  },
  {
    title: "Other Information",
    fields: {
      "Nationality": "",
      "Religion": "",
      "Caste": "",
      "Category": '',
      "ABC ID": '',
      "Anti-ragging ID": ''
    }
  },
  {
    title: "Admin Information",
    fields: {
      "Registration Number": "GHRUA23015280237",
      "University Number": '',
      "Application Number": '',
      "Roll Number": ''
    }
  },
  {
    title: "Personal Info",
    fields: {
      "Birth Place": "",
      "Birth State": '',
      "Differently Abled": "",
      "Disability Details": '',
      "Blood Group": "",
      "Identity Mark": '',
      "Domicile Country": '',
      "Domicile State": '',
      "Mother Tongue": '',
      "Citizenship Category": '',
    }
  }
];

const admissionInformationData = [
  {
    title: "Enrollment Information",
    fields: {
      "Date of Admission": "16/08/2023",
      "Enrollment Session": "Winter 2023",
      "Academic Batch": "2023-2025",
      "Degree": "MCA",
      "Branch": "MASTER OF COMPUTER APPLICATION",
      "Scheme": "MASTER OF COMPUTER APPLICATION 2023-24",
      "Admission Category": "Management",
      "Fees Category": "General",
      "Student Group": "Beta",
      "Year": "I",
      "Semester": "I",
      "Enrollment Type": "First Year",
      "Shift": "SHIFT 1",
      "Entrance Reg. No.": "--",
      "Entrance Merit No.": "--",
      "Reference Name": "--"
    }
  },
  {
    title: "Current Academic Info",
    fields: {
      "Current Session": "Winter 2024",
      "Current Year": "II",
      "Current Semester": "III",
      "Class Section": "Mca_d_ngp",
      "Admission Status": "ACTIVE",
      "Degree": "MCA",
      "Branch": "MASTER OF COMPUTER APPLICATION",
      "Scheme": "MASTER OF COMPUTER APPLICATION 2023-24",
    }
  }
];
const addressInformationData = [
  {
    title: "Local Address",
    fields: {
      "Address Line": "At Post Sindhi(rly), Taluka Selu, Wardha",
      "City / Taluka": "Sindhi",
      "District": "Wardha",
      "State": "Maharashtra",
      "Country": "India",
      "Pin Code": "442105"
    }
  },
  {
    title: "Permanent Address",
    fields: {
      "Address Line": "At Post Sindhi(rly), Taluka Selu, Wardha",
      "City / Taluka": "Sindhi",
      "District": "Wardha",
      "State": "Maharashtra",
      "Country": "India",
      "Pin Code": "442105"
    }
  }
];
const parentsDetailsData = [
  {
    title: "Father's Information",
    fields: {
      "Title": "--",
      "First Name": "Kamlakar",
      "Last Name": "Petkar",
      "Email ID": "--",
      "Mobile Number": "8380850505",
      "Designation": "--",
      "Occupation": "Farmer",
      "Organization Name": "--",
      "Annual Income": "₹ 45,000.00"
    }
  },
  {
    title: "Mother's Information",
    fields: {
      "Title": "--",
      "First Name": "Snehal",
      "Last Name": "Petkar",
      "Email ID": "--",
      "Mobile Number": "8380850505",
      "Designation": "--",
      "Occupation": "Housewife",
      "Organization Name": "--",
      "Annual Income": "--"
    }
  },
  {
    title: "Local Guardian Information",
    fields: {
      "Title": "--",
      "First Name": "--",
      "Last Name": "--",
      "Email ID": "--",
      "Mobile Number": "--",
      "Designation": "--",
      "Occupation": "--",
      "Organization Name": "--",
      "Annual Income": "--",
      "Family Income": "--",
      "Relationship With Student": "--"
    }
  }
];
const academicRecordsData = [
  {
    title: "Educational Qualification",
    fields: {
      "Exam Passed": "BCA",
      "Board / University": "G H Raisoni University, Amravati",
      "Institute / School": "Ghru Amravati College",
      "Roll Number": "100",
      "Passing Year": "2023",
      "Result Type": "Percentage",
      "Percentage": "7.4 %",
      "Stream": "--",
      "Medium": "--",
      "Mode": "--",
      "Gap Reason": "--",
      "Gap Year": "--",
      "Result Status": "--",
      "Rank": "--",
      "Degree Name": "--",
      "Branch Name": "--",
      "Duration (in year)": "--",
      "Discipline": "--",
      "Exam Scheme": "--",
      "Enrollment number": "--",
      "Mark Obtained": "--",
      "Out Of Marked": "--"
    }
  },
  {
    title: "Documents",
    fields: {
      "Xerox Of Degree Marksheet": "UPLOADED",
      "Degree Marksheet": "UPLOADED"
    }
  }
];

//end of sample data

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

            <Box sx={{ mt: 2 }}>
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
                        <Tab label="Academic Records" />
                    </Tabs>
                </Box>
                <Box sx={{ mt: 2, border: '1px solid gray' }}>
                    {value === 0 && <StudentDataSection sections={personalInformationData} />}
                    {value === 1 && <StudentDataSection sections={admissionInformationData} />}
                    {value === 2 && <StudentDataSection sections={addressInformationData} />}
                    {value === 3 && <StudentDataSection sections={parentsDetailsData} />}
                    {value === 4 && <StudentDataSection sections={academicRecordsData} />}
                </Box>
            </Box>
        </Paper>
    )
}
