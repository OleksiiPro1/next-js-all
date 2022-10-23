import { Container } from '@mui/material';
import { Form } from 'react-final-form';
import SignInForm from './SignInForm';

// https://mui.com/material-ui/getting-started/installation/
// https://final-form.org/docs/react-final-form/getting-started

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
