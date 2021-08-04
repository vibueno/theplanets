import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import { sections } from '../../constants';

import './index.scss';

type ButtonPanelProps = {
  planetName: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const ButtonPanel = ({ planetName, clickHandler }: ButtonPanelProps) => {
  const btnOverviewRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnOverviewRef.current ? btnOverviewRef.current.focus() : null;
  }, [planetName]);

  return (
    <>
      <div className="button-panel">
        <Button
          id={sections.overview.id}
          cssClass={`btn btn-${planetName}`}
          caption={sections.overview.btnCaption}
          extendedCaption={sections.overview.btnCaptionExtended}
          numberingCssClass="btn-numbering"
          numbering="01"
          clickHandler={clickHandler}
          ref={btnOverviewRef}
        />
        <Button
          id={sections.structure.id}
          cssClass={`btn btn-${planetName}`}
          caption={sections.structure.btnCaption}
          extendedCaption={sections.structure.btnCaptionExtended}
          numberingCssClass="btn-numbering"
          numbering="02"
          clickHandler={clickHandler}
        />
        <Button
          id={sections.geology.id}
          cssClass={`btn btn-${planetName}`}
          caption={sections.geology.btnCaption}
          extendedCaption={sections.geology.btnCaptionExtended}
          numberingCssClass="btn-numbering"
          numbering="03"
          clickHandler={clickHandler}
        />
      </div>
    </>
  );
};

export default ButtonPanel;
