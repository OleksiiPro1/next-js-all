import { Container } from '@mui/material';
import { Form } from 'react-final-form';
import SignUpForm from './SignUpForm';

export default function SignUp() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const onValidate = (values) => {
    const errors = {};
    if (values.retype_password !== values.password) {
      errors.confirm = 'Passwords do not match! ';
    }

    if (!values.email) {
      errors.email = '';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address! ';
    }

    return errors;
  };

  return (
    <>
      <Container>
        <Form
          onSubmit={onSubmit}
          validate={onValidate}
          render={(props) => <SignUpForm {...props} />}
        />
      </Container>
    </>
  );
}
