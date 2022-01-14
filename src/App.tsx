import React from 'react';
import MainPage from 'VIEWS/MainPage';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <MainPage />;
  </Provider>
);
export default App;
