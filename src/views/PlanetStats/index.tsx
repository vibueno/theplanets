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
    <div className="planet-stats">
      {planetStatsKeys.map(planetStatsKey => (
        <PlanetStatsItem
          key={planetStatsKey}
          cssClass="planet-stats-item"
          title={planetStats[planetStatsKey].title}
          titleCssClass="planet-stats-item-title"
          content={getPlanetData(planetName, planetStats[planetStatsKey].id)}
        />
      ))}
    </div>
  </>
);

export default PlanetStats;
