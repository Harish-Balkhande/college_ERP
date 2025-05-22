import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Paper,
} from '@mui/material';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log('Login submitted');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ 
      minHeight: '100vh',
       
      }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              required
            />
            <Box display="flex" justifyContent="space-between" mt={1} mb={2}>
              <Link href="#" underline="hover">
                Forgot password?
              </Link>
              <Link href="#" underline="hover">
                Create account
              </Link>
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
