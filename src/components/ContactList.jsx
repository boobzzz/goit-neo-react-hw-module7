import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice.js';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import Contact from './Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
    const { loading, error } = useSelector(state => state.contacts);
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <>
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {filteredContacts.length > 0 && <ul className={css.container}>
                {filteredContacts.map(({id, name, number}) => (
                    <li>
                        <Contact
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                        />
                    </li>
                ))}
            </ul>}
        </>
    );
};
