import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async ({ password, email }) => {
    await dispatch(loginUser({ password, email })).unwrap();
    navigate('/contacts');
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                variant="filled"
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                w={500}
                mb={8}
              />
            </FormControl>
          </div>
          <Button type="submit" colorScheme="blue" w={500} ml={50}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
