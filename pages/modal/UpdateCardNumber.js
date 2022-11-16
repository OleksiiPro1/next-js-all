import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { Field } from 'react-final-form';

export default function UpdateCardNumber(props) {
  const { handleSubmit, dirty } = props;
  return (
    <>
      <Paper sx={{ overflowY: 'scroll', maxHeight: '300px' }}>
        <Grid container spacing={2} sx={{ pt: 2, pl: '10%', pr: '12%' }}>
          <Grid item xs={3}>
            <Paper
              sx={{
                textAlign: 'center',
                pt: 4,
                pb: 4,
                border: '2px solid #87cefa',
              }}
            >
              <Box
                component="img"
                src="/test-icons/icons8-debit-card-48.png"
                width="48px"
                height="48px"
                alt={'card'}
              />{' '}
              Card
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ textAlign: 'center', pt: 4, pb: 4 }}>
              <Box
                component="img"
                src="/test-icons/communityIcon_84ih8y9d2uz81.png"
                width="48px"
                height="48px"
                alt={'card'}
              />{' '}
              Google Pay
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ textAlign: 'center', pt: 4, pb: 4 }}>
              <Box
                component="img"
                src="/test-icons/communityIcon_q3m0rcb0axc91.png"
                width="48px"
                height="48px"
                alt={'card'}
              />{' '}
              Affirm
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ textAlign: 'center', pt: 4, pb: 4 }}>
              <Box
                component="img"
                src="/test-icons/klarna-icon-filled.png"
                width="48px"
                height="48px"
                alt={'card'}
              />{' '}
              Klarna
            </Paper>
          </Grid>
        </Grid>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ pl: '10%', pr: '10%', pt: 2, pb: '5%' }}
        >
          <Field name="card-number">
            {(props) => {
              return (
                <TextField
                  type={'number'}
                  required
                  fullWidth
                  label="Card Number"
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

          <Box
            sx={{
              mt: 2,
              pr: 2,
            }}
          >
            <Button
              color="primary"
              type="submit"
              variant="outlined"
              size="large"
              disabled={!dirty}
              onClick={props.onCloseModal}
            >
              Save
            </Button>
            <h3>Text for scroll</h3>
            <h3>Text for scroll</h3>
            <h3>Text for scroll</h3>
            <h3>Text for scroll</h3>
            <h3>Text for scroll</h3>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
