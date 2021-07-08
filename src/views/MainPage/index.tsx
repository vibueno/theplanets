import React from 'react';
import MainMenu from '../../components/MainMenu';
import PlanetPic from '../../components/PlanetPic';
import PlanetDesc from '../../components/PlanetDesc';
import ButtonPanel from '../ButtonPanel';
import PlanetData from '../PlanetData';

import './index.scss';

const MainPage = () => (
  <>
    <MainMenu />
    <PlanetPic planetName="mercury" />
    <PlanetDesc planetDesc="I am mercury. And you?" />
    <ButtonPanel />
    <h1>I am an H1 header</h1>
    <h2>I am an H2 header</h2>
    <h3>I am an H3 header</h3>
    <h4>I am an H4 header</h4>
    <div>I am normal text</div>
    <PlanetData />
  </>
);

export default MainPage;
