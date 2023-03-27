import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectAllContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const contacts = useSelector(selectAllContacts);

  const onHandleAddBtn = () => {
    let chackName = false;

    contacts.forEach(contact => {
      if (contact.name === name) {
        chackName = true;
      }
    });

    if (chackName) {
      alert(`${name} is olready in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Stack spacing={-5} action="">
        {/* <Stack spacing={10}> */}
        <InputGroup minWidth="max-content" alignItems="center" p={5}>
          <InputLeftAddon
            children="Name"
            borderLeftRadius={14}
            border="2px"
            borderColor="gray.400"
            borderRight="none"
            pr={'19px'}
          />
          <Input
            border="2px"
            borderRightRadius={14}
            borderColor="gray.400"
            width={'500px'}
            type="text"
            variant="filled"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputGroup>
        <InputGroup minWidth="max-content" alignItems="center" p={5}>
          <InputLeftAddon
            children="Phone"
            borderLeftRadius={14}
            border="2px"
            borderRight="none"
            borderColor="gray.400"
          />
          <Input
            border="2px"
            borderRadius={14}
            borderColor="gray.400"
            width={'500px'}
            variant="filled"
            type="tel"
            name="phone"
            placeholder="+380"
            value={phone}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputGroup>
      </Stack>
      <Box pl={5}>
        <Button
          colorScheme="blue"
          type="button"
          name="addButton"
          onClick={onHandleAddBtn}
          mb={50}
          p={5}
        >
          Add contact
        </Button>
      </Box>
      {/* </Stack> */}
    </div>
  );
}
