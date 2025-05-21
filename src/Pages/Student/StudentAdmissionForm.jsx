import React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
} from '@mui/material';
import PersonalDetails from '../../Components/Students/personalDetails';
import AddressForm from '../../Components/Students/AddressForm';
import EducationForm from '../../Components/Students/EducationForm';


const steps = ['Personal Details', 'Address Details', 'Education'];

export default function StudentAdmissionForm() {
    const [activeStep, setActiveStep] = React.useState(0);

    const [formData, setFormData] = React.useState({
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        mobile: '',
        email: '',
        maritalStatus: '',
        bloodGroup: '',
        gender: '',
        dob: '',
        occupation: '',
        birthPlace: '',
        nationality: '',
        religion: '',
        castCategory: '',
        fatherName: '',
        motherName: '',
        differentlyAbled: '',

        permanentAddress: {
            line1: '',
            line2: '',
            country: '',
            state: '',
            pincode: '',
            city: '',
        },
        localAddress: {
            sameAsPermanent: false,
            line1: '',
            line2: '',
            country: '',
            state: '',
            pincode: '',
            city: '',
        },
        educationList: [],
        currentEducation: {
            level: '',
            board: '',
            school: '',
            admissionYear: '',
            passingYear: '',
            obtainedMarks: '',
            totalMarks: '',
            percentage: '',
            result: '',
            cgpa: ''
        }
    });

    const handleChange = (e, section, subField) => {
        const { name, value, checked, type } = e.target;

        if (section === 'permanentAddress' || section === 'localAddress') {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [name]: value
                }
            }));
        } else if (section === 'currentEducation') {
            setFormData(prev => ({
                ...prev,
                currentEducation: {
                    ...prev.currentEducation,
                    [name]: value
                }
            }));
        } else if (name === 'sameAsPermanent') {
            setFormData(prev => ({
                ...prev,
                localAddress: {
                    ...prev.localAddress,
                    sameAsPermanent: checked,
                    ...(checked ? { ...prev.permanentAddress } : {})
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            console.log('Form Submitted:', formData);
        }
        setActiveStep(prev => prev + 1);
    };

    const handleBack = () => setActiveStep(prev => prev - 1);

    const handleReset = () => setActiveStep(0);

    const handleAddEducation = () => {
        setFormData(prev => ({
            ...prev,
            educationList: [...prev.educationList, prev.currentEducation],
            currentEducation: {
                level: '',
                board: '',
                school: '',
                admissionYear: '',
                passingYear: '',
                obtainedMarks: '',
                totalMarks: '',
                percentage: '',
                result: '',
                cgpa: ''
            }
        }));
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <PersonalDetails />
            case 1:
                return <AddressForm />
            case 2:
                return <EducationForm />             
            default:
                return 'Unknown Step';
        }
    };

    return (
        <Box sx={{ width: '100%', p: 3 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ mt: 3 }}>
                {activeStep === steps.length ? (
                    <Box>
                        <Typography>All steps completed - form submitted</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                ) : (
                    <>
                        {renderStepContent()}
                        <Box sx={{ mt: 2 }}>
                            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                            <Button variant="contained" onClick={handleNext} sx={{float: 'right', marginRight: '5%'}}>
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}


















// import React from 'react';
// import { Stepper, Step, StepLabel, Button, Typography, Box, TextField } from '@mui/material';

// function getSteps() {
//   return ['Personal Details', 'Address', 'Education', 'Course Selection'];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return (
//         <Box>
//             <TextField
//             label="Full Name"
//             name="name"
//             // value={formData.name}
//             // onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//         </Box>
//       );
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown stepIndex';
//   }
// }

// export default function StudentAdmissionForm() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 2 }}>
//         {activeStep === steps.length ? (
//           <Box>
//             <Typography sx={{ mt: 2, mb: 1 }}>All steps completed</Typography>
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         ) : (
//           <Box>
//             <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
//             <Box>
//               <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//                 Back
//               </Button>
//               <Button variant="contained" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }
