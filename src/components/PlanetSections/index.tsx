import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import { sections } from '../../constants';

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
      <Button
        id={sections.overview.id}
        cssClass={`btn btn-${planetName}`}
        caption={sections.overview.btnCaption}
        extendedCaption={sections.overview.btnCaptionExtended}
        numberingCssClass="btn-numbering"
        numbering={sections.overview.number}
        clickHandler={clickHandler}
        ref={btnOverviewRef}
      />
      <Button
        id={sections.structure.id}
        cssClass={`btn btn-${planetName}`}
        caption={sections.structure.btnCaption}
        extendedCaption={sections.structure.btnCaptionExtended}
        numberingCssClass="btn-numbering"
        numbering={sections.structure.number}
        clickHandler={clickHandler}
      />
      <Button
        id={sections.geology.id}
        cssClass={`btn btn-${planetName}`}
        caption={sections.geology.btnCaption}
        extendedCaption={sections.geology.btnCaptionExtended}
        numberingCssClass="btn-numbering"
        numbering={sections.geology.number}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default PlanetSections;
