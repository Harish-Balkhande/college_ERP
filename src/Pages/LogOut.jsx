import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/services/authService';

export default function LogOut() {
    const navigate = useNavigate();

    useEffect(()=>{
        handleLogout();
    },[])
    const handleLogout = async () => {
        const response = await logoutUser({ email: userEmail })
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div>
            user Loged out 
        </div>
    )
}
