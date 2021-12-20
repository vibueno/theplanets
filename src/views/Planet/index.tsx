import React, { useState, MouseEvent } from 'react';

import PlanetPic from 'COMPONENTS/planet/PlanetPic';
import PlanetDesc from 'COMPONENTS/planet/PlanetDesc';
import PlanetStats from 'COMPONENTS/planet/PlanetStats';
import PlanetSectionsMenu from 'COMPONENTS/planet/PlanetSectionsMenu';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

type PlanetProps = {
  planetKey: string;
  sectionKey: string;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Planet = ({
  planetKey,
  sectionKey,
  sectionMenuClickHandler
}: PlanetProps) => {
  const planetName = PLANETS[planetKey].NAME;
  const sectionName = SECTIONS[sectionKey].NAME;

  return (
    <>
      <div className="planet-pic-container">
        <PlanetPic planetKey={planetKey} section={sectionKey} />
      </div>

      <div className="planet-desc-container">
        <h1>{planetName}</h1>
        <PlanetDesc
          planetDesc={getPlanetData(planetName, sectionName).content}
        />
        <p className="source-container">
          <span className="source-title">Source:</span>
          <a href={getPlanetData(planetName, sectionName).source}>
            Wikipedia
            <img
              className="source-icon"
              src={require('ASSETS/img/icon-source.svg')}
            />
          </a>
        </p>
      </div>
      <PlanetSectionsMenu
        planetKey={planetKey}
        clickHandler={sectionMenuClickHandler}
        className="planet-sections-button-panel"
      />
      <div className="planet-stats-container">
        <PlanetStats planetKey={planetKey} />
      </div>
    </>
  );
};

export default Planet;
