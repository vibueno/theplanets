import React from 'react';

import './index.scss';

type PlanetStatsItemProps = {
  cssClass: string;
  content: string;
  title: string;
  titleCssClass: string;
};

const PlanetStatsItem = ({
  cssClass,
  content,
  title,
  titleCssClass
}: PlanetStatsItemProps) => (
  <div className={cssClass}>
    <div className={titleCssClass}>
      <h4>{title}</h4>
    </div>
    <div className="planet-data-item-content">{content}</div>
  </div>
);

export default PlanetStatsItem;
