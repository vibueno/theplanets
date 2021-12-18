import React, { useState, MouseEvent } from 'react';

import Header from '../Header';
import PlanetPic from '../../components/PlanetPic';
import PlanetDesc from '../../components/PlanetDesc';
import PlanetSections from '../../components/PlanetSections';
import PlanetStats from '../PlanetStats';

import { sections } from '../../constants';

import { getPlanetData } from '../../utils';

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
    if (parentElement.classList.contains('menu')) {
      setPlanet(clickedElement.id);
      setSection(sections.overview.id);
    }
  };

  return (
    <>
      <div className="layout">
        <Header
          menuClickHandler={menuclickHandler}
          submenuClickHandler={buttonPanelclickHandler}
          planet={planet}
        />
        {planet && section ? (
          <main>
            <div className="planet-pic-container">
              <PlanetPic planetName={planet} section={section} />
            </div>

            <div className="planet-desc-container">
              <h1>{planet}</h1>
              <PlanetDesc planetDesc={getPlanetData(planet, section).content} />
              <p className="source-container">
                <span className="source-title">Source:</span>
                <a href={getPlanetData(planet, section).source}>
                  Wikipedia
                  <img
                    className="source-icon"
                    src={require('../../assets/img/icon-source.svg')}
                  />
                </a>
              </p>
            </div>
            <PlanetSections
              planetName={planet}
              clickHandler={buttonPanelclickHandler}
              cssClass="planet-sections-button-panel"
            />
            <div className="planet-data-container">
              <PlanetStats planetName={planet} />
            </div>
          </main>
        ) : null}
      </div>
    </>
  );
};

export default MainPage;
