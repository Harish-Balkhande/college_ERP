import {
    Box,
    colors,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import React, { useState } from 'react';

export default function PersonalInformation() {
    const [PersonalInformation, setPersonalInfo] = useState({
        basicInfo: {
            displayNameFormat: "First Middle Last",
            name: "Tushar kamlakar Petkar ",
            maritalStatus: "",
            gender: "",
            dob: "",
            email: "",
            instituteEmail: '',
            mobile: "",
            alternateMobile: '',
            fatherName: "",
            motherName: "",
        },
        otherInfo: {
            nationality: "",
            religion: "",
            cast: "",
            category: '',
            ABC_id: '',
            anti_ragging_id: ''
        },
        adminInfo: {
            regNumber: "GHRUA23015280237",
            UniversityNumber: '',
            applicationNumber: '',
            rollNumber: ''
        },
        personalInfo: {
            birthPlace: "",
            birthState: '',
            differentlyAbled: "",
            disabilityDetails: '',
            bloodGroup: "",
            identityMark: '',
            domicileCountry: '',
            domicileState: '',
            motherTongue: '',
            citizenshipCategory: '',
        }
    });

    const paperStyles = {
        border: 'none',
        borderRadius: 2,
        padding: 2,
        // height: '100%',
    };

    const sectionTitleStyles = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: 1,
        color:'skyblue'
    };

    const renderTableRow = (label, value) => (
        <tr>
            <td><strong>{label}</strong></td>
            <td>:</td>
            <td>{value || "--"}</td>
        </tr>
    );

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{minWidth:'100%'}}>
                {/* Basic Info */}
                <Grid item xs={12} sm={6} md={4} sx={{minWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Basic Information</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Name", PersonalInformation.basicInfo.name)}
                                {renderTableRow("Mobile", PersonalInformation.basicInfo.mobile)}
                                {renderTableRow("Email", PersonalInformation.basicInfo.email)}
                                {renderTableRow("DOB", PersonalInformation.basicInfo.dob)}
                                {renderTableRow("Marital Status", PersonalInformation.basicInfo.maritalStatus)}
                                {renderTableRow("Blood Group", PersonalInformation.personalInfo.bloodGroup)}
                                {renderTableRow("Gender", PersonalInformation.basicInfo.gender)}
                                {renderTableRow("Birth Place", PersonalInformation.personalInfo.birthPlace)}
                                {renderTableRow("Differently Abled", PersonalInformation.personalInfo.differentlyAbled)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>

                {/* Other Info */}
                <Grid item xs={12} sm={6} md={4} sx={{minWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Other Information</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Nationality", PersonalInformation.otherInfo.nationality)}
                                {renderTableRow("Religion", PersonalInformation.otherInfo.religion)}
                                {renderTableRow("Caste", PersonalInformation.otherInfo.cast)}
                                {renderTableRow("Category", PersonalInformation.otherInfo.category)}
                                {renderTableRow("ABC ID", PersonalInformation.otherInfo.ABC_id)}
                                {renderTableRow("Anti Ragging ID", PersonalInformation.otherInfo.anti_ragging_id)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>

                {/* Admin Info */}
                <Grid item xs={12} sm={6} md={4} sx={{minWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Admin Information</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Registration Number", PersonalInformation.adminInfo.regNumber)}
                                {renderTableRow("University Number", PersonalInformation.adminInfo.UniversityNumber)}
                                {renderTableRow("Application Number", PersonalInformation.adminInfo.applicationNumber)}
                                {renderTableRow("Roll Number", PersonalInformation.adminInfo.rollNumber)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>

                {/* Personal Info */}
                <Grid item xs={12} sm={6} md={4} sx={{minWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Personal Details</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Birth State", PersonalInformation.personalInfo.birthState)}
                                {renderTableRow("Disability Details", PersonalInformation.personalInfo.disabilityDetails)}
                                {renderTableRow("Identity Mark", PersonalInformation.personalInfo.identityMark)}
                                {renderTableRow("Domicile Country", PersonalInformation.personalInfo.domicileCountry)}
                                {renderTableRow("Domicile State", PersonalInformation.personalInfo.domicileState)}
                                {renderTableRow("Mother Tongue", PersonalInformation.personalInfo.motherTongue)}
                                {renderTableRow("Citizenship Category", PersonalInformation.personalInfo.citizenshipCategory)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
