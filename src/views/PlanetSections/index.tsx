import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from 'components/Button';

import { sections, sectionKeys } from 'src/constants';

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
      {sectionKeys.map(sectionKey => (
        <Button
          key={sectionKey}
          id={sections[sectionKey].id}
          cssClass={`btn btn-${planetName}`}
          caption={sections[sectionKey].btnCaption}
          extendedCaption={sections[sectionKey].btnCaptionExtended}
          numberingCssClass="btn-numbering"
          numbering={sections[sectionKey].number}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default PlanetSections;
