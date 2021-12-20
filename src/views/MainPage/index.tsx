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

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
          planetKey={currentPlanetKey}
        />
        {currentPlanetKey && currentSectionKey && (
          <main>
            <Planet
              planetKey={currentPlanetKey}
              sectionKey={currentSectionKey}
              sectionMenuClickHandler={sectionMenuClickHandler}
            />
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
