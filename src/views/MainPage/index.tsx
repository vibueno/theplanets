import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import PlanetPic from 'components/PlanetPic';
import PlanetDesc from 'components/PlanetDesc';
import PlanetSections from '../PlanetSections';
import PlanetStats from '../PlanetStats';

import { sections, planetNames } from 'src/constants';

import { getPlanetData } from 'src/utils';

import './index.scss';

const MainPage = () => {
  const [planet, setPlanet] = useState(planetNames.mercury);
  const [section, setSection] = useState(sections.overview.id);

  const sectionPanelClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ): void => {
    setSection(ref.current?.id as string);
  };

  const menuClickHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    ref: React.RefObject<HTMLLIElement>
  ): void => {
    setPlanet(ref.current?.id as string);
    setSection(sections.overview.id);
  };

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuClickHandler}
          sectionPanelClickHandler={sectionPanelClickHandler}
          planet={planet}
        />
        {planet && section && (
          <main>
            <div className="planet-pic-container">
              <PlanetPic planetName={planet} section={section} />
            </div>

            <div className="planet-desc-container">
              <h1>{planet}</h1>
              <PlanetDesc planetDesc={getPlanetData(planet, section).content} />
              <p className="source-container">
                <span className="source-title">Source:</span>
                <a href={getPlanetData(planet, section).source}>
                  Wikipedia
                  <img
                    className="source-icon"
                    src={require('../../assets/img/icon-source.svg')}
                  />
                </a>
              </p>
            </div>
            <PlanetSections
              planetName={planet}
              clickHandler={sectionPanelClickHandler}
              className="planet-sections-button-panel"
            />
            <div className="planet-stats-container">
              <PlanetStats planetName={planet} />
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default MainPage;
