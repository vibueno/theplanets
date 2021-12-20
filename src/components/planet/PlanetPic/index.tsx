import React from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

type PlanetPicProps = {
  planetKey: string;
  sectionKey: string;
  className: string;
  classNameGeology: string;
};

const PlanetPic = ({
  planetKey,
  sectionKey,
  className,
  classNameGeology
}: PlanetPicProps) => {
  const planetName = PLANETS[planetKey].NAME;
  return (
    <>
      <img
        className={className}
        src={require(`ASSETS/img/${PLANETS[planetKey].PICS[sectionKey]}`)}
        alt={planetName}
      />
      {sectionKey === SECTIONS.GEOLOGY.KEY && (
        <img
          className={classNameGeology}
          src={PLANETS[planetKey].PICS.GEOLOGY_ZOOM}
          alt={planetName}
        />
      )}
    </>
  );
};

export default PlanetPic;
