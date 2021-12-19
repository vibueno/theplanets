import React, { MouseEventHandler } from 'react';

import Sections from '../Sections';
import Menu from 'VIEWS/Menu';
import { APP_TITLE, PLANETS } from 'SRC/constants';

import './index.scss';

type HeaderProps = {
  planetKey: string;
  menuClickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Header = ({
  planetKey,
  menuClickHandler,
  sectionMenuClickHandler
}: HeaderProps) => (
  <nav>
    <div className="app-title">{APP_TITLE}</div>
    <Menu planetKey={planetKey} clickHandler={menuClickHandler} />
    <Sections
      planetKey={planetKey}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-submenu"
    />
  </nav>
);

export default Header;
