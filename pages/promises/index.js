import { FileCopySharp } from '@mui/icons-material';

export default function Promises() {
  // simple example
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((json) => console.log(json))
  //   .catch((error) => console.error(error));

  const getData = (url) =>
    new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error)),
    );

  getData('https://jsonplaceholder.typicode.com/todos')
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
}
