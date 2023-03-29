import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/operations';
import { selectLogin, selectUser } from 'redux/selectors';
import style from './style.module.css';

export const Navigation = () => {
  const login = useSelector(selectLogin);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Box w="100%" p={5} color="white" borderBottom={'2px solid black'}>
      {login ? (
        <Flex>
          <Text fontSize="25px" fontWeight={'bold'} color="black">
            Hello: {user?.name}
          </Text>
          <Spacer />
          <NavLink to="/contacts">Contacts</NavLink>
          <Spacer />
          <Button onClick={handleClick} bgColor={'#ff8888'}>
            Logout
          </Button>
        </Flex>
      ) : (
        <Flex color="blue" justify="end" gap={5}>
          <NavLink to="/login" className={style.navlink}>
            Log in
          </NavLink>
          <NavLink to="/registration" className={style.navlink}>
            Register
          </NavLink>
        </Flex>
      )}
    </Box>
  );
};
