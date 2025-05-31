import ContactForm from './components/ContactForm.jsx';
import SearchBox from './components/SearchBox.jsx';
import ContactList from './components/ContactList.jsx';
import './App.css';

function App() {
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
