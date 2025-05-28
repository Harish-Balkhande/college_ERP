import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../../styles/student/admissionForm.css";

export default function CurrentCourse() {
    const [isHavingDisability, setIsHavingDisability] = useState('');
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: "",
        dob: "",
        maritalStatus: "",
        bloodGroup: "",
        gender: "",
        occupation: "",
        birthPlace: "",
        nationality: "",
        religion: "",
        castCategory: "",
        fatherName: "",
        motherName: "",
        differentlyAbled: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div className='container'>
            <form action="#">
                <div className='form first'>
                    {/* Enrollment Information */}
                    <div className='details enrollment'>
                        <span className='title'>Enrollment Information</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <input type="text" value="16/08/2023" disabled placeholder='Date of Admission' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="Winter 2023" disabled placeholder='Enrollment Session' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="2023-2025" disabled placeholder='Academic Batch' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MCA" disabled placeholder='Degree' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MASTER OF COMPUTER APPLICATION" disabled placeholder='Branch' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MASTER OF COMPUTER APPLICATION 2023-24" disabled placeholder='Scheme' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="Management" disabled placeholder='Admission Category' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="General" disabled placeholder='Fees Category' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="Beta" disabled placeholder='Student Group' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="I" disabled placeholder='Year' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="I" disabled placeholder='Semester' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="First Year" disabled placeholder='Enrollment Type' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="SHIFT 1" disabled placeholder='Shift' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="--" disabled placeholder='Entrance Reg. No.' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="--" disabled placeholder='Entrance Merit No.' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="--" disabled placeholder='Reference Name' />
                            </div>
                        </div>
                    </div>

                    {/* Current Academic Info */}
                    <div className='details academic'>
                        <span className='title'>Current Academic Info</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <input type="text" value="Winter 2024" disabled placeholder='Current Session' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="II" disabled placeholder='Current Year' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="III" disabled placeholder='Current Semester' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="Mca_d_ngp" disabled placeholder='Class Section' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="ACTIVE" disabled placeholder='Admission Status' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MCA" disabled placeholder='Degree' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MASTER OF COMPUTER APPLICATION" disabled placeholder='Branch' />
                            </div>
                            <div className='input-field'>
                                <input type="text" value="MASTER OF COMPUTER APPLICATION 2023-24" disabled placeholder='Scheme' />
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
