import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Pagination,
  Paper,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-final-form';
import UpdateCardNumber from './UpdateCardNumber';

export default function ModalWindow() {
  const onSubmitCredentials = (formValues) => {
    console.log(formValues);
  };
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const onOpenModal = () => {
    setOpenPasswordModal(true);
  };
  const onCloseModal = () => {
    setOpenPasswordModal(false);
  };
  return (
    <>
      <Box sx={{ textAlign: 'left', p: 2 }}>
        <Button
          onClick={onOpenModal}
          color="primary"
          type="submit"
          variant="outlined"
          size="large"
        >
          Update
        </Button>
      </Box>

      <Modal open={openPasswordModal}>
        <Box width={'70%'} height={'auto'} onClose={onCloseModal}>
          <Form
            onSubmit={onSubmitCredentials}
            render={(props) => (
              <UpdateCardNumber onCloseModal={onCloseModal} {...props} />
            )}
          />
        </Box>
      </Modal>
    </>
  );
}
