import React from 'react';
import PlanetDataItem from '../../components/PlanetDataItem';

import { getPlanetData } from '../../utils';
import { planetKeyData, planetKeyDataKeys } from '../../constants';

import './index.scss';

type PlanetDataProps = {
  planetName: string;
};

const PlanetData = ({ planetName }: PlanetDataProps) => (
  <>
    <div className="planet-data">
      {planetKeyDataKeys.map(planetKeyDataKey => (
        <PlanetDataItem
          cssClass="planet-data-item"
          title={planetKeyData[planetKeyDataKey].title}
          titleCssClass="planet-data-item-title"
          content={getPlanetData(
            planetName,
            planetKeyData[planetKeyDataKey].id
          )}
        />
      ))}
    </div>
  </>
);

export default PlanetData;
