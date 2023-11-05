export function Contacts({ state, delContact }) {
  return (
    <>
      <ul>
        {state.contacts.map(e => {
          if (!e.name.toLowerCase().includes(state.filter)) {
            return null;
          }

          return (
            <li key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => {
                  delContact(e.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
