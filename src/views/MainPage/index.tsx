import React, { useState, useEffect, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentPlanetKey,
  setCurrentSectionKey,
  setIsMenuOpen,
  setIsTransitionDone
} from 'REDUX/appStateSlice';
import { selectors } from 'REDUX/appStateSlice';

import Header from '../Header';
import Planet from 'VIEWS/Planet';
import Menu from 'COMPONENTS/Menu';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

const MainPage = () => {
  const currentPlanetKey = useSelector(selectors.getCurrentPlanetKey);
  const currentSectionKey = useSelector(selectors.getCurrentSectionKey);
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  const isTransitionDone = useSelector(selectors.getIsTransitionDone);

  const [scrollPosBeforeMenu, setScrollPosBeforeMenu] = useState(0);

  const dispatch = useDispatch();

  const sectionMenuClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ): void => {
    dispatch(setCurrentSectionKey(ref.current?.id as string));
  };

  const menuClickHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ): void => {
    dispatch(setCurrentPlanetKey(ref.current?.id as string));
    dispatch(setCurrentSectionKey(SECTIONS.OVERVIEW.KEY));
    dispatch(setIsMenuOpen(false));
  };

  const hamburgerClickHandler = () => {
    if (isTransitionDone) {
      dispatch(setIsMenuOpen(!isMenuOpen));
    }
  };

  const onResizeHandler = () => {
    if (isTransitionDone) {
      dispatch(setIsMenuOpen(false));
    }
  };

  window.addEventListener('resize', onResizeHandler);

  useEffect(() => {
    let firstMenuItem: HTMLLIElement = document.querySelector('#MERCURY')!;
    let lastMenuItem: HTMLLIElement = document.querySelector('#NEPTUNE')!;

    if (firstMenuItem) {
      firstMenuItem.ontransitionstart = () => {
        dispatch(setIsTransitionDone(false));
      };

      firstMenuItem.ontransitioncancel = () => {
        dispatch(setIsTransitionDone(true));
      };
    }
    if (lastMenuItem) {
      lastMenuItem.ontransitionend = () => {
        dispatch(setIsTransitionDone(true));
      };
      lastMenuItem.ontransitioncancel = () => {
        dispatch(setIsTransitionDone(true));
      };
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosBeforeMenu(window.pageYOffset);
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      window.scrollTo(0, scrollPosBeforeMenu);
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap"
      />
      <Menu className="outside-header" clickHandler={menuClickHandler} />
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          hamburgerClickHandler={hamburgerClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
        />
        {currentPlanetKey && currentSectionKey && (
          <main
            data-menu-open={isMenuOpen}
            data-is-transition-done={isTransitionDone}
          >
            <Planet sectionMenuClickHandler={sectionMenuClickHandler} />
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
