import React from 'react';

import { PLANET_NAMES, PLANET_PICS } from '../../constants';

import './index.scss';

const getSectionSuffix = (section: string) => {
  if (section === 'structure') return '-internal';
  else return '';
};

const getGeologyPic = (planetName: string) => {
  switch (planetName) {
    case PLANET_NAMES.MERCURY:
      return PLANET_PICS.MERCURY.GEOLOGY;
      break;
    case PLANET_NAMES.VENUS:
      return PLANET_PICS.VENUS.GEOLOGY;
      break;
    case PLANET_NAMES.EARTH:
      return PLANET_PICS.EARTH.GEOLOGY;
      break;
    case PLANET_NAMES.MARS:
      return PLANET_PICS.MARS.GEOLOGY;
      break;
    case PLANET_NAMES.JUPITER:
      return PLANET_PICS.JUPITER.GEOLOGY;
      break;
    case PLANET_NAMES.SATURN:
      return PLANET_PICS.MARS.GEOLOGY;
      break;
    case PLANET_NAMES.URANUS:
      return PLANET_PICS.URANUS.GEOLOGY;
      break;
    case PLANET_NAMES.NEPTUNE:
      return PLANET_PICS.NEPTUNE.GEOLOGY;
      break;
    default:
      break;
  }
};

type PlanetPicProps = {
  planetName: string;
  section: string;
};

const PlanetPic = ({ planetName, section }: PlanetPicProps) => (
  <>
    <img
      className={`planet-pic-${planetName}`}
      src={require(`../../assets/img/planet-${planetName}${getSectionSuffix(
        section
      )}.svg`)}
      alt={planetName}
    />
    {section === 'geology' ? (
      <img
        className="planet-pic-geology"
        src={getGeologyPic(planetName)}
        alt={planetName}
      />
    ) : null}
  </>
);

export default PlanetPic;
