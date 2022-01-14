import React, { useState, MouseEvent } from 'react';

import PlanetPic from 'COMPONENTS/planet/PlanetPic';
import PlanetDesc from 'COMPONENTS/planet/PlanetDesc';
import PlanetStats from 'COMPONENTS/planet/PlanetStats';
import PlanetSections from 'COMPONENTS/planet/PlanetSections';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import './index.scss';

type PlanetProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Planet = ({
  currentPlanetKey,
  currentSectionKey,
  sectionMenuClickHandler
}: PlanetProps) => {
  const currentPlanetName = PLANETS[currentPlanetKey].NAME;
  const currentSectionName = SECTIONS[currentSectionKey].NAME;

  return (
    <div className="planet-container">
      <div className="planet-pic-container">
        <PlanetPic
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          className={`planet-pic-${currentPlanetName}`}
          classNameGeology={'planet-pic-geology'}
        />
      </div>
      <div className="planet-desc-sections-container">
        <div className="planet-desc-container">
          <PlanetDesc
            currentPlanetName={currentPlanetName}
            currentPlanetDesc={
              getPlanetData(currentPlanetName, currentSectionName).content
            }
            currentPlanetDescSource={
              getPlanetData(currentPlanetName, currentSectionName).source
            }
          />
        </div>
        <PlanetSections
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          clickHandler={sectionMenuClickHandler}
          className="planet-sections-btn-panel"
        />
      </div>
      <div className="planet-stats-container">
        <PlanetStats currentPlanetKey={currentPlanetKey} />
      </div>
    </div>
  );
};

export default Planet;
