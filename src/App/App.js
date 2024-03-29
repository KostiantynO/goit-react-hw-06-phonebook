import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  addContact,
  deleteContact,
  setFilter,
  getContactsItems,
  getContactsFilter,
} from 'redux/contactsSlices';

import { Section } from 'common';
import { ContactForm, ContactList, Filter } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsItems);
  const storedFilter = useSelector(getContactsFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = storedFilter.toLowerCase();

    if (contacts.length <= 0) return [];

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onSubmitAddContact = ({ name, number }) => {
    const normalizedNewName = name.toLowerCase();
    const savedContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );

    if (savedContact) {
      return toast.error(`${savedContact.name} is already saved`);
    }

    const newContact = { name, number };
    dispatch(addContact(newContact));
  };

  const onDeleteContact = toDeleteId => {
    dispatch(deleteContact(toDeleteId));
  };

  const changeFilter = e => dispatch(setFilter(e.target.value));
  const clearFilter = () => dispatch(setFilter(''));

  const visibleContacts = getVisibleContacts();

  return (
    <AppStyled>
      <Section title="Phonebook" h="1">
        <ContactForm onSubmit={onSubmitAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter
          value={storedFilter}
          onChangeFilter={changeFilter}
          onClearFilter={clearFilter}
        />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>

      <ToastContainer autoClose={1000} />
    </AppStyled>
  );
};
