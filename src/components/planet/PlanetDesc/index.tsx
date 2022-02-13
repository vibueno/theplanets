import React from 'react';

import { ICON_SOURCE, PLANETS, SECTIONS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetDescProps = {
  currentPlanetName: string;
  currentPlanetDesc: string;
  currentPlanetDescSource: string;
};

const PlanetDesc = ({
  currentPlanetName,
  currentPlanetDesc,
  currentPlanetDescSource
}: PlanetDescProps) => {
  return (
    <>
      <h1>{currentPlanetName}</h1>

      <div className={styles.planetDesc}>{currentPlanetDesc}</div>

      <p className={styles.sourceContainer}>
        <span className={styles.sourceTitle}>Source:</span>
        <a href={currentPlanetDescSource}>
          Wikipedia
          <img
            className={styles.sourceIcon}
            src={require(`ASSETS/img/${ICON_SOURCE}`)}
          />
        </a>
      </p>
    </>
  );
};

export default PlanetDesc;
