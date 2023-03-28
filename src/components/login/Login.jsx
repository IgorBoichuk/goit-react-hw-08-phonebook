import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';

export const Login = () => {
  return (
    <div>
      <Stack spacing={-5} action="">
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
            required
          />
        </InputGroup>
        <InputGroup minWidth="max-content" alignItems="center" p={5}>
          <InputLeftAddon
            children="Pass"
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
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
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
          Create new account
        </Button>
      </Box>
    </div>
  );
};
