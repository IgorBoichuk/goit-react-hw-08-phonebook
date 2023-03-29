import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { regUser } from 'redux/operations';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ name, password, email }) => {
    await dispatch(regUser({ name, password, email })).unwrap();
    navigate('/contacts');
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <FormControl ml={50}>
              <FormLabel htmlFor="email">Name</FormLabel>
              <Field
                as={Input}
                variant="filled"
                w={500}
                mb={5}
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div>
            <FormControl ml={50}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Field
                as={Input}
                variant="filled"
                w={500}
                mb={5}
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div>
            <FormControl ml={50}>
              <FormLabel htmlFor="email">Password</FormLabel>
              <Field
                as={Input}
                variant="filled"
                w={500}
                mb={5}
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <Button type="submit" colorScheme="blue" w={500} ml={50}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
