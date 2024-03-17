import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SecurePublicRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (localStorage.getItem("loginUser")) {
    return user ? <Navigate to="/dashboard" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

export default SecurePublicRoute;
