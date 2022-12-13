import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Field } from 'react-final-form';

export default function EmployeesForm(props) {
  const { handleSubmit } = props;
  const { emailUsed } = props;
  const { redirect } = props;
  return (
    <Box component={'form'} onSubmit={handleSubmit} sx={{ p: 5 }}>
      <Field name={'email'}>
        {(props) => (
          <TextField
            variant={'outlined'}
            label="Email"
            required
            // error={emailUsed}
            // helperText={emailUsed === true ? 'This email is already taken' : ''}
            fullWidth
            name={props.input.name}
            value={props.input.value}
            onChange={props.input.onChange}
            InputLabelProps={{
              sx: {
                color: 'primary.main',
              },
            }}
          />
        )}
      </Field>
      <Box sx={{ color: '#f44336', paddingLeft: '14px', fontSize: 12 }}>
        {props.errors.email}
      </Box>
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button onClick={() => redirect()}>Push</Button>
      </Box>
    </Box>
  );
}
