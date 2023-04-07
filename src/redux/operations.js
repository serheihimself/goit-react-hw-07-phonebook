import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642eb9038ca0fe3352d71864.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
