export default function Posts(props) {
  const { id, title, userId, body } = props;
  return (
    <div>
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      {/* <h3>{userId}</h3> */}
    </div>
  );
}
