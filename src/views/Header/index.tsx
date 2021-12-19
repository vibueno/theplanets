import React, { MouseEventHandler } from 'react';

import PlanetSections from '../PlanetSections';
import Menu from 'VIEWS/Menu';
import { APP_TITLE } from 'SRC/constants';

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
    <Menu planetName={planetName} clickHandler={menuClickHandler} />
    <PlanetSections
      planetName={planetName}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-submenu"
    />
  </nav>
);

export default Header;
