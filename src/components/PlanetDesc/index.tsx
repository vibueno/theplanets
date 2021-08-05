import React from 'react';

import './index.scss';

type PlanetDescProps = {
  planetDesc: string;
};

const PlanetDesc = ({ planetDesc }: PlanetDescProps) => (
  <div className="planet-desc">{planetDesc}</div>
);

export default PlanetDesc;
