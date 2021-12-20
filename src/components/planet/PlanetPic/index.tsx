import React from 'react';

import { SECTIONS, PLANETS } from 'SRC/constants';

type PlanetPicProps = {
  planetKey: string;
  section: string;
  className: string;
  classNameGeology: string;
};

const PlanetPic = ({
  planetKey,
  section,
  className,
  classNameGeology
}: PlanetPicProps) => {
  const planetName = PLANETS[planetKey].NAME;
  return (
    <>
      <img
        className={className}
        src={require(`ASSETS/img/${PLANETS[planetKey].PICS[section]}`)}
        alt={planetName}
      />
      {section === SECTIONS.GEOLOGY.KEY ? (
        <img
          className={classNameGeology}
          src={PLANETS[planetKey].PICS.GEOLOGY_ZOOM}
          alt={planetName}
        />
      ) : null}
    </>
  );
};

export default PlanetPic;
