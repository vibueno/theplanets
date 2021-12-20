import React from 'react';

import { getPlanetData } from 'SRC/utils';

import { ICON_SOURCE, PLANETS, SECTIONS } from 'SRC/constants';

type PlanetDescProps = {
  planetName: string;
  planetDesc: string;
  planetDescSource: string;
};

const PlanetDesc = ({
  planetName,
  planetDesc,
  planetDescSource
}: PlanetDescProps) => {
  return (
    <>
      <h1>{planetName}</h1>

      <div className="planet-desc">{planetDesc}</div>

      <p className="source-container">
        <span className="source-title">Source:</span>
        <a href={planetDescSource}>
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
