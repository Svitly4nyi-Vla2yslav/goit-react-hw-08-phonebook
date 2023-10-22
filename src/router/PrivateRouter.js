import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/auth-selectors';



export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggeIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggeIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
