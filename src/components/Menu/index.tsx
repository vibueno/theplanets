import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from 'REDUX/appStateSlice';

import MenuItem from './MenuItem';

import { PLANETS, PLANET_KEYS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetMenuProps = {
  currentPlanetKey: string;
  isInsideHeader: boolean;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const Menu = ({
  currentPlanetKey,
  isInsideHeader,
  clickHandler
}: PlanetMenuProps) => {
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  return (
    <ul className={styles.menu} data-is-inside-header={isInsideHeader}>
      {PLANET_KEYS.map(planetKey => (
        <MenuItem
          key={PLANETS[planetKey].NAME}
          planetKey={planetKey}
          planetName={PLANETS[planetKey].NAME}
          currentPlanetKey={currentPlanetKey}
          isMenuOpen={isMenuOpen}
          isInsideHeader={isInsideHeader}
          clickHandler={clickHandler}
        />
      ))}
    </ul>
  );
};

export default Menu;
