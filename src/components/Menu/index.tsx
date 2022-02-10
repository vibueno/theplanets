import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from 'REDUX/appStateSlice';

import MenuItem from './MenuItem';

import { PLANETS, PLANET_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetMenuProps = {
  className: string;
  currentPlanetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({
  className,
  currentPlanetKey,
  clickHandler
}: PlanetMenuProps) => {
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  return (
    <ul data-menu-open={isMenuOpen} className={`menu ${className}`}>
      {PLANET_KEYS.map(planetKey => (
        <MenuItem
          key={PLANETS[planetKey].NAME}
          clickHandler={clickHandler}
          planetKey={planetKey}
          currentPlanetKey={currentPlanetKey}
          planetName={PLANETS[planetKey].NAME}
        />
      ))}
    </ul>
  );
};

export default Menu;
