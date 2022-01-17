import { AppState } from 'REDUX/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SECTIONS, PLANETS } from 'SRC/constants';

interface appState {
  currentPlanetKey: string;
  currentSectionKey: string;
  isMenuOpen: boolean;
  isTransitionDone: boolean;
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    currentPlanetKey: PLANETS.MERCURY.KEY,
    currentSectionKey: SECTIONS.OVERVIEW.KEY,
    isMenuOpen: false,
    isTransitionDone: true
  },
  reducers: {
    setCurrentPlanetKey: (state, action: PayloadAction<string>) => {
      state.currentPlanetKey = action.payload;
    },
    setCurrentSectionKey: (state, action: PayloadAction<string>) => {
      state.currentSectionKey = action.payload;
    },
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setIsTransitionDone: (state, action: PayloadAction<boolean>) => {
      state.isTransitionDone = action.payload;
    }
  }
});

export const selectors = {
  getCurrentPlanetKey: (state: AppState) => state.appState.currentPlanetKey,
  getCurrentSectionKey: (state: AppState) => state.appState.currentSectionKey,
  getIsMenuOpen: (state: AppState) => state.appState.isMenuOpen,
  getIsTransitionDone: (state: AppState) => state.appState.isTransitionDone
};

export const {
  setCurrentPlanetKey,
  setCurrentSectionKey,
  setIsMenuOpen,
  setIsTransitionDone
} = appStateSlice.actions;

export default appStateSlice.reducer;
