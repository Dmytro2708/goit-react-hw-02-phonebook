import { ContactsList, ContactEl } from "./Contacts.styled";

export function Contacts({ state, delContact }) {
  return (
    <>
      <ContactsList>
        {state.contacts.map(e => {
          if (!e.name.toLowerCase().includes(state.filter)) {
            return null;
          }

          return (
            <ContactEl key={e.id}>
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
            </ContactEl>
          );
        })}
      </ContactsList>
    </>
  );
}
