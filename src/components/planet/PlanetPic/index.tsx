import React from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

import './index.scss';

type PlanetPicProps = {
  planetKey: string;
  section: string;
};

const PlanetPic = ({ planetKey, section }: PlanetPicProps) => {
  const planetName = PLANETS[planetKey].NAME;
  return (
    <>
      <img
        className={`planet-pic-${planetName}`}
        src={require(`ASSETS/img/${PLANETS[planetKey].PICS[section]}`)}
        alt={planetName}
      />
      {section === SECTIONS.GEOLOGY.KEY ? (
        <img
          className="planet-pic-geology"
          src={PLANETS[planetKey].PICS.GEOLOGY_ZOOM}
          alt={planetName}
        />
      ) : null}
    </>
  );
};

export default PlanetPic;
