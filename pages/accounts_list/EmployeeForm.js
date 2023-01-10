import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Field } from 'react-final-form';
import reports from './companies.json';

const EmployeeForm = (props) => {
  const [companies, setCompanies] = useState(reports);
  const router = useRouter();
  const { id } = router.query;

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
  console.log(companies[0].companies, 'companies[0].companies');
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
                  defaultValue={
                    companies.filter((data) => {
                      return data.id == id;
                    })[0].companies
                  }
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
                  defaultValue={
                    companies.filter((data) => {
                      return data.id == id;
                    })[0].location
                  }
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
                  defaultValue={
                    companies.filter((data) => {
                      return data.id == id;
                    })[0].quantity_of_restaurants
                  }
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
