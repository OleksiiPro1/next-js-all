import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Field } from 'react-final-form';

const EmployeeForm = (props) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const { handleSubmit } = props;
  const { loading } = props;
  const { errorMessage } = props;
  const { data } = props;
  const { values } = props;
  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field name="company">
              {(props) => (
                <TextField
                  variant={'outlined'}
                  label="Company"
                  required
                  fullWidth
                  name={props.input.name}
                  // defaultValue={data.company}
                  onChange={props.input.onChange}
                  disabled={loading}
                  InputLabelProps={{
                    sx: {
                      color: 'primary.main',
                    },
                  }}
                />
              )}
            </Field>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field name={'location'}>
              {(props) => (
                <TextField
                  variant={'outlined'}
                  label="Location"
                  required
                  fullWidth
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  disabled={loading}
                  InputLabelProps={{
                    sx: {
                      color: 'primary.main',
                    },
                  }}
                />
              )}
            </Field>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field name="quantity_of_restaurants">
              {(props) => (
                <TextField
                  variant={'outlined'}
                  label="Quantity of restaurants"
                  required
                  fullWidth
                  name={props.input.name}
                  // defaultValue={data.company}
                  onChange={props.input.onChange}
                  disabled={loading}
                  InputLabelProps={{
                    sx: {
                      color: 'primary.main',
                    },
                  }}
                />
              )}
            </Field>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: 1,
            textAlign: 'right',
          }}
        >
          <Button
            type="submit"
            size={'large'}
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress
                  sx={{
                    color: 'primary.main',
                  }}
                  size={'1.5rem'}
                />
              ) : null
            }
          >
            {!loading && 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeForm;
