import { ContactForm } from '../pages/AddContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser, fetchContacts } from 'redux/operations';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './layout/Layout';
import { NotFound } from 'pages/NotFound';

import { Register } from './register/Register';
import { Login } from './login/Login';
import { ContactList } from '../pages/Contacts';

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentUser()).then(() => navigate('/contacts'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactList />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
