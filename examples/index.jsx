import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const rootElement = document.body.appendChild(document.createElement('div'));

const renderApp = () => {
  render(<AppContainer><App /></AppContainer>, rootElement);
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}
