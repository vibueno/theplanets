import React from 'react';
import MenuItem from './MenuItem';

import { PLANETS, PLANET_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetMenuProps = {
  isMenuOpen: boolean;
  className: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({ isMenuOpen, className, clickHandler }: PlanetMenuProps) => (
  <ul data-menu-open={isMenuOpen} className={`menu ${className}`}>
    {PLANET_KEYS.map(planetKey => (
      <MenuItem
        key={PLANETS[planetKey].NAME}
        clickHandler={clickHandler}
        planetKey={planetKey}
        planetName={PLANETS[planetKey].NAME}
      />
    ))}
  </ul>
);

export default Menu;
