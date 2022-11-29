import Wrapper from './Wrapper';

export default function ChildrenPage() {
  return (
    <div>
      <Wrapper color="lightblue">
        <h2>Text inside of Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text inside of Wrapper2</h2>
        <button>Ups</button>
        <p>Description</p>
      </Wrapper>
    </div>
  );
}
