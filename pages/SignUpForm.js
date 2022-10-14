import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Field } from 'react-final-form';

export default function SignUpForm(props) {
  const { handleSubmit } = props;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Field name="first_name">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              label="First Name"
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

      <Field name="last_name">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              label="Last Name"
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

      <Field name="email">
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

      <Field name="password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              type="password"
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

      <Field name="retype_password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              type="password"
              label="Retype password"
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

      <Box
        sx={{
          width: 1,
          textAlign: 'right',
        }}
      >
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button
            sx={{ mt: 2 }}
            color="primary"
            type="submit"
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
        </Box>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <span>{props.errors.confirm}</span>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <span>{props.errors.email}</span>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Link href="/login">Go to Login</Link>
        </Box>
      </Box>
    </Box>
  );
}
