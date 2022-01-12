import React, { useEffect, useRef, MouseEventHandler } from 'react';
import PlanetSectionsItem from './PlanetSectionsItem';

import { PLANETS, SECTIONS, SECTION_KEYS } from 'SRC/constants';

type PlanetSectionsProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  className: string;
  isMenuOpen: boolean;
  isTransitionDone: boolean;
};

const PlanetSections = ({
  currentPlanetKey,
  currentSectionKey,
  clickHandler,
  className,
  isMenuOpen,
  isTransitionDone
}: PlanetSectionsProps) => {
  return (
    <div
      className={className}
      data-menu-open={isMenuOpen}
      data-is-transition-done={isTransitionDone}
    >
      {SECTION_KEYS.map(sectionKey => (
        <PlanetSectionsItem
          key={sectionKey}
          sectionKey={sectionKey}
          currentSectionKey={currentSectionKey}
          className={`btn-${PLANETS[currentPlanetKey].NAME}`}
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

export default PlanetSections;
