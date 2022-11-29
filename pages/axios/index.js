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

  // POST
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

  // PUT
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
}
