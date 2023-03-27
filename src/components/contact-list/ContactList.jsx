import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
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

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const filtered = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onClickToDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  return (
    <List justifyContent={'space-between'}>
      {loading ? (
        <Progress size="md" colorScheme="pink" w="600px" isIndeterminate />
      ) : (
        filtered.map(contact => (
          <Flex alignItems="center">
            <ListItem key={contact.id}>
              <Flex alignItems="center" w={'600px'} justify="space-between">
                <Box p="4">
                  <Heading size="md">
                    {contact.name}: {contact.phone}
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
