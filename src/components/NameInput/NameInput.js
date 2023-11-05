import { Formik, Field } from 'formik';
import { StyledForm } from './NameInput.styled';

export const NameInput = ({ addstate, state }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        let check = state.contacts.find(e => e.name === values.name);

        if (check === undefined) {
          actions.resetForm();

          addstate(values);
        } else {
          alert(`"${values.name}" is alredy in contacts`);
        }
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Number" />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
