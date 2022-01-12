import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { test: 'testvalue' },
  reducers: {
    updateTest: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state = { ...state, test: action.payload };
    }
  }
});

export const { updateTest } = appStateSlice.actions;

export default appStateSlice.reducer;
