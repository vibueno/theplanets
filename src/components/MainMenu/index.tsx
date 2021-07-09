import React, { MouseEventHandler } from 'react';

import './index.scss';

type MainMenuProps = {
  clickHandler: MouseEventHandler<HTMLElement>;
};

const MainMenu = ({ clickHandler }: MainMenuProps) => (
  <>
    <nav>
      <div className="app-title">the planets</div>
      <ul className="menu" onClick={clickHandler}>
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
    </nav>
  </>
);

export default MainMenu;
