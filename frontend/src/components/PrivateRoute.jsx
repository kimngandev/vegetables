import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContent } from '../context/AppContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedin } = useContext(AppContent);
  
  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute; 