import React from 'react';
import Button from '../../components/Button';

import './index.scss';

type ButtonPanelProps = {};

const ButtonPanel = ({}: ButtonPanelProps) => (
  <>
    {/* TODO: create state variables for active planet and active section */}
    <div className="button-panel">
      <Button
        cssClass="btn-mercury"
        caption="Overview"
        numberingCssClass="btn-numbering"
        numbering="01"
      />
      <Button
        cssClass="btn-mercury"
        caption="Internal Structure"
        numberingCssClass="btn-numbering"
        numbering="02"
      />
      <Button
        cssClass="btn-mercury"
        caption="Surface Geology"
        numberingCssClass="btn-numbering"
        numbering="03"
      />
    </div>
  </>
);

export default ButtonPanel;
