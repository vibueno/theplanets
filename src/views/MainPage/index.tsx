import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import PlanetPic from 'COMPONENTS/PlanetPic';
import PlanetDesc from 'COMPONENTS/PlanetDesc';
import Sections from '../Sections';
import Stats from '../Stats';

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
            <div className="planet-pic-container">
              <PlanetPic planetKey={currentPlanet} section={currentSection} />
            </div>

            <div className="planet-desc-container">
              <h1>{currentPlanet}</h1>
              <PlanetDesc
                planetDesc={
                  getPlanetData(
                    PLANETS[currentPlanet].NAME,
                    SECTIONS[currentSection].NAME
                  ).content
                }
              />
              <p className="source-container">
                <span className="source-title">Source:</span>
                <a
                  href={
                    getPlanetData(
                      PLANETS[currentPlanet].NAME,
                      SECTIONS[currentSection].NAME
                    ).source
                  }
                >
                  Wikipedia
                  <img
                    className="source-icon"
                    src={require('ASSETS/img/icon-source.svg')}
                  />
                </a>
              </p>
            </div>
            <Sections
              planetKey={currentPlanet}
              clickHandler={sectionMenuClickHandler}
              className="planet-sections-button-panel"
            />
            <div className="planet-stats-container">
              <Stats planetKey={currentPlanet} />
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
