import React, { useState, MouseEvent } from 'react';

import MainMenu from '../../components/MainMenu';
import PlanetPic from '../../components/PlanetPic';
import PlanetDesc from '../../components/PlanetDesc';
import ButtonPanel from '../ButtonPanel';
import PlanetData from '../PlanetData';

import './index.scss';
import data from '../../assets/data.json';

const MainPage = () => {
  const [planet, setPlanet] = useState('mercury');
  const [section, setSection] = useState('overview');

  const buttonPanelclickHandler = (e: MouseEvent) => {
    var btn = e.target as HTMLElement;
    setSection(btn.id);
  };

  const menuclickHandler = (e: MouseEvent) => {
    var menuItem = e.target as HTMLElement;
    setPlanet(menuItem.id);
  };

  return (
    <>
      <MainMenu clickHandler={menuclickHandler} />
      <PlanetPic planetName={planet} />
      <PlanetDesc planetDesc="I am mercury. And you?" />
      <ButtonPanel clickHandler={buttonPanelclickHandler} />
      <h1>I am an H1 header</h1>
      <h2>I am an H2 header</h2>
      <h3>I am an H3 header</h3>
      <h4>I am an H4 header</h4>
      <div>I am normal text</div>
      <PlanetData />
    </>
  );
};

export default MainPage;
