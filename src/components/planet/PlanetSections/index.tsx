import React, { useEffect, useRef, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'REDUX/appStateSlice';

import PlanetSectionsItem from './PlanetSectionsItem';

import { PLANETS, SECTIONS, SECTION_KEYS } from 'SRC/constants';

import './index.scss';

type PlanetSectionsProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  isMenu: boolean;
  className?: string;
};

const defaultProps: PlanetSectionsProps = {
  currentPlanetKey: '',
  currentSectionKey: '',
  clickHandler: () => {},
  isMenu: false,
  className: ''
};

const PlanetSections = ({
  currentPlanetKey,
  currentSectionKey,
  clickHandler,
  isMenu,
  className
}: PlanetSectionsProps) => {
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  const isTransitionDone = useSelector(selectors.getIsTransitionDone);

  return (
    <div
      className={`${
        isMenu ? 'planet-sections-menu' : 'planet-sections-btn-panel'
      } ${className}`}
      data-menu-open={isMenuOpen}
      data-is-transition-done={isTransitionDone}
    >
      {SECTION_KEYS.map(sectionKey => (
        <PlanetSectionsItem
          key={sectionKey}
          sectionKey={sectionKey}
          currentSectionKey={currentSectionKey}
          className={`btn-section-${PLANETS[currentPlanetKey].NAME}`}
          caption={SECTIONS[sectionKey].BTN_CAPTION}
          captionLong={SECTIONS[sectionKey].BTN_CAPTION_LONG}
          classNameNumbering="btn-numbering"
          numbering={SECTIONS[sectionKey].NUMBER}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

PlanetSections.defaultProps = defaultProps;

export default PlanetSections;
