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
  <>
    <div className={cssClass}>
      <div className={titleCssClass}>{title}</div>
      <div>{content}</div>
    </div>
  </>
);

export default PlanetDataItem;
