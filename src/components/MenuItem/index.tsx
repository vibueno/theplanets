import React, { MouseEventHandler } from 'react';

type MenuItemProps = {
  planetName: string;
  clickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
};

const MenuItem = ({ planetName, clickHandler }: MenuItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);
  return (
    <li
      id={planetName}
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
