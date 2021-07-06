import React from 'react';

import './index.scss';

type ButtonProps = {
  btnCssClass: string;
  numberingCssClass: string;
  numbering: string;
  caption: string;
};

const Button = ({
  btnCssClass,
  numberingCssClass,
  numbering,
  caption
}: ButtonProps) => (
  <>
    <button className={btnCssClass}>
      <span className={numberingCssClass}>{numbering}</span>
      {caption}
    </button>
  </>
);
export default Button;
