
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Paper,
  Grid
} from "@mui/material";

const StudentProgress = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Student Progression
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Search Section */}
        <Typography variant="h6" sx={{ 
          fontWeight: 'bold', 
          color: 'green',
          borderBottom: '2px solid green',
          display: 'inline-block',
          mb: 3
        }}>
          Search
        </Typography>

        <Grid container spacing={16}>
          {/* Row 1 */}
          <Grid item xs={12} md={6} lg={4}>
  <FormControl fullWidth required>
    <InputLabel id="academic-batch-label">
      Academic Batch <span style={{ color: "red" }}></span>
    </InputLabel>
    <Select labelId="academic-batch-label" defaultValue="">
      <MenuItem value="">Choose</MenuItem>
      <MenuItem value="2023-24">2023-24</MenuItem>
      <MenuItem value="2022-23">2022-23</MenuItem>
    </Select>
  </FormControl>
</Grid>


          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth required>
              <InputLabel>Academic Session *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="Spring 2024">Spring 2024</MenuItem>
                <MenuItem value="Fall 2023">Fall 2023</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth required>
              <InputLabel>Degree *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="BCA">BCA</MenuItem>
                <MenuItem value="BBA">BBA</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth required>
              <InputLabel>Branch *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth required>
              <InputLabel>Year *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth required>
              <InputLabel>Semester *</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Class Section */}
        <Box sx={{ width: '33%' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Class Section
          </Typography>
          <FormControl fullWidth>
            <Select defaultValue="All">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentProgress;
 