import CheckIcon from '@mui/icons-material/Check';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Item from 'antd/lib/list/Item';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Field } from 'react-final-form';
import reports from './companies.json';

const countries = [
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'US', label: 'USA', phone: '1' },
  { code: 'DE', label: 'Germany', phone: '49' },
  { code: 'FR', label: 'France', phone: '33' },
  { code: 'AT', label: 'Austria', phone: '43' },
];

const EmployeeForm = (props) => {
  const [nameCondition, setNameCondition] = useState(true);
  const [companies, setCompanies] = useState(reports);
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                  disabled={nameCondition ? true : false}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {nameCondition ? (
                          <EditOutlinedIcon
                            onClick={() => setNameCondition(false)}
                          />
                        ) : (
                          <CheckIcon onClick={() => setNameCondition(true)} />
                        )}
                      </InputAdornment>
                    ),
                    sx: {
                      color: 'primary.main',
                      // disabled color - black
                      '& .Mui-disabled': {
                        '-webkitTextFillColor': 'black !important',
                      },
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
          <br />
          <Button
            size={'large'}
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            onClick={handleOpen}
          >
            Modal
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: '40%',
            position: 'fixed',
            top: '20%',
            left: '30%',
          }}
        >
          <Paper
            sx={{
              p: 6,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Location
            </Typography>

            <Item>
              <Field name="adminName">
                {(props) => {
                  return (
                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            {nameCondition ? (
                              <EditOutlinedIcon
                                onClick={() => setNameCondition(false)}
                              />
                            ) : (
                              <CheckIcon
                                onClick={() => setNameCondition(true)}
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                      disabled={nameCondition ? true : false}
                      sx={{
                        mt: 2,
                        pr: 2,
                        '& .Mui-disabled': {
                          '-webkitTextFillColor': 'black !important',
                        },
                      }}
                      required
                      fullWidth
                      label="Admin Name"
                      name={props.input.name}
                      onChange={props.input.onChange}
                      // value={props.input.value}
                      defaultValue={
                        companies.filter((data) => {
                          return data.id == id;
                        })[0].name
                      }
                    />
                  );
                }}
              </Field>
            </Item>

            <Box sx={{ pl: 5, pr: 2 }}>
              <Field name="Country Select">
                {(props) => {
                  return (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: '100%',
                        '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                          color: 'black !important',
                        },
                      }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{
                            '& > img': { mr: 2, flexShrink: 0 },
                          }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  );
                }}
              </Field>
            </Box>

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
                  mr: 2,
                }}
                onClick={handleClose}
              >
                Back
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployeeForm;
