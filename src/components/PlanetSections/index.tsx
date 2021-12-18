import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import { sections, sectionKeys } from '../../constants';

type PlanetSectionsProps = {
  planetName: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  cssClass: string;
};

const PlanetSections = ({
  planetName,
  clickHandler,
  cssClass
}: PlanetSectionsProps) => {
  const btnOverviewRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnOverviewRef.current ? btnOverviewRef.current.focus() : null;
  }, [planetName]);

  return (
    <div className={cssClass}>
      {sectionKeys.map(sectionKey => (
        <Button
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
