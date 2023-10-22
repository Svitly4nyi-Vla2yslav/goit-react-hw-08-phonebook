
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from 'components/Layout';
import { lazy } from 'react';
import { PrivateRoute } from 'router/PrivateRouter';
import { RestrictedRoute } from 'router/RestrictedRouter';
import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
const Home = lazy(() => import('pages/Home'))
const Register = lazy(() => import('pages/Register'))
const Login = lazy(() => import('pages/Login'))
const ContactsPage = lazy(() => import('pages/ContactsPage'))

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/register'
          element={<RestrictedRoute redirectTo='/contacts'
            component={<Register />} />} />
        <Route path='/login'
          element={<RestrictedRoute redirectTo='/contacts'
            component={<Login />} />} />
        <Route path='/contacts'
          element={<PrivateRoute redirectTo='/contacts'
            component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );

}


