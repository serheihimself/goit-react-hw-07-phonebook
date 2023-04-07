import ConstactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList ';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';
import { Container, Title, SecondTitle } from './App.styles';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ConstactForm />
      <SecondTitle>Contacts</SecondTitle>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>No any contacts in phonebook</p>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
    </Container>
  );
}
