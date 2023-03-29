import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

import {
  selectAllContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Progress,
  Spacer,
} from '@chakra-ui/react';
import { ContactForm } from './AddContactForm';
import { useEffect } from 'react';
import { Filter } from 'components/filter/Filter';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectIsLoading);
  // const filter = useSelector(selectFilter);

  const onClickToDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List justifyContent={'space-between'}>
      <Heading as="h3" size="lg" p={5}>
        Contacts
        <ContactForm />
      </Heading>
      <Filter />
      {loading ? (
        <Progress size="md" colorScheme="pink" w="600px" isIndeterminate />
      ) : (
        contacts.map(contact => (
          <Flex key={contact.id} alignItems="center">
            <ListItem key={contact.id}>
              <Flex alignItems="center" w={'600px'} justify="space-between">
                <Box p="4">
                  <Heading size="md">
                    {contact.name}: {contact.number}
                  </Heading>
                </Box>
                <Spacer />
                <Button
                  colorScheme="blue"
                  id={contact.id}
                  onClick={onClickToDelete}
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          </Flex>
        ))
      )}
    </List>
  );
};
