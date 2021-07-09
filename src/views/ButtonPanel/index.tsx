import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import './index.scss';

type ButtonPanelProps = {
  planet: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const ButtonPanel = ({ planet, clickHandler }: ButtonPanelProps) => {
  const btnOverviewRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnOverviewRef.current ? btnOverviewRef.current.focus() : null;
  }, [planet]);

  return (
    <>
      <div className="button-panel">
        <Button
          id="overview"
          cssClass={`btn-${planet}`}
          caption="Overview"
          numberingCssClass="btn-numbering"
          numbering="01"
          clickHandler={clickHandler}
          ref={btnOverviewRef}
        />
        <Button
          id="structure"
          cssClass={`btn-${planet}`}
          caption="Internal Structure"
          numberingCssClass="btn-numbering"
          numbering="02"
          clickHandler={clickHandler}
        />
        <Button
          id="geology"
          cssClass={`btn-${planet}`}
          caption="Surface Geology"
          numberingCssClass="btn-numbering"
          numbering="03"
          clickHandler={clickHandler}
        />
      </div>
    </>
  );
};

export default ButtonPanel;
