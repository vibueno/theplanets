import React from 'react';
import PlanetStatsItem from './PlanetStatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetStatsProps = {
  currentPlanetKey: string;
};

const PlanetStats = ({ currentPlanetKey }: PlanetStatsProps) => (
  <>
    <div className="planet-stats">
      {STATS_KEYS.map(statsKey => (
        <PlanetStatsItem
          key={statsKey}
          title={STATS[statsKey].TITLE}
          content={getPlanetData(
            PLANETS[currentPlanetKey].NAME,
            STATS[statsKey].NAME
          )}
        />
      ))}
    </div>
  </>
);

export default PlanetStats;
