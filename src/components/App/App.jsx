
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from 'components/Layout';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
const Home = lazy(() => import('pages/Home'))
const Register = lazy(() => import('pages/Register'))
const Login = lazy(() => import('pages/Login'))
const ContactsPage = lazy(() => import('pages/ContactsPage'))

export function App() {
const dispatch = useDispatch();


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/register'
          element={<RestrictedRouter
            redirectTo='/contacts'
            component={<Register />} />} />
        <Route path='/login'
          elenent={<RestrictedRouter
            redirectTo='/contacts'
            component={<Login />} />} />
        <Route path='/contacts'
          element={<PrivateRoute
            redirectTo='/contacts'
            component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
}


