import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) =>
      typeof payload !== 'string' ? state : payload,
  },
});

export const { setFilter } = filterSlice.actions;
