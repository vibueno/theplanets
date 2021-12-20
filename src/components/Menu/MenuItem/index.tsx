import React, { MouseEvent } from 'react';

import { PLANETS } from 'SRC/constants';

import './index.scss';

type MenuItemProps = {
  planetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const MenuItem = ({ planetKey, clickHandler }: MenuItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  const planetName = PLANETS[planetKey].NAME;

  return (
    <li
      id={planetKey}
      key={planetKey}
      className={planetName}
      onClick={e => clickHandler(e, ref)}
      ref={ref}
    >
      {planetName}
    </li>
  );
};
export default MenuItem;
