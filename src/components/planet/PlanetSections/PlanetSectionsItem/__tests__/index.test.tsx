import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import PlanetSectionsItem from '../';
import { PLANETS, SECTIONS } from 'SRC/constants';

describe('PlanetSectionsItem', () => {
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
    sectionKey: SECTIONS.OVERVIEW.KEY,
    currentSectionKey: SECTIONS.OVERVIEW.KEY,
    className: `planetSectionsBtn-${PLANETS[PLANETS.MERCURY.KEY].NAME}`,
    caption: 'caption',
    captionLong: 'captionLong',
    numbering: SECTIONS[SECTIONS.OVERVIEW.KEY].NUMBER,
    clickHandler: () => {}
  };

  it('PlanetSectionsItem renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlanetSectionsItem {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PlanetSectionsItem selected if currentPlanetKey === planetKey', () => {
    render(
      <Provider store={store}>
        <PlanetSectionsItem {...props} />
      </Provider>
    );
    expect(screen.queryByRole('button')).toHaveAttribute(
      'data-selected',
      'true'
    );
  });
});
