export function Filter({ filter }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" onChange={filter} />
    </>
  );
}
