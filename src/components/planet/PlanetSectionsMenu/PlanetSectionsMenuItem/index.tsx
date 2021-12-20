import React, { MouseEventHandler } from 'react';

import './index.scss';

type PlanetSectionsMenuItemProps = {
  sectionKey: string;
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
      className={`btn ${className}`}
      onClick={e => clickHandler(e, ref)}
      ref={ref}
    >
      <span className={classNameNumbering}>{numbering}</span>
      <span className="btn-caption">{caption}</span>
      <span className="btn-caption-long">{captionLong}</span>
    </button>
  );
};
export default PlanetSectionsMenuItem;
