import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import PlanetSections from '../';
import { PLANETS, SECTIONS } from 'SRC/constants';

describe('PlanetSections', () => {
  const initialState = {
    appState: {
      isMenuOpen: false,
      isTransitionDone: true,
      currentPlanetKey: PLANETS.MERCURY.KEY,
      currentSectionKey: SECTIONS.OVERVIEW.KEY
    }
  };

  const mockStore = configureStore();

  let store = mockStore(initialState);
  const props = {
    currentPlanetKey: PLANETS.MERCURY.KEY,
    currentSectionKey: SECTIONS.OVERVIEW.KEY,
    clickHandler: () => {},
    isMenu: true
  };

  it('PlanetSections renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlanetSections {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PlanetSections contains as many sections as SECTIONS.SECTIONS', () => {
    render(
      <Provider store={store}>
        <PlanetSections {...props} />
      </Provider>
    );

    expect(screen.queryAllByRole('button').length).toEqual(
      Object.keys(SECTIONS).length
    );
  });
});
