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
  hamburgerClickHandler: (e: React.MouseEvent<HTMLImageElement>) => void;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  isMenuOpen: boolean;
  isTransitionDone: boolean;
};

const Header = ({
  currentPlanetKey,
  currentSectionKey,
  hamburgerClickHandler,
  menuClickHandler,
  sectionMenuClickHandler,
  isMenuOpen,
  isTransitionDone
}: HeaderProps) => {
  return (
    <nav data-menu-open={isMenuOpen} data-is-transition-done={isTransitionDone}>
      <div className="app-title">{APP_TITLE}</div>
      <img
        src={require(`ASSETS/img/icon-hamburger.svg`)}
        className="hamburger"
        onClick={hamburgerClickHandler}
      />

      <>
        <Menu
          isMenuOpen={isMenuOpen}
          className="inside-header"
          clickHandler={menuClickHandler}
        />

        <PlanetSections
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          clickHandler={sectionMenuClickHandler}
          className="planet-sections-menu"
          isMenuOpen={isMenuOpen}
          isTransitionDone={isTransitionDone}
        />
      </>
    </nav>
  );
};

export default Header;
