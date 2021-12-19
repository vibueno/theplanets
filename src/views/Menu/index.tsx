import React from 'react';
import MenuItem from 'COMPONENTS/MenuItem';

import { PLANET_KEYS } from 'SRC/constants';

type MenuProps = {
  planetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({ planetKey, clickHandler }: MenuProps) => (
  <>
    <ul className="menu">
      {PLANET_KEYS.map(planetKey => (
        <MenuItem
          key={planetKey}
          clickHandler={clickHandler}
          planetKey={planetKey}
        />
      ))}
    </ul>
  </>
);

export default Menu;
