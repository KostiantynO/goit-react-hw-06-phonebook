import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice, itemsSlice } from 'features/Contacts';

export const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});
