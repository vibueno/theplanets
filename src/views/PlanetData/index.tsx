import React from 'react';
import PlanetDataItem from '../../components/PlanetDataItem';

import './index.scss';

const PlanetData = () => (
  <>
    <div className="planet-data">
      <PlanetDataItem
        cssClass="planet-data-item"
        title="rotation time"
        titleCssClass="planet-data-item-title"
        content="58.6 days"
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title="revolution time"
        titleCssClass="planet-data-item-title"
        content="87.97 days"
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title="radius"
        titleCssClass="planet-data-item-title"
        content="2,439.7 km"
      />

      <PlanetDataItem
        cssClass="planet-data-item"
        title="average temp."
        titleCssClass="planet-data-item-title"
        content="430ºC"
      />
    </div>
  </>
);

export default PlanetData;
