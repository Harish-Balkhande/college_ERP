
// import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logout } from "../GlobalStore/features/authSlice";
// import { axiosPrivate } from "../api/axios";


// const useAxiosPrivate = () => {
//     const refresh = useRefreshToken();
//     const accessToken = useSelector(state => state.auth.accessToken);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     console.log("useAxiosPrivte : ",accessToken);
//     useEffect(() => {
//         const requestIntercept = axiosPrivate.interceptors.request.use(
//             config => {
//                 if (!config.headers['Authorization']) {
//                     console.log("request Intercepter token :",accessToken);
//                     // config.headers['Authorization'] = `Bearer ${accessToken}`;
//                 }
//                 return config;
//             },
//             error => Promise.reject(error)
//         );

//         const responseIntercept = axiosPrivate.interceptors.response.use(
//             response => response,
//             async error => {
//                 const prevRequest = error?.config;

//                 if (error?.response?.status === 403 && !prevRequest?.sent) {
//                     prevRequest.sent = true;
//                     try {
//                         const newAccessToken = await refresh();
//                         // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//                         return axiosPrivate(prevRequest);
//                     } catch (refreshError) {
//                         console.error("Token refresh failed:", refreshError);
//                         dispatch(logout());
//                         navigate('/'); // redirect to login
//                         return Promise.reject(refreshError);
//                     }
//                 }

//                 if (error?.response?.status === 401) {
//                     console.warn("Unauthorized. Possibly invalid refresh token.");
//                     dispatch(logout());
//                     navigate('/'); // redirect to login
//                 }

//                 return Promise.reject(error);
//             }
//         );

//         return () => {
//             axiosPrivate.interceptors.request.eject(requestIntercept);
//             axiosPrivate.interceptors.response.eject(responseIntercept);
//         };
//     }, [accessToken, refresh, dispatch, navigate]);

//     return axiosPrivate;
// };

// export default useAxiosPrivate;
