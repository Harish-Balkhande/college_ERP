// src/api/services/authService.jsx

import axiosInstance from '../axios.jsx';
import { AUTH_ENDPOINTS } from '../endpoints.jsx';




export const registerNewUser = async (userData) => {
    try {
        const response = await axiosInstance.post(AUTH_ENDPOINTS.CREATE_USER, userData);
        return response;
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' };
    }
};

export const loginUser = async (data) => {
  return axiosInstance.post(AUTH_ENDPOINTS.LOGIN, data, { withCredentials: true });
};

export const logoutUser = async (email) => {
  return axiosInstance.post(AUTH_ENDPOINTS.LOGOUT, { email }, { withCredentials: true });
};

export const refreshUser = async () => {
  return axiosInstance.get(AUTH_ENDPOINTS.REFRESH_TOKEN, { withCredentials: true });
};