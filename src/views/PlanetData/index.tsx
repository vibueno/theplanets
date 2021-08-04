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
        title={planetKeyData.rotation.title}
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.rotation.id)}
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title={planetKeyData.revolution.title}
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.revolution.id)}
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title={planetKeyData.radius.title}
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.radius.id)}
      />

      <PlanetDataItem
        cssClass="planet-data-item-last"
        title={planetKeyData.temperature.title}
        titleCssClass="planet-data-item-title"
        content={getPlanetData(planetName, planetKeyData.temperature.id)}
      />
    </div>
  </>
);

export default PlanetData;
