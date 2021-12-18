import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import { sections, sectionKeys } from '../../constants';

type PlanetSectionsProps = {
  planetName: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  cssClass: string;
};

const PlanetSections = ({
  planetName,
  clickHandler,
  cssClass
}: PlanetSectionsProps) => {
  return (
    <div className={cssClass}>
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
