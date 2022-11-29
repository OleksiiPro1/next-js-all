export default function AsyncAwait() {
  // simple example 1
  // const asyncFn = async () => {
  //   return await 'Succes!';
  // };

  // console.log(asyncFn());
  // return <h2> look in console</h2>;

  // simple example 2
  // const timerPromise = () =>
  //   new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));

  // const asyncFn = async () => {
  //   console.log('Timer Status');
  //   await timerPromise();
  //   console.log('Timer ended');
  // };

  // asyncFn();

  // return <h2> look in console</h2>;

  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };

  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    // const data = await getData(url)
    const data = getData(url);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
  return <h2> look in console</h2>;
}
