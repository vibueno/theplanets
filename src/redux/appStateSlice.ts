import { AppState } from 'REDUX/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  isMenuOpen: boolean;
  isTransitionDone: boolean;
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isMenuOpen: false, isTransitionDone: true },
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setIsTransitionDone: (state, action: PayloadAction<boolean>) => {
      state.isTransitionDone = action.payload;
    }
  }
});

export const selectors = {
  getIsMenuOpen: (state: AppState) => state.appState.isMenuOpen,
  getIsTransitionDone: (state: AppState) => state.appState.isTransitionDone
};

export const { setIsMenuOpen, setIsTransitionDone } = appStateSlice.actions;

export default appStateSlice.reducer;
