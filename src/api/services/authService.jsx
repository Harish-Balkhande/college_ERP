// src/api/services/authService.jsx

import axiosInstance from '../axios.jsx';
import { AUTH_ENDPOINTS } from '../endpoints.jsx';


export const login = async (credentials) => {
    try {
        const response = await axiosInstance.post(AUTH_ENDPOINTS.LOGIN, credentials);
        console.log("service : ",response);
        return response;
    } catch (error) {
        throw error.response?.data || { message: 'Login failed' };
    }
};

export const registerNewUser = async (userData) => {
    try {
        const response = await axiosInstance.post(AUTH_ENDPOINTS.CREATE_USER, userData);
        return response;
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' };
    }
};

export const logoutUser = (credentials) => {
    try{
        const response = axiosInstance.post(AUTH_ENDPOINTS.LOGOUT, credentials);
        
        return response;
    }catch (error){
        throw error.response?.data || { message: 'Logged out Successfully' }
    }
}
