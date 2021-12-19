import React, { MouseEventHandler } from 'react';

import PlanetSections from '../PlanetSections';
import MenuItem from 'COMPONENTS/MenuItem';
import { APP_TITLE, PLANET_NAMES_KEYS } from 'SRC/constants';

import './index.scss';

type HeaderProps = {
  planetName: string;
  menuClickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Header = ({
  planetName,
  menuClickHandler,
  sectionMenuClickHandler
}: HeaderProps) => (
  <nav>
    <div className="app-title">{APP_TITLE}</div>
    <ul className="menu">
      {PLANET_NAMES_KEYS.map(planetNameKey => (
        <MenuItem
          key={planetNameKey}
          clickHandler={menuClickHandler}
          planetName={planetNameKey}
        />
      ))}
    </ul>
    <PlanetSections
      planetName={planetName}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-submenu"
    />
  </nav>
);

export default Header;
