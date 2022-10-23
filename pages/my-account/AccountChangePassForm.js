import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { Field } from 'react-final-form';

export default function AccountChangePassForm(props) {
  const { handleSubmit, onCloseModal, dirty } = props;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      style={{ backgroundColor: 'white' }}
    >
      <Field name="old-password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              type="password"
              label="Old Password"
              name={props.input.name}
              onChange={props.input.onChange}
              value={props.input.value}
              sx={{
                mt: 2,
                pr: 2,
              }}
            />
          );
        }}
      </Field>

      <Field name="new_password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              type="password"
              label="New Password"
              name={props.input.name}
              onChange={props.input.onChange}
              value={props.input.value}
              sx={{
                mt: 2,
                pr: 2,
              }}
            />
          );
        }}
      </Field>

      <Field name="retype_new_password">
        {(props) => {
          return (
            <TextField
              required
              fullWidth
              type="password"
              label="Retype New Password"
              name={props.input.name}
              onChange={props.input.onChange}
              value={props.input.value}
              sx={{
                mt: 2,
                pr: 2,
              }}
            />
          );
        }}
      </Field>

      <span>{props.errors.confirm}</span>
      <Box
        sx={{
          mt: 2,
          pr: 2,
        }}
      >
        <Button
          onClick={onCloseModal}
          color="primary"
          type="submit"
          variant="outlined"
          size="large"
          disabled={!dirty}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
