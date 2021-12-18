import React, { MouseEventHandler } from 'react';

import './index.scss';

type ButtonProps = {
  id: string;
  cssClass: string;
  caption: string;
  extendedCaption: string;
  numberingCssClass: string;
  numbering: string;
  clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLButtonElement>
  ) => void;
};

const Button = ({
  id,
  cssClass,
  caption,
  extendedCaption,
  numberingCssClass,
  numbering,
  clickHandler
}: ButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <button
      id={id}
      className={cssClass}
      onClick={e => clickHandler(e, ref)}
      ref={ref}
    >
      <span className={numberingCssClass}>{numbering}</span>
      <span className="btn-caption">{caption}</span>
      <span className="btn-extended-caption">{extendedCaption}</span>
    </button>
  );
};
export default Button;
