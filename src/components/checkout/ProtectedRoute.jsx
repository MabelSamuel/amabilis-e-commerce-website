import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login-register/login" />
}

export default ProtectedRoute