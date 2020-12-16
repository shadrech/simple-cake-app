import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import './config/amplify';
import './index.scss';

render(<App />, document.getElementById('root'));
