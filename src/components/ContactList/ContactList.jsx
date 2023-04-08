import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Ul, Text, DeleteButton } from './ContactList.styles';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };
  const filteredContacts = filterContacts();

  return (
    <Ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Text>
            {name}: {number}
          </Text>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </li>
      ))}
    </Ul>
  );
}
