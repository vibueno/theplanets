import React, { MouseEventHandler } from 'react';

import './index.scss';

type ButtonProps = {
  id: string;
  cssClass: string;
  caption: string;
  extendedCaption: string;
  numberingCssClass: string;
  numbering: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      cssClass,
      caption,
      extendedCaption,
      numberingCssClass,
      numbering,
      clickHandler
    },
    ref
  ) => (
    <button id={id} className={cssClass} onClick={clickHandler} ref={ref}>
      <span className={numberingCssClass}>{numbering}</span>
      <span className="btn-caption">{caption}</span>
      <span className="btn-extended-caption">{extendedCaption}</span>
    </button>
  )
);

export default Button;
