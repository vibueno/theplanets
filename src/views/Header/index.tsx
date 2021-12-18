import React, { MouseEventHandler } from 'react';

import PlanetSections from '../PlanetSections';
import MenuItem from '../../components/MenuItem';
import { planetNamesKeys } from '../../constants';

import './index.scss';

type HeaderProps = {
  planet: string;
  menuClickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
  sectionPanelClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Header = ({
  planet,
  menuClickHandler,
  sectionPanelClickHandler
}: HeaderProps) => (
  <nav>
    <div className="app-title">the planets</div>
    <ul className="menu">
      {planetNamesKeys.map(planetNameKey => (
        <MenuItem
          key={planetNameKey}
          clickHandler={menuClickHandler}
          planetName={planetNameKey}
        />
      ))}
    </ul>
    <PlanetSections
      planetName={planet}
      clickHandler={sectionPanelClickHandler}
      cssClass="planet-sections-submenu"
    />
  </nav>
);

export default Header;
