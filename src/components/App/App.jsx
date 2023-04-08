import ConstactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';
import {
  Container,
  Overlay,
  Title,
  SecondOverlay,
  SecondTitle,
  ThirdTitle,
} from './App.styles';
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
      <Overlay>
        <ConstactForm />
      </Overlay>
      <SecondOverlay>
        <SecondTitle>Contacts</SecondTitle>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <ThirdTitle>No any contacts in phonebook</ThirdTitle>
        )}
        {isLoading && !error && <b>Loading...</b>}
      </SecondOverlay>
    </Container>
  );
}
