import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://600af538778d1a0017794c59.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


