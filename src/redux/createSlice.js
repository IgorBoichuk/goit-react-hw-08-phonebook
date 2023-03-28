import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  regUser,
  loginUser,
  logoutUser,
  currentUser,
} from './operations';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
    login: false,
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
  extraReducers: {
    [regUser.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [loginUser.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [logoutUser.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [currentUser.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [addContact.fulfilled](state, action) {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
    },

    [deleteContact.fulfilled](state, action) {
      const contactIndex = state.contacts.items.findIndex(
        item => item.id === action.payload
      );
      state.contacts.isLoading = false;
      state.contacts.items.splice(contactIndex, 1);
    },

    [addContact.pending](state, action) {
      state.contacts.isLoading = true;
    },

    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },

    [addContact.rejected](state, action) {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },

    [fetchContacts.rejected](state, action) {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },

    [deleteContact.rejected](state, action) {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
