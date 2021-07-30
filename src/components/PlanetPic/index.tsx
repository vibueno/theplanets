import React from 'react';

import { planetNames } from '../../constants';

import './index.scss';

import geologyMercury from '../../assets/img/geology-mercury.png';
import geologyVenus from '../../assets/img/geology-venus.png';
import geologyEarth from '../../assets/img/geology-earth.png';
import geologyMars from '../../assets/img/geology-mars.png';
import geologyJupiter from '../../assets/img/geology-jupiter.png';
import geologySaturn from '../../assets/img/geology-saturn.png';
import geologyUranus from '../../assets/img/geology-uranus.png';
import geologyNeptune from '../../assets/img/geology-neptune.png';

const getSectionSuffix = (section: string) => {
  if (section === 'structure') return '-internal';
  else return '';
};

const getGeologyPic = (planetName: string) => {
  switch (planetName) {
    case planetNames.mercury:
      return geologyMercury;
      break;
    case planetNames.venus:
      return geologyVenus;
      break;
    case planetNames.earth:
      return geologyEarth;
      break;
    case planetNames.mars:
      return geologyMars;
      break;
    case planetNames.jupiter:
      return geologyJupiter;
      break;
    case planetNames.saturn:
      return geologySaturn;
      break;
    case planetNames.uranus:
      return geologyUranus;
      break;
    case planetNames.neptune:
      return geologyNeptune;
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
