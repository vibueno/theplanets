import React, { MouseEventHandler } from 'react';

import styles from './index.module.scss';

type PlanetSectionsMenuItemProps = {
  sectionKey: string;
  currentSectionKey: string;
  className: string;
  caption: string;
  captionLong: string;
  numbering: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const PlanetSectionsMenuItem = ({
  sectionKey,
  currentSectionKey,
  className,
  caption,
  captionLong,
  numbering,
  clickHandler
}: PlanetSectionsMenuItemProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <button
      id={sectionKey}
      className={`${styles.planetSectionsBtn} ${styles[className]}`}
      onClick={e => clickHandler(e, ref)}
      data-selected={sectionKey === currentSectionKey}
      ref={ref}
    >
      <span className={styles.planetSectionsBtnNumbering}>{numbering}</span>
      <span className={styles.planetSectionsBtnCaption}>{caption}</span>
      <span className={styles.planetSectionsBtnCaptionLong}>{captionLong}</span>
    </button>
  );
};
export default PlanetSectionsMenuItem;
