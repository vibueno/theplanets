import React from 'react';
import PlanetStatsItem from './PlanetStatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetStatsProps = {
  planetKey: string;
};

const PlanetStats = ({ planetKey }: PlanetStatsProps) => (
  <>
    <div className="planet-stats">
      {STATS_KEYS.map(statsKey => (
        <PlanetStatsItem
          key={statsKey}
          cssClass="planet-stats-item"
          title={STATS[statsKey].TITLE}
          titleCssClass="planet-stats-item-title"
          content={getPlanetData(PLANETS[planetKey].NAME, STATS[statsKey].NAME)}
        />
      ))}
    </div>
  </>
);

export default PlanetStats;
