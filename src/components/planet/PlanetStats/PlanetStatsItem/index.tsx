import React from 'react';

import './index.scss';

type PlanetStatsItemProps = {
  className?: string;
  content: string;
  title: string;
  titleClassName?: string;
};

const defaultProps: PlanetStatsItemProps = {
  className: '',
  content: '',
  title: '',
  titleClassName: ''
};

const PlanetStatsItem = ({
  className,
  content,
  title,
  titleClassName
}: PlanetStatsItemProps) => (
  <div className={`planet-stats-item ${className}`}>
    <div className={`planet-stats-item-title ${titleClassName}`}>
      <h4>{title}</h4>
    </div>
    <div className="planet-stats-item-content">{content}</div>
  </div>
);

PlanetStatsItem.defaultProps = defaultProps;

export default PlanetStatsItem;
