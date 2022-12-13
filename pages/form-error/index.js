import { inputAdornmentClasses } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form } from 'react-final-form';
import EmployeesForm from './EmployeesForm';

export default function FormError() {
  const [emailUsed, setEmailUsed] = useState(false);
  const onSubmitUserData = (formValues) => {
    console.log(formValues);
  };
  const onValidateUserData = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = '';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address!';
    }
    return errors;
  };
  const router = useRouter();
  function redirect() {
    router.push('/');
  }

  // axios
  //     .post(
  //       'http://localhost:3000/v1/users/',
  //       {
  //         ...formValues,
  //       },
  //       {
  //         headers,
  //       },
  //     )
  //     .then((res) => {
  //       if (res.status === 403) {
  //         // throw new Error('Request failed with status code 403');
  //       } else if (res.status === 500) {
  //         // throw new Error('Request failed with status code 500');
  //       } else {
  //         redirect();
  //       }
  //       // return res.json();
  //     })
  //     .catch((e) => {
  //       if (e.response.status === 403) {
  //         setEmailUsed(true);
  //         console.log(e, 'Request failed with status code 403');
  //       } else if (e.response.status === 500) {
  //         setEmailUsed(true);
  //         console.log(e, 'Request failed with status code 500');
  //       } else if (setEmailUsed.length === 0) {
  //         setEmailUsed(false);
  //       } else {
  //         setEmailUsed(false);
  //       }
  //     });

  return (
    <>
      <Form
        validate={onValidateUserData}
        onSubmit={onSubmitUserData}
        render={(props) => (
          <EmployeesForm redirect={redirect} emailUsed={emailUsed} {...props} />
        )}
      />
    </>
  );
}
