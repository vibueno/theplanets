import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import Planet from 'VIEWS/Planet';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

const MainPage = () => {
  const [currentPlanet, setCurrentPlanet] = useState(PLANETS.MERCURY.KEY);
  const [currentSection, setCurrentSection] = useState(SECTIONS.OVERVIEW.KEY);

  const sectionMenuClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ): void => {
    setCurrentSection(ref.current?.id as string);
  };

  const menuClickHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ): void => {
    setCurrentPlanet(ref.current?.id as string);
    setCurrentSection(SECTIONS.OVERVIEW.KEY);
  };

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
          planetKey={currentPlanet}
        />
        {currentPlanet && currentSection && (
          <main>
            <Planet
              planetKey={currentPlanet}
              sectionKey={currentSection}
              sectionMenuClickHandler={sectionMenuClickHandler}
            />
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
