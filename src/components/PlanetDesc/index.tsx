import React from 'react';

type PlanetDescProps = {
  planetDesc: string;
};

const PlanetDesc = ({ planetDesc }: PlanetDescProps) => (
  <>
    <div>{planetDesc}</div>
  </>
);

export default PlanetDesc;
