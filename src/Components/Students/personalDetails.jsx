import React, { useState } from "react";
import {
    Box,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from "@mui/material";

const PersonalDetails = () => {
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
        <Box sx={{ width: "80%", margin: "auto", mt: 5, p: 3 }}>
            <Typography variant="h6">Personal Details</Typography>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* Title */}
                <Grid item xs={12} sm={6} md={3} sx={{ minWidth: '80px' }} >
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Title</InputLabel>
                        <Select name="title" value={formData.title} onChange={handleChange} >
                            {["Mr.", "Miss", "Mrs.", "Dr."].map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Name Fields */}
                {["firstName", "middleName", "lastName"].map((field, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            name={field}
                            label={field.replace(/([A-Z])/g, " $1")}
                            margin="normal"
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </Grid>
                ))}

                {/* Mobile and Email */}
                {["mobile", "email"].map((field, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            name={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            margin="normal"
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </Grid>
                ))}

                {/* Date of Birth */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </Grid>

                {/* Dropdowns */}
                {[
                    { name: "maritalStatus", label: "Marital Status", options: ["Single", "Married", "Divorced", "Widowed", "Not Married"] },
                    { name: "bloodGroup", label: "Blood Group", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Golden Blood"] },
                    { name: "gender", label: "Gender", options: ["Male", "Female", "Other"] }
                ].map((dropdown, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>{dropdown.label}</InputLabel>
                            <Select name={dropdown.name} value={formData[dropdown.name]} onChange={handleChange} sx={{ minWidth: "150px" }}>
                                {dropdown.options.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                ))}

                {/* Occupation, Birth Place, Nationality, Religion, Cast Category */}
                {["occupation", "birthPlace", "nationality", "religion", "castCategory"].map((field, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            name={field}
                            label={field.replace(/([A-Z])/g, " $1")}
                            margin="normal"
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </Grid>
                ))}
            </Grid>
            {/* Parents' Details */}
            <Typography variant="h6">Parent Details</Typography>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {["fatherName", "motherName"].map((field, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            name={field}
                            label={field.replace(/([A-Z])/g, " $1")}
                            margin="normal"
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </Grid>
                ))}

                {/* Differently Abled */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Differently Abled</InputLabel>
                        <Select
                            name="differentlyAbled"
                            value={formData.differentlyAbled}
                            onChange={handleChange}
                            sx={{ minWidth: "200px" }}
                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalDetails;
