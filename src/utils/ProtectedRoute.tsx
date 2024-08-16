import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Layouts from '../components/layouts';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Layouts/>;
};

export default ProtectedRoute;
