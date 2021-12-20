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
        <PlanetPic
          planetKey={planetKey}
          sectionKey={sectionKey}
          className={`planet-pic-${planetName}`}
          classNameGeology={'planet-pic-geology'}
        />
      </div>

      <div className="planet-desc-container">
        <PlanetDesc
          planetName={planetName}
          planetDesc={getPlanetData(planetName, sectionName).content}
          planetDescSource={getPlanetData(planetName, sectionName).source}
        />
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
