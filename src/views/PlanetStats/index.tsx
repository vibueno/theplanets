import React from 'react';
import PlanetStatsItem from '../../components/PlanetStatsItem';

import { getPlanetData } from '../../utils';
import { planetStats, planetStatsKeys } from '../../constants';

import './index.scss';

type PlanetStatsProps = {
  planetName: string;
};

const PlanetStats = ({ planetName }: PlanetStatsProps) => (
  <>
    <div className="planet-data">
      {planetStatsKeys.map(planetStatsKey => (
        <PlanetStatsItem
          cssClass="planet-data-item"
          title={planetStats[planetStatsKey].title}
          titleCssClass="planet-data-item-title"
          content={getPlanetData(planetName, planetStats[planetStatsKey].id)}
        />
      ))}
    </div>
  </>
);

export default PlanetStats;
