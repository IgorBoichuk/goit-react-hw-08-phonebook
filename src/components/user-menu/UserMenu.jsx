import { Button, Flex, Spacer, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  return (
    <Flex>
      <Text fontSize="25px" fontWeight={'bold'} color="black">
        Hello: mango@mail.com
      </Text>
      <Spacer />
      <Button colorScheme="blue">Contacts</Button>
      <Spacer />
      <Button bgColor={'#ff8888'}>Logout</Button>
    </Flex>
  );
};
