import React from 'react';

import './index.scss';

type ButtonProps = {
  cssClass: string;
  caption: string;
  numberingCssClass: string;
  numbering: string;
};

const Button = ({
  cssClass,
  caption,
  numberingCssClass,
  numbering
}: ButtonProps) => (
  <>
    <button className={cssClass}>
      <span className={numberingCssClass}>{numbering}</span>
      {caption}
    </button>
  </>
);

export default Button;
