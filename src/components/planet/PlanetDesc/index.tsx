import React from 'react';

type PlanetDescProps = {
  planetDesc: string;
};

const PlanetDesc = ({ planetDesc }: PlanetDescProps) => (
  <div className="planet-desc">{planetDesc}</div>
);

export default PlanetDesc;
