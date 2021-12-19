import React from 'react';
import PlanetStatsItem from 'COMPONENTS/PlanetStatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANET_STATS, PLANET_STATS_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetStatsProps = {
  planetName: string;
};

const PlanetStats = ({ planetName }: PlanetStatsProps) => (
  <>
    <div className="planet-stats">
      {PLANET_STATS_KEYS.map(planetStatsKey => (
        <PlanetStatsItem
          key={planetStatsKey}
          cssClass="planet-stats-item"
          title={PLANET_STATS[planetStatsKey].TITLE}
          titleCssClass="planet-stats-item-title"
          content={getPlanetData(planetName, PLANET_STATS[planetStatsKey].NAME)}
        />
      ))}
    </div>
  </>
);

export default PlanetStats;
