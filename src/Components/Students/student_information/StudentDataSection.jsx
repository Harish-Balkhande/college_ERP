// components/StudentDataSection.js --> This is the reusable component to display the 
// information of Tabs in StudentInformation.jsx component


import { Box, Grid, Paper, Typography } from '@mui/material';

const StudentDataSection = ({ sections }) => {
  const paperStyles = {
    border: 'none',
    borderRadius: 2,
    padding: 2,
    mb: 2
  };

  const sectionTitleStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'skyblue'
  };

  const renderTableRow = (label, value) => (
    <tr key={label}>
      <td><strong>{label}</strong></td>
      <td style={{ padding: '0 8px' }}>:</td>
      <td>{value || "--"}</td>
    </tr>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} justifyContent="flex-start">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Paper elevation={3} sx={paperStyles}>
              <Typography sx={sectionTitleStyles}>{section.title}</Typography>
              <table>
                <tbody>
                  {Object.entries(section.fields).map(([key, val]) => renderTableRow(key, val))}
                </tbody>
              </table>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StudentDataSection;
