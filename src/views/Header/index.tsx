import React, { MouseEventHandler } from 'react';

import PlanetSectionsMenu from 'COMPONENTS/planet/PlanetSectionsMenu';
import Menu from 'COMPONENTS/Menu';
import { APP_TITLE, PLANETS } from 'SRC/constants';

import './index.scss';

type HeaderProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
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
  currentPlanetKey,
  currentSectionKey,
  menuClickHandler,
  sectionMenuClickHandler
}: HeaderProps) => (
  <nav>
    <div className="app-title">{APP_TITLE}</div>
    <Menu clickHandler={menuClickHandler} />
    <PlanetSectionsMenu
      currentPlanetKey={currentPlanetKey}
      currentSectionKey={currentSectionKey}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-menu"
    />
  </nav>
);

export default Header;
