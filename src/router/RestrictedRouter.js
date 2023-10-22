import { useAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';



export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggeIn } = useAuth();

  return isLoggeIn ? <Navigate to={redirectTo} /> : Component;
};