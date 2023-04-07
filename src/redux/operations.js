import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642eb9038ca0fe3352d71864.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts,',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
