import React from 'react';
import StatsItem from 'COMPONENTS/StatsItem';

import { getPlanetData } from 'SRC/utils';
import { PLANETS, STATS, STATS_KEYS } from 'SRC/constants';

import './index.scss';

type StatsProps = {
  planetKey: string;
};

const Stats = ({ planetKey }: StatsProps) => (
  <>
    <div className="planet-stats">
      {STATS_KEYS.map(statsKey => (
        <StatsItem
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

export default Stats;
