import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar
} from '@mui/material';

const TeacherDashboard = () => {
  const [latestNotice, setLatestNotice] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // 👈 for image preview

  useEffect(() => {
    const saved = localStorage.getItem('latestNotice');
    if (saved) setLatestNotice(JSON.parse(saved));
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>Recent Notice</Typography>

      {latestNotice ? (
        <Box border="1px solid #ccc" p={2} borderRadius={2} mt={2}>
          <Typography variant="h6">{latestNotice.title}</Typography>
          <Typography>{latestNotice.description}</Typography>
          <Typography fontSize="small" color="text.secondary">
            For: {latestNotice.audience} | Date: {latestNotice.date}
          </Typography>

          {/* Show image/video/document */}
          {latestNotice.attachments?.map((file, i) => (
            <Box key={i} mt={1}>
              {file.type.startsWith('image/') ? (
                <Avatar
                  variant="rounded"
                  src={file.previewUrl}
                  alt={file.name}
                  sx={{ width: 120, height: 120, cursor: 'pointer', mt: 1 }}
                  onClick={() => setPreviewUrl(file.previewUrl)} // 👈 set preview on click
                />
              ) : (
                <a href={file.previewUrl} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              )}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>No active notices yet.</Typography>
      )}

      {/* Dialog for Image Preview */}
      <Dialog open={!!previewUrl} onClose={() => setPreviewUrl(null)} maxWidth="md">
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <img src={previewUrl} alt="Preview" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewUrl(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TeacherDashboard;
