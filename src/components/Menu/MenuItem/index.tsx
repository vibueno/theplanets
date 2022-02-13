import React, { MouseEvent } from 'react';

import styles from './index.module.scss';

type MenuItemProps = {
  planetKey: string;
  planetName: string;
  currentPlanetKey: string;
  isMenuOpen: boolean;
  isInsideHeader: boolean;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const MenuItem = ({
  planetKey,
  planetName,
  currentPlanetKey,
  isMenuOpen,
  isInsideHeader,
  clickHandler
}: MenuItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  return (
    <li
      id={planetKey}
      key={planetName}
      className={planetName}
      onClick={e => clickHandler(e, ref)}
      ref={ref}
      data-menu-open={isMenuOpen}
      data-is-inside-header={isInsideHeader}
      data-selected={planetKey === currentPlanetKey}
    >
      <span className={styles.menuItemBulletPoint}></span>
      <span className={styles.menuItemTitle}>{planetName}</span>

      <img
        className={styles.menuItemArrow}
        src={require(`ASSETS/img/icon-chevron.svg`)}
      />
    </li>
  );
};
export default MenuItem;
