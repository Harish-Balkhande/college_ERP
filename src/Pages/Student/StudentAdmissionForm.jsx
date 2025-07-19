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
import AdmissionInformation from '../../Components/Students/AdmissionInformation';
import ParentDetails from '../../Components/Students/ParentDetails';
import StudentAcademicRecords from '../../Components/Students/StudentAcademicRecords';

const steps = ['Personal Details',"Admission Information", 'Address Details', 'Parent Details', "Academic Records"];

export default function StudentAdmissionForm() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        // if (activeStep === steps.length - 1) {
        //     console.log('Form Submitted:', formData);
        // }
        setActiveStep(prev => prev + 1);
    };

    const handleBack = () => setActiveStep(prev => prev - 1);
    const handleReset = () => setActiveStep(0);


    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <PersonalDetails />
            case 1:
                return <AdmissionInformation />
            case 2:
                return <AddressForm />
            case 3: return <ParentDetails />
            case 4: return <StudentAcademicRecords />
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
                            <Button variant="contained" onClick={handleNext} sx={{ float: 'right', marginRight: '5%' }}>
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}
