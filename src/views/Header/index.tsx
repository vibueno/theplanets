import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsMenuOpen } from 'REDUX/appStateSlice';
import { selectors } from 'REDUX/appStateSlice';

import PlanetSections from 'COMPONENTS/planet/PlanetSections';
import Menu from 'COMPONENTS/Menu';
import { APP_TITLE } from '../../constants';

import styles from './index.module.scss';

type HeaderProps = {
  menuClickHandler: (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ) => void;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Header = ({ menuClickHandler, sectionMenuClickHandler }: HeaderProps) => {
  const dispatch = useDispatch();

  const currentPlanetKey = useSelector(selectors.getCurrentPlanetKey);
  const currentSectionKey = useSelector(selectors.getCurrentSectionKey);
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  const isTransitionDone = useSelector(selectors.getIsTransitionDone);

  const hamburgerClickHandler = () => {
    if (isTransitionDone) {
      dispatch(setIsMenuOpen(!isMenuOpen));
    }
  };

  return (
    <nav data-menu-open={isMenuOpen} data-is-transition-done={isTransitionDone}>
      <div className={styles.appTitle}>{APP_TITLE}</div>
      <img
        src={require(`ASSETS/img/icon-hamburger.svg`)}
        className={styles.hamburger}
        onClick={hamburgerClickHandler}
      />

      <Menu
        isInsideHeader
        currentPlanetKey={currentPlanetKey}
        clickHandler={menuClickHandler}
      />

      <PlanetSections
        currentPlanetKey={currentPlanetKey}
        currentSectionKey={currentSectionKey}
        clickHandler={sectionMenuClickHandler}
        isMenu={true}
      />
    </nav>
  );
};

export default Header;
