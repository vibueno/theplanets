import React from 'react';

import './index.scss';

type PlanetPicProps = {
  planetName: string;
  section: string;
};

const getSectionSuffix = (section: string) => {
  if (section === 'structure') return '-internal';
  else return '';
};

const PlanetPic = ({ planetName, section }: PlanetPicProps) => (
  <>
    <img
      className="planet-pic"
      src={require(`../../assets/img/planet-${planetName}${getSectionSuffix(
        section
      )}.svg`)}
      alt={planetName}
    />
  </>
);

export default PlanetPic;
