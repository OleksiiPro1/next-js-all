export default function Wrapper(props) {
  console.log(props);
  return (
    <div>
      <div style={{ backgroundColor: props.color }}>{props.children}</div>;
    </div>
  );
}
