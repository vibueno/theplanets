import React, { MouseEventHandler } from 'react';

import PlanetSections from 'COMPONENTS/planet/PlanetSections';
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
    <div className="app-title">
      {APP_TITLE}
      {/*
        <img
          src={require(`ASSETS/img/icon-hamburger.svg`)}
          className="hamburger"
        />
      */}
    </div>
    <Menu clickHandler={menuClickHandler} />
    <PlanetSections
      currentPlanetKey={currentPlanetKey}
      currentSectionKey={currentSectionKey}
      clickHandler={sectionMenuClickHandler}
      className="planet-sections-menu"
    />
  </nav>
);

export default Header;
