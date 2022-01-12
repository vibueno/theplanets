import React, { useState, useEffect, MouseEvent } from 'react';

import Header from '../Header';
import Planet from 'VIEWS/Planet';
import Menu from 'COMPONENTS/Menu';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

const MainPage = () => {
  const [currentPlanetKey, setCurrentPlanetKey] = useState(PLANETS.MERCURY.KEY);
  const [currentSectionKey, setCurrentSectionKey] = useState(
    SECTIONS.OVERVIEW.KEY
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitionDone, setIsTransitionDone] = useState(true);
  const [scrollPosBeforeMenu, setScrollPosBeforeMenu] = useState(0);

  const sectionMenuClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ): void => {
    setCurrentSectionKey(ref.current?.id as string);
  };

  const menuClickHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ): void => {
    setCurrentPlanetKey(ref.current?.id as string);
    setCurrentSectionKey(SECTIONS.OVERVIEW.KEY);
    setIsMenuOpen(false);
  };

  const hamburgerClickHandler = () => {
    if (isTransitionDone) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const onResizeHandler = () => {
    if (isTransitionDone) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener('resize', onResizeHandler);

  useEffect(() => {
    let firstMenuItem: HTMLLIElement = document.querySelector('#MERCURY')!;
    let lastMenuItem: HTMLLIElement = document.querySelector('#NEPTUNE')!;

    if (firstMenuItem) {
      firstMenuItem.ontransitionstart = () => {
        setIsTransitionDone(false);
      };

      firstMenuItem.ontransitioncancel = () => {
        setIsTransitionDone(true);
      };
    }
    if (lastMenuItem) {
      lastMenuItem.ontransitionend = () => {
        setIsTransitionDone(true);
      };
      lastMenuItem.ontransitioncancel = () => {
        setIsTransitionDone(true);
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
      <Menu
        isMenuOpen={isMenuOpen}
        className="outside-header"
        clickHandler={menuClickHandler}
      />
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          hamburgerClickHandler={hamburgerClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          isMenuOpen={isMenuOpen}
          isTransitionDone={isTransitionDone}
        />
        {currentPlanetKey && currentSectionKey && (
          <main
            data-menu-open={isMenuOpen}
            data-is-transition-done={isTransitionDone}
          >
            <Planet
              currentPlanetKey={currentPlanetKey}
              currentSectionKey={currentSectionKey}
              sectionMenuClickHandler={sectionMenuClickHandler}
              isMenuOpen={isMenuOpen}
              isTransitionDone={isTransitionDone}
            />
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
