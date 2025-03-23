import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); //  Check if token exists

  if (!token) {
    return <Navigate to="/login" replace />; //  Redirect to login if token is missing
  }

  return children;
};

export default ProtectedRoute;
