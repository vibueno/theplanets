import React, { useEffect, useRef, MouseEventHandler } from 'react';
import Button from 'COMPONENTS/Button';

import { PLANETS, SECTIONS, SECTION_KEYS } from 'SRC/constants';

type SectionsProps = {
  planetKey: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
  className: string;
};

const Sections = ({ planetKey, clickHandler, className }: SectionsProps) => {
  return (
    <div className={className}>
      {SECTION_KEYS.map(sectionKey => (
        <Button
          key={sectionKey}
          id={sectionKey}
          cssClass={`btn btn-${PLANETS[planetKey].NAME}`}
          caption={SECTIONS[sectionKey].BTN_CAPTION}
          extendedCaption={SECTIONS[sectionKey].BTN_CAPTION_LONG}
          numberingCssClass="btn-numbering"
          numbering={SECTIONS[sectionKey].NUMBER}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default Sections;
