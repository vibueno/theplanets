import React from 'react';
import PlanetDataItem from '../../components/PlanetDataItem';

import { getPlanetData } from '../../utils';
import { planetKeyData } from '../../constants';

import './index.scss';

type PlanetDataProps = {
  planetName: string;
};

const PlanetData = ({ planetName }: PlanetDataProps) => (
  <>
    <div className="planet-data">
      <PlanetDataItem
        cssClass="planet-data-item"
        title="rotation time"
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.rotation)}
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title="revolution time"
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.revolution)}
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title="radius"
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.radius)}
      />

      <PlanetDataItem
        cssClass="planet-data-item-last"
        title="average temp."
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.temperature)}
      />
    </div>
  </>
);

export default PlanetData;
