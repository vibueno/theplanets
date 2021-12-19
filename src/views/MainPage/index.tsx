import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import PlanetPic from 'COMPONENTS/PlanetPic';
import PlanetDesc from 'COMPONENTS/PlanetDesc';
import PlanetSections from '../PlanetSections';
import PlanetStats from '../PlanetStats';

import { SECTIONS, PLANET_NAMES } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

const MainPage = () => {
  const [currentPlanet, setCurrentPlanet] = useState(PLANET_NAMES.MERCURY);
  const [currentSection, setCurrentSection] = useState(SECTIONS.OVERVIEW.NAME);

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
    setCurrentSection(SECTIONS.OVERVIEW.NAME);
  };

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          sectionMenuClickHandler={sectionMenuClickHandler}
          planetName={currentPlanet}
        />
        {currentPlanet && currentSection && (
          <main>
            <div className="planet-pic-container">
              <PlanetPic planetName={currentPlanet} section={currentSection} />
            </div>

            <div className="planet-desc-container">
              <h1>{currentPlanet}</h1>
              <PlanetDesc
                planetDesc={
                  getPlanetData(currentPlanet, currentSection).content
                }
              />
              <p className="source-container">
                <span className="source-title">Source:</span>
                <a href={getPlanetData(currentPlanet, currentSection).source}>
                  Wikipedia
                  <img
                    className="source-icon"
                    src={require('ASSETS/img/icon-source.svg')}
                  />
                </a>
              </p>
            </div>
            <PlanetSections
              planetName={currentPlanet}
              clickHandler={sectionMenuClickHandler}
              className="planet-sections-button-panel"
            />
            <div className="planet-stats-container">
              <PlanetStats planetName={currentPlanet} />
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
