import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  isMenuOpen: boolean;
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isMenuOpen: false },
  reducers: {
    setIsMenuOpenRedux: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isMenuOpen = action.payload;
    }
  }
});

export const { setIsMenuOpenRedux } = appStateSlice.actions;

export default appStateSlice.reducer;
