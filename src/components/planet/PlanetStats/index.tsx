import React, { useEffect, useState } from 'react';
import PlanetStatsItem from './PlanetStatsItem';

import { getPlanetData, getPlanetDataApi } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetStatsProps = {
  currentPlanetKey: string;
};

type PlanetData = {
  [key: string]: string | {};
};

const PlanetStats = ({ currentPlanetKey }: PlanetStatsProps) => {
  const [planetStatsItems, setPlanetStatsItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    getPlanetDataApi(PLANETS[currentPlanetKey].NAME).then(response => {
      const planetStats: JSX.Element[] = [];

      STATS_KEYS.forEach((statsKey: string) => {
        planetStats.push(
          <PlanetStatsItem
            key={statsKey}
            title={STATS[statsKey].TITLE}
            content={response.data![statsKey.toLowerCase()] as string}
          />
        );
      });
      setPlanetStatsItems([...planetStats]);
    });
  }, [currentPlanetKey]);

  return planetStatsItems.length > 0 ? (
    <div className={styles.planetStats}>
      <div className={styles.planetStatsColumn}>
        {planetStatsItems.slice(0, 2)}
      </div>
      <div className={styles.planetStatsColumn}>
        {planetStatsItems.slice(2, 4)}
      </div>
    </div>
  ) : null;
};

export default PlanetStats;
