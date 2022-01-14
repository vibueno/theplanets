import React, { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'REDUX/appStateSlice';

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
};

const Header = ({
  currentPlanetKey,
  currentSectionKey,
  hamburgerClickHandler,
  menuClickHandler,
  sectionMenuClickHandler
}: HeaderProps) => {
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  const isTransitionDone = useSelector(selectors.getIsTransitionDone);

  return (
    <nav data-menu-open={isMenuOpen} data-is-transition-done={isTransitionDone}>
      <div className="app-title">{APP_TITLE}</div>
      <img
        src={require(`ASSETS/img/icon-hamburger.svg`)}
        className="hamburger"
        onClick={hamburgerClickHandler}
      />

      <>
        <Menu className="inside-header" clickHandler={menuClickHandler} />

        <PlanetSections
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          clickHandler={sectionMenuClickHandler}
          className="planet-sections-menu"
        />
      </>
    </nav>
  );
};

export default Header;
