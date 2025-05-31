import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Paper,
} from '@mui/material';
import { login } from '../api/services/authService';
import { useDispatch } from 'react-redux';
import { loginInfo } from '../GlobalStore/authSlice';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;

    if (!loginCredentials.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginCredentials.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!loginCredentials.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (loginCredentials.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await login(loginCredentials);
        console.log("Resp:", response);
        const { isAuthenticated, fullName, email, accessToken, message } = response.data;

        if (isAuthenticated) {
          dispatch(loginInfo({ fullName, email, accessToken, isAuthenticated }));
          navigate("/admission-form");
        }
      } catch (error) {
        console.log("ERR", error);
        setErrors(prev => ({
          ...prev,
          general: error.message || 'An unexpected error occurred',
        }));
      }
    }
  };


  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        minHeight: '100vh',
        width: '100%',
        margin: 0,
      }}
    >
      <Grid item xs={11} sm={8} md={4}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email"
              name="email"
              value={loginCredentials.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              error={!!errors.email}
              helperText={errors.email}
              slotProps={{
                helperText: {
                  sx: { color: 'red' }, 
                },
              }}
              required
            />

            <TextField
              label="Password"
              name="password"
              value={loginCredentials.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              error={!!errors.password}
              helperText={errors.password}
              required
            />

            <Box display="flex" justifyContent="space-between" mt={1} mb={2}>
              <Link href="#" underline="hover">
                Forgot password?
              </Link>
              <Link href="/signup" underline="hover">
                Create account
              </Link>
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Typography sx={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{errors.general}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
