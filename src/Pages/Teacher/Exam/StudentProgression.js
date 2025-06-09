import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid,
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StudentProgression = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Student Progression
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "green",
            borderBottom: "2px solid green",
            display: "inline-block",
            mb: 3,
            cursor: "pointer"
          }}
        >
          Search
        </Typography>

        <Grid container spacing={3} alignItems="center">
          {/* Academic Batch */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 270 }}>
          <InputLabel htmlFor="academic-batch">
           Academic Batch <span style={{ color: "red" }}>*</span>
          </InputLabel>
         <Select
         label="Academic Batch"
         id="academic-batch"
        defaultValue=""
       >
              <MenuItem value="">Choose</MenuItem>
              <MenuItem value="2023-24">2025-26</MenuItem>
               <MenuItem value="2022-23">2024-25</MenuItem>
              <MenuItem value="2023-24">2023-24</MenuItem>
               <MenuItem value="2022-23">2022-23</MenuItem>
           </Select>
          </FormControl>
          </Grid>

          {/* Academic Session */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 270 }}>
  <InputLabel htmlFor="academic-session">Academic Session <span style={{ color: "red" }}>*</span>
  </InputLabel>
  <Select
    label="Academic Session"
    id="academic-session"
    defaultValue=""
  >
    <MenuItem value="">Choose</MenuItem>
    <MenuItem value="Summer 2025-26">Summer 2025-26</MenuItem>
    <MenuItem value="Winter 2025-26">Winter 2025-26</MenuItem>
    <MenuItem value="Annual Year 2025-26">Annul Year 2025-26</MenuItem>
    <MenuItem value="Summer 2024-25">Summer 2024-25</MenuItem>
    <MenuItem value="Winter 2024-25">Winter 2024-25</MenuItem>
    <MenuItem value="Annual Year 2024-25">Annul Year 2024-25</MenuItem>
    <MenuItem value="Summer 2023-24">Summer 2023-24</MenuItem>
    <MenuItem value="Winter 2023-24">Winter 2023-24</MenuItem>
    <MenuItem value="Annual Year 2023-24">Annul Year 2023-24</MenuItem>
  </Select>
</FormControl>
          </Grid>

          {/* Degree */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 250 }}>
               <InputLabel htmlFor="degree">Degree <span style={{ color: "red" }}>*</span>
  </InputLabel>
              
              <Select 
              
              label="Degree"
              id="degree"
              defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="BCA">BCA</MenuItem>
                <MenuItem value="BBA">BBA</MenuItem>
                <MenuItem value="BTech">BTech</MenuItem>
                <MenuItem value="MTech">MTech</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Branch */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 250 }}>
              <InputLabel htmlFor="branch">Branch <span style={{ color: "red" }}>*</span>
  </InputLabel>
              <Select 
               label="Branch"
                id="branch"
              defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Year */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 200 }}>
               <InputLabel htmlFor="year">Year <span style={{ color: "red" }}>*</span>
  </InputLabel>
              <Select 
              label="Year"
              id="year"
              defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Semester */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required sx={{ minWidth: 250 }}>
               <InputLabel htmlFor="semester">Semester<span style={{ color: "red" }}>*</span>
  </InputLabel>
              <Select 
              label="Semester"
              id="semester"
              defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="1">I</MenuItem>
                <MenuItem value="2">II</MenuItem>
                <MenuItem value="3">III</MenuItem>
                <MenuItem value="4">IV</MenuItem>
                <MenuItem value="5">V</MenuItem>
                <MenuItem value="6">VI</MenuItem>
                <MenuItem value="7">VII</MenuItem>
                <MenuItem value="8">VIII</MenuItem>
                <MenuItem value="9">IX</MenuItem>
                <MenuItem value="10">X</MenuItem>
                <MenuItem value="11">XI</MenuItem>
                <MenuItem value="12">XII</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Class Section */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth sx={{ minWidth: 250 }}>
              <InputLabel htmlFor="class-section">Class Section<span style={{ color: "red" }}>*</span>
  </InputLabel>
              <Select 
              label="Class Section"
              id="class-section"
              defaultValue="">
                <MenuItem value="">Choose</MenuItem>
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#2ecc71", color: "#fff", height: '56px' }}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default StudentProgression;
