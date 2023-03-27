import { Box, Button, Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box w="100%" p={5} color="white" borderBottom={'2px solid black'}>
      <Flex justify="end" gap={5}>
        <Button colorScheme="blue">Register</Button>
        <Button colorScheme="blue">Log in</Button>
      </Flex>
    </Box>
  );
};
