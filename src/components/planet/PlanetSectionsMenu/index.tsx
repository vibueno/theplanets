import React, { useEffect, useRef, MouseEventHandler } from 'react';
import PlanetSectionsMenuItem from './PlanetSectionsMenuItem';

import { PLANETS, SECTIONS, SECTION_KEYS } from 'SRC/constants';

type PlanetSectionsMenuProps = {
  planetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  className: string;
};

const PlanetSectionsMenu = ({
  planetKey,
  clickHandler,
  className
}: PlanetSectionsMenuProps) => {
  return (
    <div className={className}>
      {SECTION_KEYS.map(sectionKey => (
        <PlanetSectionsMenuItem
          key={sectionKey}
          id={sectionKey}
          className={`btn-${PLANETS[planetKey].NAME}`}
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

export default PlanetSectionsMenu;
