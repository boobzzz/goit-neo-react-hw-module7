import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice.js';
import { filtersReducer } from './filtersSlice.js';

const rootReducer = {
    contacts: contactsReducer,
    filters: filtersReducer
};

export const store = configureStore({
    reducer: rootReducer
});
