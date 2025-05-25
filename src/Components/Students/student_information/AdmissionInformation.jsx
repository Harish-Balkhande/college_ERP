import {
    Box,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import React, { useState } from 'react';

export default function AdmissionInformation() {
    const [admissionInformation, setAdmissionInformation] = useState({
        enrollmentInfo: {
            dateOfAdmission: "16/08/2023",
            enrollmentSession: "Winter 2023",
            academicBatch: "2023-2025",
            degree: "MCA",
            branch: "MASTER OF COMPUTER APPLICATION",
            scheme: "MASTER OF COMPUTER APPLICATION 2023-24",
            admissionCategory: "Management",
            feesCategory: "General",
            studentGroup: "Beta",
            year: "I",
            semester: "I",
            enrollmentType: "First Year",
            shift: "SHIFT 1",
            entranceExam: {
                registrationNo: "--",
                meritNo: "--"
            },
            referenceName: "--"
        },
        currentAcademicInfo: {
            degree: "MCA",
            branch: "MASTER OF COMPUTER APPLICATION",
            scheme: "MASTER OF COMPUTER APPLICATION 2023-24",
            sessions: [
                {
                    session: "Winter 2023",
                    year: "I",
                    semester: "I"
                },
                {
                    session: "Winter 2024",
                    year: "II",
                    semester: "III",
                    classSection: "Mca_d_ngp"
                }
            ],
            currentSession: "Winter 2024",
            currentYear: "II",
            currentSemester: "III",
            classSection: "Mca_d_ngp",
            admissionStatus: "ACTIVE"
        }
    });

    const paperStyles = {
        border: 'none',
        borderRadius: 2,
        padding: 2,
    };

    const sectionTitleStyles = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: 1,
        color: 'skyblue'
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
            <Grid container spacing={2} flexDirection="row" justifyContent="space-evenly">
                {/* Enrollment Info */}
                <Grid item xs={12} sm={6} md={4} sx={{maxWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Enrollment Information</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Date of Admission", admissionInformation.enrollmentInfo.dateOfAdmission)}
                                {renderTableRow("Enrollment Session", admissionInformation.enrollmentInfo.enrollmentSession)}
                                {renderTableRow("Academic Batch", admissionInformation.enrollmentInfo.academicBatch)}
                                {renderTableRow("Degree", admissionInformation.enrollmentInfo.degree)}
                                {renderTableRow("Branch", admissionInformation.enrollmentInfo.branch)}
                                {renderTableRow("Scheme", admissionInformation.enrollmentInfo.scheme)}
                                {renderTableRow("Admission Category", admissionInformation.enrollmentInfo.admissionCategory)}
                                {renderTableRow("Fees Category", admissionInformation.enrollmentInfo.feesCategory)}
                                {renderTableRow("Student Group", admissionInformation.enrollmentInfo.studentGroup)}
                                {renderTableRow("Year", admissionInformation.enrollmentInfo.year)}
                                {renderTableRow("Semester", admissionInformation.enrollmentInfo.semester)}
                                {renderTableRow("Enrollment Type", admissionInformation.enrollmentInfo.enrollmentType)}
                                {renderTableRow("Shift", admissionInformation.enrollmentInfo.shift)}
                                {renderTableRow("Entrance Reg. No.", admissionInformation.enrollmentInfo.entranceExam.registrationNo)}
                                {renderTableRow("Entrance Merit No.", admissionInformation.enrollmentInfo.entranceExam.meritNo)}
                                {renderTableRow("Reference Name", admissionInformation.enrollmentInfo.referenceName)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>

                {/* Current Academic Info */}
                <Grid item xs={12} sm={6} md={5} sx={{maxWidth:'45%'}}>
                    <Paper elevation={4} sx={paperStyles} component="fieldset">
                        <Typography sx={sectionTitleStyles} component="legend">Current Academic Information</Typography>
                        <table>
                            <tbody>
                                {renderTableRow("Current Session", admissionInformation.currentAcademicInfo.currentSession)}
                                {renderTableRow("Current Year", admissionInformation.currentAcademicInfo.currentYear)}
                                {renderTableRow("Current Semester", admissionInformation.currentAcademicInfo.currentSemester)}
                                {renderTableRow("Class Section", admissionInformation.currentAcademicInfo.classSection)}
                                {renderTableRow("Admission Status", admissionInformation.currentAcademicInfo.admissionStatus)}
                                {renderTableRow("Degree", admissionInformation.currentAcademicInfo.degree)}
                                {renderTableRow("Branch", admissionInformation.currentAcademicInfo.branch)}
                                {renderTableRow("Scheme", admissionInformation.currentAcademicInfo.scheme)}
                            </tbody>
                        </table>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
