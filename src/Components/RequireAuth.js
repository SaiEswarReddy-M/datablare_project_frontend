import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = () => {
 const { auth } = useAuth()
 const location = useLocation()

  return (
    auth.isLoggedIn ? 
    <Outlet /> : <Navigate to='/login' state={{location}}  replace /> 
    //if user wants to access someother page with protected it will go to login
  );
} 

export default RequireAuth
