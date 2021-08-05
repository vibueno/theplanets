import React from 'react';

import './index.scss';

type PlanetDataItemProps = {
  cssClass: string;
  content: string;
  title: string;
  titleCssClass: string;
};

const PlanetDataItem = ({
  cssClass,
  content,
  title,
  titleCssClass
}: PlanetDataItemProps) => (
  <div className={cssClass}>
    <div className={titleCssClass}>
      <h4>{title}</h4>
    </div>
    <div className="planet-data-item-content">{content}</div>
  </div>
);

export default PlanetDataItem;
