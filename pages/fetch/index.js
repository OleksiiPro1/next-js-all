import { useEffect, useState } from 'react';

export default function FetchExample() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https:/jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('FetchExample render');
  console.log(todo);
  return <div>{todo && <h1>{todo.title}</h1>}</div>;
}
