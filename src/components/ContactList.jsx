import { useSelector } from 'react-redux';
import Contact from './Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.container}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );
};
