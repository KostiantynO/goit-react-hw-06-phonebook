import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';

// It uses IMMER immutabe state
export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) =>
        !payload?.id ||
        typeof payload.name !== 'string' ||
        typeof payload.number !== 'string'
          ? state
          : void state.unshift(payload),

      prepare: newContact => ({ payload: { ...newContact, id: nanoid() } }),
    },

    deleteContact: (state, { payload }) =>
      typeof payload !== 'string'
        ? state
        : state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) =>
      typeof payload !== 'string' ? state : payload,
  },
});

export const { setFilter } = filterSlice.actions;

const contactsReducer = combineReducers({
  [itemsSlice.name]: itemsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

// Selectors
export const getContactsItems = state => state.contacts.items;
export const getContactsFilter = state => state.contacts.filter;
