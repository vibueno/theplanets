import React from 'react';

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
    <div className="planet-stats-item-content">{content}</div>
  </div>
);

export default PlanetStatsItem;
