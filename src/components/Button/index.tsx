import React, { MouseEventHandler } from 'react';

import './index.scss';

type ButtonProps = {
  id: string;
  cssClass: string;
  caption: string;
  numberingCssClass: string;
  numbering: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { id, cssClass, caption, numberingCssClass, numbering, clickHandler },
    ref
  ) => (
    <button id={id} className={cssClass} onClick={clickHandler} ref={ref}>
      <span className={numberingCssClass}>{numbering}</span>
      {caption}
    </button>
  )
);

export default Button;
