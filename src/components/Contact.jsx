import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps.js';
import { FaUser, FaPhone } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className={css.info}>
                <span><FaUser /> {name}</span>
                <span><FaPhone /> {number}</span>
            </div>
            <button onClick={() => {
                dispatch(deleteContact(id));
            }}>
                Delete
            </button>
        </>
    )
};

Contact.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
