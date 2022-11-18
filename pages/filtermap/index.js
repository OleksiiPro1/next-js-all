export default function FilterMap() {
  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  return (
    <>
      <div>
        {/* Ringo only */}
        {names
          .filter((name) => name.includes('R'))
          .map((filteredName) => (
            <li key={names}>{filteredName}</li>
          ))}
      </div>
      <div>
        {/* All people without Ringo */}
        {names
          .filter((name) => !name.includes('R'))
          .map((filteredName) => (
            <li key={names}>{filteredName}</li>
          ))}
      </div>
    </>
  );
}
