import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from '../../components/Button';

import './index.scss';

type ButtonPanelProps = {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const ButtonPanel = ({ clickHandler }: ButtonPanelProps) => {
  const btnOverviewRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(btnOverviewRef.current);
    btnOverviewRef.current ? btnOverviewRef.current.focus() : null;
  }, []);

  return (
    <>
      <div className="button-panel">
        <Button
          id="overview"
          cssClass="btn-mercury"
          caption="Overview"
          numberingCssClass="btn-numbering"
          numbering="01"
          clickHandler={clickHandler}
          ref={btnOverviewRef}
        />
        <Button
          id="structure"
          cssClass="btn-mercury"
          caption="Internal Structure"
          numberingCssClass="btn-numbering"
          numbering="02"
          clickHandler={clickHandler}
        />
        <Button
          id="geology"
          cssClass="btn-mercury"
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
