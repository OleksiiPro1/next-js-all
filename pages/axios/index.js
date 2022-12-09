import axios from 'axios';

export default function AxiosGet() {
  // GET

  // Делаем запрос пользователя с данным ID
  axios
    .get('https://reqres.in/api/users&page=2')
    .then(function (response) {
      // обработка успешного запроса
      console.log(response);
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
    .then(function () {
      // выполняется всегда
    });

  // POST Для добавления новой записи
  axios
    .post('https://reqres.in/api/users', {
      name: 'Alex777',
      job: 'Developer222',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // PUT перезаписать запись

  axios
    .put('https://reqres.in/api/users/3', {
      name: 'Max222',
      job: 'Doctor333',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // DELETE
  axios
    .delete('https://reqres.in/api/users/3', {
      name: 'Max222',
      job: 'Doctor333',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  {
    /* POST ============================= */
  }
  // const { accessToken } = useSelector((state) => state.authReducer);
  // const headers = computeHeaders(accessToken);

  // axios
  // .post(
  //   'http://localhost:3000/v1/users/',
  //   {
  //     ...formValues,
  //   },
  //   {
  //     headers,
  //   },
  // )
  // .then((res) => {
  //   if (res.status === 403) {
  //     // console.log('403 error!');
  //     throw new Error('Request failed with status code 403');
  //   }
  //   // return res.json();
  // })
  // .catch((e) => {
  //   console.log(e, 'Request failed with status code 403');
  // })

  /* GET ============================= */
  // const { accessToken, userId, me } = useSelector((state) => state.authReducer);
  // const headersLogo = computeMultipartHeaders(accessToken);

  // axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((res) => res.data);

  // const { data, error } = useSWR(
  //   `http://localhost:3000/v1/users/${userId}`,

  //   fetcher,
  // );

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  /* PUT ============================= */
  // const { accessToken, userId, me } = useSelector((state) => state.authReducer);
  // const headersLogo = computeMultipartHeaders(accessToken);

  //   axios.put(
  //     `http://localhost:3000/v1/users/${userId}`,
  //     {
  //       ...formValues,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     },
  //   );
  // };
  return <div>Look axios/index.js</div>;
}
