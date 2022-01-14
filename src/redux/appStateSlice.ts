import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  value: string;
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { value: 'testvalue' },
  reducers: {
    updateTest: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { updateTest } = appStateSlice.actions;

export default appStateSlice.reducer;
