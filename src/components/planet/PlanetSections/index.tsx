import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'REDUX/appStateSlice';

import PlanetSectionsItem from './PlanetSectionsItem';

import { PLANETS, SECTIONS, SECTION_KEYS } from 'SRC/constants';

import styles from './index.module.scss';

type PlanetSectionsProps = {
  currentPlanetKey: string;
  currentSectionKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  isMenu: boolean;
};

const PlanetSections = ({
  currentPlanetKey,
  currentSectionKey,
  clickHandler,
  isMenu
}: PlanetSectionsProps) => {
  const isMenuOpen = useSelector(selectors.getIsMenuOpen);
  const isTransitionDone = useSelector(selectors.getIsTransitionDone);

  return (
    <div
      className={`${
        isMenu ? styles.planetSectionsMenu : styles.planetSectionsBtnPanel
      }`}
      data-menu-open={isMenuOpen}
      data-is-transition-done={isTransitionDone}
    >
      {SECTION_KEYS.map(sectionKey => (
        <PlanetSectionsItem
          key={sectionKey}
          sectionKey={sectionKey}
          currentSectionKey={currentSectionKey}
          className={`planetSectionsBtn-${PLANETS[currentPlanetKey].NAME}`}
          caption={SECTIONS[sectionKey].BTN_CAPTION}
          captionLong={SECTIONS[sectionKey].BTN_CAPTION_LONG}
          numbering={SECTIONS[sectionKey].NUMBER}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default PlanetSections;
