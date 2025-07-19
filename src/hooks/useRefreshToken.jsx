// src/hooks/useRefreshToken.js

import { useDispatch, useSelector } from 'react-redux';
import { loginInfo } from '../GlobalStore/features/authSlice';
import axiosInstance from '../api/axios';



const useRefreshToken = () => {
    const dispatch = useDispatch();
    const { fullName, email, role } = useSelector(state => state.auth); // Keep existing user info
    const refresh = async () => {
        try {
            const response = await axiosInstance.get('/refresh', {
                withCredentials: true
            });

            const { accessToken } = response.data;
            console.log("useRefreshToken : ", response);
            // Update only accessToken, preserve other user info
            dispatch(loginInfo({
                fullName,
                email,
                accessToken,
                role
            }));

            return accessToken;
        } catch (error) {
            console.error('Token refresh failed(useRefreshToken):', error);
            throw error;
        }
    };

    return refresh;
};

export default useRefreshToken;
