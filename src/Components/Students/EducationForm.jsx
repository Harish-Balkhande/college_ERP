// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
// } from '@mui/material';

// const StudentEducationForm = () => {
//   const [formData, setFormData] = useState({
//     currentEducation: {
//       level: '',
//       board: '',
//       school: '',
//       obtainedMarks: '',
//       totalMarks: '',
//       cgpa: '',
//     },
//     educationList: [],
//   });

//   const handleChange = (e, section) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [name]: value,
//       },
//     }));
//   };

//   const handleAddEducation = () => {
//     setFormData((prev) => ({
//       ...prev,
//       educationList: [...prev.educationList, prev.currentEducation],
//       currentEducation: {
//         level: '',
//         board: '',
//         school: '',
//         obtainedMarks: '',
//         totalMarks: '',
//         cgpa: '',
//       },
//     }));
//   };

//   return (
//     <Box>
//       <FormControl margin="normal">
//         <InputLabel>Highest Education</InputLabel>
//         <Select
//           name="level"
//           size='small'
//           value={formData.currentEducation.level}
//           onChange={(e) => handleChange(e, 'currentEducation')}
//         >
//           <MenuItem value="SSC">SSC</MenuItem>
//           <MenuItem value="HSC">HSC</MenuItem>
//           <MenuItem value="UG">UG</MenuItem>
//           <MenuItem value="PG">PG</MenuItem>
//         </Select>
//       </FormControl>

//       <TextField
//         size='small'
//         name="board"
//         label="Board/University"
//         margin="normal"
//         variant='outlined'
        
//         // sx={{
//         //   '& .MuiInputBase-root': {
//         //     height: 30, // height of the whole input wrapper
//         //   },
//         //   '& .MuiInputBase-input': {
//         //     padding: '0px 14px', // internal input padding
//         //   },
//         //   '& label': {
//         //     fontSize: '0.875rem',
//         //     height: 30,
//         //     lineHeight: '30px',
//         //     top: '-15px',              // Align label vertically (may need tweaking)
//         //   },
//         //   '& label.MuiInputLabel-shrink': {
//         //     top: 0,                  // When label is floating
//         //   }
//         // }}
//         value={formData.currentEducation.board}
//         onChange={(e) => handleChange(e, 'currentEducation')}
//       />

//       <TextField
//         size='small'
//         name="school"
//         label="School/College"
//         margin="normal"
//         value={formData.currentEducation.school}
//         onChange={(e) => handleChange(e, 'currentEducation')}
//       />

//       <TextField
//         size='small'
//         name="obtainedMarks"
//         label="Obtained Marks"
//         margin="normal"
//         value={formData.currentEducation.obtainedMarks}
//         onChange={(e) => handleChange(e, 'currentEducation')}
//       />

//       <TextField
//         size='small'
//         name="totalMarks"
//         label="Total Marks"
//         margin="normal"
//         value={formData.currentEducation.totalMarks}
//         onChange={(e) => handleChange(e, 'currentEducation')}
//       />

//       <TextField
//         size='small'
//         name="cgpa"
//         label="CGPA"
//         margin="normal"
//         value={formData.currentEducation.cgpa}
//         onChange={(e) => handleChange(e, 'currentEducation')}
//       />

//       <Button variant="outlined" onClick={handleAddEducation} sx={{ mt: 2 }}>
//         Add Education
//       </Button>

//       <TableContainer component={Paper} sx={{ mt: 3 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Level</TableCell>
//               <TableCell>Board</TableCell>
//               <TableCell>School</TableCell>
//               <TableCell>Marks</TableCell>
//               <TableCell>CGPA</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {formData.educationList.map((edu, index) => (
//               <TableRow key={index}>
//                 <TableCell>{edu.level}</TableCell>
//                 <TableCell>{edu.board}</TableCell>
//                 <TableCell>{edu.school}</TableCell>
//                 <TableCell>{edu.obtainedMarks}/{edu.totalMarks}</TableCell>
//                 <TableCell>{edu.cgpa}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default StudentEducationForm;


import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

function EducationForm({ formData, handleChange, handleAddEducation }) {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Highest Education */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth size="small" margin="normal">
            <InputLabel>Highest Education</InputLabel>
            <Select
              name="level"
              value={formData.currentEducation.level}
              onChange={(e) => handleChange(e, 'currentEducation')}
              label="Highest Education"
            >
              <MenuItem value="SSC">SSC</MenuItem>
              <MenuItem value="HSC">HSC</MenuItem>
              <MenuItem value="UG">UG</MenuItem>
              <MenuItem value="PG">PG</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Board/University */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size="small"
            name="board"
            label="Board/University"
            margin="normal"
            value={formData.currentEducation.board}
            onChange={(e) => handleChange(e, 'currentEducation')}
          />
        </Grid>

        {/* School/College */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size="small"
            name="school"
            label="School/College"
            margin="normal"
            value={formData.currentEducation.school}
            onChange={(e) => handleChange(e, 'currentEducation')}
          />
        </Grid>

        {/* Obtained Marks */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size="small"
            name="obtainedMarks"
            label="Obtained Marks"
            margin="normal"
            value={formData.currentEducation.obtainedMarks}
            onChange={(e) => handleChange(e, 'currentEducation')}
          />
        </Grid>

        {/* Total Marks */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size="small"
            name="totalMarks"
            label="Total Marks"
            margin="normal"
            value={formData.currentEducation.totalMarks}
            onChange={(e) => handleChange(e, 'currentEducation')}
          />
        </Grid>

        {/* CGPA */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size="small"
            name="cgpa"
            label="CGPA"
            margin="normal"
            value={formData.currentEducation.cgpa}
            onChange={(e) => handleChange(e, 'currentEducation')}
          />
        </Grid>

        {/* Add Button */}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={handleAddEducation}
            sx={{ mt: 1 }}
          >
            Add Education
          </Button>
        </Grid>
      </Grid>

      {/* Table Display */}
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>Board</TableCell>
              <TableCell>School</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>CGPA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.educationList.map((edu, index) => (
              <TableRow key={index}>
                <TableCell>{edu.level}</TableCell>
                <TableCell>{edu.board}</TableCell>
                <TableCell>{edu.school}</TableCell>
                <TableCell>
                  {edu.obtainedMarks}/{edu.totalMarks}
                </TableCell>
                <TableCell>{edu.cgpa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EducationForm;
