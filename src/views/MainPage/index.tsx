import React from 'react';
import Button from '../../components/Button';

import './index.scss';

const MainPage = () => (
  <>
    <Button
      btnCssClass="btn-earth"
      numberingCssClass="btn-numbering"
      numbering="02"
      caption="Internal Structure"
    ></Button>
    <h1>I am an H1 header</h1>
    <h2>I am an H2 header</h2>
    <h3>I am an H3 header</h3>
    <h4>I am an H4 header</h4>
    <div>I am normal text</div>
  </>
);
export default MainPage;
