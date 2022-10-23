import { Box, Button, Grid, Modal, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import AccountChangePassForm from './AccountChangePassForm';
import AccountForm from './AccountForm';
import AvatarPage from './Avatar';

export default function MyAccount(props) {
  const errors = {};

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const onValidate = (values) => {
    const errors = {};
    if (values.retype_new_password !== values.new_password) {
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

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const onOpenModal = () => {
    setOpenPasswordModal(true);
  };

  const onCloseModal = () => {
    setOpenPasswordModal(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Form
          onSubmit={onSubmit}
          validate={onValidate}
          render={(props) => <AccountForm {...props} />}
        />
      </Grid>
      <Grid item xs={6}>
        <AvatarPage />
        <Paper sx={{ width: '100%', p: 2, borderRadius: 4 }}>
          <Box>
            <Typography variant="h5">Security</Typography>
            <Typography variant="h5">*******</Typography>
          </Box>
          <Button
            onClick={onOpenModal}
            color="primary"
            type="submit"
            variant="outlined"
            size="large"
          >
            Change
          </Button>
          <span>{errors.confirm}</span>
        </Paper>
        <Modal
          open={openPasswordModal}
          style={{ width: '50%', paddingLeft: '25%', margin: '10%' }}
        >
          <Form
            onSubmit={onSubmit}
            validate={onValidate}
            render={(props) => (
              <AccountChangePassForm onCloseModal={onCloseModal} {...props} />
            )}
          />
        </Modal>
      </Grid>
    </Grid>
  );
}
