import React from 'react';
import PlanetStatsItem from './PlanetStatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

type PlanetStatsProps = {
  currentPlanetKey: string;
};

const PlanetStats = ({ currentPlanetKey }: PlanetStatsProps) => (
  <>
    <div className="planet-stats">
      {STATS_KEYS.map(statsKey => (
        <PlanetStatsItem
          key={statsKey}
          cssClass="planet-stats-item"
          title={STATS[statsKey].TITLE}
          titleCssClass="planet-stats-item-title"
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
