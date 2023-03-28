// import { Navigation } from './navigation/Navigation';
import { ContactForm } from '../pages/AddContactForm';
// import { ContactList } from './contacts/Contacts';
// import { Filter } from './filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { NotFound } from 'pages/NotFound';
import { ContactList } from './contacts/Contacts';
import { Filter } from './filter/Filter';
import { Register } from './register/Register';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contact-form" element={<ContactForm />}>
          {/* <Route path="filter" element={<Filter />} />
          <Route path="contact-list" element={<ContactList />} /> */}
          {/* <Filter />
        <ContactList /> */}
        </Route>
        <Route path="/registration" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
