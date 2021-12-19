import React from 'react';
import MenuItem from 'COMPONENTS/MenuItem';

import { PLANET_NAMES_KEYS } from 'SRC/constants';

type MenuProps = {
  planetName: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({ planetName, clickHandler }: MenuProps) => (
  <>
    <ul className="menu">
      {PLANET_NAMES_KEYS.map(planetNameKey => (
        <MenuItem
          key={planetNameKey}
          clickHandler={clickHandler}
          planetName={planetNameKey}
        />
      ))}
    </ul>
  </>
);

export default Menu;
