import React from 'react';

import { getPlanetData } from 'SRC/utils';

import { ICON_SOURCE, PLANETS, SECTIONS } from 'SRC/constants';

import './index.scss';

type PlanetDescProps = {
  currentPlanetName: string;
  currentPlanetDesc: string;
  currentPlanetDescSource: string;
};

const PlanetDesc = ({
  currentPlanetName,
  currentPlanetDesc,
  currentPlanetDescSource
}: PlanetDescProps) => {
  return (
    <>
      <h1>{currentPlanetName}</h1>

      <div className="planet-desc">{currentPlanetDesc}</div>

      <p className="source-container">
        <span className="source-title">Source:</span>
        <a href={currentPlanetDescSource}>
          Wikipedia
          <img
            className="source-icon"
            src={require(`ASSETS/img/${ICON_SOURCE}`)}
          />
        </a>
      </p>
    </>
  );
};

export default PlanetDesc;
