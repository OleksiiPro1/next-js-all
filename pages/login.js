import { Container } from '@mui/material';
import { Form } from 'react-final-form';
import SignInForm from './SignInForm';

export default function Login() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <Container>
      <Form onSubmit={onSubmit} render={(props) => <SignInForm {...props} />} />
    </Container>
  );
}
