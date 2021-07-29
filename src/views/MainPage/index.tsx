import React, { useState, MouseEvent } from 'react';

import MainMenu from '../../components/MainMenu';
import PlanetPic from '../../components/PlanetPic';
import PlanetDesc from '../../components/PlanetDesc';
import ButtonPanel from '../ButtonPanel';
import PlanetData from '../PlanetData';

import { getPlanetInfo } from '../../utils';

import './index.scss';

const MainPage = () => {
  const [planet, setPlanet] = useState('mercury');
  const [section, setSection] = useState('overview');

  const buttonPanelclickHandler = (e: MouseEvent) => {
    let btn;
    let target = e.target as HTMLElement;
    let targetParent = target.parentNode as HTMLElement;

    if (target.tagName === 'BUTTON') btn = target;
    else if (targetParent.tagName === 'BUTTON') {
      btn = targetParent;
    }

    if (btn) setSection(btn.id);
  };

  const menuclickHandler = (e: MouseEvent) => {
    const clickedElement = e.target as HTMLElement;
    const parentElement = clickedElement.parentNode as HTMLElement;
    if (parentElement.classList.contains('menu')) setPlanet(clickedElement.id);
  };

  return (
    <>
      <MainMenu clickHandler={menuclickHandler} />
      {planet && section ? (
        <main>
          <div className="planet-pic-container">
            <PlanetPic planetName={planet} section={section} />
          </div>

          <div className="planet-desc-container">
            <h1>{planet}</h1>
            <PlanetDesc planetDesc={getPlanetInfo(planet, section).content} />
            Source:{' '}
            <a href={getPlanetInfo(planet, section).source}>Wikipedia</a>
            <ButtonPanel
              planet={planet}
              clickHandler={buttonPanelclickHandler}
            />
          </div>
          <div className="planet-data-container">
            <PlanetData />
          </div>
        </main>
      ) : null}
    </>
  );
};

export default MainPage;
