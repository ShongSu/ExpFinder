import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';

const App = (
  <Router>
    <Page />
  </Router>
);

if (module.hot) {
  module.hot.accept();
}

export default App;