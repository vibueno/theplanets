import React, { MouseEvent } from 'react';

import './index.scss';

type MenuItemProps = {
  planetKey: string;
  planetName: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const MenuItem = ({ planetKey, planetName, clickHandler }: MenuItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  return (
    <li
      id={planetKey}
      key={planetName}
      className={planetName}
      onClick={e => clickHandler(e, ref)}
      ref={ref}
    >
      <span className="menu-item-bullet-point"></span>
      <span className="menu-item-title">{planetName}</span>
      <img
        className="menu-item-arrow"
        src={require(`ASSETS/img/icon-chevron.svg`)}
      />
    </li>
  );
};
export default MenuItem;
