import React, { useState, useLayoutEffect } from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

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
    <div
      key={`planet-pic-container-${currentPlanetKey}-${currentSectionKey}`}
      className={`planet-pic-container-${planetName}`}
    >
      <img
        className={className}
        src={require(`ASSETS/img/${PLANETS[currentPlanetKey].PICS[currentSectionKey]}`)}
        alt={planetName}
      />
      {currentSectionKey === SECTIONS.GEOLOGY.KEY && (
        <img
          className={classNameGeology}
          src={PLANETS[currentPlanetKey].PICS.GEOLOGY_ZOOM}
          alt={planetName}
        />
      )}
    </div>
  );
};

export default PlanetPic;
