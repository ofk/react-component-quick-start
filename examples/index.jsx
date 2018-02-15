import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const rootElement = document.body.appendChild(document.createElement('div'));

render(<App />, rootElement);
