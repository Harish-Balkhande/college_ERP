import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { loginInfo, logout } from '../../GlobalStore/features/authSlice';


export default function ProtectedRoutes({ allowedRoles }) {
    const location = useLocation();
    const navigate = useNavigate();
    const didRefresh = useRef(false);
    const dispatch = useDispatch();
    const { fullName, email, role, accessToken, user_id, isAuthenticated } = useSelector(state => state.auth);

    const protectedPaths = [
        '/admission-form',
        '/student-dashboard',
        '/student-information',
        '/attendence'
    ];

    useEffect(() => {
        if(!protectedPaths.includes(location.pathname)) return;
        if (didRefresh.current) return;
        didRefresh.current = true;
        console.log(location.pathname);

        const verifyRefreshToken = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/api/auth/refresh`, {
                    withCredentials: true
                });

                const { newAccessToken } = response.data;
                console.log("useRefreshToken : ", newAccessToken);
                // Update only accessToken, preserve other user info
                dispatch(loginInfo({
                    fullName,
                    email,
                    accessToken: newAccessToken,
                    role,
                    user_id,
                    isAuthenticated
                }));

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        const status = error.response.status;
                        if (status === 401 || status === 403) {
                            // console.warn("Unauthorized: No refresh token provided.");
                            dispatch(logout());
                            navigate('/'); // redirect to login
                        } else {
                            // console.error(`Unhandled HTTP error (${status}):`, error.response.data);
                            alert(`Unhandled HTTP error (${status}):`, error.response.data);
                        }
                    }
                }
            } 
        }
        verifyRefreshToken();
    }, [location.pathname]);

    return (
        allowedRoles.includes(role)
            ? <Outlet />
            : accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}



// import { useEffect, useState } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { loginInfo, logout } from "../../GlobalStore/features/authSlice";
// import axios from "axios";

// const ProtectedRoutes = ({ allowedRoles }) => {
//     const { accessToken, role, email, fullName } = useSelector(state => state.auth);
//     const dispatch = useDispatch();
//     const location = useLocation();

//     const [isLoading, setIsLoading] = useState(true);
//     const [isAuthorized, setIsAuthorized] = useState(false);

//     // Define the routes you want to trigger refresh on
//     const protectedPaths = [
//         '/admission-form',
//         '/student-dashboard',
//         '/student-information',
//         '/attendence'
//     ];

//     useEffect(() => {
//         const isProtected = protectedPaths.includes(location.pathname);
//         if (!isProtected) {
//             setIsLoading(false);
//             return;
//         }

//         const verifyAccess = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/api/auth/refresh`, {
//                     withCredentials: true
//                 });

//                 const { newAccessToken } = response.data;
//                 dispatch(loginInfo({ fullName, email, accessToken: newAccessToken, role }));
//                 setIsAuthorized(allowedRoles.includes(role));
//             } catch (error) {
//                 dispatch(logout());
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         verifyAccess();
//     }, [location.pathname]);

//     if (isLoading) return <p>Checking access...</p>;

//     return isAuthorized ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
// };

// export default ProtectedRoutes;
