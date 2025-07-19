import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../api/services/authService";
import { logout } from "../GlobalStore/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Logout() {
  const didlogoutCalled = useRef(false);
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(didlogoutCalled.current) return;
    didlogoutCalled.current = true;

    const performLogout = async () => {
      try {
        await logoutUser(email);
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        dispatch(logout());
        navigate("/");
      }
    };
    performLogout();
  }, [email, dispatch, navigate]);

  return null;
}
