import { AppState } from 'REDUX/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  isMenuOpen: boolean;
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isMenuOpen: false },
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isMenuOpen = action.payload;
    }
  }
});

export const selectors = {
  getIsMenuOpen: (state: AppState) => state.appState.isMenuOpen
};

export const { setIsMenuOpen } = appStateSlice.actions;

export default appStateSlice.reducer;
