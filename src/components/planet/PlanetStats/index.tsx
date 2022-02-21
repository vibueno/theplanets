import React from 'react';
import PlanetStatsItem from './PlanetStatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetStatsProps = {
  currentPlanetKey: string;
};

const PlanetStats = ({ currentPlanetKey }: PlanetStatsProps) => {
  const planetStatsItems = [];

  for (let index = 0; index < STATS_KEYS.length; index++) {
    planetStatsItems.push(
      <PlanetStatsItem
        key={STATS_KEYS[index]}
        title={STATS[STATS_KEYS[index]].TITLE}
        content={getPlanetData(
          PLANETS[currentPlanetKey].NAME,
          STATS[STATS_KEYS[index]].NAME
        )}
      />
    );
  }

  return (
    <div className={styles.planetStats}>
      <div className={styles.planetStatsColumn}>
        {planetStatsItems.slice(0, 2)}
      </div>
      <div className={styles.planetStatsColumn}>
        {planetStatsItems.slice(2, 4)}
      </div>
    </div>
  );
};

export default PlanetStats;
