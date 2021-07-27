import React from 'react';

import './index.scss';

type PlanetPicProps = {
  planetName: string;
};

const PlanetPic = ({ planetName }: PlanetPicProps) => (
  <>
    <img
      className="planet-pic"
      src={require(`../../assets/img/planet-${planetName}.svg`)}
      alt={planetName}
    />
  </>
);

export default PlanetPic;
