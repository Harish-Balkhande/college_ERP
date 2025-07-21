import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  InputBase,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  TextField,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
  IconButton,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2px 10px',
  width: 300,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: 'none',
  border: '1px solid #ccc'
}));

const NoDataBox = styled(Box)(({ theme }) => ({
  height: 250,
  backgroundColor: '#f2f4f8',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}));

const LargeAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200,
  marginTop: 8,
  marginBottom: 8,
  cursor: 'pointer'
}));

const ManageNotice = () => {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeDesc, setNoticeDesc] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [targetAudience, setTargetAudience] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [allNotices, setAllNotices] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleTabChange = (event, newValue) => setTab(newValue);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleFileChange = (e) => setSelectedFiles(Array.from(e.target.files));

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveStep(0);
    setNoticeTitle('');
    setNoticeDesc('');
    setSelectedFiles([]);
    setTargetAudience('');
    setScheduleDate('');
  };

  const handleSubmit = () => {
  const processedFiles = selectedFiles.map(file => ({
    name: file.name,
    type: file.type,
    previewUrl: URL.createObjectURL(file)
  }));

  const newNotice = {
    title: noticeTitle,
    description: noticeDesc,
    audience: targetAudience,
    date: scheduleDate,
    attachments: processedFiles,
    isArchived: false
  };

  const existing = JSON.parse(localStorage.getItem('allNotices')) || [];
  const updated = [...existing, newNotice];
  localStorage.setItem('allNotices', JSON.stringify(updated));

  localStorage.setItem('latestNotice', JSON.stringify(newNotice));
  setAllNotices(prev => [...prev, newNotice]);
  handleCloseModal();
};


  const handleArchiveNotice = (index) => {
    setAllNotices(prev => prev.map((n, i) => i === index ? { ...n, isArchived: true } : n));
  };

  const handleDeleteArchived = (indexToDelete) => {
    setAllNotices(prev => prev.filter((n, i) => i !== indexToDelete || !n.isArchived));
  };

  const filteredNotices = allNotices
    .filter(notice => notice.isArchived === (tab === 1))
    .filter(notice =>
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">Manage Notice</Typography>
        <Button variant="contained" sx={{ backgroundColor: '#28c428', '&:hover': { backgroundColor: '#24a324' } }} onClick={() => setOpenModal(true)}>Create Notice</Button>
      </Box>

      <Tabs value={tab} onChange={handleTabChange} sx={{ mt: 2 }} TabIndicatorProps={{ style: { backgroundColor: '#f57c00' } }}>
        <Tab label="Active" sx={{ textTransform: 'none', fontWeight: 'bold', color: tab === 0 ? '#f57c00' : 'black' }} />
        <Tab label="Archive" sx={{ textTransform: 'none', fontWeight: 'bold', color: tab === 1 ? '#f57c00' : 'black' }} />
      </Tabs>

      <SearchWrapper>
        <InputBase placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ ml: 1, flex: 1 }} />
        <SearchIcon sx={{ color: '#888' }} />
      </SearchWrapper>

      {filteredNotices.length === 0 ? (
        <NoDataBox>
          <SearchIcon sx={{ fontSize: 64, color: '#ccc' }} />
          <Typography variant="subtitle1" color="textSecondary">No Record found</Typography>
        </NoDataBox>
      ) : (
        <List>
          {filteredNotices.map((notice, index) => (
            <ListItem key={index} divider secondaryAction={
              tab === 1 ? (
                <IconButton edge="end" color="error" onClick={() => handleDeleteArchived(index)}><DeleteIcon /></IconButton>
              ) : (
                <IconButton edge="end" color="warning" onClick={() => handleArchiveNotice(index)}><ArchiveIcon /></IconButton>
              )
            }>
              <ListItemText
                primary={notice.title}
                secondary={
                  <Box>
                    <Typography variant="body2" gutterBottom>{notice.description}</Typography>
                    <Typography variant="body2">Audience: {notice.audience} | Date: {notice.date}</Typography>
                    {notice.attachments?.map((file, i) => (
                      <Box key={i} mt={1}>
                        {file.type.startsWith('image/') ? (
                          <LargeAvatar
                            variant="rounded"
                            src={file.previewUrl}
                            alt={file.name}
                            onClick={() => setImagePreview(file.previewUrl)}
                          />
                        ) : (
                          <Link href={file.previewUrl} target="_blank" rel="noopener">{file.name}</Link>
                        )}
                      </Box>
                    ))}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      )}

      <Dialog open={!!imagePreview} onClose={() => setImagePreview(null)} maxWidth="md">
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <img src={imagePreview} alt="preview" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImagePreview(null)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>Create New Notice</DialogTitle>
        <DialogContent dividers>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
            <Step><StepLabel>Basic Details</StepLabel></Step>
            <Step><StepLabel>Attachments</StepLabel></Step>
            <Step><StepLabel>Target Audience</StepLabel></Step>
            <Step><StepLabel>Scheduling</StepLabel></Step>
          </Stepper>

          {activeStep === 0 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField label="Notice Title" value={noticeTitle} onChange={(e) => setNoticeTitle(e.target.value)} fullWidth />
              <TextField label="Description" value={noticeDesc} onChange={(e) => setNoticeDesc(e.target.value)} multiline rows={4} fullWidth />
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Button variant="outlined" component="label" sx={{ mb: 2 }}>
                Select Files
                <input type="file" hidden multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.mp4,image/*" onChange={handleFileChange} />
              </Button>

              {selectedFiles.length > 0 && (
                <Box>
                  <Typography variant="body2" fontWeight="bold" mb={1}>Selected Files:</Typography>
                  <List dense>
                    {selectedFiles.map((file, i) => (
                      <ListItem key={i}><ListItemText primary={file.name} /></ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          )}

          {activeStep === 2 && (
            <FormControl fullWidth>
              <InputLabel>Select Audience</InputLabel>
              <Select value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} label="Select Audience">
                <MenuItem value="All">All Students</MenuItem>
                <MenuItem value="FirstYear">First Year</MenuItem>
                <MenuItem value="SecondYear">Second Year</MenuItem>
                <MenuItem value="Faculty">Faculty</MenuItem>
              </Select>
            </FormControl>
          )}

          {activeStep === 3 && (
            <TextField label="Schedule Date" type="date" InputLabelProps={{ shrink: true }} value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} fullWidth />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
          {activeStep < 3 ? (
            <Button onClick={handleNext} variant="contained">Next</Button>
          ) : (
            <Button onClick={handleSubmit} variant="contained" color="success">Submit</Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageNotice;
