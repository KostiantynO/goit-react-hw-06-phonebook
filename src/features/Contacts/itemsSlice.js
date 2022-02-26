import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { LS_KEY } from 'common';
import { load } from 'storage';

const loadContactsFromLocalStorage = () => {
  const savedContacts = load(LS_KEY);
  return savedContacts?.length > 0 ? savedContacts : [];
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: loadContactsFromLocalStorage(),
  reducers: {
    addContact: {
      reducer: (state, { payload }) =>
        !payload ? state : void state.unshift(payload),

      prepare: newContact => {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },

    deleteContact: (state, { payload }) =>
      typeof payload !== 'string'
        ? state
        : state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;
