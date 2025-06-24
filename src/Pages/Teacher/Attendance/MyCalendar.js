import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';

// Time slots for the day
const timeSlots = [
  '8:00 AM', '8:15 AM', '8:30 AM', '8:45 AM',
  '9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM',
  '10:00 AM',
];

// Get day name
const getDayName = (date) =>
  date.toLocaleDateString('en-US', { weekday: 'long' });

// Format date as "Jun 22"
const formatDate = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

// Format full week range
const formatWeekRange = (start) => {
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return `${start.toLocaleDateString('en-GB', options)} - ${end.toLocaleDateString('en-GB', options)}`;
};

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date('2025-06-22'));
  const [selectedSlot, setSelectedSlot] = useState(null);

  const goToPreviousWeek = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() - 7);
    setStartDate(newStart);
  };

  const goToNextWeek = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() + 7);
    setStartDate(newStart);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return {
      name: getDayName(date),
      date: formatDate(date),
      fullDate: date,
    };
  });

  const handleSlotClick = (day, slot) => {
    setSelectedSlot(`${day.name} ${slot}`);
  };

  return (
    <Box sx={{ p: 2, width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        My Calendar
      </Typography>

      {/* Week Navigation */}
      <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Grid item>
          <Button variant="contained" color="success" onClick={goToPreviousWeek}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {formatWeekRange(startDate)}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success" onClick={goToNextWeek}>
            Next
          </Button>
        </Grid>
      </Grid>

      {/* Calendar Header */}
      <Grid container>
        <Grid item sx={{ width: 180 }}>
          <Paper elevation={1} sx={{ bgcolor: 'grey.800', color: 'white', height: 100 }}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
              <Typography fontWeight="bold">Schedule</Typography>
              <Typography>&nbsp;</Typography>
            </Box>
          </Paper>
        </Grid>

        {days.map((day, index) => {
          const isToday = day.fullDate.toDateString() === today.toDateString();
          return (
            <Grid item key={index} sx={{ width: 180 }}>
              <Paper
                elevation={1}
                sx={{
                  bgcolor: isToday ? '#1976d2' : 'grey.800',
                  color: 'white',
                  height: 100,
                }}
              >
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                  <Typography fontWeight="bold">{day.name}</Typography>
                  <Typography>{day.date}</Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* Time Slot Rows */}
      {timeSlots.map((slot, rowIndex) => (
        <Grid container key={rowIndex}>
          <Grid item sx={{ width: 180 }}>
            <Box
              sx={{
                border: '1px solid #ccc',
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f5f5f5',
              }}
            >
              <Typography fontWeight="bold">{slot}</Typography>
            </Box>
          </Grid>

          {days.map((day, colIndex) => {
            const cellKey = `${day.name}-${slot}`;
            const isSelected = selectedSlot === cellKey;
            const isToday = day.fullDate.toDateString() === today.toDateString();

            return (
              <Grid item key={colIndex} sx={{ width: 180 }}>
                <Box
                  onClick={() => handleSlotClick(day, slot)}
                  sx={{
                    border: '1px solid #ccc',
                    height: 80,
                    bgcolor: isSelected ? '#a5d6a7' : isToday ? '#fffde7' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontWeight: 500,
                    '&:hover': { bgcolor: '#e3f2fd' },
                  }}
                >
                  {slot}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Box>
  );
};

export default MyCalendar;
