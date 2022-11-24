import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function SwrExample() {
  const { data, error } = useSWR('/api/user/123', fetcher);

  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  // рендер данных
  return <div>привет, {data.name}!</div>;
}
