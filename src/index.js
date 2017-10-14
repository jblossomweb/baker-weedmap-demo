/* eslint-disable import/extensions, react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'material-design-icons';
import 'material-ui-icons';
import './index.css';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
