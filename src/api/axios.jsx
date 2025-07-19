import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ROOT_URL,    
});

// export const axiosPrivate = axios.create({
//     baseURL: process.env.REACT_APP_ROOT_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.accessToken;

//     // Skip token for login or public endpoints
//     const isAuthRoute = ['/api/auth/login', '/api/auth/logout', '/api/auth/signup', '/api/auth/refresh'].some(route =>
//       config.url.includes(route)
//     );

//     if (token && !isAuthRoute) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// axios.interceptors.response.use(null, async error => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const refreshToken = localStorage.getItem("refreshToken");

//         try {
//             const res = await axios.post("/api/auth/refresh", { refreshToken });
//             localStorage.setItem("accessToken", res.data.accessToken);
//             originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
//             return axios(originalRequest);
//         } catch (refreshError) {
//             localStorage.clear();
//             window.location.href = "/login";
//         }
//     }

//     return Promise.reject(error);
// });

export default axiosInstance;