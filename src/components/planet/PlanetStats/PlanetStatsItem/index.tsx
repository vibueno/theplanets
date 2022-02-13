import React from 'react';

import styles from './index.module.scss';

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
  <div className={`${styles.planetStatsItem} ${className}`}>
    <div className={`${styles.planetStatsItemTitle} ${titleClassName}`}>
      <h4>{title}</h4>
    </div>
    <div className={styles.planetStatsItemContent}>{content}</div>
  </div>
);

PlanetStatsItem.defaultProps = defaultProps;

export default PlanetStatsItem;
