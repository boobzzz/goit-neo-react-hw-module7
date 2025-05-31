import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const searchFieldId = useId();
    const filter = useSelector(state => state.filters.name);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                search: ''
            }}
            onSubmit={() => {}}
        >
            <Form className={css.container}>
                <label htmlFor={searchFieldId}>Find contacts by name</label>
                <Field
                    type="text"
                    id={searchFieldId}
                    name="search"
                    value={filter}
                    onChange={(e) => {
                        dispatch(changeFilter(e.target.value));
                    }}
                />
                <ErrorMessage
                    className={css.error}
                    name="search"
                    component="span"
                />
            </Form>
        </Formik>
    );
};
