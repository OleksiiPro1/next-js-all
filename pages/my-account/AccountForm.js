import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Item from 'antd/lib/list/Item';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
import { Field } from 'react-final-form';

export default function AccountForm(props) {
  const [value, setValue] = React.useState(null);

  const { values } = props;

  const [language, setLanguage] = React.useState('');
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const { handleSubmit, dirty } = props;
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item>
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
                        pr: 2,
                      }}
                    />
                  );
                }}
              </Field>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
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
                        pr: 2,
                      }}
                    />
                  );
                }}
              </Field>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={6}>
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
            <Field name="phone-number">
              {(props) => {
                return (
                  <MuiTelInput
                    required
                    fullWidth
                    label="Phone Number"
                    value={props.input.value}
                    name={props.input.name}
                    onChange={props.input.onChange}
                  />
                );
              }}
            </Field>
          </Box>

          <Box
            sx={{
              mt: 2,
              pr: 2,
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <Box
            sx={{
              mt: 2,
              pr: 2,
            }}
          >
            <FormControl sx={{ minWidth: '100%' }}>
              <InputLabel id="demo-simple-select-helper-label">
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={language}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>German</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              mt: 2,
              pr: 2,
              width: 1,
              textAlign: 'right',
            }}
          >
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={!dirty}
              size="large"
            >
              Sign Up
            </Button>
          </Box>
          <span>{props.errors.email}</span>
        </Grid>
      </Box>
    </>
  );
}
