import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  let location = useLocation();

  if (isAuthenticated === 'false') {
    return <Navigate to="/user" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute