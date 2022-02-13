import React, { MouseEventHandler } from 'react';

type PlanetSectionsMenuItemProps = {
  sectionKey: string;
  currentSectionKey: string;
  className: string;
  caption: string;
  captionLong: string;
  classNameNumbering: string;
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
  classNameNumbering,
  numbering,
  clickHandler
}: PlanetSectionsMenuItemProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <button
      id={sectionKey}
      className={`btn-section ${className}`}
      onClick={e => clickHandler(e, ref)}
      data-selected={sectionKey === currentSectionKey}
      ref={ref}
    >
      <span className={classNameNumbering}>{numbering}</span>
      <span className="btn-caption">{caption}</span>
      <span className="btn-caption-long">{captionLong}</span>
    </button>
  );
};
export default PlanetSectionsMenuItem;
