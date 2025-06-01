import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import ContactForm from './components/ContactForm.jsx';
import SearchBox from './components/SearchBox.jsx';
import ContactList from './components/ContactList.jsx';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </>
    );
}

export default App;
