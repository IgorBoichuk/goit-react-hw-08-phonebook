import { Heading, Input, InputGroup } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/createSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">
        <Heading as="h4" size="md" pl={5} mb={3}>
          Find contacts by name
        </Heading>
      </label>
      <InputGroup minWidth="max-content" alignItems="center" pl={5}>
        <Input
          border="2px"
          borderRadius={14}
          borderColor="gray.400"
          p={5}
          width={'580px'}
          type="text"
          name="filter"
          onChange={onChangeFilter}
        />
      </InputGroup>
    </div>
  );
};
