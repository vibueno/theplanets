import React, { useState, useLayoutEffect } from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

import './index.scss';

type PlanetPicProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
  className: string;
  classNameGeology: string;
};

const PlanetPic = ({
  currentPlanetKey,
  currentSectionKey,
  className,
  classNameGeology
}: PlanetPicProps) => {
  const [planetName, setPlanetName] = useState<string>(
    PLANETS[currentPlanetKey].NAME
  );

  useLayoutEffect(() => {
    setPlanetName(PLANETS[currentPlanetKey].NAME);
  }, [currentPlanetKey]);

  return (
    <div className={`planet-pic-container-${planetName}`}>
      <img
        key={`planet-pic-${currentPlanetKey}`}
        className={className}
        src={require(`ASSETS/img/${PLANETS[currentPlanetKey].PICS[currentSectionKey]}`)}
        alt={planetName}
      />

      <img
        className={`${classNameGeology} ${
          currentSectionKey === SECTIONS.GEOLOGY.KEY ? 'show' : 'hide'
        }`}
        src={PLANETS[currentPlanetKey].PICS.GEOLOGY_ZOOM}
        alt={planetName}
      />
    </div>
  );
};

export default PlanetPic;
