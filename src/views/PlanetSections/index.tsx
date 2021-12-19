import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from 'COMPONENTS/Button';

import { SECTIONS, SECTION_KEYS } from 'SRC/constants';

type PlanetSectionsProps = {
  planetName: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  className: string;
};

const PlanetSections = ({
  planetName,
  clickHandler,
  className
}: PlanetSectionsProps) => {
  return (
    <div className={className}>
      {SECTION_KEYS.map(sectionKey => (
        <Button
          key={sectionKey}
          id={SECTIONS[sectionKey].NAME}
          cssClass={`btn btn-${planetName}`}
          caption={SECTIONS[sectionKey].BTN_CAPTION}
          extendedCaption={SECTIONS[sectionKey].BTN_CAPTION_LONG}
          numberingCssClass="btn-numbering"
          numbering={SECTIONS[sectionKey].NUMBER}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default PlanetSections;
