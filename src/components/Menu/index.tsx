import React from 'react';
import MenuItem from './MenuItem';

import { PLANET_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetMenuProps = {
  planetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({ planetKey, clickHandler }: PlanetMenuProps) => (
  <ul className="menu">
    {PLANET_KEYS.map(planetKey => (
      <MenuItem
        key={planetKey}
        clickHandler={clickHandler}
        planetKey={planetKey}
      />
    ))}
  </ul>
);

export default Menu;
