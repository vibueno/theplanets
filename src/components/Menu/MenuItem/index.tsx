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
      {planetName}
    </li>
  );
};
export default MenuItem;
