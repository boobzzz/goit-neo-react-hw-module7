import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilterName } from './filtersSlice.js';
import { fetchContacts, addContact, deleteContact } from './contactsOps.js';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => {
                    return contact.id !== action.payload
                })
            })
            .addMatcher(({ type }) => type.endsWith('/pending'), (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(({ type }) => type.endsWith('/fulfilled'), (state) => {
                state.loading = false;
            })
            .addMatcher(({ type }) => type.endsWith('/rejected'), (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    }
});

export const contactsReducer = contactsSlice.reducer;

const selectContacts = (state) => {
    return state.contacts.items;
};
const selectFilter = (state) => selectFilterName(state);

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter);
    });
});
