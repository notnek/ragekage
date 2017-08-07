import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import './css/style.css';

import App from './components/App';

ReactGA.initialize('UA-20333926-13');

render(<App />, document.getElementById('root'));
