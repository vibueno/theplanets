import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import Planet from 'VIEWS/Planet';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

const MainPage = () => {
  const [currentPlanetKey, setCurrentPlanetKey] = useState(PLANETS.MERCURY.KEY);
  const [currentSectionKey, setCurrentSectionKey] = useState(
    SECTIONS.OVERVIEW.KEY
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  };

  const hamburgerClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onResizeHandler = () => {
    setIsMenuOpen(false);
  };

  window.addEventListener('resize', onResizeHandler);

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          hamburgerClickHandler={hamburgerClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          isMenuOpen={isMenuOpen}
        />
        {currentPlanetKey && currentSectionKey && (
          <main>
            <Planet
              currentPlanetKey={currentPlanetKey}
              currentSectionKey={currentSectionKey}
              sectionMenuClickHandler={sectionMenuClickHandler}
              isMenuOpen={isMenuOpen}
            />
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
