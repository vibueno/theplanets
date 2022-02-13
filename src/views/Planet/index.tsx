import React, { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'REDUX/appStateSlice';

import PlanetPic from 'COMPONENTS/planet/PlanetPic';
import PlanetDesc from 'COMPONENTS/planet/PlanetDesc';
import PlanetStats from 'COMPONENTS/planet/PlanetStats';
import PlanetSections from 'COMPONENTS/planet/PlanetSections';

import { SECTIONS, PLANETS } from 'SRC/constants';

import { getPlanetData } from 'SRC/utils';

import styles from './index.module.scss';

type PlanetProps = {
  sectionMenuClickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Planet = ({ sectionMenuClickHandler }: PlanetProps) => {
  const currentPlanetKey = useSelector(selectors.getCurrentPlanetKey);
  const currentSectionKey = useSelector(selectors.getCurrentSectionKey);
  const currentPlanetName = PLANETS[currentPlanetKey].NAME;
  const currentSectionName = SECTIONS[currentSectionKey].NAME;

  return (
    <div className={styles.planetContainer}>
      <div className={styles.planetPicSectionContainer}>
        <PlanetPic
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
        />
      </div>
      <div className={styles.planetDescSectionsContainer}>
        <div className={styles.planetDescContainer}>
          <PlanetDesc
            currentPlanetName={currentPlanetName}
            currentPlanetDesc={
              getPlanetData(currentPlanetName, currentSectionName).content
            }
            currentPlanetDescSource={
              getPlanetData(currentPlanetName, currentSectionName).source
            }
          />
        </div>
        <PlanetSections
          currentPlanetKey={currentPlanetKey}
          currentSectionKey={currentSectionKey}
          clickHandler={sectionMenuClickHandler}
          isMenu={false}
        />
      </div>
      <div className={styles.planetStatsContainer}>
        <PlanetStats currentPlanetKey={currentPlanetKey} />
      </div>
    </div>
  );
};

export default Planet;
