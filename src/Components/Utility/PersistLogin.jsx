import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfo, logout } from "../../GlobalStore/features/authSlice";
import axios from "axios";


const PersistLogin = () => {
    const navigate = useNavigate();
    const didRefresh = useRef(false);
    const dispatch = useDispatch();
    const { fullName, email, role } = useSelector(state => state.auth);

    const [isLoading, setConstIsLoading] = useState(true);

    const protectedPaths = [
        '/admission-form',
        '/student-dashboard',
        '/student-information',
        '/attendence'
    ];

    useEffect(() => {
        
        if (didRefresh.current) return;
        didRefresh.current = true;

        const verifyRefreshToken = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/api/auth/refresh`, {
                    withCredentials: true
                });

                const { newAccessToken } = response.data;
                // console.log("useRefreshToken : ", response);
                // Update only accessToken, preserve other user info
                dispatch(loginInfo({
                    fullName,
                    email,
                    accessToken: newAccessToken,
                    role
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
            } finally {
                setConstIsLoading(false);
            }
        }
        verifyRefreshToken();
    }, []);


    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />}
        </>
    );
};

export default PersistLogin;
