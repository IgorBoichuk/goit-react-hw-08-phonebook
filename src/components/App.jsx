import { Header } from './header/Header';
import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Box, Heading } from '@chakra-ui/react';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={5} w={900} ml={100}>
      <Header />
      <div>
        <Heading as="h1" size="4xl" p={5}>
          Phonebook
        </Heading>
        <ContactForm />
        <Filter />
      </div>
      <Heading as="h3" size="lg" p={5}>
        Contacts
      </Heading>
      <ContactList />
    </Box>
  );
}
