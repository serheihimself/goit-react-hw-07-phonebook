import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContacts: (state, { payload: id }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContact } = boxSlice.actions;
export const getContacts = state => state.contacts.contacts;
export const getFilterValue = state => state.contacts.filter;
