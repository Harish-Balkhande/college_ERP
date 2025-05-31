// src/api/services/userService.js
import axios from '../axios';
import { USER_ENDPOINTS } from '../endpoints';

export const getUserProfile = () => axios.get(USER_ENDPOINTS.PROFILE);

export const updateUser = (data) => axios.put(USER_ENDPOINTS.UPDATE, data);
