import React from 'react';
import ButtonPanel from '../ButtonPanel';
import PlanetDataItem from '../../components/PlanetDataItem';

import './index.scss';

const MainPage = () => (
  <>
    <ButtonPanel />
    <h1>I am an H1 header</h1>
    <h2>I am an H2 header</h2>
    <h3>I am an H3 header</h3>
    <h4>I am an H4 header</h4>
    <div>I am normal text</div>
    <PlanetDataItem
      cssClass="planet-data-item"
      title="revolution time"
      titleCssClass="planet-data-item-title"
      content="87.97 days"
    />
  </>
);

export default MainPage;
