import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsSlice, filterSlice } from './contactsSlices';

const contacts = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
});
