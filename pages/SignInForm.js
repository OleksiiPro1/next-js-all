import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';
import { Field } from 'react-final-form';

export default function SignInForm(props) {
  const { handleSubmit } = props;
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Field name="Email">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              label="Email"
              name={props.input.name}
              onChange={props.input.onChange}
              value={props.input.value}
              sx={{
                mt: 2,
              }}
            />
          );
        }}
      </Field>

      <Field name="Password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              label="Password"
              name={props.input.name}
              onChange={props.input.onChange}
              value={props.input.value}
              sx={{
                mt: 2,
              }}
            />
          );
        }}
      </Field>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button
          sx={{ mt: 2 }}
          color="primary"
          type="submit"
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </Box>
      <Box sx={{ mt: 2, textAlign: 'right' }}>
        <Link href="/sign-up">Go to Registration</Link>
      </Box>
    </Box>
  );
}
