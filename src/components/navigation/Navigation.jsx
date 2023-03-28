import { Box, Button, Flex } from '@chakra-ui/react';
import { UserMenu } from 'components/user-menu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLogin } from 'redux/selectors';

export const Navigation = () => {
  const login = useSelector(selectLogin);

  return (
    <Box w="100%" p={5} color="white" borderBottom={'2px solid black'}>
      {login ? (
        <UserMenu />
      ) : (
        <Flex justify="end" gap={5}>
          <Button colorScheme="blue">Log in</Button>
          <Button colorScheme="blue">Register</Button>
        </Flex>
      )}
    </Box>
  );
};
