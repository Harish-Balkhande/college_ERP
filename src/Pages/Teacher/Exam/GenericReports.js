import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Chip,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material';

const ReportsListPage = ({ onReportSelect }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Reports
      </Typography>
      
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Filter : A-Z
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip 
            label="M"
            clickable
            onClick={() => onReportSelect('MARK ENTRY REPORT')}
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          />
          <Chip 
            label="Q"
            clickable
            onClick={() => onReportSelect('QUESTION SET REPORT')}
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          />
        </Box>
      </Box>
      
      <TextField 
        placeholder="Search Here"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ marginBottom: 3 }}
      />
      
      <Divider sx={{ marginBottom: 2 }} />
      
      <Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', marginTop: 2 }}>
          M
        </Typography>
        <List dense sx={{ paddingLeft: 2 }}>
          <ListItem 
            button 
            sx={{ paddingLeft: 0 }}
            onClick={() => onReportSelect('MARK ENTRY REPORT')}
          >
            <ListItemText 
              primary="MARK ENTRY REPORT" 
              primaryTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
            />
          </ListItem>
        </List>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Q
        </Typography>
        <List dense sx={{ paddingLeft: 2 }}>
          <ListItem 
            button 
            sx={{ paddingLeft: 0 }}
            onClick={() => onReportSelect('QUESTION SET REPORT')}
          >
            <ListItemText 
              primary="QUESTION SET REPORT" 
              primaryTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

const QuestionSetReport = () => {
  const [filters, setFilters] = useState({
    academicSession: 'Choose',
    degree: 'All',
    branch: 'All',
    evaluationLevel: 'All',
    component: 'All'
  });

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        QUESTION SET REPORT
      </Typography>
      
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Filter
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Academic Session</InputLabel>
              <Select
                value={filters.academicSession}
                label="Academic Session"
                onChange={(e) => handleFilterChange('academicSession', e.target.value)}
              >
                <MenuItem value="Choose">Choose</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
                <MenuItem value="2024-25">2024-25</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Degree</InputLabel>
              <Select
                value={filters.degree}
                label="Degree"
                onChange={(e) => handleFilterChange('degree', e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="B.Tech">B.Tech</MenuItem>
                <MenuItem value="M.Tech">M.Tech</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Branch</InputLabel>
              <Select
                value={filters.branch}
                label="Branch"
                onChange={(e) => handleFilterChange('branch', e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="CSE">CSE</MenuItem>
                <MenuItem value="ECE">ECE</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Evaluation Level</InputLabel>
              <Select
                value={filters.evaluationLevel}
                label="Evaluation Level"
                onChange={(e) => handleFilterChange('evaluationLevel', e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Unit Test">Unit Test</MenuItem>
                <MenuItem value="Mid Term">Mid Term</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Evaluation Level Component
        </Typography>
        <FormControl fullWidth size="small" sx={{ maxWidth: 300 }}>
          <InputLabel>Component</InputLabel>
          <Select
            value={filters.component}
            label="Component"
            onChange={(e) => handleFilterChange('component', e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Theory">Theory</MenuItem>
            <MenuItem value="Practical">Practical</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 3 }}>
        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
          Reset
        </Typography>
        <Button variant="contained" color="primary">Preview</Button>
        <Button variant="contained" color="secondary">Download</Button>
      </Box>
    </Box>
  );
};

const MarkEntryReport = () => {
  const [filters, setFilters] = useState({
    session: 'Choose',
    course: '',
    examType: 'Choose',
    degree: 'Choose',
    courseComponent: 'Choose',
    variantGroup: 'Choose',
    branch: 'Choose',
    semester: 'Choose',
    evaluationLevel: 'Choose',
    evaluationComponent: 'Choose'
  });

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        MARK ENTRY REPORT
      </Typography>
      
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Filter
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Session*</InputLabel>
              <Select
                value={filters.session}
                label="Session*"
                onChange={(e) => handleFilterChange('session', e.target.value)}
              >
                <MenuItem value="Choose">Choose</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
                <MenuItem value="2024-25">2024-25</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      
      <Divider sx={{ marginBottom: 3 }} />
      
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Course*
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Use / Course Code / Name"
          value={filters.course}
          onChange={(e) => handleFilterChange('course', e.target.value)}
        />
      </Box>
      
      <Divider sx={{ marginBottom: 3 }} />
      
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Exam Type*</InputLabel>
            <Select
              value={filters.examType}
              label="Exam Type*"
              onChange={(e) => handleFilterChange('examType', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Supplementary">Supplementary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Degree*</InputLabel>
            <Select
              value={filters.degree}
              label="Degree*"
              onChange={(e) => handleFilterChange('degree', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="B.Tech">B.Tech</MenuItem>
              <MenuItem value="M.Tech">M.Tech</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Course Component*</InputLabel>
            <Select
              value={filters.courseComponent}
              label="Course Component*"
              onChange={(e) => handleFilterChange('courseComponent', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Theory">Theory</MenuItem>
              <MenuItem value="Practical">Practical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Variant Group*</InputLabel>
            <Select
              value={filters.variantGroup}
              label="Variant Group*"
              onChange={(e) => handleFilterChange('variantGroup', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Group A">Group A</MenuItem>
              <MenuItem value="Group B">Group B</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Branch*</InputLabel>
            <Select
              value={filters.branch}
              label="Branch*"
              onChange={(e) => handleFilterChange('branch', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="CSE">CSE</MenuItem>
              <MenuItem value="ECE">ECE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Semester*</InputLabel>
            <Select
              value={filters.semester}
              label="Semester*"
              onChange={(e) => handleFilterChange('semester', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Evaluation Level*</InputLabel>
            <Select
              value={filters.evaluationLevel}
              label="Evaluation Level*"
              onChange={(e) => handleFilterChange('evaluationLevel', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Unit Test">Unit Test</MenuItem>
              <MenuItem value="Mid Term">Mid Term</MenuItem>
              <MenuItem value="Final">Final</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Evaluation Level Component*</InputLabel>
            <Select
              value={filters.evaluationComponent}
              label="Evaluation Level Component*"
              onChange={(e) => handleFilterChange('evaluationComponent', e.target.value)}
            >
              <MenuItem value="Choose">Choose</MenuItem>
              <MenuItem value="Theory">Theory</MenuItem>
              <MenuItem value="Practical">Practical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      <Divider sx={{ marginBottom: 3 }} />
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 3 }}>
        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
          Reset
        </Typography>
        <Button variant="contained" color="primary">Preview</Button>
        <Button variant="contained" color="secondary">Download</Button>
      </Box>
    </Box>
  );
};

const GenericReports = () => {
  const [currentReport, setCurrentReport] = useState(null);

  const handleReportSelect = (report) => {
    setCurrentReport(report);
  };

  if (currentReport === 'QUESTION SET REPORT') {
    return <QuestionSetReport />;
  } else if (currentReport === 'MARK ENTRY REPORT') {
    return <MarkEntryReport />;
  }

  return <ReportsListPage onReportSelect={handleReportSelect} />;
};

export default GenericReports;