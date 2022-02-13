import React, { useState, useLayoutEffect } from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetPicProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
};

const PlanetPic = ({ currentPlanetKey, currentSectionKey }: PlanetPicProps) => {
  const [planetName, setPlanetName] = useState<string>(
    PLANETS[currentPlanetKey].NAME
  );

  useLayoutEffect(() => {
    setPlanetName(PLANETS[currentPlanetKey].NAME);
  }, [currentPlanetKey]);

  return (
    <div className={styles[`planetPicContainer-${planetName}`]}>
      <img
        key={`planetPic-${currentPlanetKey}`}
        className={styles.planetPic}
        src={require(`ASSETS/img/${PLANETS[currentPlanetKey].PICS[currentSectionKey]}`)}
        alt={planetName}
      />

      <img
        className={`${styles.planetPicGeology} ${
          currentSectionKey === SECTIONS.GEOLOGY.KEY ? styles.show : styles.hide
        }`}
        src={PLANETS[currentPlanetKey].PICS.GEOLOGY_ZOOM}
        alt={planetName}
      />
    </div>
  );
};

export default PlanetPic;
