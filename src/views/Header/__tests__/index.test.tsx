import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import Header from '../';
import { APP_TITLE, PLANETS, SECTIONS } from 'SRC/constants';

describe('Header', function () {
  const initialState = {
    appState: {
      isMenuOpen: false,
      isTransitionDone: true,
      currentPlanetKey: PLANETS.MERCURY.KEY,
      currentSectionKey: SECTIONS.OVERVIEW.KEY
    }
  };

  const mockStore = configureStore();
  let store;

  it('Header renders correctly', () => {
    store = mockStore(initialState);
    const props = {
      menuClickHandler: () => {
        return;
      },
      hamburgerClickHandler: () => {
        return;
      },
      sectionMenuClickHandler: () => {
        return;
      }
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
