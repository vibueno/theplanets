import React from 'react';

import './index.scss';

type PlanetDescProps = {
  planetDesc: string;
};

const PlanetDesc = ({ planetDesc }: PlanetDescProps) => (
  <>
    <div>{planetDesc}</div>
  </>
);

export default PlanetDesc;
