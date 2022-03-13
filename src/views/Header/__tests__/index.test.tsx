import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from '../';
import { APP_TITLE, PLANETS, SECTIONS } from 'SRC/constants';

describe('Header', () => {
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

  it('Header renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header contains title', () => {
    render(
      <Provider store={store}>
        <Header {...props} />
      </Provider>
    );
    expect(screen.queryByText(APP_TITLE)).toHaveTextContent(APP_TITLE);
  });
});
