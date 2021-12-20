import React, { MouseEventHandler } from 'react';

import PlanetSectionsMenu from 'COMPONENTS/planet/PlanetSectionsMenu';
import Menu from 'COMPONENTS/Menu';
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
    <PlanetSectionsMenu
      planetKey={planetKey}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-submenu"
    />
  </nav>
);

export default Header;
