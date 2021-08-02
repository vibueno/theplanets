import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

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
          id="overview"
          cssClass={`btn btn-${planetName}`}
          caption="overview"
          extendedCaption="overview"
          numberingCssClass="btn-numbering"
          numbering="01"
          clickHandler={clickHandler}
          ref={btnOverviewRef}
        />
        <Button
          id="structure"
          cssClass={`btn btn-${planetName}`}
          caption="structure"
          extendedCaption="internal structure"
          numberingCssClass="btn-numbering"
          numbering="02"
          clickHandler={clickHandler}
        />
        <Button
          id="geology"
          cssClass={`btn btn-${planetName}`}
          caption="surface"
          extendedCaption="surface geology"
          numberingCssClass="btn-numbering"
          numbering="03"
          clickHandler={clickHandler}
        />
      </div>
    </>
  );
};

export default ButtonPanel;
