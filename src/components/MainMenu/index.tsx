import React from 'react';

import './index.scss';

const MainMenu = ({}) => (
  <>
    <nav>
      <div className="app-title">the planets</div>
      <ul className="menu">
        <li className="mercury">mercury</li>
        <li className="venus">venus</li>
        <li className="earth">earth</li>
        <li className="mars">mars</li>
        <li className="jupiter">jupiter</li>
        <li className="saturn">saturn</li>
        <li className="uranus">uranus</li>
        <li className="neptune">neptune</li>
      </ul>
    </nav>
  </>
);

export default MainMenu;
