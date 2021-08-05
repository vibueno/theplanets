import React, { MouseEventHandler } from 'react';

import PlanetSections from '../../components/PlanetSections';

import './index.scss';

type HeaderProps = {
  planet: string;
  menuClickHandler: MouseEventHandler<HTMLElement>;
  submenuClickHandler: MouseEventHandler<HTMLElement>;
};

const Header = ({
  planet,
  menuClickHandler,
  submenuClickHandler
}: HeaderProps) => (
  <nav>
    <div className="app-title">the planets</div>
    <ul className="menu" onClick={menuClickHandler}>
      <li id="mercury" className="mercury">
        mercury
      </li>
      <li id="venus" className="venus">
        venus
      </li>
      <li id="earth" className="earth">
        earth
      </li>
      <li id="mars" className="mars">
        mars
      </li>
      <li id="jupiter" className="jupiter">
        jupiter
      </li>
      <li id="saturn" className="saturn">
        saturn
      </li>
      <li id="uranus" className="uranus">
        uranus
      </li>
      <li id="neptune" className="neptune">
        neptune
      </li>
    </ul>
    <PlanetSections
      planetName={planet}
      clickHandler={submenuClickHandler}
      cssClass="planet-sections-submenu"
    />
  </nav>
);

export default Header;
