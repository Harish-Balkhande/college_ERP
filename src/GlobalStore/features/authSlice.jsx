// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: null,
  email: null,
  accessToken: null,
  role: null,
  user_id: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginInfo: (state, action) => {
      const { fullName, email, accessToken, role, user_id } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.accessToken = accessToken;
      state.role = role;
      state.user_id = user_id;
      state.isAuthenticated = true;

    },
    logout: (state) => {
      state.fullName = null;
      state.email = null;
      state.accessToken = null;
      state.role = null;
      state.user_id = null;
      state.isAuthenticated = false;
    },
  },
});


export const { loginInfo, logout } = authSlice.actions;
export default authSlice.reducer;


// dispatch(logout());
// persistor.purge(); // This clears redux-persist storage on logout
