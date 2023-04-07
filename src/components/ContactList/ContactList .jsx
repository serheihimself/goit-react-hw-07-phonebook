import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contactsSlice';
import { deleteContacts } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };
  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
