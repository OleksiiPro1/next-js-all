import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import EmployeeForm from './EmployeeForm';

// import employees from '../../assets/mockData/employees.json';

const EmployeeId = (props) => {
  const router = useRouter();
  const { id } = router.query;

  // const fetcher = (url, token) =>
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((res) => res.data);

  // const { data, error } = useSWR(
  //   `${API_URL}/users/${userId}`,

  //   fetcher,
  // );
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  const onSubmit = (formValues) => {
    console.log(formValues);

    // axios.put(
    //   `${API_URL}/users/${userId}`,
    //   {
    //     ...formValues,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   },
    // );
    router.push('/accounts_list');
  };

  return (
    <>
      <Form
        // data={data}
        onSubmit={onSubmit}
        //validate={validate}
        // initialValues={{ ...data }}
        render={(props) => <EmployeeForm {...props} />}
      />
    </>
  );
};

export default EmployeeId;
