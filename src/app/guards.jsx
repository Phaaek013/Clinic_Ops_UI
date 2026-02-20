import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAuth } from './storage';

export function ProtectedGuard() {
  const location = useLocation();
  const auth = getAuth();

  if (!auth?.role) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
