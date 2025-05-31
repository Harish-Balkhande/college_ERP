// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: null,
  email: null,
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginInfo: (state, action) => {
      const { fullName, email, accessToken } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.fullName = null;
      state.email = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginInfo, logout } = authSlice.actions;
export default authSlice.reducer;
